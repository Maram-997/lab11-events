'use strict';

const events = require('./events');
const faker = require('faker');

const store = faker.company.companyName();
const orderId  = faker.datatype.number();
const CustomerName = faker.name.firstName();
const address = faker.address.cityName();
setInterval(()=>{
    let order = {  
        store : store,
        orderId : orderId,
        CustomerName : CustomerName,
        address : address
    }
    events.emit('pickup' , order )
}, 5000);


// function pickup (payload){
//     alert(`a ${payload.order} need to pickup.`)

// }


events.on('delivered' , delivered )

function delivered (payload){
    alert('THANK YOU.')
}

module.exports =  events;