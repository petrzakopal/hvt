"use strict";
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 3898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @version 0.1.2
 * Documentation for component DesktopMenuCollapseGroup
 * Comment: Used as collapsable menu group.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * groupName - name of the group link in the menu - example: "Features"
 * linkData - object containing linkName - name of the inner link, which value is array of linkSubname, icon, linkUrl - example: linkData={{ linkName: [ "linkSubname", <ChartBarIcon className={"w-8 h-8 pr-2"} />, "/linkUrl",],linkName2: ["linkSubname2",<BellIcon className={"w-8 h-8 pr-2"} />,"/linkUrl2",]} }
 */ /**
 * Changelog
 * 0.1.2 Moved multipleGroupHandler outside of main function DesktopMenuCollapseGroup.
 * 0.1.1 Added closing functionality via click outside Group Content or Button. Needs testing.
 * 0.1 Initial version
 */ // Had to take design from ActiveLink and but it on button because otherwise it would not be good and only animated the link.
function DesktopMenuCollapseGroup({ id , groupName , linkData  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = router.pathname;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        OutsideClickGroupContentHandle(id);
        // Handles router events
        const handleRouteChangeDesktop = (url)=>{
            multipleGroupHandler(null, id);
        };
        // When const name = (props) => {} is used, when calling handler, do not use this parentheses () in handler.
        router.events.on("routeChangeStart", handleRouteChangeDesktop);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChangeDesktop);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `flex flex-row items-center dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all mx-1 easy-in-out ${pathname.includes("aktivity") && groupName == "Aktivity" ? "bg-white dark:text-zinc-50 text-zinc-900" : ""}`,
                "aria-controls": `desktop-collapse-group-content-${id}`,
                "aria-expanded": "false",
                id: `desktop-collapse-group-button-${id}`,
                onClick: ()=>{
                    multipleGroupHandler("clickButton", id);
                    let group = document.getElementById(`desktop-collapse-group-content-${id}`);
                    let groupIcon = document.getElementById(`desktop-icon-collapse-group-${id}`);
                    groupIcon.classList.toggle("-rotate-180");
                    group.classList.toggle("hidden");
                    group.ariaExpanded === "true" ? group.ariaExpanded = "false" : group.ariaExpanded = "true";
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "",
                        children: groupName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon, {
                            className: `w-5 h-5 ml-2 transition-transform easy-in-out`,
                            id: `desktop-icon-collapse-group-${id}`
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden absolute top-20 lg:w-full left-0 items-center bg-zinc-50 dark:bg-zinc-900 desktop-expandable-menu-container",
                id: `desktop-collapse-group-content-${id}`,
                "aria-expanded": "false",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-3 gap-8 justify-center justify-items-start content-center lg:w-inside-full h-auto h-min-12 mx-auto items-center p-8 py-4 bg-transparent",
                    children: Object.entries(linkData).map(([linkName, linkData])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: linkData[2],
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "hover:bg-zinc-200 hover:dark:bg-zinc-200 hover:dark:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all font-bold text-sm flex flex-col w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                            linkData[1],
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: linkName
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm font-normal pl-8",
                                        children: linkData[0]
                                    })
                                ]
                            })
                        }, linkName))
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopMenuCollapseGroup);
/**
 * @version 0.1
 * Documentation for component OutsideClickGroupContentHandle
 * Comment: Used for closing and opening Collapseable group content via click outside buttons/components.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1 - pasted from main function DesktopMenuCollapseGroup.
 */ /**
 * Changelog
 *
 */ const OutsideClickGroupContentHandle = (id)=>{
    const expandableMenu = document.querySelectorAll(`[id*="desktop-collapse-group-content"]`);
    for(let i = 1; i <= expandableMenu.length; i++){
        const collapseableGroupContentElement = document.getElementById(`desktop-collapse-group-content-${i}`);
        const collapseableGroupButtonElement = document.getElementById(`desktop-collapse-group-button-${i}`);
        document.addEventListener("click", (event)=>{
            const isClickInsideGroupContent = collapseableGroupContentElement.contains(event.target);
            const isClickInsideGroupButton = collapseableGroupButtonElement.contains(event.target);
            if (!isClickInsideGroupContent && !isClickInsideGroupButton && !collapseableGroupContentElement.classList.contains("hidden")) {
                console.log("Click outside.");
                multipleGroupHandler(null, i);
            }
        });
    }
};
/**
 * @version 0.1
 * Documentation for component multipleGroupHandler
 * Comment: Used for closing and opening Collapseable group content.
 * Usage: Desktop Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * selector - used to identify if clicked button or router change, when button click - selector = "clickButton" otherwise null
 */ /**
 * Changelog
 *
 */ // Opening a closing multiple menu groups
