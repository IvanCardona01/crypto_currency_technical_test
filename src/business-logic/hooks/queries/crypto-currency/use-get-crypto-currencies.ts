import { useQuery } from "@tanstack/react-query";
import { cryptoCurrencyApi } from "../../../api/crypto-currency-api";
import { QUERY_KEYS } from "../../../constants/query-keys";

export function useGetCryptoCurrencies(page: number, itemsPerPage: number) {
    return useQuery({
        queryKey: [QUERY_KEYS.cryptoCurrencies],
        queryFn: () => cryptoCurrencyApi.getCryptoCurrencies(page, itemsPerPage)
    })
}
