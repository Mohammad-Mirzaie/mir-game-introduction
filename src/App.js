import React from "react";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]} component={Home} />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
