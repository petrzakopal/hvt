"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": () => (/* binding */ H2),
/* harmony export */   "H3": () => (/* binding */ H3),
/* harmony export */   "H4": () => (/* binding */ H4),
/* harmony export */   "H5": () => (/* binding */ H5),
/* harmony export */   "H6": () => (/* binding */ H6)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function getAnchor(text) {
    return text.toLowerCase().normalize("NFD")// .replace(/[\u0300-\u036f]/g, "") // same as following but in ascii probably
    .replace(/[^a-z0-9 ]/g, "").replace(/[ ]/g, "-");
}
const H2 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        id: anchor,
        children: children
    });
};
const H3 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        id: anchor,
        children: children
    });
};
const H4 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        id: anchor,
        children: children
    });
};
const H5 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        id: anchor,
        children: children
    });
};
const H6 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
        id: anchor,
        children: children
    });
};


/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CV": () => (/* binding */ PostFooterNavigation),
/* harmony export */   "F_": () => (/* binding */ ListNavigationWrapper),
/* harmony export */   "Oe": () => (/* binding */ VideoImageLink),
/* harmony export */   "SO": () => (/* binding */ Post),
/* harmony export */   "Tk": () => (/* binding */ Citation),
/* harmony export */   "dm": () => (/* binding */ TrolejbusyVideoGallery),
/* harmony export */   "xU": () => (/* binding */ ListNavigationItem),
/* harmony export */   "zr": () => (/* binding */ Fact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8871);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






const Post = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const highlight = async ()=>{
            prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAll(); // <--- prepare Prism
        };
        highlight(); // <--- call the async function
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "post w-full",
            children: children
        })
    });
};
const Citation = ({ children , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            className: "citation",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "",
                children: children
            })
        })
    });
};
const VideoImageLink = ({ children , imageUrl , alt , linkUrl , rel , target ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative video-image-link flex flex-col items-center justify-center mx-auto rounded-xl ml-[-3vw] w-[calc(100%+6vw] h-80 group cursor-pointer my-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: linkUrl,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                rel: rel,
                target: target,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, {
                        className: "relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                        className: "rounded-xl z-[1]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: imageUrl,
                            layout: "fill",
                            objectFit: "cover",
                            className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out",
                            alt: alt
                        })
                    })
                ]
            })
        })
    });
};

const Fact = ({ children , color , header , description , copyToClipboard , enableCopyToClipboard ,  })=>{
    let FactDesign;
    let ToolTipDesign;
    let ClipBoardContent;
    if (copyToClipboard == "content") {
        ClipBoardContent = children.props.children;
    } else {
        ClipBoardContent = copyToClipboard;
    }
    switch(color){
        case "primary":
            FactDesign = "bg-primary-accent/20 border-2 border-primary-accent";
            ToolTipDesign = "border-[1px] border-zinc-50";
            break;
        case "secondary":
            FactDesign = "bg-secondary-accent/20 border-2 border-secondary-accent";
            ToolTipDesign = "border-2 border-secondary-accent";
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `relative fact-wrapper grid grid-cols-1 gap-y-2 w-full text-zinc-900 dark:text-zinc-50 rounded-lg px-4 py-3 ${FactDesign}`,
            children: [
                enableCopyToClipboard == "true" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute right-4 top-2 cursor-pointer peer",
                            onClick: ()=>{
                                navigator.clipboard.writeText(ClipBoardContent);
                                console.log(ClipBoardContent);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.DocumentDuplicateIcon, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `absolute -right-2 top-8 hidden peer-hover:block z-10 py-2 px-3 text-sm font-medium text-zinc-50 dark:text-zinc-50 bg-zinc-900 dark:bg-zinc-900 rounded-lg shadow-sm opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ${ToolTipDesign} flex flex-col items-center justify-center z-[2] mt-1`,
                            children: "Kop\xedrovat"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "absolute w-6 h-6 z-[1] text-zinc-900 dark:text-zinc-900 fill-current stroke-zinc-50 right-5 top-7 hidden peer-hover:block opacity-0 peer-hover:opacity-100 transition-opacity duration-300",
                            width: "8",
                            height: "8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "12",
                                y: "-10",
                                width: "8",
                                height: "8",
                                transform: "rotate(45)"
                            })
                        })
                    ]
                }) : "",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "fact-header flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-2xl font-bold",
                            children: header
                        }),
                        description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm italic text-zinc-800 dark:text-zinc-200",
                                children: description
                            })
                        }) : ""
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fact-text",
                    children: children
                })
            ]
        })
    });
};
const PostFooterNavigation = ({ hrefNext , hrefPrevious , previous , next , previousEnabled , nextEnabled ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full grid grid-cols-2 mt-14",
            children: [
                previousEnabled == "true" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-left h-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: hrefPrevious,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50",
                                    children: previous
                                })
                            })
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                }),
                nextEnabled == "true" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-right h-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: hrefNext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-primary-accent/20 border-2 border-primary-accent px-4 py-2 rounded-lg text-zinc-900 dark:text-zinc-50",
                                    children: next
                                })
                            })
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                })
            ]
        })
    });
};
const ListNavigationWrapper = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            children: children
        })
    });
};
const ListNavigationItem = ({ href , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: href,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "internal",
                    children: text
                })
            })
        })
    });
};
const TrolejbusyVideoGallery = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=73x5TA9vCbU",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                rel: "external",
                                target: "_blank",
                                className: "internal",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, {
                                        className: "relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                        className: "rounded-xl z-[1]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice copy.webp",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out",
                                            alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "1. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=y574VfBqUMM",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                rel: "external",
                                target: "_blank",
                                className: "internal",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, {
                                        className: "relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                        className: "rounded-xl z-[1]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice copy.webp",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out",
                                            alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "2. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=gqM-kkwqOQI",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                rel: "external",
                                target: "_blank",
                                className: "internal",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, {
                                        className: "relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                        className: "rounded-xl z-[1]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice copy.webp",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out",
                                            alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "3. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=61DuiVpZlrI",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                rel: "external",
                                target: "_blank",
                                className: "internal",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PlayIcon, {
                                        className: "relative w-24 h-24 z-[2] text-zinc-700 dark:text-zinc-200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                        className: "rounded-xl z-[1]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice copy.webp",
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out",
                                            alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "4. č\xe1st"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;