export const dimensions = [
  {
    id: 'metric',
    name: 'Metric',
    validTypes: ['number'],
    required: true,
    aggregation: true,
    aggregationDefault: 'sum',
  },
  {
    id: 'mainKPImetric',
    name: 'Main KPI Metric',
    validTypes: ['number'],
    static: true,

  },
  {
    id: 'header',
    name: 'Header',
    validTypes: ['string'],
    required: false,
    static: true,
  },

  {
    id: 'subheader',
    name: 'Sub Header',
    validTypes: ['string'],
    required: false,
    static: true,
  },
  {
    id: 'unitofmeasurement',
    name: 'Unit Of Measurement',
    validTypes: ['string'],
    required: false,
    static: true,
  },
]
