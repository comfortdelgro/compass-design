export interface UsePaginationHookProps {
    page?: number | undefined;
    initialPage: number;
    total: number;
    onChange?: ((page: number) => void) | undefined;
}
export declare const usePagination: ({ page, initialPage, total, onChange, }: UsePaginationHookProps) => {
    items: (number | "dots")[];
    active: number;
    setPage: (newPage: number) => void;
    next: () => void;
    previous: () => void;
    first: () => void;
    last: () => void;
};
