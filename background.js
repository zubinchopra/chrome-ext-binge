chrome.runtime.onInstalled.addListener(() => {
    console.log("hello!");
    chrome.tabs.getSelected(tab => {
        console.log(tab);
    });
});