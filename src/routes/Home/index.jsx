/** Home page */
import React from "react";
import PT from "prop-types";
import Page from "components/Page";
import PageHeader from "components/PageHeader";
import { useSelector } from "react-redux";
import withAuthentication from "hoc/withAuthentication";
import { hasPermission } from "utils/permissions";
import { PERMISSIONS } from "constants/permissions";
import NoAccessPage from "components/NoAccessPage";

const Home = () => {
  const authUser = useSelector((state) => state.authUser);
  return hasPermission(PERMISSIONS.ACCESS_COMMUNITY_ADMIN_APP) ? (
    <Page title="Home">
      <PageHeader title="Home" />
      <div>
        Hey <strong>{authUser.handle}</strong>, nice to see you!
      </div>
    </Page>
  ) : (
    <NoAccessPage />
  );
};

export default withAuthentication(Home);
