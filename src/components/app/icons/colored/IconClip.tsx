import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconClip = (
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
      d="m1354.772 718.205-3.62-3.62c-98.975-98.975-259.442-98.975-358.417-.001L719.396 987.923l-181.021 181.021 90.51 90.51 181.021-181.021 272.434-272.434c49.487-49.487 129.72-49.486 179.207.001l1.811 1.811c49.487 49.487 49.489 129.721.002 179.208l-272.434 272.434-181.019 181.019-2.263 2.263c-123.718 123.718-324.306 123.719-448.024.001l-4.526-4.526c-123.718-123.718-123.716-324.305.002-448.023l638.093-638.093c123.718-123.718 324.303-123.717 448.021.001l4.526 4.526c92.382 92.382 115.831 227.554 70.183 341.712l95.896 95.896c92.494-169.136 67.099-385.449-76.064-528.612l-6.364-6.364c-173.979-173.979-456.052-173.979-630.031-.001l-637.105 637.1c-173.979 173.979-173.98 456.054-.002 630.033l6.364 6.364c173.979 173.979 456.055 173.978 630.034-.001l1.768-1.768 181.019-181.019 273.339-273.339c98.976-98.974 98.974-259.443-.001-358.417z"
      style={{
        fill: '#808c88',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconClip);
export default ForwardRef;
