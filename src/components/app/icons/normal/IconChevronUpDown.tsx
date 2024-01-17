import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChevronUpDown = (
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
    <path d="M462.5 177.6 256 0 49.5 177.6 99.9 221 256 86.8 412.1 221zM48.5 334.4 255 512l206.5-177.6-50.4-43.4L255 425.2 98.9 291z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChevronUpDown);
export default ForwardRef;
