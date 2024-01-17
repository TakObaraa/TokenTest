import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconRecord = (
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
      d="M1600.263 1792H447.737C377.19 1792 320 1726.64 320 1646.015V401.985C320 321.36 377.19 256 447.737 256h1152.526C1670.81 256 1728 321.36 1728 401.985v1244.03c0 80.625-57.19 145.985-127.737 145.985z"
      style={{
        fill: '#6a94db',
      }}
    />
    <path
      d="M512 448h1024v1152H512z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M1344.263 1536H191.737C121.19 1536 64 1470.64 64 1390.015V145.985C64 65.36 121.19 0 191.737 0h1152.526C1414.81 0 1472 65.36 1472 145.985v1244.03c0 80.625-57.19 145.985-127.737 145.985z"
      style={{
        fill: '#db6b94',
      }}
    />
    <path
      d="M256 192h1024v1152H256z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M448 384h640v128H448zM448 704h640v128H448zM448 1024h640v128H448z"
      style={{
        fill: '#db6b94',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconRecord);
export default ForwardRef;
