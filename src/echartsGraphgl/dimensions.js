export const dimensions = [
  {
    id: 'categories',
    name: 'Categories',
    validTypes: ['number', 'date', 'string'],
    required: true,
    multiple: true,
    minValues: 2,
  },
  {
    id: 'size',
    name: 'Size',
    validTypes: ['number'],
    required: false,
    aggregation: true,
    aggregationDefault: 'sum',
  },
]
