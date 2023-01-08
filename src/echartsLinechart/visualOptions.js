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
  lineStyle: {
    type: 'number',
    label: 'Line style',
    default: 1,
    group: 'artboard',
    min: 1,
    max: 3,
  },
  lineWidth: {
    type: 'number',
    label: 'Line width',
    default: 1,
    group: 'artboard',
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
    group: 'artboard',
  },
  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: true,
    group: 'artboard',
  },
  legendHoverLink: {
    type: 'boolean',
    label: 'Show legend hover link ',
    default: false,
    group: 'artboard',
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
    default: true,
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
