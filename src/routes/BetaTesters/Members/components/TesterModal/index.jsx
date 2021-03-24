/**
 * New beta tester modal
 */
import React, { useState, useEffect } from "react";
import BaseModal from "components/BaseModal";
import Button from "components/Button";
import { isValidEmail } from "utils/helpers";
import TesterForm from "../TesterForm";
import "./styles.module.scss";

const TesterModal = ({ initTester, onClose, onSave }) => {
  const [tester, setTester] = useState(initTester);
  useEffect(() => {
    setTester(initTester);
  }, [initTester]);

  return (
    <BaseModal
      open={!!tester}
      onClose={onClose}
      button={
        <Button
          type="primary"
          size="medium"
          disabled={
            !tester.handle || !tester.category || !isValidEmail(tester.email)
          }
          onClick={() => onSave(tester)}
        >
          Save
        </Button>
      }
    >
      {!!tester ? (
        <div styleName="testerModal">
          <h3>New Beta Tester</h3>
          <TesterForm initTester={tester} onChange={setTester} />
        </div>
      ) : null}
    </BaseModal>
  );
};

export default TesterModal;
