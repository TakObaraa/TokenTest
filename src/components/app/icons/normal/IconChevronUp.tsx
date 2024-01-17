import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChevronUp = (
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
    <path d="M9.5 169.969 255.561 416.03l.029-.03.031.03 246.061-246.061-60.121-60.121-185.971 185.97-185.969-185.97z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChevronUp);
export default ForwardRef;
