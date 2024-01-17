import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconUserFemale = (
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
      d="M1072.559 991.739c58.683-21.559 112.325-53.554 158.675-93.739H1408V514h-.019c.006-1 .019-1.999.019-3 0-282.77-229.23-512-512-512S384 228.23 384 511c0 1.001.013 2 .019 3H384v384h176.766c46.35 40.185 99.992 72.18 158.675 93.739C487.949 1066.306 320 1288.422 320 1550.844v231.527c0 6.128 4.835 10.629 10.8 10.629h1130.4c5.965 0 10.8-4.501 10.8-10.629v-231.527c0-262.422-167.949-484.538-399.441-559.105z"
      style={{
        fill: '#db6b94',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconUserFemale);
export default ForwardRef;
