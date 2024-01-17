import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMeeting = (
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
      d="M1601.088 128H190.912C120.821 128 64 189.556 64 265.488v1042.357C64 1383.778 120.821 1445 190.912 1445h257.697l.831 279.13c.169 56.79 60.856 88.117 101.744 52.577L932.716 1445h668.372c70.092 0 126.912-61.222 126.912-137.155V265.488C1728 189.556 1671.179 128 1601.088 128z"
      style={{
        fill: '#db9b6b',
      }}
    />
    <path
      d="M983.406 809.855c83.733-38.925 142.492-130.096 142.492-236.361 0-141.658-104.417-256.494-233.222-256.494S659.455 431.836 659.455 573.494c0 107.388 60.194 199.345 145.342 237.561C672.527 846.648 576 959.994 576 1094.334v116.547c0 3.085 2.333 5.119 5.654 5.119h629.334c3.321 0 6.013-2.034 6.013-5.119v-116.547c-.001-135.897-98.966-250.305-233.595-284.479z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMeeting);
export default ForwardRef;
