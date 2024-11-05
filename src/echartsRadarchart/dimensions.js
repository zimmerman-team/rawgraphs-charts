export const dimensions = [
  {
    id: 'dimensions',
    name: 'Dimensions',
    validTypes: ['number'],
    required: true,
    multiple: true,
    minValues: 3,
  },
  {
    id: 'category',
    name: 'Category',
    operation: 'get',
    validTypes: ['number', 'string', 'date'],
    required: false,
  },
]
