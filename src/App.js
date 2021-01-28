import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero'
import Modal from './components/Modal/Modal'
import Button from './components/Button/Button'
import MainSection from './containers/MainSection/MainSection'
import Footer from './components/Footer/Footer';
import classes from "./App.module.css";
import Form from './components/Form/Form';
const App = () => {
  const [show, setState] = useState(false);
  const showModal = () => {
    setState(true)
  }
  const hideModal = () => {
    setState(false);
  }
  return (
    <div className={classes.App} style={{ textAlign: "center" }}>
    <Modal show={show} hideBackdrop={hideModal}>
        <div className={classes.ModalInfo}>
          <h3>How Rebohat works:</h3>
          <ul>
            <li>- We fetch all the public (not forked) repositories from your account.</li>
            <li>- We don't get access to any private data (it's impossible anyway because Github doesn't send it).</li>
            <li>- All you have to do is enter your Github username and we register it in our database and dynamically fetch your repositories.</li>
            <li><strong>*Important: The username you're entering should be YOUR OWN GITHUB USERNAME, please don't use anyone else's without their knowledge, and if you find your repositories here and wish to have them removed please contact us.</strong></li>
          </ul>
        </div>
            <Form />
          </Modal>
      <Header />
      <Hero btnClick={showModal}/>
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;