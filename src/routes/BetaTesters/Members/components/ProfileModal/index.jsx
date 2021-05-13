/**
 * Beta tester profile modal
 */

import React from "react";
import BaseModal from "components/BaseModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
                <div styleName="memberNote">
                  <span>{note.created_on}</span>
                  <p>{note.text}</p>
                </div>
              ))}
            </TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      ) : null}
    </BaseModal>
  );
};

export default ProfileModal;
