import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCollection = (
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
      cx={896}
      cy={896}
      r={896}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M896 0C401.153 0 0 401.153 0 896s401.153 896 896 896 896-401.153 896-896S1390.847 0 896 0zm0 1666c-424.155 0-768-343.845-768-768s343.845-768 768-768 768 343.845 768 768-343.845 768-768 768z"
      style={{
        fill: '#db6f6b',
      }}
    />
    <path
      d="M1021.594 881.093c120.22-49.998 204.576-167.075 204.576-303.531 0-181.924-149.943-329.403-334.906-329.403S556.357 395.638 556.357 577.562c0 137.894 86.146 255.999 208.392 305.089C574.839 928.377 436 1073.942 436 1246.452v149.676c0 3.962 3.866 6.873 8.634 6.873h903.721c4.769 0 8.645-2.911 8.645-6.873v-149.676c0-174.518-142.094-321.463-335.406-365.359z"
      style={{
        fill: '#5fa4d8',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCollection);
export default ForwardRef;
