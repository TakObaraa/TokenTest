import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconScreenshare = (
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
    <path d="M268.4 46.4c-3.3-4.3-7.7-6.7-12.4-6.7s-9.1 2.4-12.4 6.7L154 164.5c-3.3 4.4-4.3 8.7-2.6 12 1.7 3.4 5.6 5.2 11.2 5.2h34.3c9.3 0 16.8 7.6 16.8 16.8V296c0 11 9 20 20 20h44.5c11 0 20-9 20-20v-97.4c0-9.3 7.6-16.8 16.8-16.8h34.3c5.5 0 9.5-1.8 11.2-5.2 1.7-3.4.7-7.6-2.6-12L268.4 46.4z" />
    <path d="M445.2 294.2v111.3H66.8V294.2H0v152.6c0 14 11.4 25.4 25.4 25.4h461.1c14 0 25.4-11.4 25.4-25.4V294.2h-66.7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconScreenshare);
export default ForwardRef;
