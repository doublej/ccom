export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ccom/_app",
	assets: new Set([".nojekyll","icon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DF_BtBoY.js",app:"_app/immutable/entry/app.DgO4C4Bd.js",imports:["_app/immutable/entry/start.DF_BtBoY.js","_app/immutable/chunks/FHMvzZvL.js","_app/immutable/chunks/20TeykM2.js","_app/immutable/chunks/CVxr5jcu.js","_app/immutable/chunks/DrGqpPGE.js","_app/immutable/entry/app.DgO4C4Bd.js","_app/immutable/chunks/20TeykM2.js","_app/immutable/chunks/D-T8hIBG.js","_app/immutable/chunks/Dt2Xl_rb.js","_app/immutable/chunks/DrGqpPGE.js","_app/immutable/chunks/DCdl3Xiv.js","_app/immutable/chunks/CTjiQYu9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/ccom/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
