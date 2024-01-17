import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconUserMale = (
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
    <path d="M311.641 280.225C364.153 258.021 401 206.028 401 145.429 401 64.638 335.506-.856 254.714-.856S108.429 64.638 108.429 145.429c0 61.238 37.629 113.687 91.025 135.488-82.953 20.307-143.597 84.951-143.597 161.561v66.47c0 1.759 1.689 3.052 3.771 3.052h394.743c2.083 0 3.771-1.293 3.771-3.052v-66.47c.001-77.502-62.063-142.758-146.501-162.253z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconUserMale);
export default ForwardRef;
