import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconExclamationSign = (
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
    <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm47 418.149c0 11.046-8.954 20-20 20h-47.534c-11.046 0-20-8.954-20-20v-45.773c0-11.046 8.954-20 20-20H283c11.046 0 20 8.954 20 20v45.773zm0-138c0 11.046-8.954 20-20 20h-47.534c-11.046 0-20-8.954-20-20V89.377c0-11.046 8.954-20 20-20H283c11.046 0 20 8.954 20 20v190.772z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconExclamationSign);
export default ForwardRef;
