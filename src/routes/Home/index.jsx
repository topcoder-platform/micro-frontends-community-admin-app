/** Home page */
import React from "react";
import PT from "prop-types";
import Page from "components/Page";
import PageHeader from "components/PageHeader";
import { useSelector } from "react-redux";
import withAuthentication from "../../hoc/withAuthentication";

const Home = () => {
  const authUser = useSelector((state) => state.authUser);
  return (
    <Page title="Home">
      <PageHeader title="Home" />
      <div>
        Hey <strong>{authUser.handle}</strong>, nice to see you!
      </div>
    </Page>
  );
};

Home.propTypes = {
  teamId: PT.string,
  jobId: PT.string,
};

export default withAuthentication(Home);
