import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStaffMale = (
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
      d="M1099.003 982.599C1281.322 904.236 1409 723.032 1409 512c0-282.77-229.23-512-512-512S385 229.23 385 512c0 210.751 127.339 391.754 309.271 470.286C404.1 1053.447 192 1279.634 192 1547.673v232.645c0 6.157 5.91 10.682 13.2 10.682h1381.6c7.29 0 13.2-4.525 13.2-10.682v-232.645c0-267.647-211.48-493.565-500.997-565.074z"
      style={{
        fill: '#6b7edb',
      }}
    />
    <path
      d="M1013 1316h411v294h-411z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStaffMale);
export default ForwardRef;
