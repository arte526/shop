import DefaultPage from "../pages/defaultPage/defaultPage";
import ActivationPage from "../pages/successActivation/ActivationPage";
import TestPage from "../pages/testPage/testPage";
// import GoodsPage from "../pages/goodsPage/goodsPage";

export const DEFAULT_PAGE = '/';
export const TEST_PAGE = '/testPage';
export const ACTIVATION = '/activation'


export const RoutesForAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: DefaultPage
    },
    {
        path: ACTIVATION,
        component: ActivationPage
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
    }
];