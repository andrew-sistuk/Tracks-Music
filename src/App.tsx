import { Route, Routes } from 'react-router-dom';
import { Tracks, PageNotFound } from '@/pages';

function App() {

  return (
    <Routes>
      <Route path="/tracks" element={<Tracks />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
