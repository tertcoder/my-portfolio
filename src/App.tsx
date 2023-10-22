import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Projects from "./features/works/Projects";
import Experiences from "./features/works/Experiences";
import Me from "./features/about/Me";
import Contact from "./features/about/Contact";
import PageNotFound from "./ui/PageNotFound";
import About from "./pages/About";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="works/" element={<Works />}>
            <Route index element={<Navigate replace to="projects" />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experiences" element={<Experiences />} />
          </Route>
          <Route path="about/" element={<About />}>
            <Route index element={<Navigate replace to="me" />} />
            <Route path="me" element={<Me />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
