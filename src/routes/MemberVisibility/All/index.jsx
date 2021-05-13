/**
 * Member visibility - all
 */
import React, { useState } from "react";
import Page from "components/Page";
import PageHeader from "components/PageHeader";
import withAuthentication from "hoc/withAuthentication";
import AsyncSelect from "components/AsyncSelect";
import { autocompleteMembers } from "services/members";
import { trim, debounce } from "lodash";
import User from "components/User";
import { hasPermission } from "utils/permissions";
import { PERMISSIONS } from "constants/permissions";
import NoAccessPage from "components/NoAccessPage";
import "./styles.module.scss";

/**
 * Fetches suggestions based on input in select box
 * @param {string} inputVal Input from select
 *
 * @returns {Promise<Array>} A promise that resolves to list of suggested users
 */
const loadSuggestions = (inputVal) => {
  return new Promise((resolve) => {
    if (trim(inputVal)) {
      autocompleteMembers({
        term: inputVal,
      })
        .then((result) => {
          resolve(
            result.data.map((member) => ({
              label: member.handle,
              val: member,
            }))
          );
        })
        .catch(() => resolve([]));
    } else {
      resolve([]);
    }
  });
};

const MemberVisibility = () => {
  const [selectedMember, setSelectedMember] = useState();

  console.log("MemberVisibility", selectedMember);
  return hasPermission(PERMISSIONS.ACCESS_COMMUNITY_ADMIN_APP) ? (
    <Page title="All | Member Visibility">
      <PageHeader title="All Members" />
      <div styleName="container">
        <div styleName="search-bar">
          <AsyncSelect
            value={selectedMember}
            onChange={setSelectedMember}
            cacheOptions
            // onInputChange={(i) => console.log("onInputChange", i)}
            // isMulti
            placeholder="Search by handle"
            noOptionsText="Type to search by handle"
            loadingText="Loading..."
            loadOptions={loadSuggestions}
            defaultOptions={[]}
          />
        </div>
        {selectedMember && <User user={{ ...selectedMember.val }} />}
      </div>
    </Page>
  ) : (
    <NoAccessPage />
  );
};

export default withAuthentication(MemberVisibility);
