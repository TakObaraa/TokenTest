import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconEdit = (
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
      d="M576.362 241.763h596v1307h-596z"
      style={{
        fill: '#db8e00',
      }}
      transform="scale(-1) rotate(-48 -2010.91 1963.978)"
    />
    <path
      d="m1559.344 1111.153 43.557 439.804-442.047 2.765z"
      style={{
        fill: '#fbcc95',
      }}
    />
    <path d="m1588.034 1405.086 14.519 146.601-147.349.922z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconEdit);
export default ForwardRef;
