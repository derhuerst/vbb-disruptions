# *vbb-disruptions*

**Scrapes disruptions in VBB public transport** from the [S-Bahn Berlin website](http://mobil.s-bahn-berlin.de/constructions/overview) and the [BVG website](http://www.bvg.de/de/Fahrinfo/Verkehrsmeldungen).

[![npm version](https://img.shields.io/npm/v/vbb-disruptions.svg)](https://www.npmjs.com/package/vbb-disruptions)
[![build status](https://img.shields.io/travis/derhuerst/vbb-disruptions.svg)](https://travis-ci.org/derhuerst/vbb-disruptions)
[![Windows build status](https://img.shields.io/appveyor/ci/derhuerst/vbb-disruptions.svg)](https://ci.appveyor.com/project/derhuerst/vbb-disruptions)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-disruptions.svg)](https://david-dm.org/derhuerst/vbb-disruptions)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-disruptions.svg)](https://david-dm.org/derhuerst/vbb-disruptions#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-disruptions.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install vbb-disruptions
```


## Usage

```js
const disruptions = require('vbb-disruptions')
disruptions().then(console.log)
```

```js
[
	{
		where: 'Wannsee - Potsdam Hbf',
		lines: [ 'S7' ],
		when: 'vom 6.5. (Fr), ca. 4 Uhr durchgehend bis 6.6. (Mo), ca. 1.30 Uhr',
		description: 'Zugverkehr nur im 20-Minutentakt'
	},
	// …
	{
		lines: [ 'U7' ],
		when: 'von 16.05.2016 22:00\nbis 03.06.2016 03:30',
		description: 'Sperrung wegen Bauarbeiten der BVG',
		where: 'U Hermannplatz  ⇄ U Rudow'
	},
	// …
	{
		lines: [ 'N67' ],
		when: 'von 27.05.2015 05:00\nbis auf Weiteres',
		description: 'Sperrung wegen Bauarbeiten der DB',
		where: 'S Schöneweide/Sterndamm  ⇄ S Schöneweide'
	}
]
```


## Related

- [`sbahn-berlin-tweets`](https://github.com/derhuerst/sbahn-berlin-tweets) – Fetch & parse [`@SBahnBerlin`](https://mobile.twitter.com/SBahnBerlin) tweets on the operating status of [S-Bahn Berlin](https://en.wikipedia.org/wiki/Berlin_S-Bahn).
- [`augment-vbb-hafas`](https://github.com/derhuerst/augment-vbb-hafas) – Augment [VBB HAFAS](https://npmjs.com/package/vbb-hafas) responses with realtime data from other channels.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-disruptions/issues).
