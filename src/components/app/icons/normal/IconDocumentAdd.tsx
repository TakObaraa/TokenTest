import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDocumentAdd = (
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
    <path d="M384.9 509.7c-71.4 0-129.5-58.1-129.5-129.5s58.1-129.5 129.5-129.5 129.5 58.1 129.5 129.5-58.1 129.5-129.5 129.5zm0-219c-49.4 0-89.5 40.1-89.5 89.5s40.1 89.5 89.5 89.5 89.5-40.1 89.5-89.5-40.2-89.5-89.5-89.5z" />
    <path d="M362.4 435.9V324.4c0-11 9-20 20-20h5c11 0 20 9 20 20V436c0 11-9 20-20 20h-5c-11.1-.1-20-9-20-20.1z" />
    <path d="M329.1 364.3h111.6c11 0 20 9 20 20v5c0 11-9 20-20 20H329.1c-11 0-20-9-20-20v-5c0-11.1 8.9-20 20-20z" />
    <path d="M257.1 401.3h-209V48.6h160.3v96c0 17.8 14.5 32.3 32.3 32.3h96V260c14.9-6 31.1-9.3 48.1-9.3v-122L256.6.4H32C14.3.4 0 14.7 0 32.4v385c0 17.7 14.3 32 32 32h243.5c-9.1-14.4-15.5-30.7-18.4-48.1zm-.5-336.7 64.1 64.1h-64.1V64.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDocumentAdd);
export default ForwardRef;
