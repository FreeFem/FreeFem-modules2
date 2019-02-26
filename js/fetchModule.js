function fetchModule(e, url, title) {
  e.preventDefault()
  fetch(url)
  .then(function(response) {
    return response.text()
  })
  .then(function(html) {
    document.querySelector('#algoDisplay').innerHTML = html
  	document.body.scrollTop = 0
  	document.documentElement.scrollTop = 0
    window.history.pushState(null, title, url)
    document.title = "FREEFEM++ - " + title
    MathJax.Hub.Queue(["Typeset",MathJax.Hub])
  })
  .catch(function(err) {
    console.log('Failed to fetch page: ', err)
  });
}
