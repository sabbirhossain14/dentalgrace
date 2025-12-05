import { useState } from 'react'
import { motion } from "motion/react"
import { Routes, Route } from "react-router";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import PatientReviews from './pages/patientreviews/PatientReviews';
import Faq from './pages/faq/Faq';
import CommonLayout from './components/commoncomponents/commonlayout/CommonLayout';


function App() {

  return (
    <>
     <Routes>
      {/* Layout wrapper */}
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="patientreviews" element={<PatientReviews />} />
          <Route path="faq" element={<Faq />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
