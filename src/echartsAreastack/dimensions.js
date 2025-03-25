export const dimensions = [
  {
    id: 'x',
    name: 'X Axis',
    operation: 'get',
    validTypes: ['number', 'date'],
    required: true,
    description:
      'X axis shows the independent variable, like time or categories, positioning data points horizontally.',
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
      'Y axis shows the dependent variable values plotted vertically, changing with the X axis.',
  },
  {
    id: 'lines',
    name: 'Lines',
    validTypes: ['number', 'string', 'date'],
    required: false,
    operation: 'get',
    description:
      'The line shows a connection of data points, indicating trends or relationships. In multi-series charts, different lines represent multiple datasets.',
  },
]
