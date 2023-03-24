import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from './pages/NotFound';


function App() {
  
return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="edit" element={<Edit />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

);
}
export default App;
