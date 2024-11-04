export const dimensions = [
  {
    id: 'node',
    name: 'Node',
    validTypes: ['number', 'date', 'string'],
    required: true,
  },

  {
    id: 'nodeSize',
    name: 'Node Size',
    validTypes: ['number'],
    required: false,

  },
  {
    id: 'link',
    name: 'Links',
    validTypes: ['number', 'date', 'string'],
    required: true,
    multiple: true,
    minValues: 1,
  },
  {
    id: 'categories',
    name: 'Categories',
    validTypes: ['number', 'date', 'string'],
    required: false,
  
  },
]
