import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import AddCategory from "./pages/AddCategory";
import Page404 from "./pages/Page404";
import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import UpdateCategory from "./pages/UpdateCategory";


function App() {

  return (
    <DataProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-video" element={<AddVideo />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/update-category/:id" element={<UpdateCategory />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Router>
    </DataProvider>
  )
}

export default App
