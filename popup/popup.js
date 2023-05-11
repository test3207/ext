function update() {
    chrome.storage.local.get(["summary"]).then((result) => {
        const element = document.getElementById("head");
        element.innerText = result.summary;
    });
}
function createTimer() {
    const timer = setTimeout(() => {
        update();
        createTimer();
        clearTimeout(timer);
    }, 1000);
}
createTimer();