import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconIconsCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="80 -8.1 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fill="#D07C40"
      d="M112 3.9c-.1-.4-.4-.8-.7-1.2l-13.2-10c-1.7-1.3-2.6-1.3-4.3 0l-13.1 10c-.3.3-.6.7-.7 1.2l16 14 16-14z"
    />
    <path fill="#E4E7E7" d="M84-5.1h24v20H84v-20z" />
    <path
      fill="#E8AB54"
      d="M81.7 22.6 96 11.4l14.4 11.2c.5-.3 1-.7 1.3-1.2L98.2 10.8c-1.7-1.3-2.6-1.3-4.3 0L80.4 21.4c.3.5.8.9 1.3 1.2z"
    />
    <path fill="#C2C5C5" d="M88-.1v2h16v-2H88zm0 6h16v-2H88v2z" />
    <path
      fill="#E8AB54"
      d="m96 15.9 16-12v17c0 1.7-1.3 3-3 3H83c-1.7 0-3-1.3-3-3v-17l16 12z"
    />
    <path
      fill="#F4B459"
      d="M109.4 23.9c.6-.1 1.2-.3 1.7-.8L96 11.4 81 23.1c.5.4 1 .7 1.7.8h26.7z"
    />
    <path
      fill="#F9D7A7"
      d="M80.4 22.4c.3.5.7 1 1.3 1.2L96 12.4l14.4 11.2c.5-.3 1-.7 1.3-1.2L98.2 11.8c-1.9-1.4-2.3-1.5-4.3 0L80.4 22.4z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconIconsCheck);
export default ForwardRef;
