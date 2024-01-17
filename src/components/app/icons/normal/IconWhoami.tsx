import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconWhoami = (
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
    <path d="M186.462 347.143c42.223-20.545 71.252-63.3 71.252-112.715 0-69.43-57.307-125.714-128-125.714s-128 56.284-128 125.714c0 48.602 28.083 90.761 69.181 111.682-39.02 6.387-69.181 49.092-69.181 100.825V511h256v-54.04c0-54.715-30.711-100.238-71.252-109.817z" />
    <circle cx={374.684} cy={419.684} r={54.97} />
    <path d="M387.137-1c-70.058 0-126.852 56.794-126.852 126.853 0 6.608.506 13.097 1.48 19.433h54.847a73.192 73.192 0 0 1-2.614-19.429c0-40.396 32.747-73.143 73.142-73.143s73.142 32.747 73.142 73.143-19.712 74.286-73.14 73.143l-37.999 1.143v128H404v-76.55c62-8.247 109.99-61.398 109.99-125.739C513.99 55.794 457.195-1 387.137-1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconWhoami);
export default ForwardRef;
