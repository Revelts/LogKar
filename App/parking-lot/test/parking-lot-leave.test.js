const leaveParkingLot = require('../parking-lot-leave');

test(`Vehicle Leave parking slot
    `, () => {
  try {
    // Get current available books
    const slotArr = [
      { slot: 1, plate: 'KA-01-HH-1234' },
      { slot: 2, plate: 'KA-01-HH-9999' },
      { slot: 3, plate: 'KA-01-BB-0001' },
      { slot: 4, plate: 'KA-01-HH-7777' },
      { slot: 5, plate: 'KA-01-HH-2701' },
      { slot: 6, plate: 'KA-01-HH-3141' }
    ]
    const expectedArr = [
      { slot: 1, plate: 'KA-01-HH-1234' },
      { slot: 2, plate: 'KA-01-HH-9999' },
      { slot: 3, plate: 'KA-01-BB-0001' },
      { slot: 4, plate: 'KA-01-HH-7777' },
      { slot: 5, plate: 'KA-01-HH-2701' },
      { slot: 6, plate: null }
    ]
    const arr = leaveParkingLot(slotArr, 'KA-01-HH-3141', 4);
    expect(arr).toStrictEqual(expectedArr);
    console.log(`Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30`);
    console.log(arr);

  } catch (error) {
    console.log(error);
  }
});