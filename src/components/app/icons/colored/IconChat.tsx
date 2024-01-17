import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChat = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1792 1792"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="M1457.535 0H142.465C63.784 0 0 89.808 0 200.591v622.818c0 107.624 60.199 195.442 135.772 200.364l-79.789 451.46c-13.155 74.433 84.212 114.517 127.274 52.396L532.363 1024h925.171c78.681 0 142.465-89.808 142.465-200.591V200.591C1600 89.808 1536.216 0 1457.535 0z"
      style={{
        fill: '#6bdb6f',
      }}
    />
    <path
      d="M1728 847.203v100.484c0 128.984-68.887 233.313-153.863 233.313H574.952L512 1278.924v170.633C512 1532.644 563.027 1600 625.972 1600h609.229l208.01 173.341c39.799 33.166 99.393-1.003 90.876-52.105L1513.881 1600h164.146c62.945 0 113.972-67.356 113.972-150.443V982.443c.001-59.425-26.103-110.796-63.999-135.24z"
      style={{
        fill: '#6b7edb',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChat);
export default ForwardRef;