// Used as a part of onClick action and to handle closing menu - submenu groups when router / path changes
// selector is used to determine, if function is called from 'clickButton', where we need to close other expanded groups but at button click opened group, when selector == null or else we are calling the handler when changing routes, so it is needed to close all groups - otherwire the group would stay open.
function multipleGroupHandler(selector, id) {
    const expandableMenu = document.querySelectorAll(`[id*="desktop-collapse-group-content"]`);
    if (selector === "clickButton") {
        for(let i = 1; i <= expandableMenu.length; i++){
            if (i != id) {
                let group = document.getElementById(`desktop-collapse-group-content-${i}`);
                let groupIcon = document.getElementById(`desktop-icon-collapse-group-${i}`);
                if (!group.classList.contains("hidden")) {
                    group.classList.add("hidden");
                    // This if statement is redundant, maybe delete later
                    groupIcon.classList.contains("-rotate-180") ? groupIcon.classList.remove("-rotate-180") : null;
                    group.ariaExpanded === "true" ? group.ariaExpanded = "false" : group.ariaExpanded = "true";
                }
            }
        }
    } else {
        for(let i1 = 1; i1 <= expandableMenu.length; i1++){
            let group1 = document.getElementById(`desktop-collapse-group-content-${i1}`);
            let groupIcon1 = document.getElementById(`desktop-icon-collapse-group-${i1}`);
            if (!group1.classList.contains("hidden")) {
                group1.classList.add("hidden");
                // This if statement is redundant, maybe delete later
                groupIcon1.classList.contains("-rotate-180") ? groupIcon1.classList.remove("-rotate-180") : null;
                group1.ariaExpanded === "true" ? group1.ariaExpanded = "false" : group1.ariaExpanded = "true";
            }
        }
    }
}


/***/ }),

/***/ 6151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/**
 *
 * Documentation for component FooterLink
 * Comment: Used as a default footer link.
 * -------------------------------------------------------------------------------
 * linkName - name of the link text - example: "Lorem Ipsum"
 * linkUrl - url link to linking page - example: "/foobar"
 */ // Footer basic link
const FooterLink = ({ linkName , linkUrl , rel , target  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: linkUrl,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out",
            rel: rel,
            target: target,
            children: linkName
        })
    });
};
/**
 *
 * Documentation for component FooterLinkList
 * Comment: Basically FooterLink wrapped in <li> component
 * -------------------------------------------------------------------------------
 * linkName - name of the link text - example: "Lorem Ipsum"
 * linkUrl - url link to linking page - example: "/foobar"
 */ // Footer basic link wrapped in a list to get cleaner text in Footer()
const FooterLinkList = ({ linkName , linkUrl , rel , target  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
            linkName: linkName,
            linkUrl: linkUrl,
            rel: rel,
            target: target
        })
    });
};
const ScrollToTopHandler = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
/**
 *
 * Documentation for component Footer
 * Comment: Used as a default page footer.
 * -------------------------------------------------------------------------------
 */ // Main exported function
