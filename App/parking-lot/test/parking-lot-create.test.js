const createParkingLot = require('../parking-lot-create');

test(`Creating parking slot with input amount with array of object
    `, () => {
  try {
    // Get current available books
    const arr = createParkingLot(6);
    expect(arr.length).toStrictEqual(6);
    console.log(`Created Parking lot with ${arr.length} slots`);
    console.log(`Array Parking contain object of array`);
    console.log(arr);

  } catch (error) {
    console.log(error);
  }
});