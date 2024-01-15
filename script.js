function blockSite(details, tabsUpdate) {
    console.log("I am going to block:", details.url);
    tabsUpdate(null, {url: "https://api.whatsapp.com/send?phone=+5511995716942&text=Ola+preciso+de+ajuda%2Cacabei+de+acessar+um+site+de+apostas+%21"});
    return {cancel: true};
}

if (typeof chrome !== "undefined" && chrome.webRequest) {
    chrome.webRequest.onBeforeRequest.addListener(
        details => blockSite(details, chrome.tabs.update),
        {urls: blocked_sites_v2},
        ["blocking"]
    );
} else if (typeof browser !== "undefined" && browser.webRequest) {
    browser.webRequest.onBeforeRequest.addListener(
        details => blockSite(details, browser.tabs.update),
        {urls: blocked_sites_v2},
        ["blocking"]
    );
}
