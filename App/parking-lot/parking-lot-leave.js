module.exports = (slotArr, plateNum, duration) => {
    const slotIndex = slotArr.findIndex((pSlot => pSlot.plate === plateNum));
    if(slotIndex != -1) {
        slotArr[slotIndex].plate = null;
        let chargeAmount = 10;
        if(chargeAmount > 2) {
            const calculatedPrice = (duration - 2) * 10;
            chargeAmount = chargeAmount + calculatedPrice;
        }
        console.log(`Registration number ${slotArr[slotIndex].plate} with Slot Number ${slotArr[slotIndex].slot} is free with Charge $${chargeAmount}`);
    }
    return slotArr;
};