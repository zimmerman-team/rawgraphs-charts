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
    type: 'text',
    label: 'Show labels',
    group: 'labels',
    options: ['false', 'leaf', 'true'],
    default: 'leaf',
  },
  leafLabelPositon: {
    type: 'text',
    label: 'Leaf label position',
    group: 'labels',
    options: ['inside', 'outside'],
    default: 'inside',
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
  palette: {
    type: 'radioGroup',
    label: 'TGF Default',
    group: 'Color palette',
    default: 'TGF Default',
  },
  borderWidth: {
    type: 'number',
    label: 'Item Border width',
    default: 1,
    group: 'artboard',
  },
  borderRadius: {
    type: 'number',
    label: 'Item Border radius',
    default: 0,
    group: 'artboard',
  },
}
