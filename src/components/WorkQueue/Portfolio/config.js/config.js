export const portfolioCharts = [
  {
    id: 'loss',
    title: 'PORTFOLIO LOSS RATIO TARGET',
    data: [{ name: 'loss', green: 48.2, yellow: 20, red: 31.8 }],
    target: 55,
    bars: [
      {
        dataKey: 'green',
        stackId: 'a',
        fill: '#3fb37f',
        radius: [25, 0, 0, 25],
      },
      { dataKey: 'yellow', stackId: 'a', fill: '#f0c45c' },
      { dataKey: 'red', stackId: 'a', fill: '#d62828', radius: [0, 25, 25, 0] },
    ],
    type: 'loss',
  },
  {
    id: 'retention',
    title: 'PORTFOLIO RETENTION TARGET',
    data: [{ name: 'retention', green: 20, yellow: 55, red: 25 }],
    target: 88,
    bars: [
      { dataKey: 'red', stackId: 'a', fill: '#d62828', radius: [25, 0, 0, 25] },
      { dataKey: 'yellow', stackId: 'a', fill: '#f0c45c' },
      {
        dataKey: 'green',
        stackId: 'a',
        fill: '#3fb37f',
        radius: [0, 25, 25, 0],
      },
    ],
    type: 'retention',
  },
];

export const businessCharts = [
  {
    id: 'target',
    title: 'NEW BUSINESS TARGET',
    target: 12000000,
    currency: '$',

    data: [
      {
        name: 'target',
        actualValue: 8100000,
      },
    ],

    bars: [
      {
        dataKey: 'actualValue',
        stackId: 'a',
        fill: '#3868ba',
        radius: [0, 25, 25, 0],
      },
      {
        dataKey: 'remaining',
        stackId: 'a',
        fill: '#313954',
        radius: [0, 25, 25, 0],
      },
    ],

    type: 'target',
  },

  {
    id: 'annual',
    title: 'ANNUAL GWP TARGET',
    target: 42000000,
    currency: '$',

    data: [
      {
        name: 'target',
        actualValue: 28400000,
      },
    ],

    bars: [
      {
        dataKey: 'actualValue',
        stackId: 'a',
        fill: '#3868ba',
        radius: [0, 25, 25, 0],
      },
      {
        dataKey: 'remaining',
        stackId: 'a',
        fill: '#313954',
        radius: [0, 25, 25, 0],
      },
    ],

    type: 'target',
  },
];
