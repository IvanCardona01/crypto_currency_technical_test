import { useMutation } from '@tanstack/react-query';
import { cryptoCurrencyApi } from './../../api/crypto-currency-api';

export function useFilterCryptoCurrencies() {
    return useMutation({
        mutationFn: (data: { page: number, itemsPerPage: number }) => {
            return cryptoCurrencyApi.filterPerPageCryptoCurrencies(data.page, data.itemsPerPage);
        }
    });
}
