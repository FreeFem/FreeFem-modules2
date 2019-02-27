function fetchModule(e, url, title) {
	e.preventDefault()
	fetch(url)
		.then(function(response) {
			return response.text()
		})
		.then(function(html) {
			// Get content (not surrounding header, footer, nav, ...)
			var parser = new DOMParser()
			var content = parser.parseFromString(html, "text/html")
			var algoDisplay = content.getElementById('algoDisplay')

			// Replace in the page
			document.querySelector('#algoDisplay').innerHTML = algoDisplay.innerHTML

			// Reset scroll
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0

			// Set history
			window.history.pushState(null, title, url)
			document.title = "FREEFEM++ - " + title

			// Relaunch MathJax
			MathJax.Hub.Queue(["Typeset",MathJax.Hub])
		})
		.catch(function(err) {
			console.log('Failed to fetch page: ', err)
		})
}
