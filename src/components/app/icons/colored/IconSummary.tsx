import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconSummary = (
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
      d="M1216 0C980.444 0 777.92 141.401 688.661 343.949 868.962 431.286 993 613.628 993 824.429c0 90.819-23.03 176.353-63.656 251.287C1013.761 1124.246 1111.639 1152 1216 1152c318.116 0 576-257.884 576-576S1534.116 0 1216 0z"
      style={{
        fill: '#db6f6b',
      }}
    />
    <path
      d="M646.617 1218.501C794.397 1146.595 896 996.952 896 824c0-243.005-200.576-440-448-440S0 580.995 0 824c0 170.108 98.292 317.664 242.134 390.887C105.563 1237.24 0 1386.71 0 1567.773V1792h896v-189.139c0-191.505-107.491-350.835-249.383-384.36z"
      style={{
        fill: '#6bc1db',
      }}
    />
    <circle
      cx={1280}
      cy={832}
      r={128}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M1408 513.28c0 69.985-56.734 126.72-126.72 126.72h-2.56c-69.985 0-126.72-56.734-126.72-126.72V254.72c0-69.986 56.734-126.72 126.72-126.72h2.56c69.985 0 126.72 56.734 126.72 126.72v258.56z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSummary);
export default ForwardRef;
