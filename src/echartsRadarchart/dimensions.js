export const dimensions = [
  {
    id: 'axes',
    name: 'Spokes',
    validTypes: ['number'],
    required: true,
    multiple: true,
    minValues: 3,
  },
  {
    id: 'color',
    name: 'Color',
    operation: 'get',
    validTypes: ['number', 'string', 'date'],
    required: false,
  },
]
