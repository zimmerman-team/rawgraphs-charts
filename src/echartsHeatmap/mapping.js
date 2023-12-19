import * as d3 from 'd3'
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core'

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // define aggregators
  // add the non-compulsory dimensions.
  'size' in mapping ? null : (mapping.size = { value: undefined })

  let results = []

  data.forEach((d) => {
    const item = {
      x: d[mapping.x.value],
      y: d[mapping.y.value],
      size: mapping.size.value ? d[mapping.size.value] : data.length,
    }

    results.push(item)
  })

  return results
}
