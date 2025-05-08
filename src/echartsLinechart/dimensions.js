export const dimensions = [
  {
    id: 'x',
    name: 'X Axis',
    operation: 'get',
    validTypes: ['number', 'string', 'date'],
    required: true,
    description:
      'The X axis shows the independent variable, like time or categories, positioning data points horizontally.',
  },
  {
    id: 'y',
    name: 'Y Axis',
    operation: 'get',
    validTypes: ['number', 'date'],
    required: true,
    aggregation: true,
    aggregationDefault: 'sum',
    description:
      'Y axis shows the dependent variable values on the vertical axis, changing with the X axis.',
  },
  {
    id: 'lines',
    name: 'Lines',
    validTypes: ['number', 'string', 'date'],
    required: false,
    operation: 'get',
    description:
      'The line shows trends or relationships between data points. In multi-series charts, different lines represent multiple datasets.',
  },
]
