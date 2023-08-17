import React from 'react'

const isNotEmptyNullOrUndefined = (prop) => {
  return prop != null && prop != undefined && prop != "";
}

export default isNotEmptyNullOrUndefined;