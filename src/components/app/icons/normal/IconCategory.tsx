import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCategory = (
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
    <path d="M1 1h109.714v109.714H1zM147.286 1H513v73.143H147.286zM147.286 147.286H513v73.143H147.286zM1 293.571h109.714v109.714H1zM147.286 293.571H513v73.143H147.286zM147.286 439.857H513V513H147.286z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCategory);
export default ForwardRef;
