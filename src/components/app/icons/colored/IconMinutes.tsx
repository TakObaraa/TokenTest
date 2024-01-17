import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMinutes = (
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
      d="M1664 1663.976c0 70.706-57.318 128.024-128.024 128.024H254.024C183.318 1792 126 1734.682 126 1663.976V128.024C126 57.318 183.318 0 254.024 0h1281.952C1606.682 0 1664 57.318 1664 128.024v1535.952z"
      style={{
        fill: '#f1c40f',
      }}
    />
    <path
      d="M320 192h1152v1472H320z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M642 64h512v256H642z"
      style={{
        fill: '#ccc',
      }}
    />
    <path
      d="M1215.987 448H576.013C505.314 448 448 505.314 448 576.013v639.973c0 70.7 57.314 128.013 128.013 128.013h63.99L640 1473.777c-.004 51.18 58.426 80.397 99.37 49.689L949.179 1344h266.807c70.7 0 128.013-57.314 128.013-128.013V576.013C1344 505.314 1286.686 448 1215.987 448z"
      style={{
        fill: '#2980b9',
      }}
    />
    <path
      d="M942.263 924.058c71.507-20.496 123.889-86.363 123.889-164.456 0-94.475-76.562-171.063-171.038-171.063s-171.05 76.587-171.05 171.063c0 78.093 52.299 143.96 123.806 164.456C776.446 940.626 724 995.22 724 1060.022v135.068c0 4.921 4.864 8.91 10.768 8.91h320.743c5.905 0 10.489-3.989 10.489-8.91v-135.068c0-64.802-52.312-119.396-123.737-135.964z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMinutes);
export default ForwardRef;
