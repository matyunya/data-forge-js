'use strict';

var Series = require('./series');
var DataFrame = require('./dataframe');
var DateIndex = require('./dateindex');

module.exports = {
	
	read_csv: function () {
		return new DataFrame(
			[
				'Value1',
				'Value2',
				'Value3',			
			],
			new DateIndex(
				[
					new Date(1975, 24, 2), 
					new Date(2015, 10, 23)
				]
			),
			[
				[100, "foo", 22],
				[300, "bar", 23],			
			]
		);		
	},
};