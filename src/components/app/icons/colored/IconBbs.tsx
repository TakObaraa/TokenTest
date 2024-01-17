import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBbs = (
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
        fill: '#7ddd6c',
      }}
    />
    <path
      d="M320 192h1152v1408H320z"
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
      d="M448 576h896v128H448zM448 896h896v128H448zM448 1216h896v128H448z"
      style={{
        fill: '#29abe2',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBbs);
export default ForwardRef;
