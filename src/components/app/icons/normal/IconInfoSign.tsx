import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconInfoSign = (
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
    <circle cx={256} cy={256} r={220} />
    <path
      d="M219.333 109.62a2.588 2.588 0 0 1 2.597-2.578h71.576a2.587 2.587 0 0 1 2.597 2.578v77.917a2.588 2.588 0 0 1-2.597 2.578H221.93a2.587 2.587 0 0 1-2.597-2.578V109.62zM333.344 371.729a2.578 2.578 0 0 1-2.578 2.578h-147.24a2.578 2.578 0 0 1-2.578-2.578v-35.807h44.688V260.01h-44.688v-36.094a2.578 2.578 0 0 1 2.578-2.578h106.285v114.27h43.533v36.121z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconInfoSign);
export default ForwardRef;
