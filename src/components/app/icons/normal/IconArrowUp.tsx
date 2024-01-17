import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconArrowUp = (
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
    <path d="M468.171 209.856 332.297 73.982v-2.18h-2.18L259.881 1.567a5.348 5.348 0 0 0-7.564 0l-208.29 208.29c-3.369 3.369-.983 9.131 3.782 9.131h135.589V514h148.898V218.987h132.092c4.766 0 7.152-5.761 3.783-9.131z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconArrowUp);
export default ForwardRef;
