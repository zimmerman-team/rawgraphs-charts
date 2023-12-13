import * as d3 from 'd3'
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core'

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // define aggregators
  const sizeAggregator = getDimensionAggregator(
    'size',
    mapping,
    dataTypes,
    dimensions
  )

  // add the non-compulsory dimensions.
  'color' in mapping ? null : (mapping.color = { value: undefined })
  'size' in mapping ? null : (mapping.size = { value: undefined })
  'label' in mapping ? null : (mapping.label = { value: undefined })

  let results = {}

  d3.rollups(
    data,
    (v) => {
      const color = mapping.color.value ? v[0][mapping.color.value] : 'All' // Getting the first one since it's grouped
      const colorGroup = v.map((d) => ({
        x: d[mapping.x.value],
        y: d[mapping.y.value],
        size: mapping.size.value
          ? sizeAggregator(v.map((d) => d[mapping.size.value]))
          : v.length,
        color,
        label: mapping.label.value ? d[mapping.label.value] : undefined,
      }))
      results[color] = colorGroup
      return colorGroup
    },
    (d) => (mapping.color.value ? d[mapping.color.value].toString() : undefined) // color grouping. toString() to enable grouping on dates
  )

  return results
}
