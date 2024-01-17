import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconVote = (
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
    <path d="M36.2 133.8v-120h166c18.5 0 33.5 15 33.5 33.5v53c0 18.5-15 33.5-33.5 33.5h-166zM36.2 313.6V189.5h404.6c18.5 0 33.5 15 33.5 33.5v57.2c0 18.5-15 33.5-33.5 33.5l-404.6-.1zM34.8 490.7V373.5H325c18.5 0 33.5 15 33.5 33.5v50.2c0 18.5-15 33.5-33.5 33.5H34.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconVote);
export default ForwardRef;
