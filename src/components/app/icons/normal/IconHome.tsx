import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconHome = (
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
    <path d="M461.084 236.179 286.608 36.793c-14.616-16.703-40.6-16.703-55.216 0L56.269 236.919a67.478 67.478 0 0 0-16.697 44.436V512h146.285V347.429h146.286V512h146.286V282.339a70.094 70.094 0 0 0-17.345-46.16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconHome);
export default ForwardRef;
