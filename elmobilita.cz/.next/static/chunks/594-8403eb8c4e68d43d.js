"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{5594:function(e,t,n){n.d(t,{H:function(){return H}});var a=n(5893),s=n(4298),i=n.n(s),r=n(7294);var l=function(){return(0,r.useEffect)((function(){document.readyState,twemoji.parse(document.body,{folder:"svg",ext:".svg",callback:function(e,t,n){switch(e){case"2197":case"2396":return!1}return"".concat(t.base,t.size,"/",e,t.ext)}})})),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i(),{id:"tweemoji",src:"https://twemoji.maxcdn.com/v/latest/twemoji.min.js",strategy:"beforeInteractive"})})},o=n(2010),c=n(4346),d=n(3771);var m=function(){var e=function(e){document.getElementsByName("theme-color")[0].content=e},t=(0,o.F)(),n=t.systemTheme,s=t.theme,i=t.setTheme,l=(0,r.useState)(!1),m=l[0],u=l[1],x="#18181b",p="#fafafa";return(0,r.useEffect)((function(){u(!0)})),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-9 h-9",children:m?"dark"===("system"===s?n:s)?(0,a.jsx)("button",{className:"w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-300 transition-all",onClick:function(){i("light"),e(x)},children:(0,a.jsx)(c.Z,{className:"w-5 h-5 text-black dark:text-white"})}):(0,a.jsx)("button",{className:"w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-600 transition-all",onClick:function(){i("dark"),e(p)},children:(0,a.jsx)(d.Z,{className:"w-5 h-5 dark:text-white text-black"})}):null})})},u=n(4667),x=n(7434),p=n(3245),f=n(1163);var g=function(e){var t=e.id,n=e.groupName,s=e.linkData,i=(0,f.useRouter)();return(0,r.useEffect)((function(){var e=function(e){var n=document.getElementById("mobile-collapse-group-content-".concat(t)),a=document.getElementById("mobile-icon-collapse-group-".concat(t));n.classList.contains("hidden")||(a.classList.toggle("-rotate-180"),n.classList.toggle("hidden"),"true"===n.ariaExpanded?n.ariaExpanded="false":n.ariaExpanded="true")};return i.events.on("routeChangeStart",e),function(){i.events.off("routeChangeStart",e)}})),(0,a.jsx)("div",{className:"mobile-menu-collapse-group flex items-center z-[99999]",children:(0,a.jsxs)("div",{className:" w-full block items-center",children:[(0,a.jsx)("div",{className:"block items-center",children:(0,a.jsx)("span",{className:"dark:text-zinc-200 text-zinc-900 cursor-pointer h-12 items-center flex border-gray-accent/10 border-b-2",children:(0,a.jsx)("button",{className:"w-full text-left","aria-controls":"mobile-collapse-group-content-".concat(t),"aria-expanded":"false",onClick:function(){var e=document.getElementById("mobile-collapse-group-content-".concat(t));document.getElementById("mobile-icon-collapse-group-".concat(t)).classList.toggle("-rotate-180"),e.classList.toggle("hidden"),"true"===e.ariaExpanded?e.ariaExpanded="false":e.ariaExpanded="true"},children:(0,a.jsxs)("span",{className:"justify-between flex items-center",children:[n,(0,a.jsx)("span",{children:(0,a.jsx)(p.Z,{className:"w-5 h-5 dark:text-zinc-50 text-zinc-900 transition-transform ease-in-out",id:"mobile-icon-collapse-group-".concat(t)})})]})})})}),(0,a.jsx)("div",{className:"hidden",id:"mobile-collapse-group-content-".concat(t),"aria-expanded":"false",children:(0,a.jsx)("ul",{id:"link-list",className:"dark:text-zinc-400",children:Object.keys(s).map((function(e){return(0,a.jsx)(x.LP,{linkAdress:s[e],linkName:e,listClass:"!border-0 dark:text-zinc-400 text-zinc-600"},e)}))})})]})})},h=n(603),v=n(1664),j=n.n(v);var k=function(e){var t=e.id,n=e.groupName,s=e.linkData,i=(0,f.useRouter)(),l=i.pathname;return(0,r.useEffect)((function(){b(t);var e=function(e){y(null,t)};return i.events.on("routeChangeStart",e),function(){i.events.off("routeChangeStart",e)}}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"flex flex-row items-center dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all mx-1 easy-in-out ".concat(l.includes("aktivity")&&"Aktivity"==n?"bg-white dark:text-zinc-50 text-zinc-900":""),"aria-controls":"desktop-collapse-group-content-".concat(t),"aria-expanded":"false",id:"desktop-collapse-group-button-".concat(t),onClick:function(){y("clickButton",t);var e=document.getElementById("desktop-collapse-group-content-".concat(t));document.getElementById("desktop-icon-collapse-group-".concat(t)).classList.toggle("-rotate-180"),e.classList.toggle("hidden"),"true"===e.ariaExpanded?e.ariaExpanded="false":e.ariaExpanded="true"},children:[(0,a.jsx)("span",{className:"",children:n}),(0,a.jsx)("span",{children:(0,a.jsx)(p.Z,{className:"w-5 h-5 ml-2 transition-transform easy-in-out",id:"desktop-icon-collapse-group-".concat(t)})})]}),(0,a.jsx)("div",{className:"hidden absolute top-20 lg:w-full left-0 items-center bg-zinc-50 dark:bg-zinc-900 desktop-expandable-menu-container",id:"desktop-collapse-group-content-".concat(t),"aria-expanded":"false",children:(0,a.jsx)("div",{className:"grid grid-cols-3 gap-8 justify-center justify-items-start content-center lg:w-inside-full h-auto h-min-12 mx-auto items-center p-8 py-4 bg-transparent",children:Object.entries(s).map((function(e){var t=(0,h.Z)(e,2),n=t[0],s=t[1];return(0,a.jsx)(j(),{href:s[2],children:(0,a.jsxs)("a",{className:"hover:bg-zinc-200 hover:dark:bg-zinc-200 hover:dark:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all font-bold text-sm flex flex-col w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center",children:[s[1],(0,a.jsx)("span",{children:n})]}),(0,a.jsx)("span",{className:"text-sm font-normal pl-8",children:s[0]})]})},n)}))})})]})},b=function(e){for(var t=function(e){var t=document.getElementById("desktop-collapse-group-content-".concat(e)),n=document.getElementById("desktop-collapse-group-button-".concat(e));document.addEventListener("click",(function(a){var s=t.contains(a.target),i=n.contains(a.target);s||i||t.classList.contains("hidden")||(console.log("Click outside."),y(null,e))}))},n=document.querySelectorAll('[id*="desktop-collapse-group-content"]'),a=1;a<=n.length;a++)t(a)};function y(e,t){var n=document.querySelectorAll('[id*="desktop-collapse-group-content"]');if("clickButton"===e){for(var a=1;a<=n.length;a++)if(a!=t){var s=document.getElementById("desktop-collapse-group-content-".concat(a)),i=document.getElementById("desktop-icon-collapse-group-".concat(a));s.classList.contains("hidden")||(s.classList.add("hidden"),i.classList.contains("-rotate-180")&&i.classList.remove("-rotate-180"),"true"===s.ariaExpanded?s.ariaExpanded="false":s.ariaExpanded="true")}}else for(var r=1;r<=n.length;r++){var l=document.getElementById("desktop-collapse-group-content-".concat(r)),o=document.getElementById("desktop-icon-collapse-group-".concat(r));l.classList.contains("hidden")||(l.classList.add("hidden"),o.classList.contains("-rotate-180")&&o.classList.remove("-rotate-180"),"true"===l.ariaExpanded?l.ariaExpanded="false":l.ariaExpanded="true")}}var N=n(3746),w=n(8357),z=n(4510),E=n(2154),L=n(1415),I=n(3407),T=function(){var e=function(){window.scrollTo(0,p)},t=(0,r.useState)(!1),n=t[0],s=t[1],i=(0,f.useRouter)(),l=(0,r.useState)(0),o=l[0],c=l[1],d=(0,r.useState)(0),p=d[0],h=d[1],v=[];return(0,r.useEffect)((function(){var t=function(t){if(document.body.classList.contains("fixed")){document.body.classList.remove("fixed"),document.body.classList.remove("overflow-hidden");var n=document.getElementById("mobile-menu-wrapper");e(),n.classList.remove("block"),n.classList.add("hidden")}s(!1)};i.events.on("routeChangeStart",t);var n=document.getElementById("header-wrapper");return window.addEventListener("scroll",(function(){v.push(window.pageYOffset),v>0&&(!n.classList.contains("header-border")&&n.classList.add("header-border")),v<=0&&(n.classList.contains("header-border")&&n.classList.remove("header-border")),c(v)})),function(){window.removeEventListener("scroll",null),i.events.off("routeChangeStart",t)}}),[o]),(0,a.jsxs)(a.Fragment,{children:["",(0,a.jsxs)("div",{className:"sticky flex flex-row items-center w-full px-8 lg:h-20 sm:h-full top-0 lg:dark:bg-zinc-900/80 dark:bg-zinc-900/100 bg-zinc-50 lg:bg-zinc-50/80 lg:backdrop-blur lg:backdrop-saturate-150 z-[99999]",id:"header-wrapper",children:[(0,a.jsxs)("nav",{className:"flex items-center justify-between w-full lg:w-inside-full mx-auto dark:text-zinc-50 text-zinc-900 py-8",children:[(0,a.jsx)("div",{className:"nav-first hidden lg:flex flex-row items-center ",children:(0,a.jsx)(j(),{href:"/",children:(0,a.jsxs)("a",{className:"cursor-pointer flex flex-row items-center rounded-lg px-4 py-0.5 transition-all font-bold text-xl justify-start justify-items-start","aria-label":"Example.com",children:[(0,a.jsx)("img",{src:"/assets/logo/logo.svg",className:"w-10 h-10 mr-2"}),(0,a.jsx)("span",{children:"ElektroMobilita"})]})})}),(0,a.jsx)("div",{className:"nav-second hidden lg:block",children:(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)(k,{groupName:"V\xfdb\u011br t\xe9mat",id:"1",linkData:{Vlaky:["Kolejov\xe1 trakce.",(0,a.jsx)(N.Z,{className:"w-8 h-8 pr-2"}),"/vlak"],Trolejbusy:["Homadn\xe1 doprava.",(0,a.jsx)(w.Z,{className:"w-8 h-8 pr-2"}),"/trolejbus"],Elektroautomobily:["\u0158e\u0161en\xed budoucnosti",(0,a.jsx)(z.Z,{className:"w-8 h-8 pr-2"}),"/elektromobil"],LEV:["Lehk\xe1 elektrick\xe1 vozidla",(0,a.jsx)(E.Z,{className:"w-8 h-8 pr-2"}),"/lev"]}}),(0,a.jsx)(x.O$,{linkAdress:"/autori",linkName:"Auto\u0159i"})]})}),(0,a.jsx)("div",{className:"nav-third w-9 h-9",children:(0,a.jsx)(m,{})}),(0,a.jsx)("div",{className:"flex lg:hidden",children:(0,a.jsx)("button",{className:"w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black/5 flex items-center justify-center hover:ring-2 ring-zinc-50 transition-all",onClick:function(){var t;t=document.getElementById("mobile-menu-wrapper"),s(!n),n?(document.body.classList.remove("fixed"),document.body.classList.remove("overflow-hidden"),t.classList.remove("block"),t.classList.add("hidden"),e()):(h(o[0]),t.classList.add("block"),t.classList.remove("hidden"),document.body.classList.add("fixed"),document.body.classList.add("overflow-hidden"))},type:"button","aria-controls":"mobile-menu","aria-expanded":"false",children:n?(0,a.jsx)(L.Z,{className:"w-5 h-5 dark:text-zinc-50 text-zinc-900 "}):(0,a.jsx)(I.Z,{className:"w-5 h-5 dark:text-zinc-50 text-zinc-900 "})})})]}),(0,a.jsxs)("nav",{className:"h-full dark:bg-zinc-900 bg-zinc-50",children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"lg:hidden hidden fixed w-full visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ".concat("top-24"),id:"mobile-menu-wrapper",children:(0,a.jsxs)("ul",{className:"",children:[(0,a.jsx)(x.LP,{linkAdress:"/",linkName:"elmobilita.cz"}),(0,a.jsx)(g,{id:"1",groupName:"V\xfdb\u011br t\xe9mat",linkData:{Vlaky:"/vlak",Trolejbusy:"/trolejbus",Elektroautomobil:"/elektromobil",LEV:"/lev"}}),(0,a.jsx)(x.LP,{linkAdress:"/autori",linkName:"Auto\u0159i"})]})})}),(0,a.jsx)(u.u,{show:n&&!1,enter:"transition ease-out duration-100 ",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"lg:hidden fixed w-full block visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ".concat("top-24"),children:(0,a.jsxs)("ul",{className:"",children:[(0,a.jsx)(x.LP,{linkAdress:"/",linkName:"elmobilita.cz"}),(0,a.jsx)(g,{id:"1",groupName:"V\xfdb\u011br t\xe9mat",linkData:{Vlaky:"/vlak",Trolejbusy:"/trolejbus",Elektroautomobil:"/elektromobil",LEV:"/lev"}}),(0,a.jsx)(x.LP,{linkAdress:"/autori",linkName:"Auto\u0159i"})]})})})}})]})]})]})},S=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i(),{id:"umami",strategy:"beforeInteractive",src:"https://zakopal-analytics.vercel.app/umami.js","data-website-id":"0a8ccab4-4f92-4b5f-81dc-54fa915d3b08"})})},_=n(3454);var A=function(){return(0,a.jsxs)(a.Fragment,{children:["true"==_.env.ANALYTICS?(0,a.jsx)(S,{}):"",(0,a.jsx)(l,{}),(0,a.jsx)(T,{})]})},C=function(e){var t=e.linkName,n=e.linkUrl,s=e.rel,i=e.target;return(0,a.jsx)(j(),{href:n,children:(0,a.jsx)("a",{className:"cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out",rel:s,target:i,children:t})})},F=function(e){var t=e.linkName,n=e.linkUrl,s=e.rel,i=e.target;return(0,a.jsx)("li",{children:(0,a.jsx)(C,{linkName:t,linkUrl:n,rel:s,target:i})})},B=function(){window.scrollTo({top:0,behavior:"smooth"})};var Z=function(){return(0,a.jsx)("footer",{className:"flex flex-col w-full items-center lg:py-10 py-10 dark:bg-rich-black-lighter z-[99998]",children:(0,a.jsxs)("nav",{"aria-label":"Footer Navigation",role:"navigation",className:"mx-auto lg:w-fit px-5 lg:px-0 flex flex-col",children:[(0,a.jsx)("div",{className:"columns-container w-full mx-auto flex flex-row items-center",children:(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8 justify-center justify-items-start lg:w-inside-full",children:[(0,a.jsx)("div",{className:"footer-column",children:(0,a.jsxs)("ul",{className:"footer-navigation-list mt-3 leading-8",children:[(0,a.jsx)(F,{linkName:"T\xe9mata \u2192",linkUrl:"/vyber-temat"}),(0,a.jsx)(F,{linkName:"Auto\u0159i \u2192",linkUrl:"/autori"}),(0,a.jsx)(F,{linkName:"Zdroje \u2192",linkUrl:"/zdroje"}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{className:"cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out",onClick:B,children:"Scroll \u2191"})})]})}),(0,a.jsx)("div",{className:"footer-column",children:(0,a.jsxs)("ul",{className:"footer-navigation-list mt-3 leading-8",children:[(0,a.jsx)(F,{linkName:"GitHub \u2197",linkUrl:"https://github.com/petrzakopal/hvt",rel:"external",target:"_blank"}),(0,a.jsx)(F,{linkName:"\u010cVUT FEL \u2197",linkUrl:"https://fel.cvut.cz/cz/",rel:"external",target:"_blank"})]})}),(0,a.jsx)("div",{className:"footer-column items-end flex flex-col justify-end",children:(0,a.jsx)(C,{linkName:"\u2190 Dom\u016f",linkUrl:"/"})})]})}),(0,a.jsxs)("small",{className:"text-left text-zinc-400 text-base mt-5",children:["elmobilita.cz 2022 | V\u0161echna\xa0pr\xe1va\xa0vyhrazena.",(0,a.jsx)("br",{}),"Tato str\xe1nka nevyu\u017e\xedv\xe1 Cookies."]})]})})},U=n(9008),V=n.n(U),R=n(3454);var D=function(e){var t=e.data;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{content:"cs_CZ",property:"og:locale"}),(0,a.jsx)("meta",{name:"description",content:t.meta_description}),(0,a.jsx)("meta",{property:"og:title",content:t.og_title}),(0,a.jsx)("meta",{property:"og:description",content:t.og_description}),(0,a.jsx)("meta",{property:"og:type",content:t.og_type}),(0,a.jsx)("meta",{property:"og:url",content:t.og_url}),(0,a.jsx)("meta",{property:"og:site_name",content:R.env.SITE_NAME},"og-site"),(0,a.jsx)("meta",{property:"og:image",content:t.og_image}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:t.twitterTitle}),(0,a.jsx)("meta",{name:"twitter:description",content:t.twitterDescription}),(0,a.jsx)("meta",{name:"twitter:image",content:t.twitterImage?t.twitterImage:t.image}),(0,a.jsx)("meta",{name:"twitter:site",content:R.env.SITE_TWITTER_USERNAME}),(0,a.jsx)("meta",{name:"twitter:creator",content:R.env.SITE_TWITTER_USERNAME}),(0,a.jsx)("link",{rel:"canonical",content:t.canonical_url}),(0,a.jsx)("link",{rel:"icon",href:"/favicons/favicon.ico"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"57x57",href:"/favicons/apple-touch-icon-57x57.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"114x114",href:"/favicons/apple-touch-icon-114x114.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"72x72",href:"/favicons/apple-touch-icon-72x72.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"144x144",href:"/favicons/apple-touch-icon-144x144.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"60x60",href:"/favicons/apple-touch-icon-60x60.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"120x120",href:"/favicons/apple-touch-icon-120x120.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"76x76",href:"/favicons/apple-touch-icon-76x76.png"}),(0,a.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"152x152",href:"/favicons/apple-touch-icon-152x152.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-196x196.png",sizes:"196x196"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-96x96.png",sizes:"96x96"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-32x32.png",sizes:"32x32"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-16x16.png",sizes:"16x16"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/favicon-128.png",sizes:"128x128"}),(0,a.jsx)("meta",{name:"application-name",content:R.env.SITE_NAME}),(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#FFFFFF"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"mstile-144x144.png"}),(0,a.jsx)("meta",{name:"msapplication-square70x70logo",content:"/favicons/mstile-70x70.png"}),(0,a.jsx)("meta",{name:"msapplication-square150x150logo",content:"/favicons/mstile-150x150.png"}),(0,a.jsx)("meta",{name:"msapplication-wide310x150logo",content:"/favicons/mstile-310x150.png"}),(0,a.jsx)("meta",{name:"msapplication-square310x310logo",content:"/favicons/mstile-310x310.png"})]})},M=n(2141),O=function(e){var t=e.schema;return(0,a.jsx)(i(),{strategy:"beforeInteractive",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})},P=n(2622);var q=function(){return function(){var e=(0,f.useRouter)(),t=M.JG;(0,r.useEffect)((function(){t.update}),[e.pathname])}(),null},H=function(e){var t=e.children,n=e.metaData,s=e.schema;q();var i=(0,r.useState)("system"),l=i[0],c=i[1];return(0,r.useEffect)((function(){window.addEventListener("change",c(document.documentElement.className)),c(document.documentElement.className)})),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.f,{enableSystem:!0,defaultTheme:"dark",attribute:"class",enableColorScheme:!0,children:(0,a.jsxs)("div",{className:"flex w-full flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-50 min-h-screen overflow-clip",children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(O,{schema:s})}):"",(0,a.jsx)(A,{}),(0,a.jsxs)(V(),{children:[(0,a.jsx)("title",{children:n.meta_title}),(0,a.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"}),(0,a.jsx)(D,{data:n}),(0,a.jsx)("meta",{name:"theme-color",content:"".concat("dark"==l?"#18181b":"#fafafa"),id:"theme-color"})]}),(0,a.jsx)(M.Xu,{children:(0,a.jsxs)("main",{className:"flex lg:w-inside-full w-full flex-1 flex-col items-center px-9 text-center -z-5",children:[t,(0,a.jsx)(P.a,{mt:"mt-24"})]})}),(0,a.jsx)(Z,{})]})})})}},7434:function(e,t,n){n.d(t,{LP:function(){return l},O$:function(){return o}});var a=n(5893),s=n(1664),i=n.n(s),r=n(1163),l=function(e){var t=e.linkAdress,n=e.linkName,s=e.keyInput,r=e.rel,l=e.target,o=e.listClass;return void 0==o&&(o=""),(0,a.jsx)(i(),{href:t,children:(0,a.jsx)("a",{className:"dark:text-zinc-50 text-zinc-900 cursor-pointer ",rel:r,target:l,children:(0,a.jsx)("li",{className:"border-gray-accent/10 border-b-2 h-12 font-normal text flex items-center ".concat(o),children:n},s)},s)},s)},o=function(e){var t=e.linkAdress,n=e.linkName,s=e.rel,l=e.target,o=(0,r.useRouter)().pathname;return(0,a.jsx)(i(),{href:t,children:(0,a.jsx)("a",{className:"cursor-pointer ".concat(o===t?"activeLink":"notActiveLink"," hover:bg-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all md:inline-block mx-1"),rel:s,target:l,children:n})})}},2622:function(e,t,n){n.d(t,{a:function(){return s}});var a=n(5893),s=function(e){var t=e.mt;return(0,a.jsx)("span",{"aria-hidden":"true",className:"spacer ".concat(t)})}}}]);