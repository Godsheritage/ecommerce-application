import React, { useReducer } from "react";
import { SIGN_IN_VALIDATION_TYPES } from "../../../types";
import { validate } from "../../util/validation";

const Input: React.FC<any> = ({
  id,
  type,
  element,
  onChange,
  className,
  validators,
  errorText,
  placeholder,
}) => {
  const signInreducer = (state: any, action: any) => {
    // console.log(validate(action.validator, action.val));
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: validate(action.validators, action.val),
        };
      default:
        return state;
    }
  };
  const initialState: any = {
    value: "",
    isValid: false,
  };

  const [state, dispatch] = useReducer(signInreducer, initialState);

  const ChangeHandler = (e: any) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators });
  };

  console.log(state);
  return element === "input" ? (
    <>
      <input
        className={className}
        placeholder={placeholder}
        id={id}
        type={type}
        onChange={ChangeHandler}
        value={state.value}
      />
      {state.value !== "" && !state.isValid && <p>{errorText}</p>}
    </>
  ) : (
    <textarea
      className={className}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    ></textarea>
  );
};

export default Input;
