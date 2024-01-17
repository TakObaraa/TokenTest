import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCancel = (
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
    <path d="m351.341 95.079-89.844 89.844a.702.702 0 0 1-.994 0l-89.844-89.844c-14.375-14.375-37.682-14.375-52.057 0l-25.523 25.523c-14.375 14.375-14.375 37.682 0 52.057l89.844 89.844a.702.702 0 0 1 0 .994l-89.844 89.844c-14.375 14.375-14.375 37.681 0 52.057l25.523 25.523c14.375 14.375 37.682 14.375 52.057 0l89.844-89.844a.702.702 0 0 1 .994 0l89.844 89.844c14.375 14.375 37.681 14.375 52.057 0l25.523-25.523c14.375-14.375 14.375-37.682 0-52.057l-89.844-89.844a.702.702 0 0 1 0-.994l89.844-89.844c14.375-14.375 14.375-37.682 0-52.057l-25.523-25.523c-14.375-14.375-37.682-14.375-52.057 0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCancel);
export default ForwardRef;
