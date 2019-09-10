
// use ... to spread iterables

test('spread 2 arrays into a new array', () => {
  const featured = ['Deep Dish', 'Pepperoni'];
  const specialty = ['Meatzza', 'Margherita'];

  expect([...featured, ...specialty]).toEqual(featured.concat(specialty));
});

test('spread a string', () => {
  expect([..."abc"]).toEqual(["a", "b", "c"]);
});

test('clone an array', () => {
  const arr = ["apples", "bananas", "oranges"];
  const copy = [...arr];
  expect(arr).toEqual(copy);
});

test('rest param can be useful in functions', () => {
  const calculate = (rate, tax, tip, ...amounts) => {
    return amounts;
  }

  expect(calculate(1.5, 15, 3, 10, 20, 15)).toEqual([10, 20, 15]);
});

test('spreading rest example', () => {
  const members = ["steve", "cameron", "jj", "eric"];
  const [manager, lead, ...teammates] = members;
  expect(manager).toEqual("steve");
  expect(lead).toEqual("cameron");
  expect(teammates).toEqual(["jj", "eric"]);
});