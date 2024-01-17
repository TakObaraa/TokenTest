import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconFacility = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1792 1792"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="m1709.339 644.442-243.415-391.466c-23.517-37.821-65.973-60.977-111.8-60.977H436.823c-45.755 0-88.156 23.084-111.697 60.811L81.913 642.583c-52.055 83.424 10.356 189.572 111.533 189.694l62.554.076V1731h383v-515h512v515h385V833.896l61.375.074c101.234.123 163.914-105.98 111.964-189.528z"
      style={{
        fill: '#a1bf67',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFacility);
export default ForwardRef;
