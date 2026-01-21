import * as d3 from 'd3'

export const mapData = function (data, mapping, dataTypes, dimensions) {
  'color' in mapping ? null : (mapping.color = { value: undefined })

  let results = {}

  d3.rollups(
    data,
    (v) => {
      const color = mapping.color.value ? v[0][mapping.color.value] : 'All' // Getting the first one since it's grouped
      const colorGroup = v.map((d) => ({
        x: d[mapping.x.value],
        y: d[mapping.y.value],
        color,
      }))
      results[color] = colorGroup
      return colorGroup
    },
    (d) =>
      mapping.color.value ? d[mapping.color.value]?.toString() : undefined // color grouping. toString() to enable grouping on dates
  )

  return results
}
