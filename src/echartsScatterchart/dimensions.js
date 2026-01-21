export const dimensions = [
  {
    id: 'x',
    name: 'X Axis',
    operation: 'get',
    validTypes: ['number', 'date'],
    required: true,
    description:
      'Represents the independent variable or input data. It determines the horizontal position of each point on the chart.',
  },
  {
    id: 'y',
    name: 'Y Axis',
    operation: 'get',
    validTypes: ['number', 'date'],
    required: true,
    description:
      'Represents the dependent variable or output data. It determines the vertical position of each point on the chart.',
  },
  {
    id: 'color',
    name: 'Color',
    validTypes: ['string', 'number', 'date'],
    required: false,
    description:
      'Defines the color of each point based on its value. Different values can be represented by different colors to enhance visual distinction.',
  },
]
