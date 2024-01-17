import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMessageRead = (
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
    <path d="m283.3 11.6 224.5 173.8H5L229.6 11.6c16-12.4 37.7-12.4 53.7 0z" />
    <path d="M510.5 185.3 277.3 353.9c-12 7.8-27.5 7.8-39.6 0L4.5 185.3c-2 5.8-3 12-3 18.5V401c0 .9-.1 56.5 0 57.5h.1c1 30.7 26.2 55.3 57.1 55.3h397.6c30.9 0 56.1-24.6 57.2-55.3h.1V203.8c-.1-6.5-1.2-12.7-3.1-18.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMessageRead);
export default ForwardRef;
