import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconLock = (
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
    <path d="M447.929 162.431h-34.83c-4.822-82.388-73.152-147.716-156.75-147.716S104.422 80.043 99.599 162.431h-34.83c-16.568 0-30 13.431-30 30v275.26c0 16.569 13.432 30 30 30h383.16c16.568 0 30-13.431 30-30v-275.26c0-16.569-13.432-30-30-30zM281.826 342.089l4.758 89.074h-60.472l4.758-89.074c-17.4-9.168-29.269-27.421-29.269-48.456 0-30.236 24.511-54.747 54.747-54.747s54.748 24.511 54.748 54.747c0 21.034-11.869 39.288-29.27 48.456zM159.492 162.431c4.69-49.367 46.261-87.986 96.856-87.986 50.596 0 92.167 38.618 96.857 87.986H159.492z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconLock);
export default ForwardRef;
