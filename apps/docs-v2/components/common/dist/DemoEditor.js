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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var prism_1 = require("@comfortdelgro/markdown/prism");
var react_compass_1 = require("@comfortdelgro/react-compass");
var MarkdownElement_1 = require("components/common/MarkdownElement");
var React = require("react");
var react_simple_code_editor_1 = require("react-simple-code-editor");
var CodeCopy_1 = require("utils/CodeCopy");
var StyledMarkdownElement = react_compass_1.styled(MarkdownElement_1["default"], {
    backgroundColor: 'red',
    '& .scrollContainer': {
        maxHeight: 'min(68vh, 1000px)',
        overflow: 'auto',
        backgroundColor: '#323130',
        marginTop: -1,
        border: "1px solid $divider",
        colorScheme: 'dark',
        '&:hover': {
            boxShadow: "0 0 0 3px $gray50"
        },
        '&:focus-within': {
            boxShadow: "0 0 0 2px $gray60"
        }
    },
    '& pre': {
        maxWidth: 'initial',
        maxHeight: 'initial'
    }
});
var StyledSimpleCodeEditor = react_compass_1.styled(react_simple_code_editor_1["default"], {
    fontSize: 12,
    fontWeight: 400,
    WebkitFontSmoothing: 'subpixel-antialiased',
    color: '#f8f8f2',
    direction: 'ltr /*! @noflip */',
    float: 'left',
    minWidth: '100%',
    '& textarea': {
        outline: 0,
        fontFamily: '$mono !important',
        letterSpacing: '0.148px !important',
        wordWrap: 'normal !important',
        wordBreak: 'normal !important',
        fontWeight: '400 !important',
        whiteSpace: 'pre !important',
        lineHeight: '19.75px !important'
    },
    '& > textarea, & > pre': {
        whiteSpace: 'pre !important'
    }
});
function DemoEditor(props) {
    var language = props.language, value = props.value, onChange = props.onChange, copyButtonProps = props.copyButtonProps, children = props.children, id = props.id, other = __rest(props, ["language", "value", "onChange", "copyButtonProps", "children", "id"]);
    var wrapperRef = React.useRef(null);
    var enterRef = React.useRef(null);
    var handlers = CodeCopy_1.useCodeCopy();
    return (React.createElement(StyledMarkdownElement, __assign({ ref: wrapperRef, onKeyDown: function (event) {
            if (event.key === 'Tab') {
                return;
            }
            if (event.key === 'Escape') {
                enterRef.current.focus();
                return;
            }
            if (event.key === 'Enter') {
                var textarea = wrapperRef.current.querySelector('textarea');
                if (textarea !== document.activeElement) {
                    event.preventDefault();
                    event.stopPropagation();
                    textarea.focus();
                }
            }
        } }, other),
        React.createElement("div", __assign({ className: 'MuiCode-root' }, handlers),
            React.createElement("div", { className: 'scrollContainer' },
                React.createElement(StyledSimpleCodeEditor, { highlight: function (code) {
                        return "<code class=\"language-" + language + "\">" + prism_1["default"](code, language) + "</code>";
                    }, id: id, value: value, onValueChange: onChange })),
            React.createElement(react_compass_1.Box, { ref: enterRef, tabIndex: 0, css: {
                    position: 'absolute',
                    top: '$1',
                    padding: '$1',
                    outline: 0,
                    left: '50%',
                    border: '1px solid',
                    borderColor: '$6B89F7',
                    backgroundColor: '$91A7F9',
                    color: '#FFF',
                    transform: 'translateX(-50%)',
                    borderRadius: '6px',
                    fontSize: 13,
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    '&:not(:focus)': {
                        top: 0,
                        opacity: 0,
                        pointerEvents: 'none'
                    },
                    '> kbd': {
                        padding: '$1',
                        backgroundColor: '$cdgBlue60',
                        fontSize: 11,
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: '$cdgBlue40'
                    }
                }, dangerouslySetInnerHTML: {
                    __html: 'Press <kbd>Enter</kbd> to start editing'
                } }),
            children)));
}
exports["default"] = DemoEditor;
