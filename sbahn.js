'use strict'

const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const FeedParser = require('feedme')
const _ = require('./helpers')

const parseFeed = (xml) => new Promise((yay, nay) => {
	const parser = new FeedParser()
	parser.once('error', nay)
	parser.once('end', () => yay(disruptions))

	const disruptions = []
	parser.on('item', (item) => {
		if (!item['sbb:line']) return // filter out spam

		const lines = Array.isArray(item['sbb:line'])
			? item['sbb:line'].map(l => l.name)
			: [item['sbb:line'].name]
		const when = new Date(item.pubdate)
	})
	parser.write(xml)
})

const disruptions = () => {
	// todo: streaming fetch?
	return fetch('https://app-v2.s-bahn-berlin.de/feed/constructions')
	.then((res) => {
		if (!res.ok) {
			const err = new Error(res.statusText)
			err.statusCode = res.status
			throw err
		}
		return res.text()
	})
	.then(parseFeed)
}

module.exports = disruptions
