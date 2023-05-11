const html = document.documentElement.outerHTML;

chrome.runtime.sendMessage(html, (res) => {
    chrome.storage.local.set({
        summary: res,
    });
});