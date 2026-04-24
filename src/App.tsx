import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PublicLayout from './layout/PublicLayout';
import MainPage from './page/MainPage';
import GalleryPage from './page/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<MainPage />} />
          <Route path={'/gallery'} element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
