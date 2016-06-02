'use strict'

const got     = require('got')
const cheerio = require('cheerio')



const err = (err) => console.error(err.stack)

const noise = /^[\s\n\r]+|[\s\n\r]+$/g
const newline = /[\n\r]+/g

got(`http://mobil.s-bahn-berlin.de/constructions/overview`)
.then((res) => {
	const $ = cheerio.load(res.body)

	const row = (disruption, row) => {
		let key = $('th', row).text().replace(noise, '')
		if (key === 'Linien') key = 'lines'
		if (key === 'Wann') key = 'when'
		if (key === 'Infos') key = 'description'
		let value = $('td', row).text().replace(noise, '')
		value = value.split(newline).map((s) => s.trim())
		disruption[key] = value
		return disruption
	}

	return Array.from($('#content .list-group li')).map((e) =>
		Array.from($('tr', e)).reduce(row, {}))
}
, err)
