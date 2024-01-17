import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMail = (
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
      d="M0 1540.764C0 1678.897 89.597 1791 200.12 1791h1391.76c110.523 0 200.12-112.228 200.12-250.361V441.111C1792 302.979 1702.403 191 1591.88 191H200.12C89.597 191 0 303.041 0 441.174"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M820.629 763.508 192 191h1408L971.371 763.508c-44.917 40.907-105.825 40.907-150.742 0z"
      style={{
        fill: '#d89795',
      }}
    />
    <path
      d="m1781.383 360.531-816.182 734.624c-42.143 33.918-96.259 33.918-138.402 0L10.617 360.531C3.736 385.815 0 412.918 0 441.111v859.566C0 1304.498-.136 1547 0 1551h.14c3.752 134 91.842 241 199.98 241h1391.76c108.139 0 196.229-107 199.98-241h.14V441.111c0-28.193-3.736-55.296-10.617-80.58z"
      style={{
        fill: '#d83934',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMail);
export default ForwardRef;
