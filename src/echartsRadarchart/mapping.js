import * as d3 from 'd3'
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core'

export const mapData = function (data, mapping, dataTypes, dimensions) {
  // add the non-compulsory dimensions.
  'color' in mapping ? null : (mapping.color = { value: undefined })

  let indicatorDict = {}
  mapping.axes.value.map((axisName) => {
    indicatorDict[axisName] = 0
  })

  let results = []

  let colors = []

  d3.rollups(
    data,
    (v) => {
      const color = mapping.color.value ? v[0][mapping.color.value] : 'All' // Getting the first one since it's grouped
      colors.push(color)
      return v.map((d) => {
        let item = {
          value: mapping.axes.value.map((axisName) => {
            indicatorDict[axisName] = Math.max(
              indicatorDict[axisName],
              d[axisName]
            )
            return d[axisName]
          }),
          name: color,
        }
        results.push(item)

        return 'done'
      })
    },
    (d) =>
      mapping.color.value ? d[mapping.color.value]?.toString() : undefined // color grouping. toString() to enable grouping on dates
  )

  const indicators = Object.keys(indicatorDict).map((i) => ({
    text: i,
    max: indicatorDict[i],
  }))

  return { data: results, indicators, colors }
}
