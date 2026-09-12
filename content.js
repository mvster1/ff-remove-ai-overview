let selector = "[arial-label*='Visão geral criada por IA'], [aria-label*='AI Overview']"

function deleteAI() {
    document.querySelectorAll(selector).forEach(element => {
        const elementContainer = element.closest("div#rso > div") || element.closest("[data-hveid]") || element
        elementContainer.remove()
    })
}