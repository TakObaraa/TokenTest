import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconEdit = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M469.714 147.858 274.241-1 51.012 293.123 41.687 511l199.499-64.367 228.528-298.775zM67.777 319.128l148.6 117.737-99.76 27.823-53.413-44.97 4.573-100.59z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconEdit);
export default ForwardRef;
