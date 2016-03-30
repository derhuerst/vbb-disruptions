# *vbb-disruptions*

Queries disruptions in VBB public transport from an [anonymous JSON API](http://ip029232.beuth-hochschule.de/sbahnstoerungen/reports.json) hosted at [Beuth-Hochschule Berlin](http://beuth-hochschule.de/). [ISC-licensed](license.md).

[![npm version](https://img.shields.io/npm/v/vbb-disruptions.svg)](https://www.npmjs.com/package/vbb-disruptions)
[![build status](https://img.shields.io/travis/derhuerst/vbb-disruptions.svg)](https://travis-ci.org/derhuerst/vbb-disruptions)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-disruptions.svg)](https://david-dm.org/derhuerst/vbb-disruptions)


## Installing

```shell
npm install vbb-disruptions
```


## Usage

```js
const disruptions = require('vbb-disruptions')
disruptions().then(console.log)
```

You will get something similar to the following:

```js
{
	S5: [{
		id:          'ce017ed8181effa0582b1c65d360f9e7',
		type:        'suburban',
		updated:     Mon Jan 18 2016 01:27:05 GMT+0100 (CET), // Date object
		message:     'Ersatzverkehr mit Bussen vom 18.3. (Fr), ca. 22 Uhr durchgehend bis 29.4. (Fr), ca. 1.30 Uhr',
		url:         'http://www.s-bahn-berlin.de/bauinformationen/uebersicht',
		disturbance: 'unknown',
		from:        null,
		to:          null
	}],
	S7: [{
		id:          '3409c785b4ebe180cb12c9a6c38784b8',
		type:        'suburban',
		updated:     Tue Mar 29 2016 00:00:04 GMT+0200 (CEST), // Date object
		message:     'Griebnitzsee  Potsdam Hbf Ersatzverkehr mit Bussen, \nWannsee  Griebnitzsee Zugverkehr nur im 20-Minutentakt vom 29.3. (Di), ca. 4 Uhr durchgehend bis 29.4. (Fr), ca. 22.00 Uhr',
		url:         'http://www.s-bahn-berlin.de/bauinformationen/uebersicht',
		disturbance: 'train_cancellation',
		from:        null,
		to:          null
	}],
	S41: [{
		id:          '265406ccb20bc9af88824813e34bba4e',
		type:        'suburban',
		updated:     Fri Mar 18 2016 00:00:04 GMT+0100 (CET), // Date object
		message:     'Halensee  Westend Ersatzverkehr mit Bussen, \nBundesplatz  Halensee Zugverkehr nur mit S41, S42\n vom 18.3. (Fr), ca. 22 Uhr durchgehend bis 18.4. (Mo), ca. 1.30 Uhr',
		url:         'http://www.s-bahn-berlin.de/bauinformationen/uebersicht',
		disturbance: 'unknown',
		from:        null,
		to:          null
	}],
	S42: [{
		id:          '265406ccb20bc9af88824813e34bba4e',
		type:        'suburban',
		updated:     Fri Mar 18 2016 00:00:04 GMT+0100 (CET), // Date object
		message:     'Halensee  Westend Ersatzverkehr mit Bussen, \nBundesplatz  Halensee Zugverkehr nur mit S41, S42\n vom 18.3. (Fr), ca. 22 Uhr durchgehend bis 18.4. (Mo), ca. 1.30 Uhr',
		url:         'http://www.s-bahn-berlin.de/bauinformationen/uebersicht',
		disturbance: 'unknown',
		from:        null,
		to:          null
	}],
	S46: [{
		id:          '265406ccb20bc9af88824813e34bba4e',
		type:        'suburban',
		updated:     Fri Mar 18 2016 00:00:04 GMT+0100 (CET), // Date object
		message:     'Halensee  Westend Ersatzverkehr mit Bussen, \nBundesplatz  Halensee Zugverkehr nur mit S41, S42\n vom 18.3. (Fr), ca. 22 Uhr durchgehend bis 18.4. (Mo), ca. 1.30 Uhr',
		url:         'http://www.s-bahn-berlin.de/bauinformationen/uebersicht',
		disturbance: 'unknown',
		from:        null,
		to:          null
	}]
}
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-disruptions/issues).
