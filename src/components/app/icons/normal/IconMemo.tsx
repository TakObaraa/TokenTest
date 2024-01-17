import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMemo = (
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
    <path d="M419.918 200.979v256.164H90.775V54.857h182.617L328.372 0H72.418c-20.158 0-36.5 16.341-36.5 36.5v439c0 20.159 16.341 36.5 36.5 36.5h365.857c20.158 0 36.5-16.341 36.5-36.5V146.53l-54.857 54.449z" />
    <path d="M474.192 102.745 368.659-1 213.007 157.85l-22.065 129.483 124.08-23.36 159.17-161.228zm-235.315 82.003 52.136 52.417-36.747 5.25-21.481-22.629 6.092-35.038zM370.659 45.939l58.175 58.175-118.16 118.16-58.175-58.175 118.16-118.16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMemo);
export default ForwardRef;
