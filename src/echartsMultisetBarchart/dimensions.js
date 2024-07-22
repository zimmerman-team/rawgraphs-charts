export const dimensions = [
  {
    id: 'bars',
    name: 'Bars',
    validTypes: ['number', 'string', 'date'],
    required: true,
    operation: 'get',
  },
  {
    id: 'sizes',
    name: 'Sizes',
    validTypes: ['number'],
    required: true,
    multiple: true,
    operation: 'get',
    aggregation: true,
    aggregationDefault: {
      number: 'sum',
    },
  },
]
