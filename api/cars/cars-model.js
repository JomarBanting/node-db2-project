const db = require("../../data/db-config");

async function getAll() {
  // DO YOUR MAGIC
  const result = await db("cars");
  return result;
}

async function getById(id) {
  // DO YOUR MAGIC
  const result = await db("cars").where("id", id).first();
  return result;
}

async function create(carInfo) {
  // DO YOUR MAGIC
  const result = await db("cars").insert(carInfo);
  return getById(result[0]);
}

module.exports = {
  getAll,
  getById,
  create,
}