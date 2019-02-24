
const READERS = [
    "onepiece-ex.com.br",
    "cdmnet.com.br"
]

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
    return new Promise((resolve, reject) => {
        current_url().then((resp) => {
            resolve(url_domain(resp))
        })
    })
}

export default {
    url_domain,
    current_url,
    hostname,
    READERS
}