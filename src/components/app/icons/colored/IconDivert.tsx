import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDivert = (
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
      d="m1743.347 829.65-605.538-706.409c-36.544-42.632-106.403-16.788-106.403 39.363v348.509S149.074 567.053 22.403 1545.976c-5.78 44.672 52.142 67.037 78.104 30.228 115.215-163.357 370.298-359.923 930.9-361.091v412.509c0 56.151 69.859 81.995 106.403 39.363l605.538-706.409c32.289-37.67 32.289-93.257-.001-130.926z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDivert);
export default ForwardRef;
