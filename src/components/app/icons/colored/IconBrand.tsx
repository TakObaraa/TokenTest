import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBrand = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <circle
      cx={128}
      cy={128}
      r={128}
      style={{
        fill: '#006cb6',
      }}
    />
    <path
      d="M109.4 52.4c3.6 0 6.4 2.8 6.4 6.9v1.4c3.3-5 11.9-10 21.8-10 22.3 0 36.3 14 36.3 41.5v40.1c0 22.8-14.7 40.4-35.4 40.4-8.8 0-19.2-3.8-23.3-10.7v52.5c0 4-2.8 6.9-6.4 6.9h-8.3c-3.6 0-6.4-2.8-6.4-6.9V59.3c0-4 2.8-6.9 6.4-6.9h8.9zm6.2 38.2v43c0 11.2 7.8 19.2 19.9 19.2 10 0 16.9-5.9 16.9-19.2v-43c0-11.6-5-19.9-17.8-19.9-14 0-19 10.4-19 19.9z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBrand);
export default ForwardRef;
