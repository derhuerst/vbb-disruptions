#!/usr/bin/env node
'use strict'

const a = require('assert')
const disruptions = require('./index.js')



disruptions().catch(a.ifError)
.then((all) => {
	a.ok('object' === typeof all, 'does not resolve with an object')
	for (let line in all) {
		let disruptions = all[line]
		for (let disruption in disruptions) {
			a.strictEqual(typeof disruption.id,          'string')
			a.strictEqual(typeof disruption.type,        'string')
			a.strictEqual(typeof disruption.updated,     'object')
			a.strictEqual(typeof disruption.message,     'string')
			a.strictEqual(typeof disruption.disturbance, 'string')
		}
	}
})
