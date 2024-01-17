import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDownload = (
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
    <path d="M476.987 484.219H33.944c-15.218 0-27.599-12.381-27.599-27.599V173.385c0-15.218 12.381-27.599 27.599-27.599h79.053v50H56.346v238.433h398.24V195.786h-58.607v-50h81.009c15.218 0 27.599 12.381 27.599 27.599V456.62c-.001 15.218-12.382 27.599-27.6 27.599z" />
    <path d="m107.415 248.908 94.856 94.856v1.522h1.522l49.033 49.033a3.735 3.735 0 0 0 5.281 0l145.411-145.411c2.352-2.352.686-6.374-2.64-6.374h-94.657V36.58h-103.95v205.954h-92.216c-3.327 0-4.993 4.022-2.64 6.374z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDownload);
export default ForwardRef;
