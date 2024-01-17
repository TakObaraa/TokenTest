import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCommentGreen = (
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
      d="M896 27C401.153 27 0 342.192 0 731c0 236.836 148.846 446.356 377.045 573.962l-80.706 280.02c-29.616 102.757 94.465 179.599 173.26 107.298l289.316-265.471C803.608 1432.201 849.388 1435 896 1435c494.847 0 896-315.192 896-704S1390.847 27 896 27z"
      style={{
        fill: '#6bdb6f',
      }}
    />
    <circle
      cx={384}
      cy={731}
      r={192}
      style={{
        fill: '#fff',
      }}
    />
    <circle
      cx={896}
      cy={731}
      r={192}
      style={{
        fill: '#fff',
      }}
    />
    <circle
      cx={1408}
      cy={731}
      r={192}
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCommentGreen);
export default ForwardRef;
