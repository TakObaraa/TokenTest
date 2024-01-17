import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChevronDown = (
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
    <path d="M501.182 355.909 255.121 109.848l-.03.03-.03-.03L9 355.909l60.121 60.121 185.97-185.97 185.97 185.97z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChevronDown);
export default ForwardRef;
