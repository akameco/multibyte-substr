import test from 'ava';
import fn from './';

test('牛丼', t => {
	t.is(fn('牛丼', 0, 4), '牛丼');
	t.is(fn('牛丼', 0, 2), '牛');
	t.is(fn('牛丼', 1, 2), '丼');
	t.is(fn('牛丼', 1, 1), '');
});

test('blank', t => {
	t.is(fn('abc牛丼', 0), 'abc牛丼');
});

test('error', t => {
	t.throws(fn, 'Expected a string');
	t.throws(() => fn('abc牛丼'), /Expected a number/);
});
