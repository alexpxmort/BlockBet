chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("I am going to block:", details.url)
        chrome.tabs.update(null, {url: "https://api.whatsapp.com/send?phone=+5511995716942&text=Ola+preciso+de+ajuda%2Cacabei+de+acessar+um+site+de+apostas+%21"});

        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)