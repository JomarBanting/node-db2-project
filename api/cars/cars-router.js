// DO YOUR MAGIC
const router = require("express").Router();
const Car = require("./cars-model");

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid } = require("./cars-middleware")

router.get("/", (req, res, next) => {
    Car.getAll()
        .then(car => {
            res.json(car)
        }).catch(err => {
            next(err);
        })
})

router.get("/:id", checkCarId, (req, res, next) => {
    Car.getById(req.params.id)
    .then(car => {
        res.json(car)
    }).catch(err => {
        next(err);
    })
})

router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Car.create(req.body)
    .then(car => {
        res.json(car)
    }).catch(err => {
        next(err);
    })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})
module.exports = router;