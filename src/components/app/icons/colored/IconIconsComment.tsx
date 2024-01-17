import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconIconsComment = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="120 -8.1 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path fill="#324D5B" d="M125.5-8.1v32h-2v-32h2z" />
    <path fill="#CB4E44" d="M137.5-3.1h13v19h-13v-19z" />
    <path fill="#D8B863" d="M140.5-3.1v3h10v-3h-10zm-3 19h13v-3h-13v3z" />
    <path fill="#A28A4A" d="M137.5 12.9h3l-3 3v-3z" />
    <path fill="#E2574C" d="M125.5-6.1h15v19h-15v-19z" />
    <path fill="#F1CD6E" d="M125.5-6.1v3h15v-3h-15zm0 19h15v-3h-15v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconIconsComment);
export default ForwardRef;
