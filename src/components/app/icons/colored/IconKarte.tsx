import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconKarte = (
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
      d="M1664 1663.743c0 70.834-57.423 128.257-128.257 128.257H252.257C181.423 1792 124 1734.577 124 1663.743V128.257C124 57.423 181.423 0 252.257 0h1283.486C1606.577 0 1664 57.423 1664 128.257v1535.486z"
      style={{
        fill: '#f39c12',
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
      d="M514 1408h768v128H514z"
      style={{
        fill: '#1abc9c',
      }}
    />
    <path
      d="M732.263 744.058c71.507-20.496 123.889-86.363 123.889-164.456 0-94.475-76.562-171.063-171.038-171.063s-171.05 76.587-171.05 171.063c0 78.093 52.299 143.96 123.806 164.456C566.446 760.626 514 815.22 514 880.022v135.068c0 4.921 4.864 8.91 10.768 8.91h320.743c5.905 0 10.489-3.989 10.489-8.91V880.022c0-64.802-52.312-119.396-123.737-135.964z"
      style={{
        fill: '#7f8c8d',
      }}
    />
    <path
      d="M510 1152h768v128H510zM947 896h320v128H947zM947 640h320v128H947z"
      style={{
        fill: '#1abc9c',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconKarte);
export default ForwardRef;
