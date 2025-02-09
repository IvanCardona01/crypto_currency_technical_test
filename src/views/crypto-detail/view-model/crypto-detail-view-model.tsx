import { create } from 'zustand';
import { NavigationService } from '../../../presentation-logic/navigation-service';

interface CryptoDetailState {
    goBack: () => void;
}

export const useCryptoDetailViewModel = create<CryptoDetailState>((set) => ({
    goBack: () => NavigationService.goBack(),
}));