import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconTriangleDown = (
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
    <path d="m256 493.5 209.1-177.9H46.9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconTriangleDown);
export default ForwardRef;
