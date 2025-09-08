import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MobileAppDevelopers from "./pages/hire/MobileAppDevelopers";
import FlutterDevelopers from "./pages/hire/FlutterDevelopers";
import ReactNativeDevelopers from "./pages/hire/ReactNativeDevelopers";
import IOSDevelopers from "./pages/hire/iOSDevelopers";
import AndroidDevelopers from "./pages/hire/AndroidDevelopers";
import WebDevelopers from "./pages/hire/WebDevelopers";
import ReactJSDevelopers from "./pages/hire/ReactJSDevelopers";
import NodeJSDevelopers from "./pages/hire/NodeJSDevelopers";
import AngularJSDevelopers from "./pages/hire/AngularJSDevelopers";
import PHPDevelopers from "./pages/hire/PHPDevelopers";

import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareProductDevelopment from "./pages/services/SoftwareProductDevelopment";
import ERPSoftwareDevelopment from "./pages/services/ERPSoftwareDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import SoftwareMaintenanceSupport from "./pages/services/SoftwareMaintenanceSupport";

import ReactJS from "./pages/technologies/ReactJS";
import KnockoutJS from "./pages/technologies/KnockoutJS";
import VueJS from "./pages/technologies/VueJS";
import NextJS from "./pages/technologies/NextJS";
import AspNet from "./pages/technologies/AspNet";
import AspNetCore from "./pages/technologies/AspNetCore";
import VBNet from "./pages/technologies/VBNet";
import CSharp from "./pages/technologies/CSharp";
import MSSQLServer from "./pages/technologies/MSSQLServer";
import MongoDB from "./pages/technologies/MongoDB";
import OnDemandAppSolutions from "./pages/technologies/OnDemandAppSolutions";
import AngularJS from "./pages/technologies/AngularJS";
import NodeJS from "./pages/technologies/NodeJS";
import PHP from "./pages/technologies/PHP";
import Flutter from "./pages/technologies/Flutter";
import IOS from "./pages/technologies/iOS";
import Android from "./pages/technologies/Android";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import ReactNative from "./pages/technologies/ReactNative";
import Company from "./pages/Company";
import whatsappAnimation from "./assets/WhatsApp.json";
import chatbotAnimation from "./assets/Live chatbot.json";
import WhatsAppPage from "./pages/WhatsAppPage";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: "80%", left: 0, right: 0, zIndex: 9999 }}>
        <div style={{ marginLeft: "1vw", cursor: "pointer" }}>
          <Lottie animationData={chatbotAnimation} style={{ width: 200, height: 200 }} />
        </div>
        <div style={{ marginRight: "1vw", cursor: "pointer" }} onClick={() => window.open("https://wa.me/9043236861", "_blank") }>
          <Lottie animationData={whatsappAnimation} style={{ width: 200, height: 200 }} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ minHeight: "80vh" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {/* Hire Developer Pages */}
            <Route path="/hire/mobile-app-developers" element={<MobileAppDevelopers />} />
            <Route path="/hire/flutter-developers" element={<FlutterDevelopers />} />
            <Route path="/hire/react-native-developers" element={<ReactNativeDevelopers />} />
            <Route path="/hire/ios-developers" element={<IOSDevelopers />} />
            <Route path="/hire/android-developers" element={<AndroidDevelopers />} />
            <Route path="/hire/web-developers" element={<WebDevelopers />} />
            <Route path="/hire/reactjs-developers" element={<ReactJSDevelopers />} />
            <Route path="/hire/nodejs-developers" element={<NodeJSDevelopers />} />
            <Route path="/hire/angularjs-developers" element={<AngularJSDevelopers />} />
            <Route path="/hire/php-developers" element={<PHPDevelopers />} />
            {/* Services Pages */}
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/software-product-development" element={<SoftwareProductDevelopment />} />
            <Route path="/services/erp-software-development" element={<ERPSoftwareDevelopment />} />
            <Route path="/services/uiux-design" element={<UIUXDesign />} />
            <Route path="/services/software-maintenance-support" element={<SoftwareMaintenanceSupport />} />
            {/* Technologies Pages */}
            <Route path="/technologies/reactjs" element={<ReactJS />} />
            <Route path="/technologies/angularjs" element={<AngularJS />} />
            <Route path="/technologies/nodejs" element={<NodeJS />} />
            <Route path="/technologies/php" element={<PHP />} />
            <Route path="/technologies/flutter" element={<Flutter />} />
            <Route path="/technologies/ios" element={<IOS />} />
            <Route path="/technologies/android" element={<Android />} />
            <Route path="/technologies/knockoutjs" element={<KnockoutJS />} />
            <Route path="/technologies/vuejs" element={<VueJS />} />
            <Route path="/technologies/nextjs" element={<NextJS />} />
            <Route path="/technologies/aspnet" element={<AspNet />} />
            <Route path="/technologies/aspnetcore" element={<AspNetCore />} />
            <Route path="/technologies/vbnet" element={<VBNet />} />
            <Route path="/technologies/csharp" element={<CSharp />} />
            <Route path="/technologies/mssqlserver" element={<MSSQLServer />} />
            <Route path="/technologies/mongodb" element={<MongoDB />} />
            <Route path="/technologies/ondemandappsolutions" element={<OnDemandAppSolutions />} />
            <Route path="/technologies/react-native" element={<ReactNative />} />
            <Route path="/whatsapp" element={<WhatsAppPage />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
