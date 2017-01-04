#!/usr/bin/env node
'use strict'

const a = require('assert')
const parse = require('vbb-parse-line')
const disruptions = require('./index.js')



const showError = (err) => {
	console.error(err)
	process.exit(1)
}

disruptions()
.then((all) => {
	a.ok(Array.isArray(all))
	a.ok(all.length > 0)
	for (let d of all) {
		a.ok(Array.isArray(d.lines))
		for (let line of d.lines) {
			a.strictEqual(typeof line, 'string')
			a.ok(parse(line))
		}
		a.strictEqual(typeof d.where, 'string')
		a.strictEqual(typeof d.when, 'string')
		a.strictEqual(typeof d.description, 'string')
	}
})
.catch(showError)
