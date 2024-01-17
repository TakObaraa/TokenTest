import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconReply = (
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
    <path d="M14.017 239.296 187.028 37.465c10.441-12.181 30.401-4.797 30.401 11.247v99.574s252.095 15.983 288.287 295.675c1.651 12.763-14.898 19.153-22.315 8.637-32.918-46.673-105.799-102.835-265.971-103.169v117.86c0 16.043-19.96 23.427-30.401 11.247L14.017 276.704c-9.226-10.763-9.226-26.645 0-37.408z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconReply);
export default ForwardRef;
