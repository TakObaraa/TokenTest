import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconUpdate = (
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
    <path d="M1342.185 1616.939C1610.705 1468.803 1792 1187.417 1792 864.65c0-392.813-269-724.339-636-828.964v265.311c224 96.031 380 312.272 380 563.653 0 257.424-163.7 478-396.262 570.372L896 1216v576h641l-194.815-175.061z" />
    <path
      d="M449.815 174.904C181.295 323.04 0 604.348 0 927.114 0 1319.928 268.518 1651.375 636 1756v-265.311c-223.894-96.031-380-312.272-380-563.653 0-257.424 163.7-478 396.262-570.372L896 575.686V0H255l194.815 174.904z"
      style={{
        fill: '#5fd863',
      }}
    />
    <path
      d="M1342.185 1616.939C1610.705 1468.803 1792 1187.417 1792 864.65c0-392.813-269-724.339-636-828.964v265.311c224 96.031 380 312.272 380 563.653 0 257.424-163.7 478-396.262 570.372L896 1216v576h641l-194.815-175.061z"
      style={{
        fill: '#26a028',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconUpdate);
export default ForwardRef;
