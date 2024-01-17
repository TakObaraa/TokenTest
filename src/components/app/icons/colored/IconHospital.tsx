import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconHospital = (
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
      d="M256-2v515H0v1280h1792V513h-256V1h256v-3z"
      style={{
        fill: '#5f8bd8',
      }}
    />
    <path
      d="M1280 385h-256V129H768v256H512v256h256v256h256V641h256z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconHospital);
export default ForwardRef;
