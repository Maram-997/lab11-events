'use strict';
const events = require("./events");
const order = require('./vendor')

const faker = require('faker');
const orderId = faker.datatype.number();

events.on('pickup', (payload) => {
    setInterval(() => {
        console.log(`Driver : Picked up ${orderId}`);
        events.emit('in transit', { order: payload })

    }, 1000)
})



events.on('delivered', (payload) => {
    setInterval(() => {
        console.log('DELIVERED');
        events.emit('delivered', { order: payload })
    }, 3000)
})

module.exports = events;