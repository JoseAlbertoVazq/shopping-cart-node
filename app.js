const express = require('express');
const morgan = require('morgan');
var winston = require('./config/winston');
const app = express();
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products-routes');
const orderRoutes = require('./routes/orders-routes');

/**
 * In this case, we will allow any origin to avoid CORS problems that 
 * does not matter for the purpose of this demo example.
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    } else {
        next();
    }
});

// Logger configuration
app.use(morgan('combined', { stream: winston.stream }));

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser());

// Routes

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(3000);
console.log('Server init at port ' + 3000);

module.exports = app;