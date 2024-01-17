import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconDocument = (
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
      d="M1472 1600H320V192h832l320 320z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M1152 0H255.749C185.195 0 128 57.195 128 127.749V1664.25c0 70.555 57.195 127.75 127.749 127.75H1536.25c70.554 0 127.749-57.195 127.749-127.749V512M1472 1472.251V1600H320V192h640v383.141C960 646.308 1017.692 704 1088.859 704H1472v768.251zM1408 512h-256V256"
      style={{
        fill: '#db6bc1',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconDocument);
export default ForwardRef;
