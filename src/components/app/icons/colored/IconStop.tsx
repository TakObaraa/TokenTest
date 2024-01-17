import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStop = (
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
      cx={896}
      cy={896}
      r={896}
      style={{
        fill: '#935fd8',
      }}
    />
    <path
      d="M1600 959.978c0 70.705-57.317 128.022-128.022 128.022H320.022C249.317 1088 192 1030.683 192 959.978V832.022C192 761.317 249.317 704 320.022 704h1151.956C1542.683 704 1600 761.317 1600 832.022v127.956z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStop);
export default ForwardRef;
