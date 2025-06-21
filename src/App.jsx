import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Features from "./pages/Features";
import Counter from "./pages/Counter";

import Input from "./pages/input";
import Store from "./pages/store";
import Data from "./pages/data";
import TweetInput from "./pages/twitter";
import APIfetchdata from "./pages/APIfetchdata";
import EmojiPicker from "./pages/emoji";
import API from "./pages/API";
import Form from "./pages/form";
import AutoRefreshClock from "./pages/autorefershclock";
import OnlineCheckerStatus from "./pages/OnlineCheckerStatus";
import Localform from "./pages/localform";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/features" element={<Features />} />

        {/* Sub-feature routes */}
        <Route path="/features/inner" element={<Features />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/twitterr" element={<TweetInput />} />
        <Route path="/input" element={<Input />} />
        <Route path="/data" element={<Data />} />
        <Route path="/store" element={<Store />} />
        <Route path="/api" element={<APIfetchdata />} />
        <Route path="/apidata" element={<API />} />
        <Route path="/emoji" element={<EmojiPicker />} />
        <Route path="/form" element={<Form />} />
        <Route path="/autorefershclock" element={<AutoRefreshClock />} />
        <Route path="/onlinecheckerstatus" element={<OnlineCheckerStatus />} />
        <Route path="/localform" element={<Localform />} />
      </Routes>
    </>
  );
}

export default App;

//  <Route path="/inner" element={<Inner />} />

//         <Route path="/counter" element={<Counter />} />
//         <Route path="/twitterr" element={<TweetInput />} />
//         <Route path="/input" element={<Input />} />
//         <Route path="/data" element={<Data />} />
//         <Route path="/store" element={<Store />} />
//         <Route path="/api" element={<APIfetchdata />} />
//         <Route path="/apidata" element={<API />} />
//         <Route path="/emoji" element={<EmojiPicker />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/autorefershclock" element={<AutoRefreshClock />} />
//         <Route path="/onlinecheckerstatus" element={<OnlineCheckerStatus />} />
//         <Route path="/localform" element={<Localform />} />
