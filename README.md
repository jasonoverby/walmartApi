# Description
This is a REST search API to retrieve products (based on a
category) from a subset of Walmart's catalog.  The application uses
[Hapi](https://hapijs.com/) to provide routes and [React](https://reactjs.org/)
to provide views.

# Installation
Clone this repository and run `npm install`.

The API will use a default API key to retrieve metadata for the products, though
it is possible to use a different API key by setting a PATH variable named
`WALMART_API_KEY`.

# Usage
To start the server, issue the command `npm start` after installation.
Navigate to `http://localhost:8000` to view the search page for product
categories. Enter your desired search term, click the "*Search*" button, and you
will be routed to a page containing products corresponding to the category you
searched for. Products will be searched based on the `categoryPath` property for
each product in the product metadata.

Alternatively, you may simply navigate to the url
`http://localhost:8000/category`, replacing `category` with your search term,
to bypass the search page.

If the category used is "*all*", all products from this subset will be shown.

The initial loading of products when you first start the server may take
a couple of seconds, but once the product catalog has been loaded, searching products
or navigating directly to a route corresponding to a category should yield
results immediately.  Product data will be stored in the `products.json` file
 within the `data` directory.  If the server is left running, product data will be
 updated once daily.

When viewing a list of products, the "*Show More*" button may be clicked to show
additional information regarding a particular product.  While viewing an
individual product, the "*Show Products*" button may be clicked to return to the
list of products.

When viewing a product or list of products, the "*Product Search*" button may be
clicked to navigate to the product search page.

# Testing
Testing has been implemented using Hapi's
[Lab](https://github.com/hapijs/lab) testing framework and
[Code](https://github.com/hapijs/code) assertion library.  Additionally, the
[Enzyme](https://airbnb.io/enzyme/) utility has been employed to test React
components.

To run the tests, issue the command `npm test`.
