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
  roam: {
    type: 'text',
    label: 'Roam',
    group: 'artboard',
    // default: 1,
    // min: 1,
    options: ['none', 'scale', 'move', 'both'],
    default: 'none',
  },
  scaleLimitMin: {
    type: 'number',
    label: 'Min',
    group: 'Scale limit',
    // default: 1,

    default: 1,
  },
  scaleLimitMax: {
    type: 'number',
    label: 'Max',
    group: 'Scale limit',
    // default: 1,

    default: 1,
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
