/**
 * No access page
 * shown to members without Community Admin role
 */
import React from "react";
import Page from "components/Page";
import PageHeader from "components/PageHeader";
import "./styles.module.scss";

const NoAccessPage = () => {
  return (
    <Page title="Forbidden">
      <PageHeader title="Forbidden Area" />
      <h4 styleName="msg">
        Sorry, looks that you not autorized to access this page :(
      </h4>
      <p>
        If you feel this is an error, contact{" "}
        <a href="mailto:kiril.topcoder@gmail.com">Kiril</a> or{" "}
        <a href="mailto:ncastillo@topcoder.com">Nick</a> from the Community Team
        for assistance.
      </p>
    </Page>
  );
};

export default NoAccessPage;
