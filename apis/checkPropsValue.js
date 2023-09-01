const isNotEmptyNullOrUndefined = (prop) => {
  return prop != null && prop != undefined && prop != '';
};

export default isNotEmptyNullOrUndefined;
