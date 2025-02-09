import { apiClient } from "../client/api-client"
import { CryptoCurrency } from "../response-models/crypto-currency"
import { ENDPOINTS } from "../constants/endpoints"


export const cryptoCurrencyApi = {
    getCryptoCurrencies: async (page: number, itemsPerPage: number) => {
        const startIndex = (page - 1) * itemsPerPage;
        const limit = itemsPerPage;

        const queryParams = `?start=${startIndex}&limit=${limit}`;
        return (await apiClient.get<CryptoCurrency[]>(`${ENDPOINTS.cryptoCurrencies}${queryParams}`)).data;
    }
}
