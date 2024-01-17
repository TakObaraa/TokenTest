import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMessageUnread = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 556.8 571.5"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m259.2 296.3 175.8-63c10.6-3.8 10.8-18.7.2-22.8L357.9 181C398.3 76 453.4 42.2 492.3 32.3c8.8-2.2 8.7-14.7-.1-16.8-192.6-46.4-266.3 115-266.3 115l-65.3-25c-10.5-4-20.4 7.2-15 17.1l89.1 164.1c4.7 8.9 15.1 12.9 24.5 9.6z" />
    <path d="M509 243 275.8 411.6c-12 7.8-27.5 7.8-39.6 0L3 243c-2 5.8-3 12-3 18.5v197.2c0 .9-.1 56.5 0 57.5h.1c1 30.7 26.2 55.3 57.1 55.3h397.6c30.9 0 56.1-24.6 57.2-55.3h.1V261.5c-.1-6.5-1.2-12.7-3.1-18.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMessageUnread);
export default ForwardRef;
