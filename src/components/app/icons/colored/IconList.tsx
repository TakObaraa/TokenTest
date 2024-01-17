import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconList = (
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
      d="M0 0h256v256H0zM512 0h1280v256H512zM0 512h256v256H0zM512 512h1280v256H512zM0 1024h256v256H0zM512 1024h1280v256H512zM0 1536h256v256H0zM512 1536h1280v256H512z"
      style={{
        fill: '#5f8bd8',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconList);
export default ForwardRef;
