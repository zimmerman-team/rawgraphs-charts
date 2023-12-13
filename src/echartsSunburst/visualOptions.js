export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 0,
    group: 'artboard',
  },
  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 0,
    group: 'artboard',
  },
  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 0,
    group: 'artboard',
  },
  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 0,
    group: 'artboard',
  },
  showLabels: {
    type: 'boolean',
    label: 'Show labels',
    default: true,
    group: 'labels',
  },
  showLabel1: {
    type: 'boolean',
    label: 'Layer 1 Label',
    default: true,
    group: 'labels',
    disabled: {
      showLabels: false,
    },
  },
  showLabel2: {
    type: 'boolean',
    label: 'Layer 2 Label',
    default: true,
    group: 'labels',
    disabled: {
      showLabels: false,
    },
  },
  showLabel3: {
    type: 'boolean',
    label: 'Layer 3 Label',
    default: true,
    group: 'labels',
    disabled: {
      showLabels: false,
    },
  },
  labelFontSize: {
    type: 'number',
    label: 'Label font size',
    default: 12,
    group: 'labels',
    disabled: {
      showLabels: false,
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
}
