'use strict'

const sbahn = require('./sbahn')
const bvg = require('./bvg')

const disruptions = () => Promise.all([sbahn(), bvg()])
	.then((both) => both[0].concat(both[1]))

module.exports = Object.assign(disruptions, {sbahn, bvg})
