import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare enum ETheme {
    Light = "light",
    Dark = "dark"
}
type ColourMode = ETheme | undefined;
type ThemeProviderProps = {
    changeBy?: unknown | undefined;
    children?: React.ReactNode;
    isCSR?: boolean;
};
type ProviderType = {
    colorMode: ColourMode;
    applyColorMode?: (theme: ETheme) => void;
};
export declare const ColourModeContext: React.Context<ProviderType>;
declare const ThemeStaticProvider: ({ children, changeBy, isCSR, }: ThemeProviderProps) => JSX.Element;
export default ThemeStaticProvider;
