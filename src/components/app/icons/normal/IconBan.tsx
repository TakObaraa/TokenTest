import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconBan = (
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
    <path d="M260.398 19C130.756 19 25.661 125.439 25.661 256.737s105.096 237.737 234.737 237.737 234.737-106.439 234.737-237.737S390.04 19 260.398 19zm0 48.613c41.718 0 80.237 13.859 111.323 37.273L109.066 367.542c-22.268-31.141-35.405-69.416-35.405-110.805 0-104.45 83.605-189.124 186.737-189.124zm0 378.248c-41.718 0-80.237-13.859-111.323-37.273L411.73 145.932c22.268 31.14 35.405 69.416 35.405 110.805 0 104.45-83.605 189.124-186.737 189.124z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconBan);
export default ForwardRef;
