import GoodsPage from "../pages/goodsPage/goodsPage";
import TestPage from "../pages/testPage/testPage";

export const DEFAULT_PAGE = '/';
export const TEST_PAGE = '/testPage';


export const RoutesForAuthorized = [
    {
        path: DEFAULT_PAGE,
        component: GoodsPage
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
    }
];