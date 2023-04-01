import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <CallToAction />
        <Products />
        <Footer />
    </div>
  );
}

export default App;
