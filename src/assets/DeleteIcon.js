import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={16}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3.3H2.3v11c0 1.7 1.3 3 3 3h5.4c1.7 0 3-1.3 3-3v-11H8ZM6.1 7.1v6.3M9.9 7.1v6.3M1 3.3h14M11.2 3.3l-.7-1.2C10 1.3 9.1.8 8.1.8s-1.9.5-2.4 1.3l-.9 1.2"
      stroke="#010A1B"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
