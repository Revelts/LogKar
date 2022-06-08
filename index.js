const fs = require('fs');
const readline = require('readline');
const parkingLotCreate = require('./App/parking-lot/parking-lot-create');
const parkingLotLeave = require('./App/parking-lot/parking-lot-leave');
const parkingLotPark = require('./App/parking-lot/parking-lot-park');
const parkingLotStatus = require('./App/parking-lot/parking-lot-status');

const file = readline.createInterface({
    input: fs.createReadStream('./App/parking-lot/file_inputs.txt'),
    output: process.stdout,
    terminal: false
});

let slotArr = [];

file.on('line', (line) => {
    const arr = line.split(" ");
    const command = arr[0];
    if(command === 'create_parking_lot') {
        const amount = arr[1];
        slotArr = parkingLotCreate(amount);
    }
    if(command === 'park') {
        const plateNum = arr[1];
        slotArr = parkingLotPark(slotArr, plateNum);
    }
    if(command === 'leave') {
        const plateNumber = arr[1];
        const durationHour = arr[2];
        slotArr = parkingLotLeave(slotArr, plateNumber, durationHour);
    }
    if(command === 'status') {
        parkingLotStatus(slotArr);
    }
});