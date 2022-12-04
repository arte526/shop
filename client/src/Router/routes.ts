import DefaultPage from "../pages/defaultPage/defaultPage";
import ActivationPage from "../pages/successActivation/ActivationPage";
import TestPage from "../pages/testPage/testPage";
import LaptopsPage from "../pages/laptopsPage/laptopsPage";

export const DEFAULT_PAGE = '/';
export const TEST_PAGE = '/testPage';
export const ACTIVATION = '/activation';
export const LAPTOPSPAGE = '/laptops';

export const RoutesForAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: DefaultPage
    },
    {
        path: ACTIVATION,
        component: ActivationPage
    },
    {
        path: LAPTOPSPAGE,
        component: LaptopsPage,
    }
];
export const RoutesForNotAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: DefaultPage
    },
    {
        path: TEST_PAGE,
        component: TestPage
    },
    {
        path: ACTIVATION,
        component: ActivationPage
    },
    {
        path: LAPTOPSPAGE,
        component: LaptopsPage,
    }
];