import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconStaffFemale = (
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
      d="M1073.943 991.225c58.142-21.552 111.306-53.357 157.291-93.225H1408V514h-.019c.006-1 .019-1.999.019-3 0-282.77-229.23-512-512-512S384 228.23 384 511c0 1.001.013 2 .019 3H384v384h176.766c45.985 39.869 99.149 71.673 157.291 93.225C487.28 1066.324 320 1288.352 320 1550.578v231.817c0 6.136 4.835 10.605 10.8 10.605h1130.4c5.965 0 10.8-4.469 10.8-10.605v-231.817c0-262.226-167.281-484.254-398.057-559.353z"
      style={{
        fill: '#db6b94',
      }}
    />
    <path
      d="M888 1327h411v294H888z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconStaffFemale);
export default ForwardRef;
