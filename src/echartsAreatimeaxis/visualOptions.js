export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 10,
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
    default: 10,
    group: 'artboard',
  },
  showTooltip: {
    type: 'boolean',
    label: 'Show tooltip',
    default: true,
    group: 'tooltip',
  },
  isMonetaryValue: {
    type: 'boolean',
    label: 'Is monetary value?',
    default: false,
    group: 'tooltip',
    disabled: {
      showTooltip: false,
    },
  },
  dataZoom: {
    type: 'boolean',
    label: 'Show Data Zoom',
    default: false,
    group: 'chart',
  },
  palette: {
    type: 'radioGroup',
    label: 'TGF Default',
    group: 'Color palette',
    default: 'TGF Default',
  },
}
