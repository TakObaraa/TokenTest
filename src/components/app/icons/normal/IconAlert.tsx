import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconAlert = (
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
    <path d="M417.948 323.99V219.045c0-37.074-16.078-70.788-42.335-95.902C369.108 59.109 321.27 0 256.799 0c-66.075 0-111.908 59.309-116.182 124.884-25.194 24.92-40.538 57.939-40.538 94.161V323.99c-22.278 6.706-38.329 25.507-38.329 47.668v.822c0 17.144 15.559 31.041 34.751 31.041h325.024c19.192 0 34.751-13.898 34.751-31.041v-.822c0-22.161-16.05-40.961-38.328-47.668zM257.419 78.5c-24.906 0-48.456 5.177-69.388 14.38 11.642-30.776 38.049-57.621 68.768-57.621 29.976 0 55.848 25.563 67.899 55.397-19.577-7.809-41.264-12.157-64.09-12.157h-3.189zM358.662 434.044c0 41.397-44.614 74.956-99.649 74.956s-99.649-33.559-99.649-74.956h199.298z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconAlert);
export default ForwardRef;
