import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconList = (
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
    <path d="M0-1h73.143v73.143H0zM146.286-1H512v73.143H146.286zM0 145.286h73.143v73.143H0zM146.286 145.286H512v73.143H146.286zM0 291.571h73.143v73.143H0zM146.286 291.571H512v73.143H146.286zM0 437.857h73.143V511H0zM146.286 437.857H512V511H146.286z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconList);
export default ForwardRef;
