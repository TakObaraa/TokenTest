import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCareLog = (
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
      d="M1664 1663.035c0 71.225-57.74 128.965-128.965 128.965H254.965C183.74 1792 126 1734.26 126 1663.035V128.965C126 57.74 183.74 0 254.965 0h1280.07C1606.26 0 1664 57.74 1664 128.965v1534.07z"
      style={{
        fill: '#f62459',
      }}
    />
    <path
      d="M320 192h1152v1472H320z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M640 64h512v256H640z"
      style={{
        fill: '#ccc',
      }}
    />
    <path
      d="M512 896h768v128H512zM512 1216h768v128H512zM512 576h768v128H512z"
      style={{
        fill: '#34495e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCareLog);
export default ForwardRef;
