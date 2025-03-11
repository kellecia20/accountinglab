import {Route, Routes} from "react-router-dom";

import ChartOfAccount from "./views/ChartOfAccount";

function AppRoutes() {
    return (
        <Routes>
             <Route path="/chart-of-account" element={<ChartOfAccount />} />
        </Routes>
    );
}

export default AppRoutes;

