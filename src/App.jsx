import { Navigate, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Account } from './pages/Account/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
