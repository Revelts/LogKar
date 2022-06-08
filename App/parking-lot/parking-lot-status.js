module.exports = (arrSlot) => {
    console.log(`Slot No. Registration No.`);
    for(const slot of arrSlot) {
        console.log(`${slot.slot} ${slot.plate}`);
    }
};