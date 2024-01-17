import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCommentDarkgreen = (
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
      d="M896 144C436.499 144 64 444.865 64 816c0 190.572 98.223 362.608 256 484.905v236.558c0 70.046 78.067 111.826 136.349 72.972l219.373-146.249C745.883 1479.705 819.741 1488 896 1488c459.501 0 832-300.865 832-672s-372.499-672-832-672z"
      style={{
        fill: '#1abc9c',
      }}
    />
    <circle
      cx={480}
      cy={821}
      r={160}
      style={{
        fill: '#fff',
      }}
    />
    <circle
      cx={908.333}
      cy={821}
      r={160}
      style={{
        fill: '#fff',
      }}
    />
    <circle
      cx={1333.333}
      cy={821}
      r={160}
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCommentDarkgreen);
export default ForwardRef;
