## remove ai overview

minimalist firefox extension (manifest v3) to automatically strip google's "ai overview" blocks from search results. 

no popups, no bloat, no framework overhead. single-click toggle via the toolbar icon.

### dynamic behavior

* **zero-config toggle**: click the extension icon to alternate between active and disabled states.
* **visual status**: displays an `off!` badge and red background on the icon when disabled.
* **dynamic dom handling**: uses `mutationobserver` to remove ai blocks injected via client-side ajax after initial page load.

### file structure

```text
.
├── manifest.json   # firefox mv3 extension manifest
├── background.js   # handles icon click state and persistence
├── content.js      # dom observer and element removal logic
└── icons/
    └── icon.png    # extension icon