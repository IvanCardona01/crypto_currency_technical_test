import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CryptoListView from '../crypto-list-view';
import { useCryptoListViewModel } from '../view-model/crypto-list-view-model';
import { TEST_IDS } from '../../../common/constants';

// Mocks
jest.mock('../view-model/crypto-list-view-model');


// SafeAreaView mock
jest.mock('react-native-safe-area-context', () => ({
    SafeAreaView: 'SafeAreaView',
}));

// Paginator mock
jest.mock('../../../common/components/paginator', () => ({
    __esModule: true,
    default: 'Paginator'
}));

// Test data mock
const mockCryptoCurrency = {
    id: '1',
    name: 'Bitcoin',
    nameid: 'bitcoin',
    price_usd: '50000',
    rank: '1',
};

describe('CryptoListView', () => {
    // Basic mock configuration
    const mockViewModel = {
        useGetCryptoCurrencies: () => ({
            data: [mockCryptoCurrency],
            isLoading: false,
            error: null,
            refetch: jest.fn(),
            isFetching: false,
        }),
        page: 1,
        itemsPerPage: 10,
        optionsOfItemsPerPage: [10, 20, 50],
        setPage: jest.fn(),
        setItemsPerPage: jest.fn(),
        isSelectorVisible: false,
        setIsSelectorVisible: jest.fn(),
        navigateToDetail: jest.fn(),
    };

    const mockUseCryptoListViewModel = useCryptoListViewModel as jest.MockedFunction<typeof useCryptoListViewModel>;
    mockUseCryptoListViewModel.mockReturnValue(mockViewModel);

    beforeEach(() => {
        mockUseCryptoListViewModel.mockReturnValue(mockViewModel);
    });

    it('renders loading state', () => {
        mockUseCryptoListViewModel.mockReturnValue({
            ...mockViewModel,
            useGetCryptoCurrencies: () => ({
                isLoading: true,
                data: null,
                error: null,
                refetch: jest.fn(),
                isFetching: false,
            }),
        });

        const { getByTestId } = render(<CryptoListView />);
        expect(getByTestId(TEST_IDS.LOADING_INDICATOR)).toBeTruthy();
    });

    it('renders error state', () => {
        const errorMessage = 'Loading error';
        mockUseCryptoListViewModel.mockReturnValue({
            ...mockViewModel,
            useGetCryptoCurrencies: () => ({
                isLoading: false,
                data: null,
                error: new Error(errorMessage),
                refetch: jest.fn(),
                isFetching: false,
            }),
        });

        const { getByText } = render(<CryptoListView />);
        expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
    });

    it('renders cryptocurrency list', () => {
        const { getByText } = render(<CryptoListView />);
        expect(getByText('Bitcoin')).toBeTruthy();
        expect(getByText('Price in USD: $50000')).toBeTruthy();
        expect(getByText('Ranking: 1')).toBeTruthy();
    });

    it('handles navigation to detail', () => {
        const { getByText } = render(<CryptoListView />);
        fireEvent.press(getByText('See Detail'));
        expect(mockViewModel.navigateToDetail).toHaveBeenCalledWith(mockCryptoCurrency);
    });

    it('handles items per page change', async () => {
        const { getByText } = render(<CryptoListView />);
        fireEvent.press(getByText('10'));
        expect(mockViewModel.setIsSelectorVisible).toHaveBeenCalledWith(true);
    });

    it('handles list refresh', async () => {
        const mockRefetch = jest.fn();
        mockUseCryptoListViewModel.mockReturnValue({
            ...mockViewModel,
            useGetCryptoCurrencies: () => ({
                data: [mockCryptoCurrency],
                isLoading: false,
                error: null,
                refetch: mockRefetch,
                isFetching: false,
            }),
        });

        const { getByTestId } = render(<CryptoListView />);
        const flatList = getByTestId(TEST_IDS.CRYPTO_LIST);

        await waitFor(() => {
            fireEvent(flatList, 'refresh');
        });

        expect(mockRefetch).toHaveBeenCalled();
    });
});