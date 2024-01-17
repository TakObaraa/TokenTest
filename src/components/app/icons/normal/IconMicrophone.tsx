import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMicrophone = (
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
    <path d="M401.5 218.2V245c0 40-16.2 76.2-42.5 102.5-26.3 26.3-62.5 42.5-102.5 42.5s-76.2-16.2-102.5-42.5c-26.3-26.3-42.5-62.5-42.5-102.5v-26.7H76.1V245c0 91.5 68.4 167 156.8 178.7V512h47.2v-88.4C368.5 412 436.9 336.5 436.9 245v-26.7l-35.4-.1z" />
    <path d="M256.5 325.1c44.2 0 80.1-35.9 80.1-80.1V80.1c0-44.2-35.9-80.1-80.1-80.1-44.2 0-80.1 35.9-80.1 80.1v164.8c0 44.2 35.9 80.2 80.1 80.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMicrophone);
export default ForwardRef;
