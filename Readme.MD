# SHOPPING CART BACKEND

Shopping cart backend made in NodeJS.

## Install

Remember! You have to execute the following command after cloning this repository:

```bash
npm install
```

## First steps

In /config/config.json you will find all you need to connect this project with your database. In this
case, I have used MySQL as db. Let's see:

```json
"development": {
    "username": "root",
    "password": "password",
    "database": "shopping_cart",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }

```
You can (and must) change the username and password to your own credentials in your local MySQL configuration. You can also change the "database" field, that's the name the database will have.

To start working with this project, you have to run the following commands:

The first one is to create our new database in MySQL:
```bash
npx sequelize-cli db:create
```
Secondly, we have to execute our migrations. These will create the tables structure in our database, as well as the associations between entities and their attributes constrainsts. So let's run:

```bash
npx sequelize-cli db:migrate
```
We have almost finished! Now we have to run our seeds. And what the h*** is this? Do I have to wear gardener gloves for this? Do not worry, you won't get your hands dirty (at least by the moment...).

Seeds are JS files that insert data in our tables. In this case, I wrote a Product seeder, so we can have some data to work with since the beginning of this adventure. You can found this seeder in /seeders/1-create-products.js

So... let's do it! Run:
```bash
npx sequelize-cli db:seed:all
```

Now we can run our application. 

```bash
npm start
```
# HAVE YOU CHANGED THE STRUCTURE OR TABLES IN DATABASE?

If you add new models and migrations, or deleted any table, or you just filled your database with lots of garbage, you can do all the previous steps BUT YOU HAVE TO RUN FIRST THE NEXT COMMAND:
```bash
npx sequelize-cli db:drop
```

## Where is this project running?

The server port by default is 3000. Run this and you will have this
beautiful backend in http://localhost:3000

## Ok, you have made a really good job but... where are the routes?

Every single route are in app.js. 

```
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

```
If you want to go deeper in the project routes, you can always go to /routes and see which controller is associated to which route;

Any doubts, any suggestion, any request or any invitation to a good dinner, you can write an issue and I will read it as soon as I can.

## Autor

José Alberto Vázquez López

https://www.linkedin.com/in/josealbertovazq/
https://twitter.com/JoseAlbertoVazq
https://www.instagram.com/JoseAlbertoVazq
https://www.facebook.com/JoseAlbertoVazq