function Footer() {
    return(// Main footer container
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "flex flex-col w-full items-center lg:py-10 py-10 dark:bg-rich-black-lighter z-[99998]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            "aria-label": "Footer Navigation",
            role: "navigation",
            className: "mx-auto lg:w-fit px-5 lg:px-0 flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "columns-container w-full mx-auto flex flex-row items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8 justify-center justify-items-start lg:w-inside-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer-navigation-list mt-3 leading-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLinkList, {
                                            linkName: "Autoři →",
                                            linkUrl: "/autori"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLinkList, {
                                            linkName: "Zdroje →",
                                            linkUrl: "/zdroje"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out",
                                                onClick: ScrollToTopHandler,
                                                children: "Scroll ↑"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-column",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer-navigation-list mt-3 leading-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLinkList, {
                                            linkName: "GitHub ↗",
                                            linkUrl: "https://github.com/petrzakopal/hvt",
                                            rel: "external",
                                            target: "_blank"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLinkList, {
                                            linkName: "ČVUT FEL ↗",
                                            linkUrl: "https://fel.cvut.cz/cz/",
                                            rel: "external",
                                            target: "_blank"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "footer-column items-end flex flex-col justify-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
                                    linkName: "← Domů",
                                    linkUrl: "/"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                    className: "text-left text-zinc-400 text-base mt-5",
                    children: [
                        "elmobilita.cz 2022 | Všechna\xa0pr\xe1va\xa0vyhrazena.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Tato str\xe1nka nevyuž\xedv\xe1 Cookies."
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 4683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tweemojihandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6970);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1127);
/* harmony import */ var _umami__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(903);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar__WEBPACK_IMPORTED_MODULE_2__]);
_navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/**
 * @version 0.1.1
 * Documentation for component Header
 * Comment: Merging components to be used in the desired layout.
 * -------------------------------------------------------------------------------
 */ function Header() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            process.env.ANALYTICS == "true" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_umami__WEBPACK_IMPORTED_MODULE_3__/* .UmamiTracking */ .Y, {}) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweemojihandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4683);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6151);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pagemetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4773);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilities_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5635);
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_1__]);
_header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











/**
 * @version 0.1
 * Documentation help for component useUpdateControllerOnRouteChange and ParallaxRouteUpdate
 * Comment: Should clear Paralax cache when changing routes.
 * TODO: Maybe will use ParalaxProvider only on page when it is nescessary.
 * -------------------------------------------------------------------------------
 */ function useUpdateControllerOnRouteChange() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const parallaxController = react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__.useParallaxController;
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        parallaxController.update;
    }, [
        router.pathname
    ]);
}
// Maybe use in a hook
const ParallaxRouteUpdate = ()=>{
    useUpdateControllerOnRouteChange();
    return null;
};
/**
 * @version 0.1.2
 * Documentation help for component DefaultLayout
 * Comment: Default layout of the application with menu/header and footer. Consists of metadata and dark/light mode switching.
 * -------------------------------------------------------------------------------
 */ const DefaultLayout = ({ children , metaData , schema  })=>{
    ParallaxRouteUpdate();
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("system");
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        window.addEventListener("change", setTheme(document.documentElement.className));
        setTheme(document.documentElement.className);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
            enableSystem: true,
            defaultTheme: "dark",
            attribute: "class",
            enableColorScheme: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-50 min-h-screen overflow-clip",
                children: [
                    schema ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utilities_schema__WEBPACK_IMPORTED_MODULE_9__/* .Schema */ .V, {
                            schema: schema
                        })
                    }) : "",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: metaData.meta_title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                content: "width=device-width, initial-scale=1.0",
                                name: "viewport"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pagemetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                data: metaData
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "theme-color",
                                content: `${theme == "dark" ? "#18181b" : "#fafafa"}`,
                                id: "theme-color"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxProvider, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            className: "flex lg:w-inside-full w-full flex-1 flex-col items-center px-9 text-center -z-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utilities_utilities__WEBPACK_IMPORTED_MODULE_10__/* .SpaceY */ .aC, {
                                    mt: "mt-10"
                                }),
                                children,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utilities_utilities__WEBPACK_IMPORTED_MODULE_10__/* .SpaceY */ .aC, {
                                    mt: "mt-24"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ ActiveMobileLink),
/* harmony export */   "O$": () => (/* binding */ ActiveLink)
/* harmony export */ });
/* unused harmony export TextLink */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @version 0.2.2
 * Documentation for component ActiveMobileLink
 * Comment: Active link for mobile design.
 * -------------------------------------------------------------------------------
 * linkAdress - url link to linking page - example: "/foobar"
 * linkName - name of the link text - example: "Lorem Ipsum"
 * keyInput - because this function is mainly used in main menu in map function, has to be passed there, to have unique elements in React - example: {key} (of a map function)
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 * listClass -> for list classes - example: ""
 */ // Mobile active link header design
