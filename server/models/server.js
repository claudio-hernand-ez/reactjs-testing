const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const { inserCategories } = require("../migrations/insertCategories");

class Server {
  constructor({ withMigrations = false }) {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.paths = {
      categories: "/api/categories",
      products: "/api/products",
      orders: "/api/orders",
    };

    this.dbConect();

    if (withMigrations) {
      this.loadDataBase();
    }

    this.middlewares();
    this.routes();
  }

  async dbConect() {
    await dbConnection();
  }

  async loadDataBase() {
    await inserCategories();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.categories, require("../routes/category-router"));
    this.app.use(this.paths.products, require("../routes/product-router"));
    this.app.use(this.paths.orders, require("../routes/order-router"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
