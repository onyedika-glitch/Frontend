import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EngagePage from '../pages/EngagePage';
import AnotherPage from '../pages/AnotherPage'; // Import the new page

import MainLayout from '../Layout/MainLayout';
import Dashboard from '../pages/Dashboard';

const App: React.FC = () => {
    return (
        <Router>
    <Routes>
        <Route path="/" element={<EngagePage />} />
        <Route path="/another" element={<AnotherPage />} /> {/* Define the route for the new page */}
    </Routes>
    <MainLayout>
        <Dashboard />
    </MainLayout>
</Router>
);
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement | null);
root.render(<App />);
export default App;
