import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconIconsMtgTxt = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="40 31.9 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#E4E7E7"
      d="M42 31.9h28c.6 0 1 .4 1 1v31l-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3v-31c0-.6.4-1 1-1z"
    />
    <path fill="#E2574C" d="M57 53.9H45v2h12v-2z" />
    <path fill="#868686" d="M65 49.9v2h2v-2h-2zm-20 2h18v-2H45v2z" />
    <path
      fill="#2494BC"
      d="M45 46.9h2v-11h-2v11zm4 0h3v-11h-3v11zm12 0h1v-11h-1v11zm3-11v11h3v-11h-3zm-7 11h2v-11h-2v11zm-3 0h1v-11h-1v11z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconIconsMtgTxt);
export default ForwardRef;
