import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconEntry = (
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
    <path d="M256-1C114.615-1 0 113.615 0 255s114.615 256 256 256 256-114.615 256-256S397.385-1 256-1zm156.512 296.102c0 11.046-8.954 20-20 20h-76.745v76.745c0 11.046-8.954 20-20 20h-78.494c-11.046 0-20-8.954-20-20v-76.745h-76.745c-11.045 0-20-8.954-20-20v-78.494c0-11.046 8.955-20 20-20h76.745v-76.745c0-11.046 8.954-20 20-20h78.494c11.046 0 20 8.954 20 20v76.745h76.745c11.046 0 20 8.954 20 20v78.494z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconEntry);
export default ForwardRef;
