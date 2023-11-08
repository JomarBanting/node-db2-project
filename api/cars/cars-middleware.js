const db = require("../../data/db-config");
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const result = await db("cars").where("id", req.params.id).first();
  if (!result) {
    next({
      status: 404,
      message: `car with id ${req.params.id} is not found`
    })
  } else {
    next();
  }
}

const checkCarPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    next({
      status: 400,
      message: "vin is missing"
    })
  } else if (!make) {
    next({
      status: 400,
      message: "make is missing"
    })
  }
  else if (!model) {
    next({
      status: 400,
      message: "model is missing"
    })
  }
  else if (!mileage) {
    next({
      status: 400,
      message: "mileage is missing"
    })
  }
  else {
    next();
  }
}

const checkVinNumberValid = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin)
  if (!isValidVin) {
    next({
      status: 400,
      message: `vin ${vin} is invalid`
    })
  } else {
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const data = await db("cars").where("vin", vin).first();
  if (data) {
    next({
      status: 400,
      message: `vin ${vin} already exists`
    })
  } else {
    next();
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
