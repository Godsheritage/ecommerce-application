

export const EMAIL_REQUIRED = () =>({ type: "EMAIL" }) ;
export const REQUIRED = () => ({ type: "REQUIRED" });
export const PASSWORD_REQUIRED = () => ({ type: "PASSWORD" });

export const validate = (validators: any, value: string) => {
  validators.forEach((validator: any) => {
    let isValid = false;
    if (validator.type === "REQUIRED") {
     return isValid = value.length !== 0;
    }
    if (validator.type === "EMAIL") {
     return isValid = value.endsWith(".com");
    }
    if (validator.type === "PASSWORD") {
      return isValid = value.length >= 8;;
    }
  });
};
