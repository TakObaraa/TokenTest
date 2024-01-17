import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconInfo = (
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
      d="M256 128h1280v1536H256z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M128 126.244v1539.512C128 1735.479 184.521 1792 254.244 1792h1283.512c69.723 0 126.244-56.521 126.244-126.244V126.244C1664 56.521 1607.479 0 1537.756 0H254.244C184.521 0 128 56.521 128 126.244zM1536 1664H256V128h1280v1536z"
      style={{
        fill: '#db9b6b',
      }}
    />
    <path
      d="M983.406 745.855c83.733-38.925 142.492-130.096 142.492-236.361 0-141.658-104.417-256.494-233.222-256.494S659.455 367.836 659.455 509.494c0 107.388 60.194 199.345 145.342 237.561C672.527 782.648 576 895.994 576 1030.334v116.547c0 3.085 2.333 5.119 5.654 5.119h629.334c3.321 0 6.013-2.034 6.013-5.119v-116.547c-.001-135.897-98.966-250.305-233.595-284.479zM512 1408h768v128H512z"
      style={{
        fill: '#6bc1db',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconInfo);
export default ForwardRef;
