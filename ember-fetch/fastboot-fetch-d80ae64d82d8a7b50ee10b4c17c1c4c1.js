define("fetch",["exports"],function(e){var t=FastBoot.require("abortcontroller-polyfill/dist/cjs-ponyfill"),o=FastBoot.require("node-fetch"),r=t.abortableFetch({fetch:o,Request:o.Request})
e.default=r.fetch,e.Request=r.Request,e.Headers=o.Headers,e.Response=o.Response,e.AbortController=t.AbortController}),define("fetch/ajax",["exports"],function(){throw new Error("You included `fetch/ajax` but it was renamed to `ember-fetch/ajax`")})

//# sourceMappingURL=fastboot-fetch-d5e0bed8d7c5bda114c8f933adcc0dc6.map