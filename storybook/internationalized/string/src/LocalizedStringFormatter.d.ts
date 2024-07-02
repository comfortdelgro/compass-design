/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
import type { LocalizedStringDictionary } from './LocalizedStringDictionary';
export type Variables = Record<string, string | number | boolean> | undefined;
export type LocalizedString = string | ((args: Variables, formatter?: LocalizedStringFormatter<any, any>) => string);
type InternalString = string | (() => string);
/**
 * Formats localized strings from a LocalizedStringDictionary. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers for the locale.
 */
export declare class LocalizedStringFormatter<K extends string = string, T extends LocalizedString = string> {
    private locale;
    private strings;
    constructor(locale: string, strings: LocalizedStringDictionary<K, T>);
    /** Formats a localized string for the given key with the provided variables. */
    format(key: K, variables?: Variables): string;
    protected plural(count: number, options: Record<string, InternalString>, type?: Intl.PluralRuleType): string;
    protected number(value: number): string;
    protected select(options: Record<string, InternalString>, value: string): string;
}
export {};
