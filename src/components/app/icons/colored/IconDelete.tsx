import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDelete = (
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
      d="M1664 1658.811c0 73.558-56.649 133.189-126.529 133.189H254.529C184.649 1792 128 1732.369 128 1658.811V645.189C128 571.631 184.649 512 254.529 512H1537.47c69.88 0 126.529 59.631 126.529 133.189v1013.622zM1665.489 184h-592.086c.577-7.319.597-14.795.597-22.4v-3.2C1074 70.918 1034.774 0 986.034 0H805.966C757.226 0 718 70.918 718 158.4v3.2c0 7.605.019 15.081.597 22.4H126.511C91.987 184 64 228.324 64 283v2c0 54.676 27.987 99 62.511 99h1538.977c34.524 0 62.511-44.324 62.511-99v-2c.001-54.676-27.986-99-62.51-99z"
      style={{
        fill: '#808c88',
      }}
    />
    <path
      d="M1472 1466.88c0 38.174-28.367 69.12-63.36 69.12h-1.28c-34.993 0-63.36-30.946-63.36-69.12V837.12c0-38.174 28.367-69.12 63.36-69.12h1.28c34.993 0 63.36 30.946 63.36 69.12v629.76zM960 1466.88c0 38.174-28.367 69.12-63.36 69.12h-1.28c-34.993 0-63.36-30.946-63.36-69.12V837.12c0-38.174 28.367-69.12 63.36-69.12h1.28c34.993 0 63.36 30.946 63.36 69.12v629.76zM448 1466.88c0 38.174-28.367 69.12-63.36 69.12h-1.28c-34.993 0-63.36-30.946-63.36-69.12V837.12c0-38.174 28.367-69.12 63.36-69.12h1.28c34.993 0 63.36 30.946 63.36 69.12v629.76z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDelete);
export default ForwardRef;