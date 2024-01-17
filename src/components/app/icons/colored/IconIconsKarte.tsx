import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconIconsKarte = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 -8.1 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#324D5B"
      d="M20-6.5h-8c-1.1 0-2 .9-2 2v3h2v-2c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2h2v-3c0-1.1-.9-2-2-2z"
    />
    <path
      fill="#E2574C"
      d="M2-1.5h28c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V.5c0-1.1.9-2 2-2z"
    />
    <path
      fill="#FFF"
      d="M21 8.5h-3v-3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3h-3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z"
    />
    <path
      fill="#BF392C"
      d="M2-1.5c-1.1 0-2 .9-2 2v5l7-7H2zm0 24h5l-7-7v5c0 1.1.9 2 2 2zm28-24h-5l7 7v-5c0-1.1-.9-2-2-2zm0 24c1.1 0 2-.9 2-2v-5l-7 7h5z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconIconsKarte);
export default ForwardRef;
