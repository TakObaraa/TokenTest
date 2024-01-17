import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconExclamationSign = (
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
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm47 418.1c0 11-9 20-20 20h-47.5c-11 0-20-9-20-20v-45.8c0-11 9-20 20-20H283c11 0 20 9 20 20v45.8zm0-138c0 11-9 20-20 20h-47.5c-11 0-20-9-20-20V89.4c0-11 9-20 20-20H283c11 0 20 9 20 20v190.7z"
      style={{
        fill: '#d43e3a',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconExclamationSign);
export default ForwardRef;
