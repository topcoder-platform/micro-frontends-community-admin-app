/**
 * Beta tester profile modal
 */

import React from "react";
import BaseModal from "components/BaseModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "components/Button";
import TesterForm from "../TesterForm";
import "./styles.module.scss";

const ProfileModal = ({ profileModal, onClose }) => {
  return (
    <BaseModal
      open={!!profileModal}
      onClose={onClose}
      // extraModalStyle={{ maxWidth: "90vw" }}
    >
      {!!profileModal ? (
        <div styleName="profileModal">
          <h3>{profileModal.handle}</h3>
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Notes</Tab>
              <Tab>History</Tab>
              <Tab>Update</Tab>
            </TabList>

            <TabPanel>
              <p>
                <strong>Invited:</strong> {profileModal.invited}
              </p>
              <p>
                <strong>Accepted:</strong> {profileModal.accepted}
              </p>
              <p>
                <strong>Denied:</strong> {profileModal.denied}
              </p>
              <p>
                <strong>No Response:</strong> {profileModal.no_response}
              </p>
            </TabPanel>
            <TabPanel>
              {profileModal.notes.map((note) => (
                <p styleName="memberNote">{note}</p>
              ))}
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              <div styleName="testerUpdate">
                <TesterForm
                  initTester={profileModal}
                  onChange={(t) => console.log("TesterForm", t)}
                />
                <Button
                  type="primary"
                  // disabled={
                  //   !profileModal.handle ||
                  //   !profileModal.category ||
                  //   !isValidEmail(profileModal.email)
                  // }
                  // onClick={() => onSave(tester)}
                >
                  Save
                </Button>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      ) : null}
    </BaseModal>
  );
};

export default ProfileModal;
