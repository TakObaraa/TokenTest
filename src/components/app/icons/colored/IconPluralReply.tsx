import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconPluralReply = (
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
      d="m452.873 841.787 427.684-667.781C913.15 123.115 992 146.201 992 206.634V512s643.276 54.586 750.165 999.52c5.254 46.446-56.074 67.841-80.914 28.245C1564.178 1385.023 1371.387 1216.54 992 1216v369.366c0 60.434-78.85 83.519-111.443 32.628L452.873 950.213c-21.164-33.044-21.164-75.382 0-108.426z"
      style={{
        fill: '#26a028',
      }}
    />
    <path
      d="M319.844 841.832 604 398.154V207.073c0-60.562-79.017-83.696-111.68-32.697L64.844 841.832c-21.146 33.017-21.146 75.32 0 108.336l427.476 667.456c32.663 50.999 111.68 27.865 111.68-32.697v-191.081L319.844 950.168c-21.146-33.017-21.146-75.319 0-108.336z"
      style={{
        fill: '#26a028',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPluralReply);
export default ForwardRef;
