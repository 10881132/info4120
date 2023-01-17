Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Peaches', 'Mangoes', 'Bananas', 'Strawberries', 'Apples']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Chase',
        data: [6, 6, 5, 3, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});