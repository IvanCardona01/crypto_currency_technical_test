import { create } from 'zustand';
import { CryptoCurrency } from '../../../business-logic/response-models/crypto-currency';
import { useGetCryptoCurrencies } from '../../../business-logic/hooks/queries/crypto-currency/use-get-crypto-currencies';

interface CryptoListState {
    page: number;
    itemsPerPage: number;
    setPage: (page: number) => void;
    setItemsPerPage: (itemsPerPage: number) => void;
    useGetCryptoCurrencies: () => {
        data: CryptoCurrency[] | undefined;
        isLoading: boolean;
        refetch: () => void;
        error: Error | null;
    };
}

export const useCryptoListViewModel = create<CryptoListState>((set) => ({
    page: 1,
    itemsPerPage: 20,
    setPage: (page: number) => set({ page }),
    setItemsPerPage: (itemsPerPage: number) => set({ itemsPerPage }),
    useGetCryptoCurrencies: () => {
        const { data, isLoading, refetch, error } = useGetCryptoCurrencies();
        return { data, isLoading, refetch, error };
    }
}));