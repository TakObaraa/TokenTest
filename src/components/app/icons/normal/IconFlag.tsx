import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconFlag = (
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
    <path d="M58.093 505h-.757c-20.699 0-37.479-16.78-37.479-37.479V48.764c0-20.699 16.78-37.479 37.479-37.479h.757c20.699 0 37.479 16.78 37.479 37.479v418.757C95.571 488.22 78.792 505 58.093 505zM306.634 41.511c-7.237-5.532-83.608-61.112-162.914-6.879-6.16 4.213-9.863 11.18-9.863 18.643v226.319c0 16.394 16.915 27.297 31.865 20.569 71.873-32.345 136.063 15.539 141.147 19.473.245.19.493.375.746.555 98.125 70.009 162.185 26.305 182.921 7.252a22.587 22.587 0 0 0 7.321-16.63V80.369c0-16.159-16.491-27.057-31.367-20.748-34.205 14.505-92.914 26.324-158.588-17.203a22.634 22.634 0 0 1-1.268-.907z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFlag);
export default ForwardRef;
