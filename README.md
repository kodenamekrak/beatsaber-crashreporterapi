# beatsaber-crashreporterapi

A simple wrapper for the [CrashReporter API](https://analyzer.questmodding.com/api/crashes)

## Installing

```sh-session
npm install beatsaber-crashreporterapi
```

## Example

```js
const { CrashReporterAPI } = require('beatsaber-crashreporterapi');

const cr = new CrashReporterAPI('MyApp', '1.0.0');

const crashes = cr.getRecentCrashes({
	limit: 10,
	search: 'libqosmetics-core.so',
	age: 10
}).then(crashes => {
	crashes.forEach(crash => console.log(crash.crashId));
});
```


## Credit

[beatsaver-api](https://github.com/FranciscoRibeiro03/beatsaver-api) - *I have never written a library before so this was very useful for reference*