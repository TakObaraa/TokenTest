import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconTriangleUp = (
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
    <path d="M256 18.5 46.9 196.4h418.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconTriangleUp);
export default ForwardRef;
