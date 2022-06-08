module.exports = (amount) => {
    console.log(`Created parking lot with ${amount} slots`);
    const arr = [];
    for(let i = 0; i < amount; i++) {
        arr.push({
            slot: i+1,
            plate: null
        });
    }
    return arr;
};