import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconChat = (
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
    <path d="M416.44 0H40.705C18.225 0 .001 25.659.001 57.312V235.26c0 30.75 17.2 55.841 38.792 57.247L15.996 421.495c-3.759 21.267 24.061 32.719 36.364 14.97l99.745-143.894H416.44c22.48 0 40.704-25.659 40.704-57.312V57.312C457.144 25.659 438.92 0 416.44 0z" />
    <path d="M493.715 242.058v28.71c0 36.853-19.682 66.661-43.961 66.661H164.273l-17.986 27.978v48.752c0 23.739 14.579 42.984 32.563 42.984h174.065l59.431 49.526c11.371 9.476 28.398-.287 25.965-14.887l-5.773-34.639h46.899c17.984 0 32.563-19.245 32.563-42.984V280.698c.001-16.979-7.457-31.656-18.285-38.64z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconChat);
export default ForwardRef;
