import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBookmark = (
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
      d="M1430.353 1769.617 898 1088l-534.417 682.057C325.51 1811.806 256 1784.871 256 1728.369V126.608C256 56.684 312.684 0 382.608 0h1028.783C1481.456 0 1538 56.684 1538 126.608V1728c0 56.55-69.608 83.461-107.647 41.617z"
      style={{
        fill: '#db6f6b',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBookmark);
export default ForwardRef;
