import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconConnection = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M301.57 354.58a144.11 144.11 0 0 1-102.2-42.27l-6.56-6.56a24 24 0 1 1 33.94-33.94l6.56 6.57a96.69 96.69 0 0 0 136.53 0l65.56-65.57A96.54 96.54 0 1 0 298.87 76.28l-32.78 32.78a24 24 0 0 1-33.94-33.94l32.79-32.78a144.54 144.54 0 1 1 204.4 204.41l-65.56 65.56a144.15 144.15 0 0 1-102.21 42.27Z" />
    <path d="M144.22 512A144.55 144.55 0 0 1 42 265.25l65.57-65.56c56.36-56.33 148.06-56.35 204.4 0l6.56 6.56a24 24 0 1 1-33.93 33.94l-6.6-6.57a96.69 96.69 0 0 0-136.53 0L76 299.19a96.54 96.54 0 1 0 136.48 136.53l32.78-32.78a24 24 0 1 1 33.94 33.94l-32.78 32.78A143.62 143.62 0 0 1 144.22 512Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconConnection);
export default ForwardRef;
