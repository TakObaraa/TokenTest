import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconAlignJustify = (
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
    <path d="M512 137.333c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-42c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v42zM512 256.889c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-42c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v42zM512 376.444c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-42c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v42zM512 496c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-42c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v42z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconAlignJustify);
export default ForwardRef;
