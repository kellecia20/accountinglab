import {Route, Routes} from "react-router-dom";

import ChartOfAccount from "./views/ChartOfAccount";
import JournalEntry from "./views/JournalEntry";

function AppRoutes() {
    return (
        <Routes>
             <Route path="/chart-of-account" element={<ChartOfAccount />} />
             <Route path="/journal-entry" element={<JournalEntry />} />
        </Routes>
    );
}

export default AppRoutes;

