var handleTotalSalesSparkline = function() {
	var options = {
		chart: {
			type: 'line',
			width: 200,
			height: 36,
			sparkline: {
				enabled: true
			},
			stacked: true
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 1,
				opacityTo: 1,
				colorStops: [{
					offset: 0,
					color: app.color.blue,
					opacity: 1
				},
				{
					offset: 100,
					color: app.color.indigo,
					opacity: 1
				}]
			},
		},
		series: [{
			data: [9452.37, 11018.87, 7296.37, 6274.29, 7924.05, 6581.34, 12918.14]
		}],
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				},
				formatter: (value) => { return '$'+ convertNumberWithCommas(value) },
			},
			marker: {
				show: false
			}
		},
		responsive: [{
			breakpoint: 1500,
			options: {
				chart: {
					width: 130
				}
			}
		},{
			breakpoint: 1300,
			options: {
				chart: {
					width: 100
				}
			}
		},{
			breakpoint: 1200,
			options: {
				chart: {
					width: 200
				}
			}
		},{
			breakpoint: 576,
			options: {
				chart: {
					width: 180
				}
			}
		},{
			breakpoint: 400,
			options: {
				chart: {
					width: 120
				}
			}
		}]
	};
	if ($('#total-sales-sparkline').length !== 0) {
		new ApexCharts(document.querySelector('#total-sales-sparkline'), options).render();
	}
};

var handleConversionRateSparkline = function() {
	var options = {
		chart: {
			type: 'line',
			width: 160,
			height: 28,
			sparkline: {
				enabled: true
			}
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 1,
				opacityTo: 1,
				colorStops: [{
					offset: 0,
					color: app.color.red,
					opacity: 1
				},
				{
					offset: 50,
					color: app.color.orange,
					opacity: 1
				},
				{
					offset: 100,
					color: app.color.lime,
					opacity: 1
				}]
			},
		},
		series: [{
			data: [2.68, 2.93, 2.04, 1.61, 1.88, 1.62, 2.80]
		}],
		labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
		xaxis: {
			crosshairs: {
				width: 1
			},
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				},
				formatter: (value) => { return value + '%' },
			},
			marker: {
				show: false
			}
		},
		responsive: [{
			breakpoint: 1500,
			options: {
				chart: {
					width: 120
				}
			}
		},{
			breakpoint: 1300,
			options: {
				chart: {
					width: 100
				}
			}
		},{
			breakpoint: 1200,
			options: {
				chart: {
					width: 160
				}
			}
		},{
			breakpoint: 900,
			options: {
				chart: {
					width: 120
				}
			}
		},{
			breakpoint: 576,
			options: {
				chart: {
					width: 180
				}
			}
		},{
			breakpoint: 400,
			options: {
				chart: {
					width: 120
				}
			}
		}]
	}
	if ($('#conversion-rate-sparkline').length !== 0) {
		new ApexCharts(document.querySelector("#conversion-rate-sparkline"), options).render();
	}
};