const ActiveMobileLink = ({ linkAdress , linkName , keyInput , rel , target , listClass ,  })=>{
    listClass == undefined ? listClass = "" : listClass;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: linkAdress,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: `dark:text-zinc-50 text-zinc-900 cursor-pointer `,
            rel: rel,
            target: target,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `border-gray-accent/10 border-b-2 h-12 font-normal text flex items-center ${listClass}`,
                children: linkName
            }, keyInput)
        }, keyInput)
    }, keyInput);
};
/**
 * @version 0.2
 * Documentation for component ActiveLink
 * Comment: Active link for desktop design with hover and active link (current router) highlight.
 * -------------------------------------------------------------------------------
 * linkAdress - url link to linking page - example: "/foobar"
 * linkName - name of the link text - example: "Lorem Ipsum"
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 */ // Desktop ActiveLink header design
const ActiveLink = ({ linkAdress , linkName , rel , target  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const currentRoute = router.pathname;
    // console.log(currentRoute);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: linkAdress,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: `cursor-pointer ${currentRoute === linkAdress ? "activeLink" : "notActiveLink"} hover:bg-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 hover:text-zinc-900 rounded-lg px-4 py-0.5 transition-all md:inline-block mx-1`,
            rel: rel,
            target: target,
            children: linkName
        })
    });
};
/**
 * @version 0.2
 * Documentation for component export const TextLink

 * Comment: Link with arrow SVG.
 * -------------------------------------------------------------------------------
 * linkUrl - url link to linking page - example: "/foobar"
 * linkText - name of the link text - example: "Lorem Ipsum"
 * rel -> HTML attribute - example: "nofollow"
 * target -> HTML attribute - example: "_blank"
 */ const TextLink = ({ linkUrl , linkText , target , rel  })=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: linkUrl,
        children: /*#__PURE__*/ _jsx("a", {
            className: `text-left w-fit text-primary-accent after:inline-flex after:top-[0.11em] after:relative  hover:text-primary-accent after:transition-colors after:easy-in-out transition-colors easy-in-out after:[mask:url("/assets/images/misc/external-link.svg")] after:[mask-repeat:no-repeat;] after:[content: "";] after:h-4 after:w-4 after:ml-1 after:bg-primary-accent after:hover:bg-primary-accent after:[mask-size: cover;]`,
            target: target,
            rel: rel,
            children: linkText
        })
    });
};


/***/ }),

/***/ 856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7434);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @version 0.1.1
 * Documentation for component MobileMenuCollapseGroup
 * Comment: Used as collapsable menu group.
 * Usage: Mobile Navbar - Navbar component
 * -------------------------------------------------------------------------------
 * id - unique id of component, can be random math number or numeric value - example: 1
 * groupName - name of the group link in the menu - example: "Features"
 * linkData - object containing linkName - name of the inner link, which value is linkUrl
 * linkData={{ linkNames: "/linkurl", linkName2: "/linkurl2"}}
 */ function MobileMenuCollapseGroup({ id , groupName , linkData  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Handling change of router / url. When the url is changed, close mobile menu and unfix document body.
        const handleRouteChange = (url)=>{
            let group = document.getElementById(`mobile-collapse-group-content-${id}`);
            let groupIcon = document.getElementById(`mobile-icon-collapse-group-${id}`);
            if (!group.classList.contains("hidden")) {
                groupIcon.classList.toggle("-rotate-180");
                group.classList.toggle("hidden");
                group.ariaExpanded === "true" ? group.ariaExpanded = "false" : group.ariaExpanded = "true";
            }
        };
        router.events.on("routeChangeStart", handleRouteChange); // Handles mobile menu closing when the route changes.
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mobile-menu-collapse-group flex items-center z-[99999]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " w-full block items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "block items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "dark:text-zinc-200 text-zinc-900 cursor-pointer h-12 items-center flex border-gray-accent/10 border-b-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "w-full text-left",
                            "aria-controls": `mobile-collapse-group-content-${id}`,
                            "aria-expanded": "false",
                            onClick: ()=>{
                                let group = document.getElementById(`mobile-collapse-group-content-${id}`);
                                let groupIcon = document.getElementById(`mobile-icon-collapse-group-${id}`);
                                groupIcon.classList.toggle("-rotate-180");
                                group.classList.toggle("hidden");
                                group.ariaExpanded === "true" ? group.ariaExpanded = "false" : group.ariaExpanded = "true";
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "justify-between flex items-center",
                                children: [
                                    groupName,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {
                                            className: "w-5 h-5 dark:text-zinc-50 text-zinc-900 transition-transform ease-in-out",
                                            id: `mobile-icon-collapse-group-${id}`
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden",
                    id: `mobile-collapse-group-content-${id}`,
                    "aria-expanded": "false",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        id: "link-list",
                        className: "dark:text-zinc-400",
                        children: Object.keys(linkData).map((key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_1__/* .ActiveMobileLink */ .LP, {
                                linkAdress: linkData[key],
                                linkName: key,
                                listClass: "!border-0 dark:text-zinc-400 text-zinc-600"
                            }, key))
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenuCollapseGroup);


/***/ }),

/***/ 1127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themechanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7434);
/* harmony import */ var _mobilemenucollapsegroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(856);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _desktopmenucollapsegroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3898);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











