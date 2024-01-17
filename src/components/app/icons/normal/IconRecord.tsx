import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconRecord = (
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
    <path
      d="M37.571 128z"
      style={{
        fill: '#fff',
      }}
    />
    <path d="M458.218 73.143h-36.647V41.71c0-23.036-16.34-41.71-36.496-41.71H55.782C35.626 0 19.286 18.674 19.286 41.71v355.437c0 23.036 16.34 41.71 36.496 41.71h36.647v31.433c0 23.036 16.34 41.71 36.496 41.71h329.293c20.156 0 36.496-18.674 36.496-41.71V114.853c0-23.036-16.34-41.71-36.496-41.71zM74.143 384V54.857h292.571V384H74.143zm365.714 73.143H147.286v-18.286h237.789c20.156 0 36.496-18.674 36.496-41.71V128h18.286v329.143z" />
    <path d="M129 109.714h182.857v36.571H129zM129 201.143h182.857v36.571H129zM129 292.571h182.857v36.571H129z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconRecord);
export default ForwardRef;
