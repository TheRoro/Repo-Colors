chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.github/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: './styles.css'})
            chrome.tabs.insertCSS(null, {file: './languages.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'})
        }
    })
})