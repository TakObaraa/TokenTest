import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBookmark = (
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
    <path d="M404.201 505.605 252.1 310.857 99.41 505.731c-10.878 11.928-30.738 4.233-30.738-11.911V36.174C68.672 16.195 84.867 0 104.846 0h293.938c20.019 0 36.174 16.195 36.174 36.174v457.541c0 16.156-19.888 23.845-30.757 11.89z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBookmark);
export default ForwardRef;
