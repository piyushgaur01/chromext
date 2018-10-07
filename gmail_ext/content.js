chrome.runtime.onInstalled.addListener(function () {
	var url = 'http://localhost:3000/protected';
	fetch(url).then(r => r.text())
		.then(data => console.log(data))
		.catch(e => console.log("Booo", e))
});