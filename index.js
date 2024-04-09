const express = require('express');
const Shopify = require('shopify-api-node');
const { getAddress } = require('./src/address');

const app = express();
require('dotenv').config();
const PORT = 8000;


const shopify = new Shopify({
    shopName: process.env.shop_name,
    accessToken: process.env.Admin_API_access_token
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/view/test.html')
})

app.get('/app/api/addresses/:phone_number', async (req, res) => {
    // Retrieve the list of saved addresses for the Shopify customer associated with the provided phone number.
    try {
        const phone_number = req.params.phone_number
        let data = await shopify.customer.list();
        res.send(getAddress(data, phone_number));

    } catch (error) {
        res.send({ error })
    }
})



app.put('/app/api/address/update/:address_id/:address_data', async (req, res) => {
    //Update the specified address with the provided address data and set it as the default address for the customer
    // 6764727369857 // tesing address_id
    try {
        let { address_id, address_data } = req.params;
        let userid = req.headers.userid || 5410823995521; //testing customer_id
        let newAddress = await shopify.customerAddress.update(+userid, +address_id, { address2: address_data });
        res.send({ newAddress })
        
    } catch (error) {
        res.send({error})
    }
        
})

app.get('/app/api/orders/:phone_number', async (req, res) => {
    //Retrieve the list of orders associated with the Shopify customer identified by the provided phone number
    // +16135550135 ----> Test phoneNo.

    try {
        let { phone_number } = req.params;    
        let orders = await shopify.order.list();
        res.send({
            orders: orders.filter((e) => {
                if (!e.phone) return false
                else {
                    console.log(e.phone.slice(e.phone.length - 10, e.phone.length) == phone_number);
    
                    return e.phone.slice(e.phone.length - 10, e.phone.length) == phone_number;
                }
            })
        });
        
    } catch (error) {
        res.send({error})
    }

})


app.get('/app/api/order/:order_number', async (req, res) => {
    // Fetch the order status and details of the products for the specified order.
    try {
        let { order_number } = req.params;
    
        let orders = await shopify.order.list();
        res.send({ order: orders.filter((e) => e.order_number == order_number)[0] })
        
    } catch (error) {
        res.send({error})
    }
    


})
app.get('/app/api/order/cancel/:order_number', async (req, res) => {
    //Cancel the specified order and confirm the successful cancellation.

    try {
        let { order_number } = req.params;
        let orders = await shopify.order.list();
        let orderid = orders.filter((e) => e.order_number == order_number)[0]?.id
    
        let response = await shopify.order.cancel(orderid);
      
        if(response.cancelled_at) res.send({ orderid, message:'Order has sucessfully cancelled.' });
        else res.send({msg:'Something went wrong.'})
        
    } catch (error) {
        res.send({error})
    }
    

})


app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
})