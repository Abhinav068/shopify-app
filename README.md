# shopify

## Introduction
Shopify is an api to provide customer data and orders. It can be used to render orders and their status related to customers to the frontend and can make changes for the same.

## Project Type
Backend

## Deplolyed App
Backend: https://shopify-app-1.onrender.com/

## Directory Structure
shopify-app/
├─ src/
    ├─ address.js
├─ view/
    ├─ test.html
├─ index.js
├─ package.json


## Installation & Getting started
```bash
npm install shopify-app
cd shopify-app
node index.js
```

## API Endpoints
GET /api/addresses/:phone_number - retrieve all addresses linked to a phone_number
`Example: https://shopify-app-1.onrender.com/app/api/addresses/6135550135 `

PUT /api/address/update/:address_id/:address_data - update the address using an address id
`Example:  https://shopify-app-1.onrender.com/app/api/address/update/6764727369857/Nauka_Vihar_Gorakhpur`

GET /app/api/orders/:phone_number - Retrieve the list of orders associated with the Shopify customer identified by the provided phone number
`Example: https://shopify-app-1.onrender.com/app/api/orders/6135550135`

GET /app/api/order/:order_number - Fetch the order status and details of the products for the specified order.
`Example: https://shopify-app-1.onrender.com/app/api/order/1002`

POST /app/api/order/cancel/:order_number - Cancel the specified order and confirm the successful cancellation. 
`Example: https://shopify-app-1.onrender.com/app/api/order/cancel/1002`


## Technology Stack
- Node.js
- Express.js
- Shopify-api-node

## Video Presentation: 

https://github.com/Abhinav068/shopify-app/assets/112858857/2c9799ac-789b-46e0-9620-5b0352dd6b35

