interface GlobalListeners {
    addGlobalListener<K extends keyof DocumentEventMap>(el: EventTarget, type: K, listener: (this: Document, ev: DocumentEventMap[K]) => void, options?: boolean | AddEventListenerOptions): void;
    addGlobalListener(el: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeGlobalListener<K extends keyof DocumentEventMap>(el: EventTarget, type: K, listener: (this: Document, ev: DocumentEventMap[K]) => void, options?: boolean | EventListenerOptions): void;
    removeGlobalListener(el: EventTarget, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    removeAllGlobalListeners(): void;
}
export declare function useGlobalListeners(): GlobalListeners;
export {};
