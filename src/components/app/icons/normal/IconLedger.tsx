import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconLedger = (
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
    <path d="M388.318 31.635H118.465c-12.42 0-22.488 10.04-22.488 22.424v67.656h-73.49C10.068 121.715 0 131.783 0 144.203v311.08c0 12.42 10.068 22.488 22.488 22.488h371.047c12.42 0 22.488-10.068 22.488-22.488v-66.731h73.489c12.42 0 22.488-10.04 22.488-22.424V156.365L388.318 31.635zm70.323 122.855h-70.169v-32.775h-1.091V83.23l71.26 71.26zm-92.903 271.747H49.036V173.249h46.942v192.878c0 12.385 10.068 22.424 22.488 22.424h247.273v37.686zm94.158-116.596v28.172H147.004V83.769h199.113V168.26c0 15.694 12.821 28.416 28.636 28.416h85.143v112.965z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconLedger);
export default ForwardRef;
