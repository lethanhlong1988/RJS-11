import React, { forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

export default ChildComponent;
