import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconWhoami = (
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
      d="M645.617 1218.501C793.397 1146.595 895 996.952 895 824c0-243.005-200.576-440-448-440S-1 580.995-1 824c0 170.108 98.292 317.664 242.134 390.887C104.563 1237.24-1 1386.71-1 1567.773V1792h896v-189.139c0-191.505-107.491-350.835-249.383-384.36z"
      style={{
        fill: '#6bc1db',
      }}
    />
    <circle
      cx={1304.394}
      cy={1472.394}
      r={192.394}
      style={{
        fill: '#25569e',
      }}
    />
    <path
      d="M1347.981 0C1102.777 0 904 198.779 904 443.985A447.38 447.38 0 0 0 909.18 512h191.966c-5.953-21.656-9.148-44.453-9.148-68 0-141.385 114.614-256 255.998-256s255.998 114.615 255.998 256-68.998 260-255.996 256L1215 704v448h192V884.073c217-28.863 384.964-214.892 384.964-440.088C1791.964 198.779 1593.184 0 1347.981 0z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconWhoami);
export default ForwardRef;
