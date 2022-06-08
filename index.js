// NodeJS filestream dependency
const fs = require('fs'); 

// NodeJS readline dependency
const readline = require('readline');

// Modular functional design js file
const parkingLotCreate = require('./App/parking-lot/parking-lot-create');
const parkingLotLeave = require('./App/parking-lot/parking-lot-leave');
const parkingLotPark = require('./App/parking-lot/parking-lot-park');
const parkingLotStatus = require('./App/parking-lot/parking-lot-status');

// read line interface with filestream from file_inputs.txt
const file = readline.createInterface({
    input: fs.createReadStream('./App/parking-lot/file_inputs.txt'),
    output: process.stdout,
    terminal: false
});

// array slot that has reponsibility to handle all array and allocation memory for parking slot
let slotArr = [];

// read per line for file_inputs.txt and logical to execute each function per command;
file.on('line', (line) => {
    const arr = line.split(" ");
    const command = arr[0];
    if(command === 'create_parking_lot') {
        const amount = arr[1];
        slotArr = parkingLotCreate(amount);
    }
    else if(command === 'park') {
        const plateNum = arr[1];
        slotArr = parkingLotPark(slotArr, plateNum);
    }
    else if(command === 'leave') {
        const plateNumber = arr[1];
        const durationHour = arr[2];
        slotArr = parkingLotLeave(slotArr, plateNumber, durationHour);
    }
    else if(command === 'status') {
        parkingLotStatus(slotArr);
    }
});