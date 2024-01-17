import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconIconsMtgTime = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="160 -8.1 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path fill="#4B616E" d="M170-8.1h12v32h-12v-32z" />
    <path
      fill="#E4E7E7"
      d="M176-3.1c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11z"
    />
    <path
      fill="#4B616E"
      d="M180 6.9h-3v-3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"
    />
    <path
      fill="#F4B459"
      d="M176-3.1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 19.5c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconIconsMtgTime);
export default ForwardRef;
