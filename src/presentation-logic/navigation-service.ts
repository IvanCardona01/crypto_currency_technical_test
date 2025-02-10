import { createNavigationContainerRef } from '@react-navigation/native';
import { AppRoute } from '../routes';

export const navigationRef = createNavigationContainerRef<any>();

export const NavigationService = {
    navigate: (name: AppRoute, params?: any) => {
        if (navigationRef.isReady()) {
            navigationRef.navigate(name, params);
        }
    },

    goBack: () => {
        if (navigationRef.isReady() && navigationRef.canGoBack()) {
            navigationRef.goBack();
        }
    }
};