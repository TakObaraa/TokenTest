import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconClock = (
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
    <path d="M255 17.286C123.714 17.286 17.286 123.714 17.286 255S123.714 492.714 255 492.714 492.714 386.286 492.714 255 386.286 17.286 255 17.286zm0 420.571c-100.989 0-182.857-81.868-182.857-182.857S154.011 72.143 255 72.143 437.857 154.011 437.857 255 355.989 437.857 255 437.857z" />
    <path d="M273.651 127h-.731c-19.996 0-36.206 16.21-36.206 36.206v73.509h-56.937c-19.996 0-36.206 16.21-36.206 36.206v.732c0 19.996 16.21 36.206 36.206 36.206h95.701c18.987 0 34.379-15.392 34.379-34.379V163.206c0-19.996-16.21-36.206-36.206-36.206z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconClock);
export default ForwardRef;
