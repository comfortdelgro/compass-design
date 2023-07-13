"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.reportWebVitals = void 0;
var react_compass_1 = require("@comfortdelgro/react-compass");
var preflight_1 = require("@comfortdelgro/react-compass/preflight");
require("components/common/bootstrap");
var index_1 = require("constants/index");
var Theme_1 = require("contexts/Theme");
var head_1 = require("next/head");
var React = require("react");
var CodeCopy_1 = require("utils/CodeCopy");
var useLazyCSS_1 = require("utils/useLazyCSS");
var AppHeader_1 = require("components/layouts/AppHeader");
require("./global.css");
var reloadInterval;
// Avoid infinite loop when "Upload on reload" is set in the Chrome sw dev tools.
function lazyReload() {
    clearInterval(reloadInterval);
    reloadInterval = setInterval(function () {
        if (document.hasFocus()) {
            window.location.reload();
        }
    }, 100);
}
// Inspired by
function forcePageReload(registration) {
    // console.log('already controlled?', Boolean(navigator.serviceWorker.controller));
    if (!navigator.serviceWorker.controller) {
        // The window client isn't currently controlled so it's a new service
        // worker that will activate immediately.
        return;
    }
    // console.log('registration waiting?', Boolean(registration.waiting));
    if (registration.waiting) {
        // SW is waiting to activate. Can occur if multiple clients open and
        // one of the clients is refreshed.
        registration.waiting.postMessage('skipWaiting');
        return;
    }
    function listenInstalledStateChange() {
        registration.installing.addEventListener('statechange', function (event) {
            // console.log('statechange', event.target.state);
            if (event.target.state === 'installed' && registration.waiting) {
                // A new service worker is available, inform the user
                registration.waiting.postMessage('skipWaiting');
            }
            else if (event.target.state === 'activated') {
                // Force the control of the page by the activated service worker.
                lazyReload();
            }
        });
    }
    if (registration.installing) {
        listenInstalledStateChange();
        return;
    }
    // We are currently controlled so a new SW may be found...
    // Add a listener in case a new SW is found,
    registration.addEventListener('updatefound', listenInstalledStateChange);
}
function registerServiceWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var registration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('serviceWorker' in navigator &&
                        process.env.NODE_ENV === 'production' &&
                        window.location.host.indexOf('mui.com') !== -1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.serviceWorker.register('/sw.js')
                        // Force the page reload for users.
                    ];
                case 1:
                    registration = _a.sent();
                    // Force the page reload for users.
                    forcePageReload(registration);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
var dependenciesLoaded = false;
function loadDependencies() {
    if (dependenciesLoaded) {
        return;
    }
    dependenciesLoaded = true;
}
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-console
    console.log("%c\n    Tip: you can access the documentation `theme` object directly in the console.\n", 'font-family:monospace;color:#1976d2;font-size:12px;');
}
function AppWrapper(props) {
    var children = props.children;
    var _a = React.useState(index_1.ETheme.Light), mode = _a[0], setMode = _a[1];
    React.useEffect(function () {
        loadDependencies();
        registerServiceWorker();
    }, []);
    useLazyCSS_1["default"]('/static/styles/prism-okaidia.css', '#prismjs');
    var handleChangeThemeMode = function () {
        setMode(mode === index_1.ETheme.Light ? index_1.ETheme.Dark : index_1.ETheme.Light);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("meta", { name: 'viewport', content: 'initial-scale=1, width=device-width' })),
        React.createElement(Theme_1["default"].Provider, { value: mode },
            React.createElement(react_compass_1.ThemeProvider, { changeBy: mode },
                React.createElement(CodeCopy_1.CodeCopyProvider, null,
                    React.createElement(preflight_1["default"], null),
                    React.createElement(AppHeader_1["default"], { handleChangeThemeMode: handleChangeThemeMode }),
                    children)))));
}
function MyApp(props) {
    var _a;
    var Component = props.Component, pageProps = props.pageProps;
    var getLayout = (_a = Component.getLayout) !== null && _a !== void 0 ? _a : (function (page) { return page; });
    return (React.createElement(AppWrapper, { pageProps: pageProps }, getLayout(React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;
MyApp.getInitialProps = function (_a) {
    var ctx = _a.ctx, Component = _a.Component;
    return __awaiter(void 0, void 0, void 0, function () {
        var pageProps;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pageProps = {};
                    if (!Component.getInitialProps) return [3 /*break*/, 2];
                    return [4 /*yield*/, Component.getInitialProps(ctx)];
                case 1:
                    pageProps = _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/, {
                        pageProps: __assign({ userLanguage: ctx.query.userLanguage || 'en' }, pageProps)
                    }];
            }
        });
    });
};
// Track fraction of actual events to prevent exceeding event quota.
// Filter sessions instead of individual events so that we can track multiple metrics per device.
// See https://github.com/GoogleChromeLabs/web-vitals-report to use this data
var disableWebVitalsReporting = Math.random() > 0.0001;
function reportWebVitals(_a) {
    var id = _a.id, name = _a.name, label = _a.label, delta = _a.delta, value = _a.value;
    if (disableWebVitalsReporting) {
        return;
    }
}
exports.reportWebVitals = reportWebVitals;
