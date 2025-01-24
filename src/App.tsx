import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import OverviewPage from './components/pages/Overview/OverviewPage';
import PersonalPage from './components/pages/Personal/PersonalPage';
import FIVPage from './components/pages/FIV/FIVPage';
import AccountPage from './components/pages/Account/AccountPage';

function App() {
    return (
        <Router>
            <div>
                <TopNavbar />
                <Sidebar />
                <main>
                        <Routes>
                            <Route path="/overview" element={<OverviewPage />} />
                            <Route path="/personal" element={<PersonalPage />} />
                            <Route path="/fiv" element={<FIVPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            {/* You can add a default route or '404' here as well */}
                        </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
