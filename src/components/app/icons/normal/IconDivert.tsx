import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDivert = (
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
    <path d="M501.099 236.043 328.088 34.212c-10.441-12.181-30.401-4.797-30.401 11.247v99.574S45.592 161.016 9.4 440.708c-1.651 12.763 14.898 19.153 22.315 8.637 32.919-46.673 105.799-102.835 265.971-103.169v117.86c0 16.043 19.96 23.427 30.401 11.247L501.099 273.45c9.226-10.763 9.226-26.645 0-37.407z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDivert);
export default ForwardRef;
