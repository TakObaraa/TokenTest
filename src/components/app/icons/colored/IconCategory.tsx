import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCategory = (
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
      d="M0 0h384v384H0zM512 0h1280v256H512zM512 512h1280v256H512z"
      style={{
        fill: '#d6625e',
      }}
    />
    <path
      d="M0 1024h384v384H0zM512 1024h1280v256H512zM512 1536h1280v256H512z"
      style={{
        fill: '#5f8bd8',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCategory);
export default ForwardRef;
