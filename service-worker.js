if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const t={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return t;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/react-a2hs/index.html",revision:"8a2cda4c3f11a64a5e7c407979f1303e"},{url:"/react-a2hs/static/css/2.ef791572.chunk.css",revision:"3d0880c4c8954229008e437ce0e287d1"},{url:"/react-a2hs/static/css/main.3090a7e2.chunk.css",revision:"a97c9217a222ea6c03542a680b8632f5"},{url:"/react-a2hs/static/js/2.aab64600.chunk.js",revision:"ec9ad2d26f132f2173428a5e25b569af"},{url:"/react-a2hs/static/js/2.aab64600.chunk.js.LICENSE.txt",revision:"80d866c934aadf5330278b59eb16292d"},{url:"/react-a2hs/static/js/main.375cf16b.chunk.js",revision:"a3d0f71686628fa0cdc507c4ea973428"},{url:"/react-a2hs/static/js/main.375cf16b.chunk.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/react-a2hs/static/js/runtime-main.c1cd635e.js",revision:"51d4acbd2b8c81d6505e243bed2505bf"},{url:"/react-a2hs/static/media/brand-icons.278156e4.woff2",revision:"e8c322de9658cbeb8a774b6624167c2c"},{url:"/react-a2hs/static/media/brand-icons.65a2fb6d.ttf",revision:"c5ebe0b32dc1b5cc449a76c4204d13bb"},{url:"/react-a2hs/static/media/brand-icons.6729d297.svg",revision:"a1a749e89f578a49306ec2b055c073da"},{url:"/react-a2hs/static/media/brand-icons.cac87dc0.woff",revision:"a046592bac8f2fd96e994733faf3858c"},{url:"/react-a2hs/static/media/brand-icons.d68fa3e6.eot",revision:"13db00b7a34fee4d819ab7f9838cc428"},{url:"/react-a2hs/static/media/flags.99f63ae7.png",revision:"9c74e172f87984c48ddf5c8108cabe67"},{url:"/react-a2hs/static/media/icons.38c6d8ba.woff2",revision:"0ab54153eeeca0ce03978cc463b257f7"},{url:"/react-a2hs/static/media/icons.425399f8.woff",revision:"faff92145777a3cbaf8e7367b4807987"},{url:"/react-a2hs/static/media/icons.62d9dae4.svg",revision:"962a1bf31c081691065fe333d9fa8105"},{url:"/react-a2hs/static/media/icons.a01e3f2d.eot",revision:"8e3c7f5520f5ae906c6cf6d7f3ddcd19"},{url:"/react-a2hs/static/media/icons.c656b8ca.ttf",revision:"b87b9ba532ace76ae9f6edfe9f72ded2"},{url:"/react-a2hs/static/media/logo.1b58771d.png",revision:"03a8eedf7939f481aba371186a0eac4f"},{url:"/react-a2hs/static/media/outline-icons.53671035.ttf",revision:"ad97afd3337e8cda302d10ff5a4026b8"},{url:"/react-a2hs/static/media/outline-icons.687a4990.woff2",revision:"cd6c777f1945164224dee082abaea03a"},{url:"/react-a2hs/static/media/outline-icons.752905fa.eot",revision:"701ae6abd4719e9c2ada3535a497b341"},{url:"/react-a2hs/static/media/outline-icons.9c4845b4.svg",revision:"82f60bd0b94a1ed68b1e6e309ce2e8c3"},{url:"/react-a2hs/static/media/outline-icons.ddae9b1b.woff",revision:"ef60a4f6c25ef7f39f2d25a748dbecfe"}],{})}));
//# sourceMappingURL=service-worker.js.map
