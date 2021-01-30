import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import MainSection from "./containers/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import Form from "./components/Form/Form";
const App = () => {
  const [showRules, setRules] = useState(false);
  const [showBuy, setBuy] = useState(false);
  
  const showRulesModal = () => {
    setRules(true);
  };
  
  const hideRulesModal = () => {
    setRules(false);
  };
  
  const showBuyModel = () => {
    setBuy(true)
  }
  const hideBuyModel = () => {
    setBuy(false)
  }
  return (
    <div className={classes.App} style={{ textAlign: "center" }}>
      <Modal show={showRules} hideBackdrop={hideRulesModal}>
        <div className={classes.ModalInfo}>
          <h3>How Rebohat works:</h3>
          <ul>
            <li>
              - We fetch all the public (not forked) repositories from your
              account.
            </li>
            <li>
              - We don't get access to any private data (it's impossible anyway
              because Github doesn't send it).
            </li>
            <li>
              - All you have to do is enter your Github username and we register
              it in our database and dynamically fetch your repositories.
            </li>
            <li>
              <strong>
                *Important: The username you're entering should be YOUR OWN
                GITHUB USERNAME, please don't use anyone else's without their
                knowledge, and if you find your repositories here and wish to
                have them removed please contact us.
              </strong>
            </li>
          </ul>
          <Form />
        </div>
      </Modal>
      <Modal show={showBuy} hideBackdrop={hideBuyModel} className={classes.BuyModal}>
        <div style={{fontSize: '2rem', textAlign: 'center', display:'flex', placeItems:'center', flexDirection:'column'}}>
          <h5>If you wish to support us you can do so via the following method:</h5>
          <p><strong>Mbok Account</strong>: 2132629</p>
          <p><strong>Name</strong>: Rammah</p>
          <p>Any donations would be highly appreciated and it would help us create more projects.</p>
        </div>
      </Modal>
      <Header />
      <Hero btnClick={showRulesModal} />
      <MainSection />
      <Footer buyClick={showBuyModel}/>
    </div>
  );
};

export default App;
