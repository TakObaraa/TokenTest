import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStatsOff = (
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
    <path d="m65.8 131.9 126 126v212.7H316V382l125 125 31-31L96.9 100.8z" />
    <path d="M102.6 271.1h-53c-18.5 0-33.5 15-33.5 33.5v166h120v-166c0-18.5-15-33.5-33.5-33.5zM316 66c0-18.5-15-33.5-33.5-33.5h-57.2c-18.5 0-33.5 15-33.5 33.5v70.7L316 260.9V66zM459.5 148.3h-50.2c-18.5 0-33.5 15-33.5 33.5v138.9L493 437.9V181.8c0-18.5-15-33.5-33.5-33.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStatsOff);
export default ForwardRef;
