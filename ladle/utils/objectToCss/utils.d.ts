export declare const unitlessProps: {
    animationIterationCount: number;
    borderImageOutset: number;
    borderImageSlice: number;
    borderImageWidth: number;
    boxFlex: number;
    boxFlexGroup: number;
    boxOrdinalGroup: number;
    columnCount: number;
    columns: number;
    flex: number;
    flexGrow: number;
    flexPositive: number;
    flexShrink: number;
    flexNegative: number;
    flexOrder: number;
    gridRow: number;
    gridRowEnd: number;
    gridRowSpan: number;
    gridRowStart: number;
    gridColumn: number;
    gridColumnEnd: number;
    gridColumnSpan: number;
    gridColumnStart: number;
    msGridRow: number;
    msGridRowSpan: number;
    msGridColumn: number;
    msGridColumnSpan: number;
    fontWeight: number;
    lineHeight: number;
    opacity: number;
    order: number;
    orphans: number;
    tabSize: number;
    widows: number;
    zIndex: number;
    zoom: number;
    WebkitLineClamp: number;
    fillOpacity: number;
    floodOpacity: number;
    stopOpacity: number;
    strokeDasharray: number;
    strokeDashoffset: number;
    strokeMiterlimit: number;
    strokeOpacity: number;
    strokeWidth: number;
};
export declare const sizeProps: {
    blockSize: number;
    height: number;
    inlineSize: number;
    maxBlockSize: number;
    maxHeight: number;
    maxInlineSize: number;
    maxWidth: number;
    minBlockSize: number;
    minHeight: number;
    minInlineSize: number;
    minWidth: number;
    width: number;
};
export declare const splitBySpace: RegExp;
export declare const mqunit: RegExp;
export declare const comma: RegExp;
export declare const toStringOfObject: () => string;
export declare const split: (fn: any) => (data: any) => any;
export declare const toCamelCase: (value: string) => string;
export declare const toHyphenCase: (value: string) => string;
export declare const toCssString: (declarations: any, selectors: any, conditions: any) => string;
export declare const toResolvedSelectors: (parentSelectors: string[], nestedSelectors: string[]) => any[];
export declare const toSizingValue: (declarationName: string, declarationValue: string) => string;
export declare const toPolyfilledValue: {
    appearance: (d: any) => {
        WebkitAppearance: any;
        appearance: any;
    };
    backfaceVisibility: (d: any) => {
        WebkitBackfaceVisibility: any;
        backfaceVisibility: any;
    };
    backdropFilter: (d: any) => {
        WebkitBackdropFilter: any;
        backdropFilter: any;
    };
    backgroundClip: (d: any) => {
        WebkitBackgroundClip: any;
        backgroundClip: any;
    };
    boxDecorationBreak: (d: any) => {
        WebkitBoxDecorationBreak: any;
        boxDecorationBreak: any;
    };
    clipPath: (d: any) => {
        WebkitClipPath: any;
        clipPath: any;
    };
    content: (d: any) => {
        content: any;
    };
    hyphens: (d: any) => {
        WebkitHyphens: any;
        hyphens: any;
    };
    maskImage: (d: any) => {
        WebkitMaskImage: any;
        maskImage: any;
    };
    maskSize: (d: any) => {
        WebkitMaskSize: any;
        maskSize: any;
    };
    textSizeAdjust: (d: any) => {
        WebkitTextSizeAdjust: any;
        textSizeAdjust: any;
    };
    userSelect: (d: any) => {
        WebkitUserSelect: any;
        userSelect: any;
    };
    marginBlock: (data: any) => any;
    marginInline: (data: any) => any;
    maxSize: (data: any) => any;
    minSize: (data: any) => any;
    paddingBlock: (data: any) => any;
    paddingInline: (data: any) => any;
};
export declare const toResolvedMediaQueryRanges: (media: string) => string;
