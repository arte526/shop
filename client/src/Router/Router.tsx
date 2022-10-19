import React, {FC} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {DEFAULT_PAGE, RoutesForAuthorized, RoutesForNotAuthorized} from './routes'


const Router: FC = () => {
    return (
        <Routes>
            {RoutesForNotAuthorized.map(({path, component: Component})=>{
                return <Route key={path} path={path} element={<Component/>}/>
            })}

            <Route
                path="*"
                element={<Navigate to={DEFAULT_PAGE} replace />}
            />
        </Routes>
    )
}

export default Router;