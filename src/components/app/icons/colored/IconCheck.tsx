import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCheck = (
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
    <circle
      cx={895.5}
      cy={895.5}
      r={897.5}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M895-1C400.153-1-1 400.153-1 895s401.153 896 896 896 896-401.153 896-896S1389.847-1 895-1zm-11.627 1472.705L747.608 1335.94l-135.765-135.765-292.748-292.748c-50.147-50.147-50.147-131.451 0-181.599l89.93-89.93c50.147-50.147 131.452-50.147 181.599 0l292.749 292.749 407.171-407.171c50.055-50.055 131.21-50.055 181.264 0l90.265 90.265c50.055 50.055 50.055 131.21 0 181.265l-678.7 678.699z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCheck);
export default ForwardRef;
