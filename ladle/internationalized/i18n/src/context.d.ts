/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import { ReactNode } from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export interface I18nProviderProps {
    /** Contents that should have the locale applied. */
    children: ReactNode;
    /** The locale to apply to the children. */
    locale?: string;
}
export interface Locale {
    /** The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale. */
    locale: string;
    /** The writing direction for the locale. */
    direction: Direction;
}
export type Direction = 'ltr' | 'rtl';
/**
 * Provides the locale for the application to all child components.
 */
export declare function I18nProvider(props: I18nProviderProps): JSX.Element;
/**
 * Returns the current locale and layout direction.
 */
export declare function useLocale(): Locale;
/**
 * Returns the current browser/system language, and updates when it changes.
 */
export declare function useDefaultLocale(): Locale;
/**
 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */
export declare function isRTL(locale: string): boolean;
export declare function useIsSSR(): boolean;
/**
 * Gets the locale setting of the browser.
 */
export declare function getDefaultLocale(): Locale;
