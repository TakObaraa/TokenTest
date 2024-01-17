import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMemo = (
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
      d="M1664 1600H320V1l959.564-.519L1664 384z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M1472 703.427V1600H320V192h639.157L1151.588 0H255.749C185.195 0 128 57.195 128 127.749V1664.25c0 70.555 57.195 127.75 127.749 127.75H1536.25c70.554 0 127.749-57.195 127.749-127.749V512.856L1472 703.427z"
      style={{
        fill: '#6baadb',
      }}
    />
    <path
      d="M921.481 50.627h430.633v944.581H921.481z"
      style={{
        fill: '#f39c12',
      }}
      transform="rotate(-134.999 1136.802 522.922)"
    />
    <path
      d="m955.012 1009.052-319.154 14.805 14.728-319.231z"
      style={{
        fill: '#fbcc95',
      }}
    />
    <path d="m741.846 1018.526-106.385 4.935 4.909-106.411z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMemo);
export default ForwardRef;
