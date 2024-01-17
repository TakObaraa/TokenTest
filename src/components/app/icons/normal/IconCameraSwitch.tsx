import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCameraSwitch = (
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
    <path d="M478.8 136h-58.5c-13 0-24.9-7.7-30.2-19.7L372.5 77c-5.3-12-17.2-19.7-30.2-19.7H170.7c-13 0-24.9 7.7-30.3 19.7l-17.5 39.2c-5.3 12-17.2 19.7-30.2 19.7H34.2C15.9 136 1 151 1 169.5v251.8c0 18.5 14.8 33.4 33.2 33.4h444.5c18.3 0 33.2-15 33.2-33.4V169.5c.1-18.5-14.8-33.5-33.1-33.5zM370 296c-16.5 92.3-131.3 97.5-131.3 97.5v32.8c0 5.3-9.1 7.7-13.8 3.7l-78.8-66.6c-4.2-3.5-4.2-8.8 0-12.3l78.8-66.6c4.8-4 13.8-1.6 13.8 3.7v38.9c73-.1 106.2-18.6 121.1-34 3.4-3.4 11-1.3 10.2 2.9zm-3.1-84.8-78.8 66.6c-4.8 4-13.8 1.6-13.8-3.7v-38.9c-73 .1-106.2 18.6-121.1 34-3.4 3.5-10.9 1.4-10.2-2.8 16.5-92.3 131.3-97.5 131.3-97.5V136c0-5.3 9.1-7.7 13.8-3.7l78.8 66.6c4.2 3.5 4.2 8.7 0 12.3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCameraSwitch);
export default ForwardRef;
