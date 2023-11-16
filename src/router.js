import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes'

const Router = () => {
    const pageRoutes = ROUTES.map(({ path, element, title }) => {
        return <Route key={title} path={path} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>
}

export default Router;