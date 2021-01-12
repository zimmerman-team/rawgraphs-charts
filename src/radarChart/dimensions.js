export const dimensions = [
  {
    id: 'axes',
    name: 'spokes',
    validTypes: ['number'],
    required: true,
    multiple: true,
    aggregation: true,
    aggregationDefault: {
      number: 'sum',
      string: 'csvDistinct',
      date: 'csvDistinct',
    },
  },

  {
    id: 'name',
    name: 'name',
    validTypes: ['number', 'string', 'date'],
    required: false,
  },

  {
    id: 'color',
    name: 'color',
    operation: 'get',
    validTypes: ['number', 'string', 'date'],
    required: false,
    aggregation: true,
    aggregationDefault: {
      number: 'sum',
      string: 'csvDistinct',
      date: 'csvDistinct',
    },
  },

  {
    id: 'series',
    name: 'series',
    validTypes: ['number', 'string', 'date'],
    required: false,
    operation: 'get',
  },
]
