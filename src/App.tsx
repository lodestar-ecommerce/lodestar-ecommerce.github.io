import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { FaqPage } from './pages/faq-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page';
import { DefaultAddressLockPage } from './pages/default-address-lock-page';
import { BulkDeleteOrdersPage } from './pages/bulk-delete-orders-page';
import { Footer } from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/apps/default-address-lock" element={<DefaultAddressLockPage />} />
          <Route path="/apps/bulk-delete-orders" element={<BulkDeleteOrdersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
