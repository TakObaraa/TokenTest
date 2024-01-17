import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCancel = (
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
      d="M1212.194 308.277 897.74 622.731a2.46 2.46 0 0 1-3.479 0L579.806 308.277c-50.313-50.313-131.886-50.313-182.198 0l-89.331 89.331c-50.313 50.313-50.313 131.886 0 182.198L622.731 894.26a2.46 2.46 0 0 1 0 3.479l-314.455 314.455c-50.313 50.313-50.313 131.885 0 182.198l89.331 89.331c50.313 50.313 131.886 50.313 182.198 0l314.455-314.455a2.46 2.46 0 0 1 3.479 0l314.455 314.455c50.313 50.313 131.885 50.313 182.198 0l89.331-89.331c50.313-50.313 50.313-131.886 0-182.198L1169.269 897.74a2.46 2.46 0 0 1 0-3.479l314.455-314.455c50.313-50.313 50.313-131.886 0-182.198l-89.331-89.331c-50.313-50.313-131.886-50.313-182.199 0z"
      style={{
        fill: '#25569e',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCancel);
export default ForwardRef;
