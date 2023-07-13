"use strict";
exports.__esModule = true;
var arrow_left_1 = require("@comfortdelgro/compass-icons/react/arrow-left");
var arrow_right_1 = require("@comfortdelgro/compass-icons/react/arrow-right");
var react_compass_1 = require("@comfortdelgro/react-compass");
var link_1 = require("next/link");
function orderedPages(pages, current) {
    if (current === void 0) { current = []; }
    return pages
        .reduce(function (items, item) {
        if (item.children && item.children.length > 1) {
            items = orderedPages(item.children, items);
        }
        else {
            items.push(item.children && item.children.length === 1 ? item.children[0] : item);
        }
        return items;
    }, current)
        .filter(function (page) {
        return page.inSideNav !== false && page.pathname.startsWith('/');
    });
}
function usePageNeighbours() {
    var _a, _b;
    var activePage = '/';
    var pages = [];
    var pageList = orderedPages(pages);
    var currentPageNum = pageList.indexOf(activePage);
    if (currentPageNum === -1) {
        return { prevPage: null, nextPage: null };
    }
    var prevPage = (_a = pageList[currentPageNum - 1]) !== null && _a !== void 0 ? _a : null;
    var nextPage = (_b = pageList[currentPageNum + 1]) !== null && _b !== void 0 ? _b : null;
    return { prevPage: prevPage, nextPage: nextPage };
}
function DocsAppFooter(props) {
    var _a = usePageNeighbours(), nextPage = _a.nextPage, prevPage = _a.prevPage;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_compass_1.Box, { css: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '$4 0',
                // borderTop: '1px solid #c4c4c4',
                marginTop: '$4'
            } },
            prevPage !== null ? (React.createElement(link_1["default"], { href: nextPage.pathname },
                React.createElement(react_compass_1.Button, { variant: 'ghost', leftIcon: React.createElement(arrow_left_1["default"], null) }, prevPage.title))) : (React.createElement("div", null)),
            nextPage !== null ? (React.createElement(link_1["default"], { href: nextPage.pathname },
                React.createElement(react_compass_1.Button, { variant: 'ghost', leftIcon: React.createElement(arrow_right_1["default"], null) }, nextPage.title))) : null)));
}
exports["default"] = DocsAppFooter;
