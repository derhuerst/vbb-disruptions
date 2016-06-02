'use strict'

const trim = /^[\s\r\n]+|[\r\n\s]+$/g
const newline = /\s*[\r\n]+\s*/g

const clean = (str) =>
	str.replace(trim, '').replace(newline, '\n')

const line = (str) => {
	str = str.split(' ')
	return str[str.length - 1]
}

module.exports = {clean, line}
