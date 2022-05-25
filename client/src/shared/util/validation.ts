export const VALIDATOR_TYPE_REQUIRED = (val: any) => {
  let isValid = false;
  return (isValid = val.endsWith('.com') );
};


