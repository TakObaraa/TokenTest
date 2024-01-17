import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconComment = (
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
    <path d="M256 18.714c-141.385 0-256 90.055-256 201.143 0 67.667 42.527 127.53 107.727 163.989l-23.059 80.006c-8.462 29.359 26.99 51.314 49.503 30.657l82.662-75.849A327.134 327.134 0 0 0 256 421c141.385 0 256-90.055 256-201.143S397.385 18.714 256 18.714zm-146.286 256c-30.297 0-54.857-24.56-54.857-54.857S79.417 165 109.714 165s54.857 24.56 54.857 54.857-24.56 54.857-54.857 54.857zm146.286 0c-30.297 0-54.857-24.56-54.857-54.857S225.703 165 256 165s54.857 24.56 54.857 54.857-24.56 54.857-54.857 54.857zm146.286 0c-30.297 0-54.857-24.56-54.857-54.857S371.989 165 402.286 165s54.857 24.56 54.857 54.857-24.56 54.857-54.857 54.857z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconComment);
export default ForwardRef;
