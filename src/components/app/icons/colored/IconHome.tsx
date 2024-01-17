import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconHome = (
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
      d="M799.372 128.775 186.44 829.216A236.174 236.174 0 0 0 128 984.743V1792h1536V988.185a245.337 245.337 0 0 0-60.707-161.56l-610.665-697.85c-51.156-58.46-142.1-58.46-193.256 0z"
      style={{
        fill: '#5fa4d8',
      }}
    />
    <path
      d="M640 1216h512v576H640z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconHome);
export default ForwardRef;