var handleStoreSessionSparkline = function() {
	var options = {
		chart: {
			type: 'line',
			width: 160,
			height: 28,
			sparkline: {
				enabled: true
			},
			stacked: false
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 1,
				opacityTo: 1,
				colorStops: [{
					offset: 0,
					color: app.color.teal,
					opacity: 1
				},
				{
					offset: 50,
					color: app.color.blue,
					opacity: 1
				},
				{
					offset: 100,
					color: app.color.cyan,
					opacity: 1
				}]
			},
		},
		series: [{
			data: [10812, 11393, 7311, 6834, 9612, 11200, 13557]
		}],
		labels: ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
		xaxis: {
			crosshairs: {
				width: 1
			},
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				},
				formatter: (value) => { return convertNumberWithCommas(value) },
			},
			marker: {
				show: false
			}
		},
		responsive: [{
			breakpoint: 1500,
			options: {
				chart: {
					width: 120
				}
			}
		},{
			breakpoint: 1300,
			options: {
				chart: {
					width: 100
				}
			}
		},{
			breakpoint: 1200,
			options: {
				chart: {
					width: 160
				}
			}
		},{
			breakpoint: 900,
			options: {
				chart: {
					width: 120
				}
			}
		},{
			breakpoint: 576,
			options: {
				chart: {
					width: 180
				}
			}
		},{
			breakpoint: 400,
			options: {
				chart: {
					width: 120
				}
			}
		}]
	};
	if ($('#store-session-sparkline').length !== 0) {
		new ApexCharts(document.querySelector('#store-session-sparkline'), options).render();
	}
};
function crearGrafica() {
	var AreaChartData = [];
	$.ajax({
		type: "POST",
		dataType: 'json',
		url: 'index.php?c=Producto&a=get_producto_chart',
		success: function (response) {
			const ctx = document.getElementById('myChart').getContext('2d');
			$.each(response, function (key, value) {
				AreaChartData = Array(value.cantidad, value.utilidad, 10, 5, 9, 3);
				const myChart = new Chart(ctx, {
					type: 'bar',
					data: {
						labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
						datasets: [{
							label: 'Tabla Productos',
							data: AreaChartData,
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(75, 192, 192, 0.2)',
								'rgba(153, 102, 255, 0.2)',
								'rgba(255, 159, 64, 0.2)'
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)'
							],
							options: {
								plugins: {
									title: {
										display: true,
										text: 'Custom Chart Title'
									}
								}
							},
							borderWidth: 1
						}]
					},
					options: {
						scales: {
							y: {
								beginAtZero: true
							}
						}
					}
				});

			});
		}
	});
}
var handleVisitorsAreaChart = function() {
	var handleGetDate = function(minusDate) {
		var d = new Date();
				d = d.setDate(d.getDate() - minusDate);
		return d;
	};
	
	/*
	 crearGrafica() = [{
		'key' : 'Unique Visitante',
		'color' : app.color.green,
		'values' : [ 
			[handleGetDate(77), 13], [handleGetDate(76), 13], [handleGetDate(75), 6 ], 
			[handleGetDate(73), 6 ], [handleGetDate(72), 6 ], [handleGetDate(71), 5 ], [handleGetDate(70), 5 ], 
			[handleGetDate(69), 5 ], [handleGetDate(68), 6 ], [handleGetDate(67), 7 ], [handleGetDate(66), 6 ], 
			[handleGetDate(65), 9 ], [handleGetDate(64), 9 ], [handleGetDate(63), 8 ], [handleGetDate(62), 10], 
			[handleGetDate(61), 10], [handleGetDate(60), 10], [handleGetDate(59), 10], [handleGetDate(58), 9 ], 
			[handleGetDate(57), 9 ], [handleGetDate(56), 10], [handleGetDate(55), 9 ], [handleGetDate(54), 9 ], 
			[handleGetDate(53), 8 ], [handleGetDate(52), 8 ], [handleGetDate(51), 8 ], [handleGetDate(50), 8 ], 
			[handleGetDate(49), 8 ], [handleGetDate(48), 7 ], [handleGetDate(47), 7 ], [handleGetDate(46), 6 ], 
			[handleGetDate(45), 6 ], [handleGetDate(44), 6 ], [handleGetDate(43), 6 ], [handleGetDate(42), 5 ], 
			[handleGetDate(41), 5 ], [handleGetDate(40), 4 ], [handleGetDate(39), 4 ], [handleGetDate(38), 5 ], 
			[handleGetDate(37), 5 ], [handleGetDate(36), 5 ], [handleGetDate(35), 7 ], [handleGetDate(34), 7 ], 
			[handleGetDate(33), 7 ], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 9 ], 
			[handleGetDate(29), 10], [handleGetDate(28), 11], [handleGetDate(27), 11], [handleGetDate(26), 8 ], 
			[handleGetDate(25), 8 ], [handleGetDate(24), 7 ], [handleGetDate(23), 8 ], [handleGetDate(22), 9 ], 
			[handleGetDate(21), 8 ], [handleGetDate(20), 9 ], [handleGetDate(19), 10], [handleGetDate(18), 9 ], 
			[handleGetDate(17), 10], [handleGetDate(16), 16], [handleGetDate(15), 17], [handleGetDate(14), 16], 
			[handleGetDate(13), 17], [handleGetDate(12), 16], [handleGetDate(11), 15], [handleGetDate(10), 14], 
			[handleGetDate(9) , 24], [handleGetDate(8) , 18], [handleGetDate(7) , 15], [handleGetDate(6) , 14], 
			[handleGetDate(5) , 16], [handleGetDate(4) , 16], [handleGetDate(3) , 17], [handleGetDate(2) , 7 ], 
			[handleGetDate(1) , 7 ], [handleGetDate(0) , 7 ]
		]
	}, {
		'key' : 'Page Views',
		'color' : app.color.orange,
		'values' : [ 
			[handleGetDate(77), 14], [handleGetDate(76), 13], [handleGetDate(75), 15], 
			[handleGetDate(73), 14], [handleGetDate(72), 13], [handleGetDate(71), 15], [handleGetDate(70), 16], 
			[handleGetDate(69), 16], [handleGetDate(68), 14], [handleGetDate(67), 14], [handleGetDate(66), 13], 
			[handleGetDate(65), 12], [handleGetDate(64), 13], [handleGetDate(63), 13], [handleGetDate(62), 15], 
			[handleGetDate(61), 16], [handleGetDate(60), 16], [handleGetDate(59), 17], [handleGetDate(58), 17], 
			[handleGetDate(57), 18], [handleGetDate(56), 15], [handleGetDate(55), 15], [handleGetDate(54), 15], 
			[handleGetDate(53), 19], [handleGetDate(52), 19], [handleGetDate(51), 18], [handleGetDate(50), 18], 
			[handleGetDate(49), 17], [handleGetDate(48), 16], [handleGetDate(47), 18], [handleGetDate(46), 18], 
			[handleGetDate(45), 18], [handleGetDate(44), 16], [handleGetDate(43), 14], [handleGetDate(42), 14], 
			[handleGetDate(41), 13], [handleGetDate(40), 14], [handleGetDate(39), 13], [handleGetDate(38), 10], 
			[handleGetDate(37), 9 ], [handleGetDate(36), 10], [handleGetDate(35), 11], [handleGetDate(34), 11], 
			[handleGetDate(33), 11], [handleGetDate(32), 10], [handleGetDate(31), 9 ], [handleGetDate(30), 10], 
			[handleGetDate(29), 13], [handleGetDate(28), 14], [handleGetDate(27), 14], [handleGetDate(26), 13], 
			[handleGetDate(25), 12], [handleGetDate(24), 11], [handleGetDate(23), 13], [handleGetDate(22), 13], 
			[handleGetDate(21), 13], [handleGetDate(20), 13], [handleGetDate(19), 14], [handleGetDate(18), 13], 
			[handleGetDate(17), 13], [handleGetDate(16), 19], [handleGetDate(15), 21], [handleGetDate(14), 22],
			[handleGetDate(13), 25], [handleGetDate(12), 24], [handleGetDate(11), 24], [handleGetDate(10), 22], 
			[handleGetDate(9) , 16], [handleGetDate(8) , 15], [handleGetDate(7) , 12], [handleGetDate(6) , 12], 
			[handleGetDate(5) , 15], [handleGetDate(4) , 15], [handleGetDate(3) , 15], [handleGetDate(2) , 18], 
			[handleGetDate(2) , 18], [handleGetDate(0) , 17]
		]
	}];
	*/
	if ($('#visitors-line-chart').length !== 0) {
		nv.addGraph(function() {
			var stackedAreaChart = nv.models.stackedAreaChart()
				.useInteractiveGuideline(true)
				.x(function(d) { return d[0] })
				.y(function(d) { return d[1] })
				.pointSize(0.5)
				.margin({'left':35,'right': 25,'top': 20,'bottom':20})
				.controlLabels({stacked: 'Stacked'})
				.showControls(false)
				.duration(300);

			stackedAreaChart.xAxis.tickFormat(function(d) { 
				var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				d = new Date(d);
				d = monthsName[d.getMonth()] + ' ' + d.getDate();
				return d ;
			});
			stackedAreaChart.yAxis.tickFormat(d3.format(',.0f'));
			d3.select('#visitors-line-chart')
				.append('svg')
				.datum(crearGrafica())
				.transition().duration(1000)
				.call(stackedAreaChart)
				.each('start', function() {
					setTimeout(function() {
						d3.selectAll('#visitors-line-chart *').each(function() {
							if(this.__transition__)
								this.__transition__.duration = 1;
						})
					}, 0)
				});

			nv.utils.windowResize(stackedAreaChart.update);
			return stackedAreaChart;
		});
	}
};

