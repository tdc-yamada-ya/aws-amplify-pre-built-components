import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Ampligram from "./ui-components/Ampligram";
import CardA from "./ui-components/CardA";
import CardB from "./ui-components/CardB";
import CardC from "./ui-components/CardC";
import CardD from "./ui-components/CardD";
import CardE from "./ui-components/CardE";
import CardF from "./ui-components/CardF";
import CardG from "./ui-components/CardG";
import ContactUs from "./ui-components/ContactUs";
import EditProfile from "./ui-components/EditProfile";
import FAQItem from "./ui-components/FAQItem";
import Features2x2 from "./ui-components/Features2x2";
import Features2x3 from "./ui-components/Features2x3";
import Features4x1 from "./ui-components/Features4x1";
import FeaturesText2x2 from "./ui-components/FeaturesText2x2";
import FormCheckout from "./ui-components/FormCheckout";
import HeroLayout1 from "./ui-components/HeroLayout1";
import HeroLayout2 from "./ui-components/HeroLayout2";
import HeroLayout3 from "./ui-components/HeroLayout3";
import HeroLayout4 from "./ui-components/HeroLayout4";
import MarketingFooter from "./ui-components/MarketingFooter";
import MarketingPricing from "./ui-components/MarketingPricing";
import NavBar from "./ui-components/NavBar";
import ProductDetail from "./ui-components/ProductDetail";
import ProfileA from "./ui-components/ProfileA";
import SideBar from "./ui-components/SideBar";
import SocialA from "./ui-components/SocialA";
import SocialB from "./ui-components/SocialB";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-color-tertiary)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          maxWidth: "90rem",
        }}
      >
        <div
          style={{
            borderRight: "0.0625rem solid var(--border-color)",
            minWidth: "20rem",
          }}
        >
          <div style={{ margin: "2.5rem" }}>
            <ul style={{ lineHeight: 1.5 }}>
              <li>
                <Link to="/Ampligram">Ampligram</Link>
              </li>
              <li>
                <Link to="/CardA">CardA</Link>
              </li>
              <li>
                <Link to="/CardB">CardB</Link>
              </li>
              <li>
                <Link to="/CardC">CardC</Link>
              </li>
              <li>
                <Link to="/CardD">CardD</Link>
              </li>
              <li>
                <Link to="/CardE">CardE</Link>
              </li>
              <li>
                <Link to="/CardF">CardF</Link>
              </li>
              <li>
                <Link to="/CardG">CardG</Link>
              </li>
              <li>
                <Link to="/ContactUs">ContactUs</Link>
              </li>
              <li>
                <Link to="/EditProfile">EditProfile</Link>
              </li>
              <li>
                <Link to="/FAQItem">FAQItem</Link>
              </li>
              <li>
                <Link to="/Features2x2">Features2x2</Link>
              </li>
              <li>
                <Link to="/Features2x3">Features2x3</Link>
              </li>
              <li>
                <Link to="/Features4x1">Features4x1</Link>
              </li>
              <li>
                <Link to="/FeaturesText2x2">FeaturesText2x2</Link>
              </li>
              <li>
                <Link to="/FormCheckout">FormCheckout</Link>
              </li>
              <li>
                <Link to="/HeroLayout1">HeroLayout1</Link>
              </li>
              <li>
                <Link to="/HeroLayout2">HeroLayout2</Link>
              </li>
              <li>
                <Link to="/HeroLayout3">HeroLayout3</Link>
              </li>
              <li>
                <Link to="/HeroLayout4">HeroLayout4</Link>
              </li>
              <li>
                <Link to="/index.js">index.js</Link>
              </li>
              <li>
                <Link to="/MarketingFooter">MarketingFooter</Link>
              </li>
              <li>
                <Link to="/MarketingPricing">MarketingPricing</Link>
              </li>
              <li>
                <Link to="/NavBar">NavBar</Link>
              </li>
              <li>
                <Link to="/ProductDetail">ProductDetail</Link>
              </li>
              <li>
                <Link to="/ProfileA">ProfileA</Link>
              </li>
              <li>
                <Link to="/SideBar">SideBar</Link>
              </li>
              <li>
                <Link to="/SocialA">SocialA</Link>
              </li>
              <li>
                <Link to="/SocialB">SocialB</Link>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ overflow: "scroll", padding: "2.5rem", width: "100%" }}>
          <Routes>
            <Route path="/Ampligram" element={<Ampligram />} />
            <Route path="/CardA" element={<CardA />} />
            <Route path="/CardB" element={<CardB />} />
            <Route path="/CardC" element={<CardC />} />
            <Route path="/CardD" element={<CardD />} />
            <Route path="/CardE" element={<CardE />} />
            <Route path="/CardF" element={<CardF />} />
            <Route path="/CardG" element={<CardG />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/FAQItem" element={<FAQItem />} />
            <Route path="/Features2x2" element={<Features2x2 />} />
            <Route path="/Features2x3" element={<Features2x3 />} />
            <Route path="/Features4x1" element={<Features4x1 />} />
            <Route path="/FeaturesText2x2" element={<FeaturesText2x2 />} />
            <Route path="/FormCheckout" element={<FormCheckout />} />
            <Route path="/HeroLayout1" element={<HeroLayout1 />} />
            <Route path="/HeroLayout2" element={<HeroLayout2 />} />
            <Route path="/HeroLayout3" element={<HeroLayout3 />} />
            <Route path="/HeroLayout4" element={<HeroLayout4 />} />
            <Route path="/MarketingFooter" element={<MarketingFooter />} />
            <Route path="/MarketingPricing" element={<MarketingPricing />} />
            <Route path="/NavBar" element={<NavBar />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/ProfileA" element={<ProfileA />} />
            <Route path="/SideBar" element={<SideBar />} />
            <Route path="/SocialA" element={<SocialA />} />
            <Route path="/SocialB" element={<SocialB />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
