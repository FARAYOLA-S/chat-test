import React from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen ">
      <header className="">
        <Header />
      </header>
      <main className="grow">
        <Message />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
