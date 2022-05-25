import React, { useReducer } from "react";
import { SIGN_IN_VALIDATION_TYPES } from "../../../types";
import { VALIDATOR_TYPE_REQUIRED } from "../../util/validation";

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
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: VALIDATOR_TYPE_REQUIRED(action.val),
        };
      case "BLUR":
        return {
          isValid: false,
        };
      default:
        return state;
    }
  };

  //initial state
  const initialState: any = {
    // inputs: {
    //   userName: {
    //     value: "",
    //     isValid: false,
    //   },
    //   password: { value: "", isValid: false },
    // },
    value: "",
    isValid: false,
  };

  const [state, dispatch] = useReducer(signInreducer, initialState);

  const ChangeHandler = (e: any) => {
    dispatch({ type: "CHANGE", val: e.target.value });
  };

  const blurHandle = () => {
    dispatch({ type: "BLUR" });
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
        onBlur={blurHandle}
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
