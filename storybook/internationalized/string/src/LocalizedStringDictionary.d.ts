/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import type { LocalizedString } from './LocalizedStringFormatter';
export type LocalizedStrings<K extends string, T extends LocalizedString> = {
    [lang: string]: Record<K, T>;
};
/**
 * Stores a mapping of localized strings. Can be used to find the
 * closest available string for a given locale.
 */
export declare class LocalizedStringDictionary<K extends string = string, T extends LocalizedString = string> {
    private strings;
    private defaultLocale;
    constructor(messages: LocalizedStrings<K, T>, defaultLocale?: string);
    /** Returns a localized string for the given key and locale. */
    getStringForLocale(key: K, locale: string): T;
}