/**
 * @version 0.1.1
 * Documentation for component Navbar
 * Comment: Used as a navigation bar on the desktop or mobile. Notification top banner can be activateed.
 * ------------------------------------------------------------------------------------------------------
 */ const Navbar = ()=>{
    // Select which MobileMenuLogic yo prefer.
    // When == 1 then it is via Transition from headless ui
    // When == 2 it is via display - no jums seen on page
    const MobileMenuLogic = 2;
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // State used to determine mobile menu opening.
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: lastScroll , 1: setLastScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // State for storing state last current scroll.
    const { 0: lastScrollMem , 1: setLastScrollMem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // State for storing memory value of scroll to get back to last position before mobile menu opens.
    // enabling banner on top of the page
    // automatically changes mobile header position and banner visibility
    const bannerEnabled = false;
    const currentScroll = []; // Current scroll value, pasted to lastScroll and from lastScroll to lastScrollMem.
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Handling change of router / url. When the url is changed, close mobile menu and unfix document body.
        const handleRouteChange = (url)=>{
            // console.log(`App is changing to ${url}`);
            // if (!isOpen) {
            // 	document.body.classList.remove("fixed");
            // 	document.body.classList.remove("w-full");
            // }
            if (document.body.classList.contains("fixed")) {
                document.body.classList.remove("fixed");
                document.body.classList.remove("overflow-hidden");
                if (MobileMenuLogic == 2) {
                    const mobileMenuContents = document.getElementById("mobile-menu-wrapper");
                    windowGoToPosition(lastScrollMem);
                    mobileMenuContents.classList.remove("block");
                    mobileMenuContents.classList.add("hidden");
                }
            // document.body.classList.remove("w-full"); // depracated because of _document.js
            }
            setIsOpen(false);
        };
        router.events.on("routeChangeStart", handleRouteChange); // Handles mobile menu closing when the route changes.
        // Handling Y offset calculation for back scroll when mobile menu is closed.
        const headerWrapper = document.getElementById("header-wrapper");
        window.addEventListener("scroll", ()=>{
            currentScroll.push(window.pageYOffset);
            currentScroll > 0 ? !headerWrapper.classList.contains("header-border") ? headerWrapper.classList.add("header-border") : "" : "";
            currentScroll <= 0 ? headerWrapper.classList.contains("header-border") ? headerWrapper.classList.remove("header-border") : "" : "";
            setLastScroll(currentScroll);
        });
        return ()=>{
            window.removeEventListener("scroll", null);
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        lastScroll
    ]);
    /** Function to store window viewport location before opening the mobile menu */ function windowPositionRet() {
        setLastScrollMem(lastScroll[0]);
    }
    /** Function to scroll to last saved scroll viewport location after closing the mobile menu */ function windowGoToPosition() {
        window.scrollTo(0, lastScrollMem);
    // console.log("Last scroll mem is " + lastScrollMem);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            bannerEnabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "banner w-full h-[var(--banner-height)] justify-center items-center relative dark:bg-gray-800 bg-gray-400 text-black dark:text-white font-semibold text-sm flex z-[99999]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Navbar info."
                })
            }) : "",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sticky flex flex-row items-center w-full px-8 lg:h-20 sm:h-full top-0 lg:dark:bg-zinc-900/80 dark:bg-zinc-900/100 bg-zinc-50 lg:bg-zinc-50/80 lg:backdrop-blur lg:backdrop-saturate-150 z-[99999]",
                id: "header-wrapper",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center justify-between w-full lg:w-inside-full mx-auto dark:text-zinc-50 text-zinc-900 py-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav-first hidden lg:flex flex-row items-center ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "cursor-pointer flex flex-row items-center rounded-lg px-4 py-0.5 transition-all font-bold text-xl justify-start justify-items-start",
                                        "aria-label": "Example.com",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/assets/logo/logo.svg",
                                                className: "w-10 h-10 mr-2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "ElektroMobilita"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav-second hidden lg:block",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_desktopmenucollapsegroup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            groupName: "V\xfdběr t\xe9mat",
                                            id: "1",
                                            linkData: {
                                                Vlaky: [
                                                    "Kolejov\xe1 trakce.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Bars2Icon, {
                                                        className: "w-8 h-8 pr-2"
                                                    }),
                                                    "/vlak/kapitoly", 
                                                ],
                                                Trolejbusy: [
                                                    "Homadn\xe1 doprava.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.UserGroupIcon, {
                                                        className: "w-8 h-8 pr-2"
                                                    }),
                                                    "/trolejbus/kapitoly", 
                                                ],
                                                Elektroautomobily: [
                                                    "Řešen\xed budoucnosti",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.BoltIcon, {
                                                        className: "w-8 h-8 pr-2"
                                                    }),
                                                    "/elektromobil/kapitoly", 
                                                ],
                                                LEV: [
                                                    "Lehk\xe1 elektrick\xe1 vozidla",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.WifiIcon, {
                                                        className: "w-8 h-8 pr-2"
                                                    }),
                                                    "/lev/kapitoly", 
                                                ]
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_4__/* .ActiveLink */ .O$, {
                                            linkAdress: "/autori",
                                            linkName: "Autoři"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "nav-third w-9 h-9",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themechanger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex lg:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black/5 flex items-center justify-center hover:ring-2 ring-zinc-50 transition-all",
                                    onClick: ()=>{
                                        // windowGoToPosition(lastScrollMem);
                                        // windowPositionRet();
                                        let mobileMenuContents;
                                        if (MobileMenuLogic == 2) {
                                            mobileMenuContents = document.getElementById("mobile-menu-wrapper");
                                        }
                                        setIsOpen(!isOpen);
                                        if (isOpen) {
                                            document.body.classList.remove("fixed");
                                            document.body.classList.remove("overflow-hidden");
                                            if (MobileMenuLogic == 2) {
                                                mobileMenuContents.classList.remove("block");
                                                mobileMenuContents.classList.add("hidden");
                                            }
                                            windowGoToPosition(lastScrollMem);
                                        } else {
                                            windowPositionRet();
                                            if (MobileMenuLogic == 2) {
                                                mobileMenuContents.classList.add("block");
                                                mobileMenuContents.classList.remove("hidden");
                                            }
                                            document.body.classList.add("fixed");
                                            document.body.classList.add("overflow-hidden");
                                        }
                                    // document.body.classList.toggle("fixed");
                                    // document.body.classList.toggle("w-full");
                                    },
                                    type: "button",
                                    "aria-controls": "mobile-menu",
                                    "aria-expanded": "false",
                                    children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.XMarkIcon, {
                                        className: "w-5 h-5 dark:text-zinc-50 text-zinc-900 "
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Bars3Icon, {
                                        className: "w-5 h-5 dark:text-zinc-50 text-zinc-900 "
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "h-full dark:bg-zinc-900 bg-zinc-50",
                        children: [
                            MobileMenuLogic == 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `lg:hidden hidden fixed w-full visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ${bannerEnabled ? "top-28" : "top-24"}`,
                                    id: "mobile-menu-wrapper",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_4__/* .ActiveMobileLink */ .LP, {
                                                linkAdress: "/",
                                                linkName: "elmobilita.cz"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobilemenucollapsegroup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                id: "1",
                                                groupName: "V\xfdběr t\xe9mat",
                                                linkData: {
                                                    Vlaky: "/vlak/kapitoly",
                                                    Trolejbusy: "/trolejbus/kapitoly",
                                                    Elektroautomobil: "/elektromobil/kapitoly",
                                                    LEV: "/lev/kapitoly"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_4__/* .ActiveMobileLink */ .LP, {
                                                linkAdress: "/autori",
                                                linkName: "Autoři"
                                            })
                                        ]
                                    })
                                })
                            }) : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                                show: isOpen && MobileMenuLogic == 1,
                                enter: "transition ease-out duration-100 ",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `lg:hidden fixed w-full block visible px-8 pt-4 inset-x-0 overflow-y-scroll text-base dark:bg-zinc-900 bg-zinc-50 bottom-0 ${bannerEnabled ? "top-28" : "top-24"}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_4__/* .ActiveMobileLink */ .LP, {
                                                        linkAdress: "/",
                                                        linkName: "elmobilita.cz"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobilemenucollapsegroup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        id: "1",
                                                        groupName: "V\xfdběr t\xe9mat",
                                                        linkData: {
                                                            Vlaky: "/vlak/kapitoly",
                                                            Trolejbusy: "/trolejbus/kapitoly",
                                                            Elektroautomobil: "/elektromobil/kapitoly",
                                                            LEV: "/lev/kapitoly"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links__WEBPACK_IMPORTED_MODULE_4__/* .ActiveMobileLink */ .LP, {
                                                        linkAdress: "/autori",
                                                        linkName: "Autoři"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @version 0.1.1
 * Documentation for component PageMetaData
 * Comment: Generating SEO mage metadata with icons.
 * -------------------------------------------------------------------------------
 * data - input page metadata - example
 */ 
function PageMetaData({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: "cs_CZ",
                property: "og:locale"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: data.meta_description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: data.og_title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: data.og_description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: data.og_type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: data.og_url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: process.env.SITE_NAME
            }, "og-site"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: data.og_image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: data.twitterTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: data.twitterDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: data.twitterImage ? data.twitterImage : data.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:site",
                content: process.env.SITE_TWITTER_USERNAME
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:creator",
                content: process.env.SITE_TWITTER_USERNAME
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                content: data.canonical_url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicons/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "57x57",
                href: "/favicons/apple-touch-icon-57x57.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "114x114",
                href: "/favicons/apple-touch-icon-114x114.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "72x72",
                href: "/favicons/apple-touch-icon-72x72.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "144x144",
                href: "/favicons/apple-touch-icon-144x144.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "60x60",
                href: "/favicons/apple-touch-icon-60x60.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "120x120",
                href: "/favicons/apple-touch-icon-120x120.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "76x76",
                href: "/favicons/apple-touch-icon-76x76.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "152x152",
                href: "/favicons/apple-touch-icon-152x152.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon-196x196.png",
                sizes: "196x196"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon-96x96.png",
                sizes: "96x96"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon-32x32.png",
                sizes: "32x32"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon-16x16.png",
                sizes: "16x16"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon-128.png",
                sizes: "128x128"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "application-name",
                content: process.env.SITE_NAME
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#FFFFFF"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-TileImage",
                content: "mstile-144x144.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-square70x70logo",
                content: "/favicons/mstile-70x70.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-square150x150logo",
                content: "/favicons/mstile-150x150.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-wide310x150logo",
                content: "/favicons/mstile-310x150.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-square310x310logo",
                content: "/favicons/mstile-310x310.png"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageMetaData);


/***/ }),

/***/ 1143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @version 0.1
 * Documentation for component ThemeChanger
 * Comment: Changing dark/light theme.
 * -------------------------------------------------------------------------------
 */ function ThemeChanger() {
    const { systemTheme , theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const themeColor = {
        light: "#18181b",
        dark: "#fafafa"
    };
    function metaiosBarChange(input) {
        let metaTheme = document.getElementsByName("theme-color");
        metaTheme[0].content = input;
    }
    /* need to check for value when mounted in browser of a user, otherwise don't use this at all - hydratation (we don't know the value because this works on a server )*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setMounted(true);
    });
    const renderThemeChanger = ()=>{
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-300 transition-all",
                onClick: ()=>{
                    setTheme("light");
                    metaiosBarChange(themeColor.light);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {
                    className: "w-5 h-5 text-black dark:text-white"
                })
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "w-9 h-9 dark:bg-zinc-600 bg-zinc-300 rounded-lg dark:black flex items-center justify-center hover:ring-2 ring-zinc-600 transition-all",
                onClick: ()=>{
                    setTheme("dark");
                    metaiosBarChange(themeColor.dark);
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {
                    className: "w-5 h-5 dark:text-white text-black"
                })
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-9 h-9",
            children: renderThemeChanger()
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeChanger);


/***/ }),

/***/ 6970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Documentation for component TwemojiParser
 * Comment: Used for parsing Twemoji emoji images instead of the system emojis.
 * -------------------------------------------------------------------------------
 */ function TweemojiParser() {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (document.readyState == "1") {
            twemoji.parse(document.body, {
                folder: "svg",
                ext: ".svg",
                callback: function(icon, options, variant) {
                    switch(icon){
                        case "2197":
                            return false;
                        case "2396":
                            return false;
                    }
                    return "".concat(options.base, options.size, "/", icon, options.ext);
                }
            });
        } else {
            twemoji.parse(document.body, {
                folder: "svg",
                ext: ".svg",
                callback: function(icon, options, variant) {
                    switch(icon){
                        case "2197":
                            return false;
                        case "2396":
                            return false;
                    }
                    return "".concat(options.base, options.size, "/", icon, options.ext);
                }
            });
        }
    });
}
/**
 * Documentation for component TwemojiHandler
 * Comment: Handling changing system emojis with Twemoji.
 * -------------------------------------------------------------------------------
 */ function TweemojiHandler() {
    TweemojiParser();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
            id: "tweemoji",
            src: "https://twemoji.maxcdn.com/v/latest/twemoji.min.js",
            strategy: "beforeInteractive"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweemojiHandler);


/***/ }),

/***/ 903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ UmamiTracking)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @version 0.1
 * Documentation for component UmamiTracking
 * Comment: Used for umami analytics. This component is used in Header component which is then passed to Header component.
 * -------------------------------------------------------------------------------
 */ const UmamiTracking = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
            id: "umami",
            strategy: "beforeInteractive",
            src: "https://zakopal-analytics.vercel.app/umami.js",
            "data-website-id": "0a8ccab4-4f92-4b5f-81dc-54fa915d3b08"
        })
    });
};


/***/ }),

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Schema)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);


const Schema = ({ schema  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
        strategy: "beforeInteractive",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    });
};


/***/ }),

/***/ 2622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KD": () => (/* binding */ SourceBlock),
/* harmony export */   "Qt": () => (/* binding */ SourceWrapper),
/* harmony export */   "aC": () => (/* binding */ SpaceY)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const SpaceY = ({ mt  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        "aria-hidden": "true",
        className: `spacer ${mt}`
    });
};
const SourceBlock = ({ icon , name , linkName , linkUrl , id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full flex flex-row",
            id: id,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "w-5 mr-2 text-zinc-600 dark:text-zinc-600 text-base justify-items-start flex flex-col",
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " text-left w-full grid grid-cols-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-zinc-900 dark:text-zinc-50 text-base",
                            children: name
                        }),
                        linkUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " italic text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-50 hover:text-zinc-900 transition-colors ease-in-out text-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: linkUrl,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "external",
                                        target: "_blank",
                                        className: "break-all",
                                        children: linkName
                                    })
                                })
                            })
                        }) : ""
                    ]
                })
            ]
        })
    });
};
const SourceWrapper = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-1 gap-y-5",
            children: children
        })
    });
};


/***/ })

};
;