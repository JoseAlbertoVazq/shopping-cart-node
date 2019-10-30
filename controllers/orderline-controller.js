const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Order = require('../models').Order;
const OrderLine = require('../models').OrderLine;
const Product = require('../models').Product;

module.exports = {
    /**
     * Get the details of an order, by composing JSON response which includes an array of
     * objects, that have the product's id and the quantity of that product in the order
     * @param {*} req 
     * @param {*} res 
     */
    seeDetails(req, res) {
        if (!req.params.idOrder) {
            return res.status(400).end();
        }
        let response = {
            "details": []
        };
        OrderLine.findAll({
            where: {
                idOrder: req.params.idOrder
            }
        }).then(found => {
            if (!found) {
                return res.status(500).end();
            }
            let i = 1;
            found.forEach(element => {
                Product.findOne({
                    where: {
                        id: element.idProduct
                    }
                }).then((product) => {
                    if (!product) {
                        return res.status(500).end();
                    }
                    let productDetails = {};
                    productDetails.name = product.name;
                    productDetails.price = product.price;
                    productDetails.quantity = element.quantity;
                    response.details.push(productDetails);
                    if (i == found.length) {
                        return res.status(200).send(response);
                    } else {
                        i++;
                    }
                }).catch((error) => res.status(500).send(error));
            });

        }).catch((error) => res.status(500).send(error));
    }
}