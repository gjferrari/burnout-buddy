const { User } = require("../models");

//model has user_id but I'm not sure we need it for userData= "auto increment:true" 

const userData = [
    {
        name:"gFerrari",
        email:"gFerrari@gmail.com",
        password:"password1",
    },
    {
        name:"cBain",
        email:"cBain@gmail.com",
        password:"password2",
    },
    {
        name:"Ncohen",
        email:"Ncohen@gmail.com",
        password:"password3",
    },
    {
        name:"MChandler",
        email:"Mchandler@gmail.com",
        password:"password4",
    },
    {
        name:"FBaggins",
        email:"FrodoBaggins@gmail.com",
        password:"password5",
    },
    {
        name:"RigbyW",
        email:"RigbyWilson@gmail.com",
        password:"password6",
    },
    {
        name:"EllaC",
        email:"EllaCohen@gmail.com",
        password:"password7",
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

//look up what bulkCreate
