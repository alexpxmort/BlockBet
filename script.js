
var blocked_sites = [
    "https://pixbet.com/",
    "https://m.esportesdasorte.com/",
    "https://br.betano.com/",
    "https://promo.sportingbet.com/",
    "https://www.bet365.com/" ,
    "https://lp.superbet.com/",
    "https://promotions.betfair.com/",
    "https://blaze-4.com/pt/",
    "https://m.mmabet.com/",
    "https://segenx.com/",
    "https://bet-real.com/",
    "https://subwaycash.com/"
  ]
  


  function blockSite() {
    const redirectUrl = browser.runtime.getURL("index.html") || chrome.runtime.getURL("index.html");
    return { redirectUrl };
}
if (typeof chrome !== "undefined" && chrome.webRequest) {
    chrome.webRequest.onBeforeRequest.addListener(
        details => blockSite(),
        {urls: blocked_sites},
        ["blocking"]
    );
} else if (typeof browser !== "undefined" && browser.webRequest) {
    browser.webRequest.onBeforeRequest.addListener(
        details => blockSite(),
        {urls: blocked_sites},
        ["blocking"]
    );
}
