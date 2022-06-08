module.exports = (slotArr, plateNum) => {
    const slotIndex = slotArr.findIndex((slot => slot.plate == null));
    if(slotIndex === -1) {
        console.log(`Sorry, parking lot is full`);
        return slotArr;
    }
    console.log(`Allocated slot number: ${slotArr[slotIndex].slot}`);
    slotArr[slotIndex].plate = plateNum;
    return slotArr;
}