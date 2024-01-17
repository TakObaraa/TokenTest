import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconPluralReply = (
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
    <path d="M129.392 241.511 251.588 50.716c9.312-14.54 31.841-7.944 31.841 9.322v87.247s183.793 15.596 214.333 285.577c1.501 13.27-16.021 19.383-23.118 8.07-27.735-44.212-82.818-92.35-191.215-92.504v105.533c0 17.267-22.529 23.863-31.841 9.322L129.392 272.489a28.717 28.717 0 0 1 0-30.978z" />
    <path d="m91.384 241.523 81.187-126.765V60.164c0-17.303-22.576-23.913-31.909-9.342L18.527 241.523a28.694 28.694 0 0 0 0 30.953l122.136 190.702c9.332 14.571 31.909 7.961 31.909-9.342v-54.595L91.384 272.477a28.696 28.696 0 0 1 0-30.954z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPluralReply);
export default ForwardRef;
