import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconThList = (
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
    <path d="M106 147H16c-8.837 0-16-7.163-16-16V41c0-8.837 7.163-16 16-16h90c8.837 0 16 7.163 16 16v90c0 8.837-7.163 16-16 16zM496 145H190c-8.837 0-16-7.163-16-16V43c0-8.837 7.163-16 16-16h306c8.837 0 16 7.163 16 16v86c0 8.837-7.163 16-16 16zM106 321H16c-8.837 0-16-7.163-16-16v-90c0-8.837 7.163-16 16-16h90c8.837 0 16 7.163 16 16v90c0 8.837-7.163 16-16 16zM496 319H190c-8.837 0-16-7.163-16-16v-86c0-8.837 7.163-16 16-16h306c8.837 0 16 7.163 16 16v86c0 8.837-7.163 16-16 16zM106 489H16c-8.837 0-16-7.163-16-16v-90c0-8.837 7.163-16 16-16h90c8.837 0 16 7.163 16 16v90c0 8.837-7.163 16-16 16zM496 487H190c-8.837 0-16-7.163-16-16v-86c0-8.837 7.163-16 16-16h306c8.837 0 16 7.163 16 16v86c0 8.837-7.163 16-16 16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconThList);
export default ForwardRef;
