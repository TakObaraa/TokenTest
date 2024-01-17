import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconRepeat = (
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
    <path d="m502.825 298.66-22.28-9.534c16.052-106.723-41.662-214.961-146.467-258.094C212.693-18.927 72.726 38.49 21.293 159.257c-51.978 122.045 4.672 263.178 126.675 315.387 94.538 40.456 200.605 15.661 267.951-54.252 2.926-3.037 1.945-8.053-1.932-9.712l-86.29-36.926c-1.832-.784-3.943-.622-5.608.473-39.154 25.728-90.051 31.967-136.35 12.154-72.82-31.162-106.893-115.046-76.732-188.04 30.494-73.803 115.958-109.034 189.576-78.095 53.922 22.661 86.822 74.124 88.513 128.89l-26.703-11.427c-4.571-1.956-9.402 2.178-8.175 6.997l31.438 123.429c.975 3.827 5.316 5.685 8.757 3.748l110.994-62.478c4.334-2.44 3.989-8.789-.582-10.745z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconRepeat);
export default ForwardRef;
