import * as d3 from 'd3'
import { getDimensionAggregator } from '@rawgraphs/rawgraphs-core'

export const mapData = function (data, mapping, dataTypes, dimensions) {
  const sizeAggregator = getDimensionAggregator(
    'size',
    mapping,
    dataTypes,
    dimensions
  )

  const links = []
  const nodes = []
  const categories = mapping.categories.value.map((d) => ({ name: d }))

  // compute the rollup for each couple of categories
  // @TODO move this as grouping function
  mapping.categories.value.slice(0, -1).forEach((category1, index) => {
    //get the second step
    const category2 = mapping.categories.value[index + 1]

    const result = d3.rollups(
      data,
      (v) => {
        const source = category1 + ' - ' + v[0][category1]
        const target = category2 + ' - ' + v[0][category2]
        const value = mapping.size.value
          ? sizeAggregator(v.map((d) => d[mapping.size.value]))
          : v.length

        nodes.push(
          {
            id: source,
            name: v[0][category1],
            category: category1,
            symbolSize: value,
          },
          {
            id: target,
            name: v[0][category2],
            category: category2,
            symbolSize: value,
          }
        )
        const item = {
          source,
          target,
          value,
        }
        links.push(item)
        return item
      },
      (d) => d[category1] + '_' + d[category2]
    )
  })

  return { links, categories, nodes }
}
