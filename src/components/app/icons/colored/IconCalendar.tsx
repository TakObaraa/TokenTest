import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCalendar = (
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
      d="M160 584h1472v1024H160z"
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M1531 256v5.035C1531 399.639 1418.639 512 1280.035 512h-5.07C1136.361 512 1024 399.639 1024 261.035V256H768v5.035C768 399.639 655.639 512 517.035 512h-5.07C373.361 512 261 399.639 261 261.035V256H125.312C56.104 256 0 312.104 0 381.312V1666.688C0 1735.896 56.104 1792 125.312 1792h1541.375c69.208 0 125.312-56.104 125.312-125.312V381.312C1792 312.104 1735.896 256 1666.688 256H1531zm69 1344H192V640h1408v960z"
      style={{
        fill: '#d35871',
      }}
    />
    <path
      d="M640 255.795C640 326.601 582.601 384 511.795 384h-2.59C438.399 384 381 326.601 381 255.795v-127.59C381 57.399 438.399 0 509.205 0h2.59C582.601 0 640 57.399 640 128.205v127.59zM1408 255.795C1408 326.601 1350.601 384 1279.795 384h-2.59C1206.399 384 1149 326.601 1149 255.795v-127.59C1149 57.399 1206.399 0 1277.205 0h2.59C1350.601 0 1408 57.399 1408 128.205v127.59z"
      style={{
        fill: '#808c88',
      }}
    />
    <path
      d="M832 768H512v128h256v128H512v128h256v128H512v128h384V768zM1152 768h128v640h-128z"
      style={{
        fill: '#d35871',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCalendar);
export default ForwardRef;
