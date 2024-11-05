export const dimensions = [
  {
    id: 'category',
    name: 'Category',
    validTypes: ["number", "string", "date"],
    required: true,

  },
  {
    id: 'value',
    name: 'Value',
    validTypes: ['number'],
    required: true,
    aggregation: true,
    aggregationDefault: {
      number: 'sum',
    },
  },
]
