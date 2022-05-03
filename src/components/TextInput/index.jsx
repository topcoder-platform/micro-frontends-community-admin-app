/**
 * TextInput
 *
 * A wrapper of TextInput control.
 */
import React, { useState } from "react";
import PT from "prop-types";
import cn from "classnames";
import "./styles.module.scss";

function TextInput(props) {
  return (
    <input
      styleName={cn("TextInput", props.className, {
        readonly: props.readonly,
        checkbox: props.type === "checkbox",
      })}
      maxLength={props.maxLength}
      min={props.minValue}
      onChange={(event) => {
        if (props.type === "number") {
          if (event.target.value >= props.minValue) {
            props.onChange(event.target.value);
          } else {
            if (props.isRequired) {
              props.onChange(props.minValue);
            } else {
              // can delete the number
              props.onChange("");
            }
          }
        } else if (props.type === "checkbox") {
          props.onChange(event.target.checked);
        } else {
          props.onChange(event.target.value);
        }
      }}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      autoFocus={props.autoFocus}
      readOnly={props.readonly ?? false}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      step={props.step}
      checked={props.checked}
      onClick={props.onClick}
    />
  );
}

TextInput.defaultProps = {
  className: "",
  maxLength: 524288,
  placeholder: "",
  minValue: 0,
  step: null,
  checked: false,
};

TextInput.propTypes = {
  className: PT.string,
  maxLength: PT.number,
  onChange: PT.func,
  onBlur: PT.func,
  onFocus: PT.func,
  placeholder: PT.string,
  value: PT.string.isRequired,
  type: PT.string.isRequired,
  readonly: PT.bool,
  minValue: PT.number,
  checked: PT.bool,
  onClick: PT.func,
};

export default TextInput;
