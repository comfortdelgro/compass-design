export interface SnackbarItem {
    id: string;
    message: string;
    type: string;
}
export declare enum SnackbarType {
    DEFAULT = "DEFAULT",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING",
    ONGOING = "ONGOING",
    REMINDER = "REMINDER"
}
type SnackbarState = SnackbarItem[];
declare const useSnackbarService: () => {
    snackbars: SnackbarState;
    showSnackbar: (message: string, type?: SnackbarType) => void;
    removeSnackbar: (id: string) => void;
};
export default useSnackbarService;
