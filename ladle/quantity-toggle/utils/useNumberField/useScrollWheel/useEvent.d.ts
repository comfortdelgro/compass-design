import { RefObject } from '../../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
export declare function useEvent<K extends keyof GlobalEventHandlersEventMap>(ref: RefObject<EventTarget>, event: K, handler: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
