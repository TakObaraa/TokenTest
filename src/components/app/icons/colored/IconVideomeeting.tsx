import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconVideomeeting = (
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
      d="M996.6 306.4H88.5c-49 0-88.5 39.5-88.5 88.5V1397c0 49 39.5 88.5 88.5 88.5h907.7c49 0 88.5-39.5 88.5-88.5V394.9c.8-49-39.1-88.5-88.1-88.5zM1757.7 463.8c-21.3-16.8-49.3-22.7-75.9-16.4l-432.5 105.7c-39.9 9.8-67.9 45.1-67.9 86.1v210c0 1.4 0 2.8.3 4.2 0 1.4-.3 2.8-.3 4.2v210c0 40.9 28 76.6 67.9 86.1l432.9 105.3c26.6 6.3 54.2.3 75.9-16.4 21.3-16.8 33.9-42.7 33.9-69.6V533.8c-.3-27.3-12.9-52.8-34.3-70z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconVideomeeting);
export default ForwardRef;
