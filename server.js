const { createServer } = require("http");
const express = require("express");
const routes = require("./routes");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(routes);

const server = createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log("Server is listening on " + PORT));
  } catch (err) {
    console.log("Server error >>> ", err);
    await prisma.$disconnect();
  }
};

start();
