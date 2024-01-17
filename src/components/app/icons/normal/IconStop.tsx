import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStop = (
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
    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm164.565 310.857H91.435c-20.201 0-36.578-16.376-36.578-36.578V237.72c0-20.201 16.376-36.578 36.578-36.578h329.13c20.201 0 36.578 16.376 36.578 36.578v36.559c0 20.201-16.376 36.578-36.578 36.578z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStop);
export default ForwardRef;
