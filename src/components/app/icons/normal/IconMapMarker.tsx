import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMapMarker = (
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
    <path d="M255.63 23.877c-94.527 0-171.156 74.514-171.156 166.431S190.528 420.791 257.73 487.994c67.203-67.202 169.056-205.769 169.056-297.686S350.157 23.877 255.63 23.877zm0 277.755c-58.459 0-105.85-47.39-105.85-105.85s47.391-105.85 105.85-105.85c58.459 0 105.85 47.39 105.85 105.85s-47.39 105.85-105.85 105.85z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMapMarker);
export default ForwardRef;
