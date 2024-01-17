import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconUserMale = (
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
      d="M1087.242 981.786C1271.034 904.072 1400 722.097 1400 510c0-282.77-229.23-512-512-512S376 227.23 376 510c0 214.333 131.7 397.905 318.589 474.208C404.255 1055.281 192 1281.536 192 1549.673v232.645c0 6.158 5.91 10.683 13.2 10.683h1381.6c7.29 0 13.2-4.525 13.2-10.683v-232.645c0-271.258-217.224-499.657-512.758-567.887z"
      style={{
        fill: '#6bc1db',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconUserMale);
export default ForwardRef;
