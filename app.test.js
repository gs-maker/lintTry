const sum = require('./app')

test("test 2+3 equals 5", sumTest);

function sumTest() {
	expect(sum(2, 3)).toBe(5);
}
