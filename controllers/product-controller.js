const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Product = require('../models').Product;

module.exports = {
    getAll(req, res) {
        Product.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }).then((products) => {
            if (!products || products.length == 0) {
                return res.status(404).end()
            }
            return res.status(200).send(products)
        }).catch((error) => res.status(500).send(error));
    },
    getByName(req, res) {
        let name;
        if (!req.query.name) {
            name = "";
        } else {
            name = req.query.name;
        }
        return Product.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                name: {
                    [Op.like]: '%' + name + '%'
                }
            }
        }).then((products) => {
            if (!products || products.length == 0) {
                return res.status(404).end();
            }
            return res.status(200).send(products);
        }).catch((error) => res.status(500).send(error));
    }
}