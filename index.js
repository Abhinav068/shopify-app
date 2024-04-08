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

app.get('/shopify', (req, res) => {
    res.sendFile(__dirname + '/view/test.html')
})

app.get('/app/api/addresses/:phone_number', async (req, res) => {
    // Retrieve the list of saved addresses for the Shopify customer associated with the provided phone number.

    try {
        const phone_number = req.params.phone_number
        let data = await shopify.customer.list({ limit: 5 });
        res.send(getAddress(data, phone_number));

    } catch (error) {
        res.send({error})
    }


})



app.put('/app/api/address/update/:address_id/:address_data', (req, res) => {
    //Update the specified address with the provided address data and set it as the default address for the customer

    shopify.customerAddress
        .update(5410823995521, 6764727369857, { address2: 'New colony' })
        .then((data) => {
            console.log('Adresses:', data)
        })
        .catch((err) => console.error(err));


    res.sendFile(__dirname + '/view/test.html')
})

app.get('/app/api/orders/:phone_number', (req, res) => {
    //Retrieve the list of orders associated with the Shopify customer identified by the provided phone number
    shopify.order
        .list()
        .then((data) => {
            console.log('order:', data)
        })
        .catch((err) => console.error(err));
})


app.get('/app/api/order/:order_number', (req, res) => {
    // Fetch the order status and details of the products for the specified order.

})
app.get('/app/api/order/cancel/:order_number', (req, res) => {
    //Cancel the specified order and confirm the successful cancellation.


})


app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
})