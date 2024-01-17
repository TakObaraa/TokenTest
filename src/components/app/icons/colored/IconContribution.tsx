import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconContribution = (
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
      d="M165 1562h1344v192H165z"
      style={{
        fill: '#26a028',
      }}
    />
    <path
      d="M647.534 47.09h596v1307h-596z"
      style={{
        fill: '#f39c12',
      }}
      transform="scale(-1) rotate(47.002 1611.1 -2174.452)"
    />
    <path
      d="m670.765 1364.15-441.926 5.06 35.772-440.607z"
      style={{
        fill: '#fbcc95',
      }}
    />
    <path d="m375.451 1367.113-147.309 1.686 11.924-146.869z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconContribution);
export default ForwardRef;
