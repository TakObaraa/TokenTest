import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconReceiver = (
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
    <path d="M361.952 40.882c-44.223 15.371-125.285 49.752-196.921 113.796C91.125 220.752 49.027 298.929 30.595 339.374c-21.957 25.791-17.016 70.549 12.68 103.765l37.148 41.552c5.956 6.663 14.967 8.324 20.126 3.712l104.007-95.112c5.159-4.612 4.513-13.752-1.443-20.415l-37.148-41.552c-6.736-7.535-13.326-14.549-19.793-20.706 18.152-32.352 42.282-65.593 74.155-94.088 30.127-26.934 63.962-46.759 96.788-61.348 5.326 6.987 11.45 14.183 18.059 21.575l37.148 41.552c5.956 6.663 14.967 8.324 20.126 3.712l106.122-92.746c5.159-4.612 4.513-13.752-1.443-20.415l-37.148-41.552c-28.432-31.803-69.902-42.22-98.027-26.426z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconReceiver);
export default ForwardRef;
