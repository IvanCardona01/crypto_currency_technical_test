import { create } from 'zustand';
import { CryptoCurrency } from '../../../business-logic/response-models/crypto-currency';
import { useGetCryptoCurrencies } from '../../../business-logic/hooks/queries/crypto-currency/use-get-crypto-currencies';
import { useFilterCryptoCurrencies } from '../../../business-logic/hooks/mutations/use-filter-crypto-currencies';

interface CryptoListState {
    page: number;
    itemsPerPage: number;
    optionsOfItemsPerPage: number[];
    setPage: (page: number) => Promise<void>;
    setItemsPerPage: (items: number) => Promise<void>;
    useGetCryptoCurrencies: () => {
        data: CryptoCurrency[] | undefined;
        isLoading: boolean;
        refetch: () => void;
        isFetching: boolean;
        error: Error | null;
    };
    isSelectorVisible: boolean;
    setIsSelectorVisible: (isSelectorVisible: boolean) => void;
}

export const useCryptoListViewModel = create<CryptoListState>((set, get) => ({
    page: 1,
    itemsPerPage: 20,
    optionsOfItemsPerPage: [10, 20, 50, 100],
    setPage: async (page: number) => {
        new Promise<void>((resolve) => {
            set({ page });
            resolve();
        })
    },
    setItemsPerPage: async (items: number) => {
        new Promise<void>((resolve) => {
            set({ itemsPerPage: items });
            resolve();
        })
    },
    useGetCryptoCurrencies: () => {
        const { data, isLoading, refetch, error, isFetching } = useGetCryptoCurrencies(get().page, get().itemsPerPage);
        return { data, isLoading, refetch, error, isFetching };
    },
    isSelectorVisible: false,
    setIsSelectorVisible: (isSelectorVisible: boolean) => set({ isSelectorVisible }),
}));