import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBbs = (
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
    <path d="M480.571 0H32.039C14.373 0 0 14.813 0 33.022v315.891c0 18.209 14.373 33.023 32.039 33.023h448.532c17.667 0 32.04-14.814 32.04-33.023V33.022C512.611 14.813 498.238 0 480.571 0zm-22.96 326.937H55V55h402.611v271.937zM228.587 501.59c0 5.749 4.477 10.41 10 10.41h35c5.523 0 10-4.661 10-10.41v-91.263h-55v91.263z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBbs);
export default ForwardRef;
