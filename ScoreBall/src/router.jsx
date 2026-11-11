
import { Route, Routes, BrowserRouter } from 'reacter-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';

function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Form />} path="/cadastro" />

        </Routes>
        </BrowserRouter>
    )
}
export default Router;