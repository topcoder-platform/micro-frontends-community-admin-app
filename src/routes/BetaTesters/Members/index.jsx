/** Beta testers members page */
import React, { useState } from "react";
import Page from "components/Page";
import PageHeader from "components/PageHeader";
import withAuthentication from "hoc/withAuthentication";
import CenteredSpinner from "components/CenteredSpinner";
import TextInput from "components/TextInput";
import Button from "components/Button";
import Select from "components/Select";
import Pagination from "components/Pagination";
import { getBetaTesters } from "services/betaTesters";
import { membersFilter } from "constants/";
import { useData } from "hooks/useData";
import Rating from "components/Rating";
import { toastr } from "react-redux-toastr";
import ProfileModal from "./components/ProfileModal";
import TesterModal from "./components/TesterModal";
import { hasPermission } from "utils/permissions";
import { PERMISSIONS } from "constants/permissions";
import NoAccessPage from "components/NoAccessPage";
import "./styles.module.scss";

const PER_PAGE = 10;
const NEW_TESTER = {
  email: "",
  handle: "",
  category: "",
  participated: 0,
  rating: 0,
  invited: 0,
  accepted: 0,
  denied: 0,
  no_response: 0,
  notes: [],
};

const BetaTesterMembers = () => {
  const [members, loadingError] = useData(getBetaTesters);
  const [currentPage, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [filterGroup, setFilterGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [profileModal, setProfileModal] = useState();
  const [newTester, setNewTester] = useState();
  let renderMembers = members || [];
  // apply filtering
  if (filterGroup) {
    renderMembers = renderMembers.filter(
      (m) => m.category.toLowerCase() === filterGroup.toLowerCase()
    );
  }
  // search?
  if (searchTerm) {
    renderMembers = renderMembers.filter(
      (m) => m.email.includes(searchTerm) || m.handle.includes(searchTerm)
    );
  }

  console.log(
    "BetaTesterMembers",
    members,
    selected,
    filterGroup,
    currentPage,
    renderMembers,
    searchTerm
  );

  return hasPermission(PERMISSIONS.ACCESS_COMMUNITY_ADMIN_APP) ? (
    <Page title="Members | Beta Testers">
      <PageHeader title="Members" />
      {!members ? (
        <CenteredSpinner />
      ) : (
        <div styleName="container">
          <div styleName="search-bar">
            <TextInput
              type="text"
              placeholder="Search beta testers..."
              value={searchTerm}
              onChange={(s) => {
                setSearchTerm(s);
              }}
            />
          </div>
          <div styleName="filter-bar">
            <Select
              onChange={(v) => {
                setFilterGroup(v);
                setPage(1);
              }}
              options={membersFilter}
            />
            <div styleName="actionButtons">
              <Button type="primary">{`Invite${
                selected.length ? ` (${selected.length})` : ""
              }`}</Button>
              <Button type="primary" onClick={() => setNewTester(NEW_TESTER)}>
                New
              </Button>
              <Button type="warning">{`Delete${
                selected.length ? ` (${selected.length})` : ""
              }`}</Button>
            </div>
          </div>
          <table styleName="members-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Handle</th>
                <th>Email</th>
                <th>Category</th>
                <th>Participated</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {renderMembers
                .slice((currentPage - 1) * PER_PAGE, PER_PAGE * currentPage)
                .map((member) => {
                  return (
                    <tr
                      styleName="members-table-row"
                      title="Click for details..."
                      onClick={() => setProfileModal(member)}
                    >
                      <td>
                        <TextInput
                          type="checkbox"
                          onChange={(v) => {
                            if (v) {
                              setSelected(selected.concat(member));
                            } else {
                              setSelected(
                                selected.filter((s) => s.email !== member.email)
                              );
                            }
                          }}
                          checked={selected.some(
                            (s) => s.email === member.email
                          )}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td>
                        <button styleName="memberHandle">
                          {member.handle}
                        </button>
                      </td>
                      <td>{member.email}</td>
                      <td>{member.category}</td>
                      <td>{member.participated}</td>
                      <td>
                        <Rating value={member.rating} />
                      </td>
                    </tr>
                  );
                })}
              {!renderMembers.length ? (
                <p styleName="nothing-text">Nothing to diplay</p>
              ) : null}
            </tbody>
          </table>
          <div styleName="pagination-wrap">
            {renderMembers.length >= PER_PAGE ? (
              <Pagination
                total={renderMembers.length}
                perPage={PER_PAGE}
                currentPage={currentPage}
                onPageClick={(page) => setPage(page)}
              />
            ) : null}
          </div>
          {profileModal ? (
            <ProfileModal
              onClose={() => setProfileModal()}
              profileModal={profileModal}
            />
          ) : null}
          {newTester ? (
            <TesterModal
              onClose={() => setNewTester()}
              initTester={newTester}
              onSave={(tester) => {
                console.log("onSave", tester);
                toastr.success("The title", "The message");
              }}
            />
          ) : null}
        </div>
      )}
    </Page>
  ) : (
    <NoAccessPage />
  );
};

export default withAuthentication(BetaTesterMembers);
