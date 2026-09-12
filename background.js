browser.runtime.onInstalled.addListener(() => {
    browser.storage.local.set({ enabled: true });
});

browser.action.onClicked.addListener(async (tab) => {
    const { enabled } = await browser.storage.local.get("enabled")
    const newState = !enabled

    await browser.storage.local.set({ enabled: newState })

    // show "off" when it's off
    browser.action.setBadgeText({ text: newState ? "" : "off!" })

    browser.action.setTitle({
        title: newState ? "AI removal: on!" : "AI removal: off!"
    })

    if (tab.id && tab.url?.includes("google.")) {
        browser.tabs.reload(tab.id)
    }
})