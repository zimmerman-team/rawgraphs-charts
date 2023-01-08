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
  barWidth: {
    type: 'number',
    label: 'Bar Width',
    default: 80,
    group: 'artboard',
  },

  // stack: {
  //   type: 'string',
  //   label: 'Stack',
  //   default: 'All',
  //   group: 'artboard',
  // },
  // orientation: {
  //   type: 'text',
  //   label: 'Orientation',
  //   group: 'chart',
  //   options: ['horizontal', 'vertical'],
  //   default: 'vertical',
  // },
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
  legend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
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
}
