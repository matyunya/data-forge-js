'use strict';


describe('Series', function () {
	
	var panjas = require('../index');
	
	var expect = require('chai').expect; 
	
	var initExampleSeries = function () {
		var index = new panjas.DateIndex([new Date(1975, 24, 2), new Date(1975, 24, 2)]);
		var values = [100, 200];
		return new panjas.Series(index, values);		
	};
	
	/* Can't really do this check, it will break lazy evaluation.
	it('throws exception when index and values arrays do not have equal length', function () {
		
		expect(function () {
			var index = [new Date(1975, 24, 2)];
			var values = [100, 200];
			new Series(index, values);			
		}).to.throw();

		expect(function () {
			var index = [new Date(1975, 24, 2), new Date(1975, 24, 2)];
			var values = [100];
			new Series(index, values);			
		}).to.throw();
	});
	*/
	
	it('can get series index', function () {
		
		var series = initExampleSeries();		
		expect(series.index().values()).to.eql([			
			new Date(1975, 24, 2),
			new Date(1975, 24, 2)			
		]);		
	});
	
	it('can get series values', function () {
		
		var series = initExampleSeries();		
		expect(series.values()).to.eql([			
			100,
			200			
		]);		
	});

	it('baking series returns self', function () {
		
		var series = initExampleSeries();
		expect(series.bake()).to.equal(series);
	});
});