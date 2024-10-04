export const dimensions = [
  {
    id: 'x',
    name: 'X Axis',
    operation: 'get',
    validTypes: ['number','date'],
    required: true,
  },
  {
    id: 'y',
    name: 'Y Axis',
    operation: 'get',
    validTypes: ['number', 'date'],
    required: true,
    aggregation: true,
    aggregationDefault: 'sum',
  },
]
