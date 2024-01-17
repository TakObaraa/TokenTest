import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconImageAdd = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 515 509.26"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M385.5 509.26c-71.4 0-129.5-58.1-129.5-129.5s58.1-129.5 129.5-129.5S515 308.36 515 379.76s-58.1 129.5-129.5 129.5Zm0-219c-49.4 0-89.5 40.1-89.5 89.5s40.1 89.5 89.5 89.5 89.5-40.1 89.5-89.5-40.2-89.5-89.5-89.5Z" />
    <path d="M363 435.46v-111.5c0-11 9-20 20-20h5c11 0 20 9 20 20v111.6c0 11-9 20-20 20h-5c-11.1-.1-20-9-20-20.1Z" />
    <path d="M329.7 363.86h111.6c11 0 20 9 20 20v5c0 11-9 20-20 20H329.7c-11 0-20-9-20-20v-5c0-11.1 8.9-20 20-20Z" />
    <circle cx={128.32} cy={112.28} r={48.12} />
    <path d="M256 379.76c0-51.94 30.75-96.83 74.99-117.45l-58.3-133.99-75.1 133.5-53.23-53.3-79.7 176.69h191.46c-.08-1.81-.12-3.63-.12-5.46Z" />
    <path d="M261.48 417.05H32.08V32.08h384.97v222.07c11.36 2.86 22.13 7.21 32.08 12.85V0H0v449.13h276.2a128.931 128.931 0 0 1-14.72-32.08Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconImageAdd);
export default ForwardRef;
