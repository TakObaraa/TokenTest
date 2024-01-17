import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBoard = (
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
    <path d="M474.054 475.153V36.847C474.054 16.497 457.557 0 437.207 0H71.473c-20.35 0-36.847 16.497-36.847 36.847v438.306c0 20.35 16.497 36.847 36.847 36.847h365.735c20.35 0 36.847-16.497 36.847-36.847h-.001zm-54.856-18.01H90.055V54.857h329.143v402.286z" />
    <path d="M181.483 54.863h146.286v48.49H181.483zM126.626 164.571h256v36.571h-256zM126.626 256h256v36.571h-256zM126.626 347.429h256V384h-256z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBoard);
export default ForwardRef;
