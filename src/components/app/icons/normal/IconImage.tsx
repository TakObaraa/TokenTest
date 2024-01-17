import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconImage = (
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
    <path d="M0 0v512h512V0H0zm475.429 475.429H36.571V36.571h438.857v438.858h.001z" />
    <circle cx={146.286} cy={128} r={54.857} />
    <path d="M438.285 439.143 310.857 146.286l-85.608 152.192-60.678-60.764-90.856 201.429h291.999l-.071-.071z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconImage);
export default ForwardRef;
