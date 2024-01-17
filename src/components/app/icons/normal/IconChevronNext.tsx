import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChevronNext = (
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
    <path d="m162.6 509 246.1-246v-.1L162.6 16.8 102.5 77l186 185.9-186 186z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChevronNext);
export default ForwardRef;
