import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AIESGAssistantPage from './pages/AIESGAssistantPage.jsx';
import ESGDataInputPage from './pages/ESGDataInputPage.jsx';
import GenerateReportPage from './pages/GenerateReportPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="dashboard-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/ai-assistant" element={<AIESGAssistantPage />} />
              <Route path="/data-input" element={<ESGDataInputPage />} />
              <Route path="/generate-report" element={<GenerateReportPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <h2 className="text-2xl font-bold text-brand-blue mb-2">Page Not Found</h2>
                  <p className="text-muted-foreground mb-4">The page you are looking for doesn't exist.</p>
                  <a href="/" className="text-[#2ecc71] hover:underline">Return to Dashboard</a>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
