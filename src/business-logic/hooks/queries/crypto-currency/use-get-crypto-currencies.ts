import { useQuery } from "@tanstack/react-query";
import { cryptoCurrencyApi } from "../../../api/crypto-currency-api";
import { QUERY_KEYS } from "../../../constants/query-keys";

export function useGetCryptoCurrencies() {
    return useQuery({
        queryKey: [QUERY_KEYS.cryptoCurrencies],
        queryFn: cryptoCurrencyApi.getCryptoCurrencies
    })
}
