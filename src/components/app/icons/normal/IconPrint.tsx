import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconPrint = (
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
    <path d="M480 207h-53c-17.673 0-32 14.327-32 32v30H117v-30c0-17.673-14.327-32-32-32H32c-17.673 0-32 14.327-32 32v207c0 17.673 14.327 32 32 32h53c17.673 0 32-14.327 32-32v-37h278v37c0 17.673 14.327 32 32 32h53c17.673 0 32-14.327 32-32V239c0-17.673-14.327-32-32-32z" />
    <path d="M359 202c0 17.673-14.327 32-32 32H184c-17.673 0-32-14.327-32-32V49c0-17.673 14.327-32 32-32h143c17.673 0 32 14.327 32 32v153zM357 474c0 13.807-11.193 25-25 25H180c-13.807 0-25-11.193-25-25s11.193-25 25-25h152c13.807 0 25 11.193 25 25z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPrint);
export default ForwardRef;
