import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMeeting = (
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
    <path d="M458.454 30.571H55.546c-20.026 0-36.261 17.587-36.261 39.282V367.67c0 21.695 16.235 39.187 36.261 39.187h73.628l.237 79.751c.048 16.226 17.387 25.176 29.07 15.022l109.009-94.773h190.963c20.026 0 36.261-17.492 36.261-39.187V69.854c0-21.695-16.234-39.283-36.26-39.283zM348.713 339.966c0 .882-.769 1.463-1.718 1.463h-179.81c-.948 0-1.615-.582-1.615-1.463v-33.299c0-38.383 27.58-70.768 65.371-80.937-24.328-10.919-41.526-37.193-41.526-67.875 0-40.474 29.833-73.284 66.635-73.284s66.635 32.81 66.635 73.284c0 30.362-16.788 56.411-40.712 67.532 38.466 9.764 66.741 42.452 66.74 81.28v33.299z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMeeting);
export default ForwardRef;
