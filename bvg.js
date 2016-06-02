'use strict'

const got = require('got')
const cheerio = require('cheerio')
const url = require('url')
const _ = require('./helpers')



const lineInClass = /--(\w+)(\s|$)/g
const fromClass = (c) => {
	const s = lineInClass.exec(c)
	return s ? s[1] : null
}

const disruptions = () =>
	got(`http://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen`)
	.then((res) => {
		const $ = cheerio.load(res.body)
		const columns = Array.from($('table.traffic-overview th'))
			.map((e) => $(e).text())

		const row = (e) =>
			Array.from($('td', e))
			.reduce((disruption, cell, i) => {
				cell = $(cell)
				let key = columns[i]
				let value = cell.text()

				if (key === 'Linie') {
					key = 'lines'
					value = _.line(value)
					if (!value) value = // wat
						fromClass(cell.children().first().attr('class'))
					value = [value]
				} else if (key === 'Gültig') {
					key = 'when'
					value = _.clean(value)
				} else if (key === 'Ursache und Auswirkung') key = 'description'
				else if (key === 'Bereich') {
					key = 'where'
					value = _.clean(value)
				}

				disruption[key] = value
				return disruption
			}, {})

		return Array.from($('table.traffic-overview tbody tr')).map(row)
	}
	, (err) => err)

module.exports = disruptions
