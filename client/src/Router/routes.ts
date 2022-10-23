import GoodsPage from "../pages/goodsPage/goodsPage";
import ActivationPage from "../pages/successActivation/ActivationPage";
import TestPage from "../pages/testPage/testPage";

export const DEFAULT_PAGE = '/';
export const TEST_PAGE = '/testPage';
export const ACTIVATION = '/activation'


export const RoutesForAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: GoodsPage
    },
    {
        path: ACTIVATION,
        component: ActivationPage
    }
];
export const RoutesForNotAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: GoodsPage
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