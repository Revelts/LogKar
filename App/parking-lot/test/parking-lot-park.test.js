const parkingSlotPark = require('../parking-lot-park');

test(`Park vehicle in parking slot
    `, () => {
  try {
    // Get current available books
    const slotArr = [
      { slot: 1, plate: 'KA-01-HH-1234' },
      { slot: 2, plate: null },
      { slot: 3, plate: 'KA-01-BB-0001' },
      { slot: 4, plate: 'KA-01-HH-7777' },
      { slot: 5, plate: 'KA-01-HH-2701' },
      { slot: 6, plate: 'KA-01-HH-3141' }
    ]
    const expectedArr = [
      { slot: 1, plate: 'KA-01-HH-1234' },
      { slot: 2, plate: 'KA-09-HH-0123' },
      { slot: 3, plate: 'KA-01-BB-0001' },
      { slot: 4, plate: 'KA-01-HH-7777' },
      { slot: 5, plate: 'KA-01-HH-2701' },
      { slot: 6, plate: 'KA-01-HH-3141' }
    ]
    const arr = parkingSlotPark(slotArr, 'KA-09-HH-0123');
    expect(arr).toStrictEqual(expectedArr);
    console.log(`Registration number KA-09-HH-0123 park on the slot number 2`);
    console.log(arr);

  } catch (error) {
    console.log(error);
  }
});