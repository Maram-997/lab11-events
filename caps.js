'use strict';

const events = require('./events');
const faker = require('faker');
require('./driver');
require('./vendor');

const product = faker.commerce.product();
const date = faker.date.weekday();

events.on('pickup',(payload) =>{
console.log('pickup',{
    time : date,
    payload : date
});
})
events.on('in transit',(payload) =>{
    console.log('in transit',{
        time : date,
        payload : date
    });
})
events.on('delivered',(payload) =>{
    console.log('delivered',{
        time : date,
        payload : date
    });
})

module.exports = events;