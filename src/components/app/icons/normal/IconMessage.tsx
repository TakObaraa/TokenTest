import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMessage = (
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
    <path d="M234.496 206.401 54.848 75.007h402.304L277.504 206.401c-12.8 9.356-30.208 9.356-43.008 0z" />
    <path d="M508.992 113.922 275.776 282.534a36.5 36.5 0 0 1-39.552 0L3.008 113.922C1.024 119.731 0 125.951 0 132.428v197.245c0 .874-.064 56.547 0 57.472h.064c1.024 30.689 26.24 55.262 57.088 55.262h397.632c30.912 0 56.064-24.572 57.152-55.313H512V132.377a58.316 58.316 0 0 0-3.008-18.455z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMessage);
export default ForwardRef;
