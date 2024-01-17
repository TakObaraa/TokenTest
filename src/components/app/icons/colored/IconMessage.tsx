import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMessage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 800 800"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#FFF"
      d="M0 647.8c0 61.7 40 111.7 89.3 111.7h621.3c49.3 0 89.3-50.1 89.3-111.8V157c0-61.7-40-111.7-89.3-111.7H89.3C40 45.3 0 95.3 0 157"
    />
    <path
      fill="#D89795"
      d="M366.4 300.9 85.7 45.3h628.6L433.6 300.9c-20 18.2-47.2 18.2-67.2 0z"
    />
    <path
      fill="#D83934"
      d="M795.3 121 430.9 449c-18.8 15.1-43 15.1-61.8 0L4.7 121C1.6 132.3 0 144.4 0 157v383.7c0 1.7-.1 110 0 111.8h.1C1.7 712.2 41.1 760 89.3 760h621.3c48.3 0 87.6-47.8 89.3-107.6h.1V156.9c0-12.6-1.7-24.7-4.7-35.9z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMessage);
export default ForwardRef;
