import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacilitiesList from "./component/facility/FacilitiesList";
import Home from "./component/home/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FacilitiesEditForm from "./component/facility/FacilitiesEditForm";
import FacilitiesAddForm from "./component/facility/FacilitiesAddForm";

import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
      <>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<FacilitiesList />} />
          <Route path="/facility-edit/:id" element={<FacilitiesEditForm />} />
          <Route path="/facility-add" element={<FacilitiesAddForm />} />

        </Routes>
        <Footer />
        <ToastContainer />
      </>
  );
}

export default App;
