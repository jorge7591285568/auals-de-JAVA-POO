if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const c=e=>a(e,r),b={module:{uri:r},exports:d,require:c};s[r]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Blog Aulas"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.6d65aa3f.js",revision:"8017b1d75c800bee1a0d0224770c8393"},{url:"assets/404.html.c168564b.js",revision:"50f6babe4e0c4f9d6449ef4ecaebccc0"},{url:"assets/app.331469ee.js",revision:"57043a7a44135c9f13233e80762ec03b"},{url:"assets/auto.56c9cb2e.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/bib.html.59c32d88.js",revision:"8c0946e951c73a5deb2f7abd77d7f683"},{url:"assets/bib.html.757b9a64.js",revision:"427e45ab36bc992523f5f07f6f200181"},{url:"assets/ementa.html.89673a2e.js",revision:"7bb1410c763380dbc608acc6f0d4bb46"},{url:"assets/ementa.html.d76c661b.js",revision:"161ec38691f2b39e01c519b361bc1e81"},{url:"assets/flowchart-elk-definition-170a3958.3d860708.js",revision:"895feb39eb465585ad52b1ad669e392f"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/highlight.esm.1d809baf.js",revision:"ea0768e20ffa16e2e1f71cdf83bab948"},{url:"assets/index.b582fbbb.js",revision:"94dab395eb42bd49f876f0f6acc5d14c"},{url:"assets/index.html.1945688f.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.1a1403d3.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.20eb7514.js",revision:"26f1e1c7bd026828b79e2bab33c57570"},{url:"assets/index.html.24d7832e.js",revision:"3b95a67703f68f81412de505f2141607"},{url:"assets/index.html.380fe43d.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.3efddec7.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.48c757f0.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.5437bbc2.js",revision:"5c7e79bd652101d69385341a013f1944"},{url:"assets/index.html.66a6139a.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.73ee1d4e.js",revision:"79e58f0ff916c81e9cd751520a9c62f2"},{url:"assets/index.html.8f0c23dd.js",revision:"e171fc2db2844c9242a2abd3cfe97686"},{url:"assets/index.html.9a5087b1.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.a7d94fb5.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.ae4ea8de.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.c417f02f.js",revision:"acb4e06c49a0f3d2bee4f842f38f2b5e"},{url:"assets/index.html.d3e7a480.js",revision:"e8a917594c99b65598b0336201e5d5d5"},{url:"assets/index.html.daa546f6.js",revision:"dcd38c088d5090caabd0118fc38bcc3e"},{url:"assets/index.html.e21a6007.js",revision:"2b871c8d327b723b5ebbf021de641039"},{url:"assets/index.html.eeba351d.js",revision:"ffa9cad90b0eeb8cd44a2ee02f6e66f4"},{url:"assets/index.html.fdd1b0b8.js",revision:"16ab02833b198a9620e04dd27e4fb3b4"},{url:"assets/intro.html.b026b5ee.js",revision:"1b4bfe98a470a4b8fe7621c6cd6a2447"},{url:"assets/intro.html.f394df52.js",revision:"bfb2472cc986545d8b84a66564657544"},{url:"assets/is_dark.890a6cb0.js",revision:"723b34f9c8ec9df35d69fa4dbf04a05e"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.36cfeb92.js",revision:"952bc577b2189946b68f3a49904e0e5c"},{url:"assets/math.esm.0abc2843.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core.31978503.js",revision:"4883f7cd83d82f866dea591137e8f18b"},{url:"assets/mindmap-definition-44684416.3f64baf4.js",revision:"134a291f6416b0f6e3e9d9e3311f7f6c"},{url:"assets/notes.esm.55c982c5.js",revision:"3704ffac1987a5fa9c55e17d7206758d"},{url:"assets/photoswipe.esm.a75b4ea5.js",revision:"4bbc1a35fe11a708eea3c2340ab97c7c"},{url:"assets/reveal.esm.e6b6f4fd.js",revision:"2ae13f3f401294fee79646ed1f70afec"},{url:"assets/search.esm.678cee5b.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.78d1ad8b.css",revision:"9677ac694f24caa14e88c5338ad84a5e"},{url:"assets/timeline-definition-8e5a9bc6.935190dc.js",revision:"946d9a749620a83613a195b02e682fc5"},{url:"assets/zoom.esm.1d3cee89.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"index.html",revision:"ff9b2a999ec8565316292c19b28d9586"},{url:"404.html",revision:"4312eccadec9d940571d0399adf0df89"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map