'use strict'

const fetch = require('isomorphic-fetch')
const cheerio = require('cheerio')
const _ = require('./helpers')



const disruptions = () =>
	fetch(`http://mobil.s-bahn-berlin.de/constructions/overview`)
	.then((res) => res.text())
	.then((body) => {
		const $ = cheerio.load(body)

		const row = (disruption, row) => {
			let key = $('th', row).text()
			let value = $('td', row).text()
			if (key === 'Linien') {
				key = 'lines'
				value = _.clean(value).split('\n')
			}
			else if (key === 'Wann') key = 'when'
			else if (key === 'Infos') {
				key = 'description'
				value = _.clean(value)
			}
			disruption[key] = value
			return disruption
		}

		return Array.from($('#content .list-group li')).map((e) => {
			const disruption = {
				where: $('h4', e).text()
			}
			Array.from($('tr', e)).reduce(row, disruption)
			return disruption
		})
	})

module.exports = disruptions
