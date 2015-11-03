'use strict';


describe('BaseDataFrame', function () {
	
	var panjas = require('../index');	
	
	var expect = require('chai').expect;
	var assert = require('chai').assert;

	var initDataFrame = function (columns, values) {
		assert.isArray(columns);
		assert.isArray(values);

		return new panjas.LazyDataFrame(
			function () {
				return columns;
			},
			function () {
				return values;
			}
		);
	};
	
	it('can merge on column', function () {

		var left = initDataFrame(
			[
				'key',
				'lval',
			],
			[
				['foo', 1],
				['foo', 2],
			]
		);
		var right = initDataFrame(
			[
				'key',
				'rval',
			],
			[
				['foo', 4],
				['foo', 5],
			]
		);

		var merged = panjas.merge(left, right, 'key');
		expect(merged.columns()).to.eql([
			'key',
			'lval',
			'rval',
		]);
		expect(merged.values()).to.eql([
			['foo', 1, 4],
			['foo', 1, 5],
			['foo', 2, 4],
			['foo', 2, 5],
		]);
	});

	it('merging with bad column name throws exception', function () {

		var left = initDataFrame(
			[
				'key',
				'lval',
			],
			[
				['foo', 1],
				['foo', 2],
			]
		);
		var right = initDataFrame(
			[
				'key',
				'rval',
			],
			[
				['foo', 4],
				['foo', 5],
			]
		);

		expect(function () {
			panjas.merge(left, right, 'bad-column');
		}).to.throw(Error);
	});
});
