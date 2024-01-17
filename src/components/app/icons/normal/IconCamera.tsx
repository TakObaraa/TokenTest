import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCamera = (
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
    <path d="M256 224.8c-34.3 0-62.2 28.1-62.2 62.7s27.8 62.7 62.2 62.7 62.2-28.1 62.2-62.7-27.9-62.7-62.2-62.7z" />
    <path d="M478.8 135.8h-58.6c-13.1 0-24.9-7.8-30.3-19.8l-17.5-39.3c-5.4-12-17.2-19.8-30.3-19.8H170c-13.1 0-25 7.8-30.3 19.8L122.2 116c-5.4 12-17.2 19.8-30.3 19.8H33.2c-18.4 0-33.2 15-33.2 33.5v252.3c0 18.5 14.9 33.5 33.2 33.5h445.5c18.3 0 33.2-15 33.2-33.5V169.3c.1-18.5-14.8-33.5-33.1-33.5zM256 403.8c-63.7 0-115.3-52.1-115.3-116.3S192.3 171.2 256 171.2s115.3 52.1 115.3 116.3S319.7 403.8 256 403.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCamera);
export default ForwardRef;
