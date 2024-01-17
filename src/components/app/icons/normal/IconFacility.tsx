import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconFacility = (
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
    <path d="M488.383 181.126 418.835 69.279c-6.719-10.806-18.849-17.422-31.943-17.422H124.807c-13.073 0-25.187 6.595-31.913 17.375l-69.49 111.363c-14.873 23.835 2.959 54.163 31.867 54.198l17.873.022v256.756h109.429V344.429h146.286v147.143h110V235.256l17.536.021c28.922.035 46.83-30.28 31.988-54.151z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconFacility);
export default ForwardRef;
