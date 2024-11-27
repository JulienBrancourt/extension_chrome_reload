chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            if (tab.id) {
                chrome.tabs.reload(tab.id)
            }
        })
    })
})