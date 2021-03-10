import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import ReduxToastr from "react-redux-toastr";
import { setAppMenu } from "@topcoder/micro-frontends-navbar-app";
import { appMenu } from "./constants";
import Home from "./routes/Home";
import store from "./store";
import "./styles/main.vendor.scss";
import styles from "./styles/main.module.scss";

export default function Root() {
  useEffect(() => {
    // when app starts it should set its side menu structure
    setAppMenu("/community-admin", appMenu);
  }, []);

  return (
    <div className={styles["topcoder-micro-frontends-community-admin-app"]}>
      <Provider store={store}>
        <Router>
          <Home path="/community-admin" />
        </Router>

        {/* Global config for Toastr popups */}
        <ReduxToastr
          timeOut={4000}
          position="bottom-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </Provider>
    </div>
  );
}
