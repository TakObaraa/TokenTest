import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStats = (
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
    <path d="M136.1 470.607H16.104v-166.04c0-18.495 14.994-33.489 33.489-33.489h53.018c18.495 0 33.489 14.993 33.489 33.489v166.04zM315.954 470.607H191.772V65.971c0-18.495 14.993-33.489 33.489-33.489h57.204c18.495 0 33.489 14.994 33.489 33.489v404.636zM493.018 472.002H375.812V181.781c0-18.495 14.993-33.489 33.489-33.489h50.228c18.495 0 33.489 14.993 33.489 33.489v290.221z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStats);
export default ForwardRef;
