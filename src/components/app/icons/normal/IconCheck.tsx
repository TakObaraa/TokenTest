import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCheck = (
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
    <path d="M255.428-.572c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm-3.322 420.773-38.79-38.79-38.79-38.79-83.642-83.642c-14.328-14.328-14.328-37.557 0-51.885l25.694-25.694c14.328-14.328 37.558-14.328 51.885 0l83.643 83.643 116.335-116.335c14.301-14.301 37.489-14.301 51.79 0l25.79 25.79c14.301 14.301 14.301 37.489 0 51.79L252.106 420.201z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCheck);
export default ForwardRef;
