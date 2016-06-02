'use strict'

const trim = /^[\s\r\n]+|[\r\n\s]+$/g
const newline = /\s*[\r\n]+\s*/g

const clean = (str) =>
	str.replace(trim, '').replace(newline, '\n')

module.exports = {clean}
