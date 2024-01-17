import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconSearch = (
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
    <circle
      cx={816}
      cy={792}
      r={640}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="m1627.024 1488.616-268.852-274.022c96.085-120.354 153.533-272.91 153.533-438.889 0-388.809-315.191-704-704-704s-704 315.191-704 704 315.191 704 704 704c130.446 0 252.605-35.48 357.355-97.315 2.646 3.3 5.48 6.5 8.505 9.583l270.723 275.93c49.014 49.956 129.245 50.721 179.201 1.707l1.827-1.793c49.957-49.013 50.722-129.245 1.708-179.201zM263.705 775.705c0-300.443 243.557-544 544-544s544 243.557 544 544-243.557 544-544 544-544-243.557-544-544z"
      style={{
        fill: '#9b6bdb',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSearch);
export default ForwardRef;
