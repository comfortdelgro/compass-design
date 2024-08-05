import { type RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { DrawerMobileProps, DrawerRef } from '../types';
/**
 *
 * Non-finite (eg: `1 / 0`, `Infinity`, `NaN`, `'10'`) and out-of-range [0-100] numbers will be filtered out.
 *
 * @returns an accending sorted array of snap points and capped at 4 elements.
 */
export declare const useSnapPoints: (drawerRef: RefObject<DrawerRef>, snapPoints: DrawerMobileProps['snapPoints'], availableHeight: number) => number[] | readonly [100];
