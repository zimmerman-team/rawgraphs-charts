export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 20,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'artboard',
  },
  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 50,
    group: 'artboard',
  },
  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 120,
    group: 'artboard',
  },
  lineType: {
    type: 'text',
    label: 'Line type',
    group: 'chart',
    // default: 1,
    // min: 1,
    options: ['solid', 'dotted', 'dashed'],
    default: 'solid',
  },
  lineWidth: {
    type: 'number',
    label: 'Line width',
    default: 1,
    group: 'chart',
    min: 1,
    // max: 3,
  },
  stack: {
    type: 'boolean',
    label: 'Stack lines',
    default: false,
    group: 'chart',
  },
  showArea: {
    type: 'boolean',
    label: 'Show Area',
    default: true,
    group: 'chart',
  },
  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: true,
    group: 'chart',
  },
  legendHoverLink: {
    type: 'boolean',
    label: 'Show legend hover link ',
    default: false,
    group: 'chart',
    disabled: {
      legend: false,
    },
  },
  showTooltip: {
    type: 'boolean',
    label: 'Show tooltip',
    default: true,
    group: 'Tooltip',
  },
  isMonetaryValue: {
    type: 'boolean',
    label: 'Is monetary value?',
    default: false,
    group: 'Tooltip',
    disabled: {
      showTooltip: false,
    },
  },
  label: {
    type: 'boolean',
    label: 'Show label',
    default: true,
    group: 'Label',
  },
}
