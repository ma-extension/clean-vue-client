import history from '../history.json'

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

function current_reader () {
    return new Promise((resolve, reject) => {
        hostname().then((resp) => {
            let reader = history.filter((element) => {
                return element.hostname === resp
            })
            
            if (reader.length > 0) {
                resolve(reader[0])
                
            }else {
                reject({error: "reader is not in history"})
            }
        })
    })
}

export default {
    url_domain,
    current_url,
    hostname,
    current_reader
}