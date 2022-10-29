"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 6125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ RozdeleniKolobezek),
/* harmony export */   "CT": () => (/* binding */ LevTable),
/* harmony export */   "CV": () => (/* binding */ PostFooterNavigation),
/* harmony export */   "F_": () => (/* binding */ ListNavigationWrapper),
/* harmony export */   "Oe": () => (/* binding */ VideoImageLink),
/* harmony export */   "Pf": () => (/* binding */ Shows),
/* harmony export */   "SO": () => (/* binding */ Post),
/* harmony export */   "Tk": () => (/* binding */ Citation),
/* harmony export */   "VY": () => (/* binding */ DefinedCaption),
/* harmony export */   "dm": () => (/* binding */ TrolejbusyVideoGallery),
/* harmony export */   "nR": () => (/* binding */ VlakVideoGallery),
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
const VideoImageLink = ({ children , imageUrl , alt , linkUrl , rel , target  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative video-image-link flex flex-col items-center justify-center mx-auto rounded-xl ml-[-3vw] w-[calc(100%+6vw] h-80 group cursor-pointer my-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: linkUrl,
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
                        fill: true,
                        className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                        alt: alt
                    })
                })
            ]
        })
    });
};

const Fact = ({ children , color , header , description , copyToClipboard , enableCopyToClipboard  })=>{
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
const PostFooterNavigation = ({ hrefNext , hrefPrevious , previous , next , previousEnabled , nextEnabled  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full grid grid-cols-2 mt-14",
            children: [
                previousEnabled == "true" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full justify-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-left h-10 w-fit",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: hrefPrevious,
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
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-right h-10 w-fit ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: hrefNext,
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
                className: "internal",
                children: text
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
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=73x5TA9vCbU",
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
                                        src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover",
                                        alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "1. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=y574VfBqUMM",
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
                                        src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover",
                                        alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "2. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=gqM-kkwqOQI",
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
                                        src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover",
                                        alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5",
                            children: "3. č\xe1st"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=61DuiVpZlrI",
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
                                        src: "/assets/images/trolejbus/trolejbusy-v-ceske-a-slovenske-republice.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:md:animate-breathe group-hover:saturate-100 transition-all ease-in-out object-cover",
                                        alt: "Trolejbusy v Česk\xe9 a Slovensk\xe9 republice 1/4"
                                    })
                                })
                            ]
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
const Shows = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "https://fullycharged.show/",
                        rel: "external",
                        target: "_blank",
                        className: "internal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "rounded-xl z-[1]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/assets/images/misc/fully-charged-show.svg",
                                fill: true,
                                className: "rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-[#f7f71c] !p-5 object-contain",
                                alt: "Fully Charged Show"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "https://insideevs.com/",
                        rel: "external",
                        target: "_blank",
                        className: "internal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "rounded-xl z-[1]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/assets/images/misc/inside-ev.webp",
                                fill: true,
                                className: "rounded-lg group-hover:md:animate-breathe transition-all ease-in-out bg-white !p-5 object-contain",
                                alt: "Inside EV's"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "https://micromobility.io/",
                        rel: "external",
                        target: "_blank",
                        className: "internal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "rounded-xl z-[1]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/assets/images/misc/micromobility.webp",
                                fill: true,
                                className: "rounded-lg group-hover:md:animate-breathe transition-all ease-in-out object-contain",
                                alt: "Micromobility"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer hover:opacity-50 transition-all ease-in-out",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "https://thedriven.io/",
                        rel: "external",
                        target: "_blank",
                        className: "internal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "rounded-xl z-[1]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/assets/images/misc/the-driven.webp",
                                fill: true,
                                className: "rounded-lg group-hover:md:animate-breathe transition-all ease-in-out !p-5 bg-white object-contain",
                                alt: "The Driven Podcast"
                            })
                        })
                    })
                })
            ]
        })
    });
};
const VlakVideoGallery = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative grid grid-cols-1 md:grid-cols-2 w-full gap-x-3 gap-y-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=dC1Ucwl8LHs",
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
                                        src: "/assets/images/vlak/video-elektrizace-trati-csd.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                                        alt: "Elektrizace trat\xed ČSD"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center",
                            children: "Elektrizace trat\xed ČSD"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=EOdATLzRGHc",
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
                                        src: "/assets/images/vlak/video-tgv-speed-record.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                                        alt: "TGV speed record 574,8 km/h"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center",
                            children: "TGV speed record 574,8 km/h"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=voIpxChh7nE&t",
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
                                        src: "/assets/images/vlak/video-lokomotiva-skoda-rady-363.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                                        alt: "Lokomotiva Škoda řady 363 (Eso) dokument"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center",
                            children: "Lokomotiva Škoda řady 363 (Eso) dokument"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=rpzx1CzwccY",
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
                                        src: "/assets/images/vlak/video-trisystemova-lokomotiva-emil-zatopek.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                                        alt: "Tř\xedsyst\xe9mov\xe1 lokomotiva Emil Z\xe1topek"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center",
                            children: "Tř\xedsyst\xe9mov\xe1 lokomotiva Emil Z\xe1topek"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative flex flex-col w-80 h-80 items-center justify-center cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "https://www.youtube.com/watch?v=-2-bFSuukOM",
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
                                        src: "/assets/images/vlak/video-sen-o-rychlovlaku.webp",
                                        fill: true,
                                        className: "rounded-lg opacity-60 saturate-0 group-hover:saturate-100 group-hover:md:animate-breathe transition-all ease-in-out object-cover",
                                        alt: "Sen o rychlovlaku"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "relative text-zinc-700 dark:text-zinc-200 text-2xl font-bold pt-5 -mt-5 text-center",
                            children: "Sen o rychlovlaku"
                        })
                    ]
                })
            ]
        })
    });
};
const LevTable = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            class: "overflow-x-auto relative rounded-lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                class: "w-full text-sm text-left text-zinc-500 dark:text-zinc-400",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        class: "text-sm text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300 bg-zinc-200",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Kategorie"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Maxim\xe1ln\xed konstrukčn\xed rychlost (km/h)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Maxim\xe1ln\xed celkov\xe1 v\xe1ha (kg)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Maxim\xe1ln\xed v\xfdkon"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Maxim\xe1ln\xed rozměry: l x w x h (m)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    scope: "col",
                                    class: "py-3 px-6",
                                    children: "Počet přepravovan\xfdch osob"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                class: "dark:bg-zinc-800 border-zinc-700 bg-zinc-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "row",
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1a. elektrokolo s ped\xe1ly < 55 kg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "≤ 25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "250 W"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: [
                                            "2 kola: 3 x 0,75 x 2 / ",
                                            "> 2 kola:3 x 1 x 2"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1 řidič + maxim\xe1lně 2 spolujezdci"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                class: "dark:bg-zinc-800 border-zinc-700 bg-zinc-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "row",
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1b. všechna LEV jin\xe1 než 1a."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "≤ 25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "140"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "2 x 0,75 x 1,5"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1 řidič"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                class: "dark:bg-zinc-800 border-zinc-700 bg-zinc-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "row",
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "2a. Přeprava zbož\xed > 55kg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "≤ 25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "556"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "3 x 1 x 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1 řidič"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                class: "dark:bg-zinc-800 border-zinc-700 bg-zinc-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        scope: "row",
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "2b.  Přeprava osob > 55kg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "≤ 25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "556"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "3 x 1 x 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        class: "py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-zinc-50",
                                        children: "1 řidič + maxim\xe1lně 8 spolujezdců"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const DefinedCaption = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400 pb-4 text-center italic w-full",
        children: children
    });
};
const RozdeleniKolobezek = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                className: "rounded-xl z-[1]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: "/assets/images/lev/mestska-kolobezka.webp",
                                    fill: true,
                                    className: "rounded-lg object-cover",
                                    alt: "Městsk\xe1 koloběžka"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefinedCaption, {
                            children: [
                                "Obr. 11 Městsk\xe1",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "elektrokoloběžka\xa0",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Citation, {
                                    href: "/lev/zdroje#alza-elektricke-kolobezky",
                                    children: "[25]"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                className: "rounded-xl z-[1]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: "/assets/images/lev/terenni-kolobezka.webp",
                                    fill: true,
                                    className: "rounded-lg object-cover",
                                    alt: "Městsk\xe1 koloběžka"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefinedCaption, {
                            children: [
                                "Obr. 12 Ter\xe9nn\xed",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "elektrokoloběžka\xa0",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Citation, {
                                    href: "/lev/zdroje#alza-elektricke-kolobezky",
                                    children: "[25]"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col w-[230px] h-[350px] relative rounded-lg items-center justify-center bg-black",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                className: "rounded-xl z-[1]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: "/assets/images/lev/chopper-kolobezka.webp",
                                    fill: true,
                                    className: "rounded-lg object-cover",
                                    alt: "Městsk\xe1 koloběžka"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DefinedCaption, {
                            children: [
                                "Obr. 13 Chopper",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "elektrokoloběžka\xa0",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Citation, {
                                    href: "/lev/zdroje#amazon-chopper",
                                    children: "[26]"
                                }),
                                "."
                            ]
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