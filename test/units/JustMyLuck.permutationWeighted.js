let assert = require('assert').strict;

let JustMyLuck = require('../../index');

let Array_prototype_permutations = require('../core/Array/prototype/permutations');

let l = require('../repetitionsCount');
let permittedDeviation = require('../permittedDeviation');
let WeightedStats = require('../WeightedStats');

module.exports = function() {
	{
		let array = [1, 2, 3, 4, 5];
		let weightedArray = array.map(value => [value, JustMyLuck.integer(1, 9)]);
		[1, 2, 3, 4].forEach(count => {
			let stats = new WeightedStats(Array_prototype_permutations(weightedArray, count).map(v => [
				v.map(v => v[0]),
				v.map(v => v[1]).reduce((r, n) => r + n, 0),
			]));
			Array.from({length: l}).forEach(() => {
				let values = JustMyLuck.permutationWeighted(weightedArray, count);
				stats.inc(values);
			});
			assert(stats.deviation < permittedDeviation);
		});
	}
	assert.deepEqual(JustMyLuck.permutationWeighted([], 1), []);
	assert.deepEqual(JustMyLuck.permutationWeighted([['a', 3]], 3), ['a']);
	assert.deepEqual(JustMyLuck.permutationWeighted([['a', 3], ['b', 1], ['c', 2]], 0), []);
	assert.deepEqual(JustMyLuck.permutationWeighted([['a', 3], ['b', 1], ['c', 2]], -1), []);
	//assert.deepEqual(JustMyLuck.permutationWeighted([['a', 1], ['b', Infinity], ['c', 1]], 1), ['b']);
	//assert.deepEqual(JustMyLuck.permutationWeighted([['a', 0], ['b', 1], ['c', 0]], 1), ['b']);
};
