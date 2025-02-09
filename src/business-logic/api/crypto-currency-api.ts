import { apiClient } from "../client/api-client"
import { CryptoCurrency } from "../response-models/crypto-currency"
import { ENDPOINTS } from "../constants/endpoints"


export const cryptoCurrencyApi = {
    getCryptoCurrencies: async (page: number, itemsPerPage: number) => {
        const startIndex = (page - 1) * itemsPerPage;
        const limit = itemsPerPage;

        const queryParams = `?start=${startIndex}&limit=${limit}`;
        return (await apiClient.get<CryptoCurrency[]>(`${ENDPOINTS.cryptoCurrencies}${queryParams}`)).data;
    },
    filterPerPageCryptoCurrencies: async (page: number, itemsPerPage: number) => {
        const initialIndex = (page - 1) * itemsPerPage
        const finalIndex = initialIndex + itemsPerPage

        const queryParams = `?start=${initialIndex}&limit=${finalIndex}`
        return (await apiClient.get<CryptoCurrency[]>(`${ENDPOINTS.cryptoCurrencies}${queryParams}`)).data
    }
}
