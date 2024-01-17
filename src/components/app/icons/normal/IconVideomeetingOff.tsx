import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconVideomeetingOff = (
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
    <path d="m338.1 339.2-27.6-27.6L120 121.2 52.7 53.8 21.5 84.9l36.2 36.2h-32c-14 0-25.3 11.3-25.3 25.3v286.4c0 14 11.3 25.3 25.3 25.3h259.4c14 0 25.3-11.3 25.3-25.3v-59l78.8 78.8 31.1-31.1-56.8-56.8-25.4-25.5zM310.4 249.4V146.5c.1-14-11.3-25.3-25.3-25.3H182.2l128.2 128.2zM502.7 166.2c-6.1-4.8-14.1-6.5-21.7-4.7l-123.6 30.2c-11.4 2.8-19.4 12.9-19.4 24.6v60.8l107.7 107.7 35.3 8.6c7.6 1.8 15.5.1 21.7-4.7 6.1-4.8 9.7-12.2 9.7-19.9V186.2c0-7.8-3.6-15.1-9.7-20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconVideomeetingOff);
export default ForwardRef;
