import { Routes, Route } from 'react-router-dom';

import NewContact from './pages/NewContact';
import Home from './pages/Home';
import EditContact from './pages/EditContact';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}
