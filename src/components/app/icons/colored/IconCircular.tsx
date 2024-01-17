import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCircular = (
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
      d="M1665 1663.035c0 71.225-57.74 128.965-128.965 128.965H255.965C184.74 1792 127 1734.26 127 1663.035V128.965C127 57.74 184.74 0 255.965 0h1280.07C1607.26 0 1665 57.74 1665 128.965v1534.07z"
      style={{
        fill: '#3498db',
      }}
    />
    <path
      d="M321 192h1152v1472H321z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M641 64h512v256H641z"
      style={{
        fill: '#ccc',
      }}
    />
    <circle
      cx={895}
      cy={898}
      r={448}
      style={{
        fill: '#25569e',
      }}
    />
    <path
      d="m1099.833 690.299-207.51 202.995-150.96-154.317-138.34 135.33 271.727 277.771 345.85-338.326z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCircular);
export default ForwardRef;
