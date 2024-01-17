import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconVoteOff = (
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
    <path d="m49.3 18.2 4.5-4.4H36.2v17.5l-18 18 18 18v66.5h66.5l55.7 55.7H36.2v124.1l246.4.1 169.5 169.5 31.1-31.1z" />
    <path d="M325 373.5H34.8v117.2H325c18.5 0 33.5-15 33.5-33.5V407c0-18.5-15-33.5-33.5-33.5zM440.8 313.7c18.5 0 33.5-15 33.5-33.5V223c0-18.5-15-33.5-33.5-33.5H280.6l124.2 124.2h36zM235.7 100.3v-53c0-18.5-15-33.5-33.5-33.5h-97.3l115 115c9.5-5.9 15.8-16.5 15.8-28.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconVoteOff);
export default ForwardRef;
