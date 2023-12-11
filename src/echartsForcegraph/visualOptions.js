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
    default: 50,
    group: 'artboard',
  },
  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 10,
    group: 'artboard',
  },
  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 0,
    group: 'artboard',
  },
  linksOpacity: {
    type: 'number',
    label: 'Links opacity (0-1)',
    default: 0.5,
    step: 0.1,
    min: 0,
    max: 1,
    group: 'chart',
  },
  draggable: {
    type: 'boolean',
    label: 'Draggable',
    group: 'chart',

    default: false,
  },
  orient: {
    type: 'text',
    label: 'Orientation',
    group: 'chart',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  nodeAlign: {
    type: 'text',
    label: 'Flows alignment',
    group: 'chart',
    options: ['left', 'right', 'justify'],
    default: 'justify',
  },
  showEdgeLabels: {
    type: 'boolean',
    label: 'Show edge labels',
    default: true,
    group: 'Labels',
  },
  showLabels: {
    type: 'boolean',
    label: 'Show nodes labels',
    default: true,
    group: 'Labels',
  },
  labelPosition: {
    type: 'text',
    label: 'Node label position',
    options: [
      'top',
      'left',
      'right',
      'bottom',
      'inside',
      'insideLeft',
      'insideRight',
      'insideTop',
      'insideTopLeft',
      'insideTopRight',
      'insideBottom',
      'insideBottomLeft',
      'insideBottomRight',
    ],
    default: 'right',
    group: 'Labels',
    disabled: {
      showLabels: false,
    },
  },
  labelRotate: {
    type: 'number',
    label: 'Node label rotation',
    default: 0,
    group: 'Labels',
    disabled: {
      showLabels: false,
    },
  },
  labelFontSize: {
    type: 'number',
    label: 'Node label font size',
    default: 12,
    group: 'Labels',
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
