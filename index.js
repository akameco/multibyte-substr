'use strict';
module.exports = (str, start, len) => {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (typeof start !== 'number') {
		throw new TypeError('Expected a number');
	}

	len = len || escape(str).length;

	if (typeof len !== 'number') {
		throw new TypeError('Expected a number');
	}

	let r = '';
	for (let i = start, c = 0; i < str.length; ++i) {
		const n = escape(str.charAt(i));
		c += n.length < 4 ? 1 : 2;

		if (c > len) {
			return r;
		}

		r += str.charAt(i);
	}

	return r;
};
