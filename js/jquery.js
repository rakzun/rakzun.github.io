function getQueryParam(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  function sendEvent(eventName) {
    fetch('https://trackmyapps.org/events', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        eventName: eventName,
        source: getQueryParam('source', ''),
        subid: getQueryParam('subid', ''),
        clickid: getQueryParam('t', '')
      })
    })
  }
