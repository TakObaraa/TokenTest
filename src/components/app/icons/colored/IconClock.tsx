import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconClock = (
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
    <circle
      cx={897}
      cy={896}
      r={704}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M896 64C436.499 64 64 436.499 64 896s372.499 832 832 832 832-372.499 832-832S1355.501 64 896 64zm0 1472c-353.462 0-640-286.538-640-640s286.538-640 640-640 640 286.538 640 640-286.538 640-640 640z"
      style={{
        fill: '#d8635f',
      }}
    />
    <path
      d="M961.28 448h-2.56C888.734 448 832 504.734 832 574.72V832H632.72C562.734 832 506 888.734 506 958.72v2.561c0 69.985 56.734 126.72 126.72 126.72h334.953c66.455 0 120.327-53.872 120.327-120.327V574.72c0-69.986-56.734-126.72-126.72-126.72z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconClock);
export default ForwardRef;
