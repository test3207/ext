chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sendResponse(message.length);
});