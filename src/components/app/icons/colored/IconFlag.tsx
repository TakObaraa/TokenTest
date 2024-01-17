import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconFlag = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1792 1792"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="M192.825 1792h-2.65C117.729 1792 59 1733.271 59 1660.825V195.175C59 122.729 117.729 64 190.175 64h2.65C265.271 64 324 122.729 324 195.175v1465.65C324 1733.271 265.271 1792 192.825 1792zM1062.719 169.79c-25.331-19.361-292.629-213.893-570.198-24.078C470.96 160.456 458 184.841 458 210.962v792.115c0 57.378 59.203 95.539 111.527 71.992 251.557-113.207 476.221 54.386 494.015 68.154a83.665 83.665 0 0 0 2.61 1.944c343.439 245.03 567.649 92.069 640.224 25.382 16.302-14.979 25.624-36.066 25.624-58.204V305.791c0-56.557-57.717-94.699-109.786-72.619-119.719 50.767-325.199 92.134-555.059-60.211a80.837 80.837 0 0 1-4.436-3.171z"
      style={{
        fill: '#db6f6b',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFlag);
export default ForwardRef;
