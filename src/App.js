import React from "react";
// route
import { Routes, Route } from "react-router";
import Spotlight from "./containers";
import ViewRes from "./components/viewfile/viewfile";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Spotlight />} />
        <Route path="/resume" element={<ViewRes />} />
        <Route
          path="*"
          element={
            <div id="oopss">
              <div id="error-text">
                <img
                  src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                  alt="404"
                />
                <span>404 PAGE</span>
                <p class="p-a">
                  . The page you were looking for could not be found
                </p>
                <p class="p-b">... Back to previous page</p>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
