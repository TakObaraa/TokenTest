import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCircular = (
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
    <path d="M442.867 1H77.133c-20.35 0-36.847 16.497-36.847 36.847v438.306c0 20.35 16.497 36.847 36.847 36.847h365.734c20.35 0 36.847-16.497 36.847-36.847V37.847C479.714 17.497 463.217 1 442.867 1zm-18.01 475.428H95.714V55.857h329.143v420.571z" />
    <path d="M188.143 55.911h146.286v48.476H188.143zM259.714 129.571c-70.692 0-128 57.308-128 128s57.308 128 128 128c70.693 0 128-57.308 128-128s-57.308-128-128-128zm-5.785 200.594-77.637-79.363 39.526-38.666 43.131 44.091 59.289-57.999 34.505 35.273-98.814 96.664z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCircular);
export default ForwardRef;
