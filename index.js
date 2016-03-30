'use strict'

const got = require('got')



const types = {
	sbahn: 'suburban',
	ubahn: 'subway'
}

const infos = /^infos:\s*/i
const rn = /\r\n/g

const parseDisruption = (a) => ({
	  id:          a.cid
	, type:        types[a.type] || 'unknown'
	, updated:     new Date(a.time * 1000)
	, message:     a.full_text.replace(infos, '').replace(rn, '\n')
	, url:         a.link
	, disturbance: a.disturbance_type
	, from:        (a.from_station === 'unknown' ? null : a.from_station)
	, to:          (a.to_station === 'unknown' ? null : a.to_station)
})

const disruption = () =>
	got('http://ip029232.beuth-hochschule.de/sbahnstoerungen/reports.json')
	.then((res) => {
		let data = JSON.parse(res.body)
		return data.lines.reduce((acc, l) => {
			acc[l] = data[l].reports.map(parseDisruption)
			return acc
		}, {})
	})



module.exports = disruption
