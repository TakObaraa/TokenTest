import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconEntry = (
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
    <circle
      cx={896}
      cy={896}
      r={896}
      style={{
        fill: '#5f8bd8',
      }}
    />
    <path
      d="M1467.026 706H1084V322.974C1084 251.744 1026.256 194 955.026 194H828.974C757.744 194 700 251.744 700 322.974V706H316.974C245.744 706 188 763.744 188 834.974v126.051C188 1032.256 245.744 1090 316.974 1090H700v383.026c0 71.23 57.744 128.974 128.974 128.974h126.051c71.231 0 128.974-57.744 128.974-128.974V1090h383.026c71.231 0 128.974-57.744 128.974-128.974V834.974C1596 763.744 1538.256 706 1467.026 706z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconEntry);
export default ForwardRef;
