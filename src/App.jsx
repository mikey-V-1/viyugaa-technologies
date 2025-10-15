import React, { useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/floating-animations.css";
import LazyLottie from "./components/LazyLottie";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = React.lazy(() => import('./pages/Home'))
const MobileAppDevelopers = React.lazy(() => import('./pages/hire/MobileAppDevelopers'))
const FlutterDevelopers = React.lazy(() => import('./pages/hire/FlutterDevelopers'))
const ReactNativeDevelopers = React.lazy(() => import('./pages/hire/ReactNativeDevelopers'))
const IOSDevelopers = React.lazy(() => import('./pages/hire/iOSDevelopers'))
const AndroidDevelopers = React.lazy(() => import('./pages/hire/AndroidDevelopers'))
const WebDevelopers = React.lazy(() => import('./pages/hire/WebDevelopers'))
const ReactJSDevelopers = React.lazy(() => import('./pages/hire/ReactJSDevelopers'))
const NodeJSDevelopers = React.lazy(() => import('./pages/hire/NodeJSDevelopers'))
const AngularJSDevelopers = React.lazy(() => import('./pages/hire/AngularJSDevelopers'))
const PHPDevelopers = React.lazy(() => import('./pages/hire/PHPDevelopers'))

const MobileAppDevelopment = React.lazy(() => import('./pages/services/MobileAppDevelopment'))
const CustomSoftwareDevelopment = React.lazy(() => import('./pages/services/CustomSoftwareDevelopment'))
const WebDevelopment = React.lazy(() => import('./pages/services/WebDevelopment'))
const SoftwareProductDevelopment = React.lazy(() => import('./pages/services/SoftwareProductDevelopment'))
const ERPSoftwareDevelopment = React.lazy(() => import('./pages/services/ERPSoftwareDevelopment'))
const UIUXDesign = React.lazy(() => import('./pages/services/UIUXDesign'))
const SoftwareMaintenanceSupport = React.lazy(() => import('./pages/services/SoftwareMaintenanceSupport'))

const ReactJS = React.lazy(() => import('./pages/technologies/ReactJS'))
const KnockoutJS = React.lazy(() => import('./pages/technologies/KnockoutJS'))
const VueJS = React.lazy(() => import('./pages/technologies/VueJS'))
const NextJS = React.lazy(() => import('./pages/technologies/NextJS'))
const AspNet = React.lazy(() => import('./pages/technologies/AspNet'))
const AspNetCore = React.lazy(() => import('./pages/technologies/AspNetCore'))
const VBNet = React.lazy(() => import('./pages/technologies/VBNet'))
const CSharp = React.lazy(() => import('./pages/technologies/CSharp'))
const MSSQLServer = React.lazy(() => import('./pages/technologies/MSSQLServer'))
const MongoDB = React.lazy(() => import('./pages/technologies/MongoDB'))
const OnDemandAppSolutions = React.lazy(() => import('./pages/technologies/OnDemandAppSolutions'))
const AngularJS = React.lazy(() => import('./pages/technologies/AngularJS'))
const NodeJS = React.lazy(() => import('./pages/technologies/NodeJS'))
const PHP = React.lazy(() => import('./pages/technologies/PHP'))
const Flutter = React.lazy(() => import('./pages/technologies/Flutter'))
const IOS = React.lazy(() => import('./pages/technologies/iOS'))
const Android = React.lazy(() => import('./pages/technologies/Android'))
const Career = React.lazy(() => import('./pages/Career'))
const Contact = React.lazy(() => import('./pages/Contact'))
const OurWork = React.lazy(() => import('./pages/OurWork'))
const ReactNative = React.lazy(() => import('./pages/technologies/ReactNative'))
const Company = React.lazy(() => import('./pages/Company'))
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
      <div
        className="floating-animations"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: "80%",
          left: 0,
          right: 0,
          zIndex: 9999,
          pointerEvents: "none"
        }}
      >
        <div
          className="floating-chatbot"
          style={{ marginLeft: "1vw", cursor: "pointer", pointerEvents: "auto" }}
        >
          <LazyLottie animationData={chatbotAnimation} style={{ width: "clamp(90px, 22vw, 200px)", height: "clamp(90px, 22vw, 200px)" }} />
        </div>
        <div
          className="floating-whatsapp"
          style={{ marginRight: "1vw", cursor: "pointer", pointerEvents: "auto" }}
          onClick={() => window.open("https://wa.me/9043236861", "_blank")}
        >
          <LazyLottie animationData={whatsappAnimation} style={{ width: "clamp(90px, 22vw, 200px)", height: "clamp(90px, 22vw, 200px)" }} />
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
            <Route path="/" element={<Suspense fallback={null}><Home /></Suspense>} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {/* Hire Developer Pages */}
            <Route path="/hire/mobile-app-developers" element={<Suspense fallback={null}><MobileAppDevelopers /></Suspense>} />
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
            <Route path="/services/mobile-app-development" element={<Suspense fallback={null}><MobileAppDevelopment /></Suspense>} />
            <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/software-product-development" element={<SoftwareProductDevelopment />} />
            <Route path="/services/erp-software-development" element={<ERPSoftwareDevelopment />} />
            <Route path="/services/uiux-design" element={<UIUXDesign />} />
            <Route path="/services/software-maintenance-support" element={<SoftwareMaintenanceSupport />} />
            {/* Technologies Pages */}
            <Route path="/technologies/reactjs" element={<Suspense fallback={null}><ReactJS /></Suspense>} />
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
