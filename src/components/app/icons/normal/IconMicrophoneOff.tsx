import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconMicrophoneOff = (
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
    <path d="M436.9 245v-26.7h-35.4V245c0 20.7-4.4 40.4-12.2 58.2l26.4 26.4c13.5-25.2 21.2-54 21.2-84.6zM336.6 245V80.1c0-44.2-35.9-80.1-80.1-80.1-44.2 0-80.1 35.9-80.1 80.1v10.1l160.1 160.1c.1-1.8.1-3.5.1-5.3zM394.3 361.1c.2-.2.4-.5.6-.7l-25.1-25.1c-.2.2-.4.5-.6.7l-46.3-46.3c.2-.3.4-.5.6-.8L176.4 141.8v1.3L85.1 51.9 59.3 77.7l117.1 117.1V245c0 44.2 35.9 80.1 80.1 80.1 14.4 0 27.9-3.9 39.6-10.6l46.7 46.7c-24.2 18-53.9 28.8-86.3 28.8-40 0-76.2-16.2-102.5-42.5-26.3-26.3-42.5-62.5-42.5-102.5v-26.7H76.1V245c0 91.5 68.4 167 156.8 178.7V512h47.2v-88.4c32.9-4.3 63-17.7 87.9-37.3l59.9 59.9 25.8-25.8-59.4-59.3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMicrophoneOff);
export default ForwardRef;
