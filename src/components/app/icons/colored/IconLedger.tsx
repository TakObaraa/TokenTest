import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconLedger = (
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
    <path
      d="M416.023 455.283c0 12.42-10.068 22.488-22.488 22.488H22.488C10.068 477.771 0 467.703 0 455.283v-311.08c0-12.42 10.068-22.488 22.488-22.488h371.047c12.42 0 22.488 10.068 22.488 22.488v311.08z"
      style={{
        fill: '#29abe2',
      }}
    />
    <path
      d="M49.036 173.249h316.702v252.988H49.036zM459.401 156.206h-70.929V85.277"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M351.044 75.816v87.457c0 16.245 13.169 29.414 29.414 29.414h87.457v146.088H146.52V75.816h204.524z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M388.318 31.635H118.465c-12.42 0-22.488 10.04-22.488 22.424v312.068c0 12.385 10.068 22.424 22.488 22.424h371.047c12.42 0 22.488-10.04 22.488-22.424V156.365L388.318 31.635zm-.937 51.595 71.26 71.26h-71.26V83.23zm72.515 226.411v28.172H147.004V83.769h199.113V168.26c0 15.694 12.821 28.416 28.636 28.416h85.143v112.965z"
      style={{
        fill: '#7ddd6c',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconLedger);
export default ForwardRef;
