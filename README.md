## remove ai overview

minimalist firefox extension (manifest v3) to automatically strip google's "ai overview" blocks from search results. 

no popups, no bloat, no framework overhead. single-click toggle via the toolbar icon.

### installation

#### firefox developer edition (temporary)
1. navigate to `about:debugging#/runtime/this-firefox`
2. click **load temporary add-on**
3. select `manifest.json`

#### permanent (un-signed local build)
1. open `about:config`
2. set `xpinstall.signatures.required` to `false`
3. zip the files into a `.zip` or `.xpi` archive
4. install via `about:addons` -> **install add-on from file....**

### dynamic behavior

* **zero-config toggle**: click the extension icon to alternate between active and disabled states.
* **visual status**: displays an `off!` badge and red background on the icon when disabled.
* **dynamic dom handling**: uses `MutationObserver` to remove ai blocks injected via client-side ajax after initial page load.

### file structure

```text
.
├── manifest.json   # firefox mv3 extension manifest
├── background.js   # handles icon click state and persistence
├── content.js      # dom observer and element removal logic
└── icons/
    └── icon.png    # extension icon
