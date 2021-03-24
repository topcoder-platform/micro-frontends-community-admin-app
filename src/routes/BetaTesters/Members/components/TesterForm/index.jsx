/**
 * New beta tester modal
 */
import React, { useState, useEffect } from "react";
import PT from "prop-types";
import TextInput from "components/TextInput";
import Select from "components/Select";
import { membersFilter } from "constants/";
import "./styles.module.scss";

const TesterForm = ({ initTester, onChange }) => {
  const [tester, setTester] = useState(initTester);
  useEffect(() => {
    setTester(initTester);
  }, [initTester]);

  return (
    <div styleName="testerForm">
      <strong>Topcoder Handle *</strong>
      <TextInput
        type="text"
        placeholder="Topcoder Handle"
        value={tester.handle}
        onChange={(h) => {
          tester.handle = h;
          setTester({ ...tester });
          onChange({ ...tester });
        }}
      />
      <strong>Email *</strong>
      <TextInput
        type="email"
        placeholder="Email"
        value={tester.email}
        onChange={(e) => {
          tester.email = e;
          setTester({ ...tester });
          onChange({ ...tester });
        }}
      />
      <strong>Category *</strong>
      <Select
        onChange={(v) => {
          tester.category = v;
          setTester({ ...tester });
          onChange({ ...tester });
        }}
        options={membersFilter}
        value={tester.category}
      />
      <div styleName="form-row">
        <div styleName="form-col">
          <strong>Participated *</strong>
          <TextInput
            type="number"
            step="1"
            value={tester.participated}
            onChange={(e) => {
              tester.participated = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
        <div styleName="form-col">
          <strong>Rating *</strong>
          <TextInput
            type="number"
            step="0.5"
            value={tester.rating}
            onChange={(e) => {
              tester.rating = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
        <div styleName="form-col">
          <strong>Invited *</strong>
          <TextInput
            type="number"
            step="1"
            value={tester.invited}
            onChange={(e) => {
              tester.invited = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
      </div>
      <div styleName="form-row">
        <div styleName="form-col">
          <strong>Accepted *</strong>
          <TextInput
            type="number"
            step="1"
            value={tester.accepted}
            onChange={(e) => {
              tester.accepted = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
        <div styleName="form-col">
          <strong>Denied *</strong>
          <TextInput
            type="number"
            step="1"
            value={tester.denied}
            onChange={(e) => {
              tester.denied = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
        <div styleName="form-col">
          <strong>No Response *</strong>
          <TextInput
            type="number"
            step="1"
            value={tester.no_response}
            onChange={(e) => {
              tester.no_response = Number(e);
              setTester({ ...tester });
              onChange({ ...tester });
            }}
          />
        </div>
      </div>
    </div>
  );
};

TesterForm.propTypes = {
  onChange: PT.func,
  initTester: PT.shape(),
};

export default TesterForm;
