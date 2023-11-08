// STRETCH
const cars = [
    {
        vin: "3GCUKREC5FG264984",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual"
    },
    {
        vin: "1HGCM55724A065065",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage"
    },
    {
        vin: "1GCEC14X19Z289554",
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

exports.seed =async  function(knex){
    await knex("cars").truncate();
    await knex("cars").insert(cars);
}