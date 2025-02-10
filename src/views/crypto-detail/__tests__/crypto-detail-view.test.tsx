import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { View } from 'react-native';
import CryptoDetailView from '../crypto-detail-view';
import { useCryptoDetailViewModel } from '../view-model/crypto-detail-view-model';
import { useRoute } from '@react-navigation/native';
import { TEST_IDS } from '../../../common/constants';

// Mocks
const mockUseRoute = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useRoute: () => mockUseRoute(),
    createNavigationContainerRef: () => ({
        current: null,
        navigate: jest.fn(),
    })
}));

jest.mock('../view-model/crypto-detail-view-model');

// SafeAreaView mock
jest.mock('react-native-safe-area-context', () => ({
    SafeAreaView: 'SafeAreaView',
}));

jest.mock('../../../assets/icons', () => ({
    Icons: {
        BackIcon: () => 'BackIcon'
    }
}));

describe('CryptoDetailView', () => {
    const mockGoBack = jest.fn();
    const mockUseCryptoDetailViewModel = useCryptoDetailViewModel as jest.MockedFunction<typeof useCryptoDetailViewModel>;

    beforeEach(() => {
        mockUseCryptoDetailViewModel.mockReturnValue({
            goBack: mockGoBack
        });
        mockUseRoute.mockReturnValue({
            params: {
                cryptocurrencyInfo: JSON.stringify({
                    id: '1',
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price_usd: '50000',
                    percent_change_24h: '5.25',
                    market_cap_usd: '1000000000',
                    volume24: '500000000',
                    csupply: '19000000'
                })
            }
        });
    });

    it('renders cryptocurrency details correctly', () => {
        const { getByText } = render(<CryptoDetailView />);

        expect(getByText('Bitcoin')).toBeTruthy();
        expect(getByText('$50000')).toBeTruthy();
        expect(getByText('5.25%')).toBeTruthy();
        expect(getByText('$1000000000')).toBeTruthy();
        expect(getByText('$500000000')).toBeTruthy();
        expect(getByText('19000000 BTC')).toBeTruthy();
    });

    it('handles back button press', () => {
        const { getByTestId } = render(<CryptoDetailView />);

        fireEvent.press(getByTestId(TEST_IDS.BACK_BUTTON));
        expect(mockGoBack).toHaveBeenCalled();
    });

    it('displays positive percentage change in green', () => {
        const { getByText } = render(<CryptoDetailView />);
        const percentageElement = getByText('5.25%');

        expect(percentageElement.props.style).toContainEqual(
            expect.objectContaining({ color: 'green' })
        );
    });

    it('displays negative percentage change in red', () => {
        mockUseRoute.mockReturnValue({
            params: {
                cryptocurrencyInfo: JSON.stringify({
                    id: '1',
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price_usd: '50000',
                    percent_change_24h: '-5.25',
                    market_cap_usd: '1000000000',
                    volume24: '500000000',
                    csupply: '19000000'
                })
            }
        });

        const { getByText } = render(<CryptoDetailView />);
        const percentageElement = getByText('-5.25%');

        expect(percentageElement.props.style).toContainEqual(
            expect.objectContaining({ color: 'red' })
        );
    });
});