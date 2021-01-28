const qstr = require('../qtools/qstr');

test('qstr.capitalizeFirstLetter() works', () => {
	expect(qstr.capitalizeFirstLetter('hello')).toBe('Hello');
});