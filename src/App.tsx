import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Tracks, PageNotFound } from 'pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tracks" element={<Tracks />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
