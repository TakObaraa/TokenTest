import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconSort = (
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
    <path d="m498.956 120.502-77.718-77.718v-1.247h-1.247L379.817 1.364a3.06 3.06 0 0 0-4.327 0L256.352 120.502c-1.927 1.927-.562 5.223 2.163 5.223h77.555V512h85.167V125.725h75.555c2.726 0 4.091-3.295 2.164-5.223zM252.674 386.742h-77.555V.468H89.951v386.275H14.396c-2.726 0-4.09 3.295-2.163 5.222l77.718 77.718v1.247h1.247l40.174 40.174a3.058 3.058 0 0 0 4.326 0l119.139-119.139c1.927-1.927.562-5.223-2.163-5.223z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSort);
export default ForwardRef;
