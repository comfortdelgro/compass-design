export interface ToastItem {
    id: string;
    message: string;
    type: string;
}
export declare enum ToastType {
    DEFAULT = "DEFAULT",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}
type ToastState = ToastItem[];
declare const useToastService: () => {
    toasts: ToastState;
    showToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
};
export default useToastService;
