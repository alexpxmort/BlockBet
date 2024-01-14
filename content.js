// content.js
const browser = require('webextension-polyfill');

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getMetaTags') {
      // Obtém todas as tags meta da página
          const metaTags = document.querySelectorAll('meta');

              // Verifica se alguma tag meta contém informações relacionadas a apostas
                  const contemConteudoDeAposta = Array.from(metaTags).some(metaTag => {
                        const content = metaTag.getAttribute('content');
                              // Adicione palavras-chave relevantes para identificar conteúdo de apostas nas meta tags
                                    const palavrasChaveApostas = ["aposta", "jogo", "loteria"];
                                          return palavrasChaveApostas.some(palavraChave => content.includes(palavraChave));
                                              });

                                                  // Envia a resposta de volta para background.js
                                                      sendResponse({ contemConteudoDeAposta });
                                                        }
                                                        });
                                                        