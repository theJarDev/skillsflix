import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import AddCategory from "./pages/AddCategory";
import Page404 from "./pages/Page404";
import Header from "./components/Header/Header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import { colorBlackDark } from "./components/UI/variables";

const ThemeProvider = styled.div`
  background-color: ${colorBlackDark};
`;

function App() {

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-video" element={<AddVideo />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
