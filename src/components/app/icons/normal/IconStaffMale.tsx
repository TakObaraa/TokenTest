import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStaffMale = (
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
    <path d="M319.001 281.743c52.091-22.389 88.571-74.162 88.571-134.457C407.571 66.494 342.077 1 261.286 1S115 66.494 115 147.286c0 60.215 36.383 111.93 88.363 134.367-82.906 20.332-143.506 84.957-143.506 161.539v66.47c0 1.759 1.689 3.052 3.771 3.052h394.743c2.083 0 3.771-1.293 3.771-3.052v-66.47c.001-76.47-60.422-141.018-143.141-161.449zM411.858 461H294.429v-84h117.429v84z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStaffMale);
export default ForwardRef;
