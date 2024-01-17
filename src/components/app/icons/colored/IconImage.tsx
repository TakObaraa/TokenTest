import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconImage = (
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
      d="M67 47h1664v1664H67z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M0 0v1792h1792V0H0zm1664 1664H128V128h1536v1536z"
      style={{
        fill: '#25569e',
      }}
    />
    <circle
      cx={512}
      cy={448}
      r={192}
      style={{
        fill: '#f39c12',
      }}
    />
    <path
      d="M1533.999 1537 1088 512l-299.629 532.673L576 832l-317.999 705h1021.998l-.249-.249z"
      style={{
        fill: '#26a028',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconImage);
export default ForwardRef;
