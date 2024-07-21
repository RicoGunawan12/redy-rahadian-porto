import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./view/MainPage";
import LoadingPage from "./view/LoadingPage";
import ViewMoreArtPage from "./view/ViewMoreArtPage";
import TypeDetailPage from "./view/TypeDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LoadingPage/>} />
          <Route path='/dashboard' element={<MainPage/>} />
          <Route path='/more-art' element={<ViewMoreArtPage/>} />
          <Route path='/art-type' element={<TypeDetailPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
