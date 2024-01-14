// background.js
const browser = require('webextension-polyfill');

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
      // Lista de sites de apostas a serem bloqueados
          const sitesBloqueados = ["exemplo1.com", "exemplo2.net"];

              // Verifica se o URL está na lista de sites bloqueados
                  if (sitesBloqueados.some(site => details.url.includes(site))) {
                        // Faz uma solicitação para obter os detalhes da página
                              browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
                                      // Injeta o script content.js na página ativa
                                              browser.tabs.executeScript(
                                                        tabs[0].id,
                                                                  { file: 'content.js' }
                                                                          ).then(result => {
                                                                                    // O script content.js será executado na página ativa
                                                                                              if (browser.runtime.lastError) {
                                                                                                          console.error(browser.runtime.lastError);
                                                                                                                      return;
                                                                                                                                }

                                                                                                                                          // Comunica com o script injetado para obter as meta tags
                                                                                                                                                    browser.tabs.sendMessage(tabs[0].id, { action: 'getMetaTags' }).then(response => {
                                                                                                                                                                // Verifica se as meta tags contêm informações relacionadas a apostas
                                                                                                                                                                            if (response && response.contemConteudoDeAposta) {
                                                                                                                                                                                          browser.webRequest.handlerBehaviorChanged();
                                                                                                                                                                                                        return { cancel: true };
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                    { urls: ["<all_urls>"] },
                                                                                                                                                                                                                                                      ["blocking"]
                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                      