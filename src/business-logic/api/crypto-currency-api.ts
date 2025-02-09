import { apiClient } from "../client/api-client"
import { CryptoCurrency } from "../response-models/crypto-currency"
import { ENDPOINTS } from "../constants/endpoints"


export const cryptoCurrencyApi = {
    getCryptoCurrencies: async (page: number, itemsPerPage: number) => {
        const initialIndex = page ? (page - 1) * itemsPerPage : 0
        const finalIndex = itemsPerPage ? initialIndex + itemsPerPage : 20

        const queryParams = `?start=${initialIndex}&limit=${finalIndex}`
        return (await apiClient.get<CryptoCurrency[]>(`${ENDPOINTS.cryptoCurrencies}${queryParams}`)).data
    },
    filterPerPageCryptoCurrencies: async (page: number, itemsPerPage: number) => {
        const initialIndex = (page - 1) * itemsPerPage
        const finalIndex = initialIndex + itemsPerPage

        const queryParams = `?start=${initialIndex}&limit=${finalIndex}`
        return (await apiClient.get<CryptoCurrency[]>(`${ENDPOINTS.cryptoCurrencies}${queryParams}`)).data
    }
}
