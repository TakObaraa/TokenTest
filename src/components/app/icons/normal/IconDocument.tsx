import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDocument = (
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
    <path d="M332.143-1H76.071c-20.158 0-36.5 16.341-36.5 36.5v439c0 20.159 16.341 36.5 36.5 36.5h365.857c20.158 0 36.5-16.341 36.5-36.5V145.286m-54.857 274.357v36.5H94.428V53.857h182.857v109.469c0 20.333 16.483 36.817 36.817 36.817h109.469v219.5zm-18.285-274.357h-73.143V72.143" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDocument);
export default ForwardRef;
