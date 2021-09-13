const express = require('express');
const { company } = require('faker');
const app = express();
const port = 8000;
const faker = require('faker')

class User {
    constructor(){
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
let user1 = new User()

class Company {
    constructor(){
        this._id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.cityName(),
            city: faker.address.streetName(),
            zip: faker.address.zipCode()
        }
        
        
    }
}
let company1 = new Company()


app.get("/api/test", (req,res)=>{
    res.json({message: "hey its me"})
})


app.get("/api/users/new", (req,res)=>{
    res.json(new User())
})

app.get("/api/companies/new", (req,res)=>{
    res.json(new Company())
})

app.get("/api/user/company", (req,res)=>{
    // let user1 = new User()
    // let company1 = new Company()
    res.json({"user1": new User(), "company1": new Company()})
})

app.listen(port,()=>console.log(`running on port ${port} is a new way`));

