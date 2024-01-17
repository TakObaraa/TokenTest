import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChevronPrev = (
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
    <path d="M348.6 16.8 102.5 262.9v.1l246.1 246 60.1-60.1-186-186L408.7 77z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChevronPrev);
export default ForwardRef;
