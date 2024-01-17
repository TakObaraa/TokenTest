import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconTag = (
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
      d="M451 379h1280v1349H451z"
      style={{
        fill: '#ffc',
      }}
    />
    <path
      d="M0 320v1472h1792V320H0zm1664 1325H576V467h1088v1178z"
      style={{
        fill: '#d35871',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconTag);
export default ForwardRef;
