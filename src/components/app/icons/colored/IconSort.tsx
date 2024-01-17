import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconSort = (
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
      d="M944.022 632.663c49.487-49.487 49.487-129.722 0-179.209L671.588 181.02 490.569 0 37.115 453.454c-49.487 49.487-49.487 129.722 0 179.209l1.81 1.81c49.487 49.487 129.722 49.487 179.209 0l144.434-144.434v950.3c0 69.985 56.734 126.72 126.72 126.72h2.56c69.986 0 126.72-56.734 126.72-126.72v-950.3l144.434 144.434c49.487 49.487 129.722 49.487 179.209 0l1.811-1.81z"
      style={{
        fill: '#6bdb6f',
      }}
    />
    <path
      d="M1754.885 1159.337c49.487 49.487 49.487 129.722 0 179.209L1482.45 1610.98 1301.431 1792l-453.453-453.454c-49.487-49.487-49.487-129.722 0-179.209l1.81-1.81c49.487-49.487 129.722-49.487 179.209 0l144.434 144.434v-950.3c0-69.986 56.734-126.72 126.72-126.72h2.56c69.986 0 126.72 56.734 126.72 126.72v950.3l144.434-144.434c49.487-49.487 129.722-49.487 179.209 0l1.811 1.81z"
      style={{
        fill: '#5f8bd8',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSort);
export default ForwardRef;
