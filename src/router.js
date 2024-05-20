import {createBrowserRouter, Navigate} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CatalogPage} from "./pages/CatalogPage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'home'}/>
            },
            {
                path: '/home', element: <HomePage/>
            },
            {
                path: '/catalog', element: <CatalogPage/>
            },
            {
                path: '/favorites', element: <FavoritesPage/>
            }
        ]
    }
]);

export {
    router
}