var handleVisitorsMap = function() {
	var fillColor = ($('#visitors-map').attr('data-theme')) ? 'rgba('+ app.color.componentColorRgb +', .25)' : app.color.gray700;
	var options = {
		map: 'world_mill',
		scaleColors: [app.color.black, app.color.black],
		container: $('#visitors-map'),
		normalizeFunction: 'linear',
		hoverOpacity: 0.5,
		hoverColor: false,
		zoomOnScroll: false,
		zoomButtons: false,
		markerStyle: {
			initial: {
				fill: app.color.black,
				stroke: 'transparent',
				r: 3
			}
		},
		regions: [{
			attribute: 'fill'
		}],
		regionStyle: {
			initial: {
				fill: fillColor,
				"fill-opacity": 1,
				stroke: 'none',
				"stroke-width": 0.4,
				"stroke-opacity": 1
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: 'yellow'
			}
		},
		series: {
			regions: [{
				values: {
					IN: app.color.teal,
					US: app.color.teal,
					MN: app.color.teal,
					RU: app.color.teal
				}
			}]
		},
		focusOn: {
			x: 0.7,
			y: 0.5,
			scale: 1
		},
		backgroundColor: 'transparent'
	};
	if ($('#visitors-map').length !== 0) {
		$('#visitors-map').vectorMap(options);
	}
}

