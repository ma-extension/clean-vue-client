function url_domain (fullPath) {
    let a_element = document.createElement('a')
    a_element.href = fullPath

    return a_element.hostname
}

function current_url () {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            resolve(tabs[0].url)
        })
    })
}

function hostname () {
    return url_domain(current_url())
}

export default {
    url_domain,
    current_url,
    hostname
}