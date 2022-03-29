const calculator = require('./calculator');

 describe('calculator', () => {
  const cal= new calculator();
  test('Adding', () => {
    expect(cal.add(5, 3)).toBe(8);
  });

   test('Adding', () => {
    expect(cal.add(0,-1)).toBe(-1);
  });

  test('Adding', () => {
    expect(cal.add(0,0.1)).toBe(0.1);
  }); 
  
  test('subtract', () => {
    expect(cal.subtract(5, 3)).toBe(2);
  });

   test('subtract', () => {
    expect(cal.subtract(0,-1)).toBe(1);
  });

  test('subtract', () => {
    expect(cal.subtract(0,0.1)).toBe(-0.1);
  }); 

  test('multiplication', () => {
    expect(cal.multi(5, 3)).toBe(15);
  });

  test('multiplication', () => {
    expect(cal.multi(0, -1)).toBe(-0);
  });

  test('multiplication', () => {
    expect(cal.multi(123658, 2569874)).toBe(317785479092);
  });


    test('division', () => {
      expect(cal.division(123658, 2569874)).toBe(0.04811831241531686);
  });

  test('division', () => {
    expect(cal.division(96, -5)).toBe(-19.2);
});

test('division', () => {
  expect(cal.division(9865, 0.2)).toBe(49325);
});
});