var handleDateRangeFilter = function() {
	$('#daterange-filter span').html(moment().subtract('days', 7).format('D MMMM YYYY') + ' - ' + moment().format('D MMMM YYYY'));
	$('#daterange-prev-date').html(moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY'));

	$('#daterange-filter').daterangepicker({
		format: 'MM/DD/YYYY',
		startDate: moment().subtract(7, 'days'),
		endDate: moment(),
		minDate: '01/06/2021',
		maxDate: '07/06/2021',
		dateLimit: { days: 60 },
		showDropdowns: true,
		showWeekNumbers: true,
		timePicker: false,
		timePickerIncrement: 1,
		timePicker12Hour: true,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		opens: 'right',
		drops: 'down',
		buttonClasses: ['btn', 'btn-sm'],
		applyClass: 'btn-primary',
		cancelClass: 'btn-default',
		separator: ' to ',
		locale: {
			applyLabel: 'Submit',
			cancelLabel: 'Cancel',
			fromLabel: 'From',
			toLabel: 'To',
			customRangeLabel: 'Custom',
			daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			firstDay: 1
		}
	}, function(start, end, label) {
		$('#daterange-filter span').html(start.format('D MMMM YYYY') + ' - ' + end.format('D MMMM YYYY'));
		
		var gap = end.diff(start, 'days');
		$('#daterange-prev-date').html(moment(start).subtract('days', gap).format('D MMMM') + ' - ' + moment(start).subtract('days', 1).format('D MMMM YYYY'));
	});
};

var DashboardV3 = function () {
	"use strict";
	return {
		//main function
		init: function () {
			handleTotalSalesSparkline();
			handleConversionRateSparkline();
			handleStoreSessionSparkline();
			handleVisitorsAreaChart();
			handleVisitorsMap();
			handleDateRangeFilter();
		}
	};
}();
function AreaGrafica(){
	$.ajax({
		url: 'index.php?c=Producto&a=get_producto_chart',
		method: "GET",
		success: function(respuesta){
		   console.log(respuesta);
		   var data = JSON.parse(respuesta);
		   var x = [];
		   var tiempos = [];
		   for (let index = 0; index < data.length; index++) {
				x.push(data[index][2]);
				tiempos.push(data[index][7]);
		   }
			//--------------
			//- AREA CHART -
			//--------------
			// Get context with jQuery - using jQuery's .get() method.
			var areaChartCanvas = $('#visitors-line-chart').get(0).getContext('d3')
			var areaChartData = {
			labels  : x,
			datasets: [
				{
				label               : 'Digital Goods',
				backgroundColor     : 'rgba(60,141,188,0.9)',
				borderColor         : 'rgba(60,141,188,0.8)',
				pointRadius          : false,
				pointColor          : '#3b8bba',
				pointStrokeColor    : 'rgba(60,141,188,1)',
				pointHighlightFill  : '#fff',
				pointHighlightStroke: 'rgba(60,141,188,1)',
				data                : tiempos
				}
			]
			}
			var areaChartOptions = {
				maintainAspectRatio: false,
				responsive: true,                    
				events: false,
				tooltips: {
					enabled: false
				},
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						ticks: {
						fontColor: '#000'
						},
						gridLines: {
						display: false,
						color: '#000',
						drawBorder: false
						}
					}],
					yAxes: [{
						ticks: {
						stepSize: 1,
						fontColor: '#000'
						},
						gridLines: {
						display: true,
						color: '#7DCEA0',
						drawBorder: false
						}
					}]
				},
				animation: {
					duration: 1,
					onComplete: function () {
						var chartInstance = this.chart,
							ctx = chartInstance.ctx;
							ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
							ctx.fillStyle = "#000";
							ctx.textAlign = 'center';
							ctx.textBaseline = 'bottom';
							this.data.datasets.forEach(function (dataset, i) {
								var meta = chartInstance.controller.getDatasetMeta(i);
								meta.data.forEach(function (bar, index) {
									var data = dataset.data[index];                            
									ctx.fillText(data, bar._model.x, bar._model.y - 5);
								});
							});
					}
				}
			}
			// This will get the first returned node in the jQuery collection.
			new Chart(areaChartCanvas, {
				type: 'line',
				data: areaChartData,
				options: areaChartOptions
			})
			//-------------
			//- LINE CHART -
			//--------------
			var lineChartCanvas = $('#lineChart').get(0).getContext('d3')
			var lineChartOptions = $.extend(true, {}, areaChartOptions)
			var lineChartData = $.extend(true, {}, areaChartData)
			lineChartData.datasets[0].fill = false;        
			lineChartOptions.datasetFill = false
			var lineChart = new Chart(lineChartCanvas, {
			type: 'line',
			data: lineChartData,
			options: lineChartOptions
			})
		}
	});
}
$(document).ready(function() {
	DashboardV3.init();
	//AreaGrafica();
	crearGrafica();
});