import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconReply = (
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
      d="m49.059 830.537 605.538-706.409C691.141 81.496 761 107.34 761 163.491V512s882.332 55.94 1009.003 1034.863c5.78 44.671-52.142 67.037-78.104 30.228C1576.685 1413.734 1321.602 1217.168 761 1216v412.509c0 56.151-69.859 81.995-106.403 39.363L49.059 961.463c-32.29-37.669-32.29-93.257 0-130.926z"
      style={{
        fill: '#5fd863',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconReply);
export default ForwardRef;
