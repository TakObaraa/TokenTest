import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconPencil = (
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
    <path d="M399.272 196.233 192.295 403.211c-4.224 4.224-11.919 3.378-17.186-1.889l-64.972-64.972c-5.268-5.268-6.113-12.962-1.889-17.186l206.977-206.977c4.224-4.224 11.919-3.378 17.186 1.889l64.972 64.972c5.268 5.267 6.113 12.961 1.889 17.185zM459.705 135.589 379.25 55.134l34.881-34.881c4.342-4.342 11.381-4.342 15.722 0l64.733 64.733c4.342 4.342 4.342 11.381 0 15.722l-34.881 34.881zM129.064 461.733l-76.51-76.655-31.409 103.65z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPencil);
export default ForwardRef;
