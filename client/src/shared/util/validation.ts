export const EMAIL_REQUIRED = () => ({ type: "EMAIL" });
export const REQUIRED = () => ({ type: "REQUIRED" });
export const PASSWORD_REQUIRED = () => ({ type: "PASSWORD" });

export const validate = (validators: any, value: string) => {
   for(const validator of validators){
    let isValid = true;
    if (validator.type === "REQUIRED") {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === "EMAIL") {
      isValid = isValid && value.endsWith(".com");
    }
    if (validator.type === "PASSWORD") {
      isValid = isValid && value.trim().length > 8;
    }
  };
};
