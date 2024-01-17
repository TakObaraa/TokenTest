import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconVideomeeting = (
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
    <path d="M-.1 16v.3-.7.4zM284.7 87.5H25.2c-14 0-25.3 11.3-25.3 25.3v286.4c0 14 11.3 25.3 25.3 25.3h259.4c14 0 25.3-11.3 25.3-25.3V112.8c.2-14-11.2-25.3-25.2-25.3zM502.2 132.5c-6.1-4.8-14.1-6.5-21.7-4.7L356.9 158c-11.4 2.8-19.4 12.9-19.4 24.6v60c0 .4 0 .8.1 1.2 0 .4-.1.8-.1 1.2v60c0 11.7 8 21.9 19.4 24.6l123.7 30.1c7.6 1.8 15.5.1 21.7-4.7 6.1-4.8 9.7-12.2 9.7-19.9V152.5c-.1-7.8-3.7-15.1-9.8-20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconVideomeeting);
export default ForwardRef;
