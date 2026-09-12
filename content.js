let selector = "[aria-label*='Visão geral criada por IA'], [aria-label*='AI Overview']"

function deleteAI() {
    // document.querySelectorAll(selector).forEach(element => {
    //     const elementContainer = element.closest("div#rso > div") || element.closest("[data-hveid]") || element
    //     elementContainer.remove()
    // })

    const selectors = [
        '[aria-label*="Visão geral criada por IA"]',
        '[aria-label*="AI Overview"]',
        '[data-attrid="wa:/description"]'
    ]

    document.querySelectorAll(selectors.join(", ")).forEach(element => {
        const elementContainer = element.closest("div#rso > div, [data-hveid], [data-parent-container], [data-async-context], g-card, block-component") || element

        elementContainer.remove()
    })

    // fallback:
    const headings = document.querySelectorAll("h1,h2,h3,span,div")

    headings.forEach(element => {
        // if (element.children.length === 0) {
        //     let text = element.textContent.trim()

        //     if (text.includes("Visão geral criada por IA") || text.includes("AI Overview")) {
        //         let flbContainer = element.closest("div#rso > div, div#search > div, [data-hveid], g-card, [data-async-context], block-component") || element.parentElement

        //         flbContainer.remove()
        //     }
        // }

        const text = element.textContent.trim()

        if (text.startsWith("Visão geral criada por IA") || text.startsWith("AI Overview")) {
            let flbContainer = element.closest("div#rso > div, [data-hveid], g-card, block-component")

            if (!flbContainer) {
                flbContainer = element.parentElement?.parentElement?.parentElement?.parentElement
            }

            flbContainer?.remove()
        }
    })
}

async function init() {
    const { enabled } = await browser.storage.local.get("enabled")

    if (enabled == false) return

    deleteAI()

    const observer = new MutationObserver(() => deleteAI())

    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    })
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}