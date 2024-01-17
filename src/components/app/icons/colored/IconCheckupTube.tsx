import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconCheckupTube = (
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
      d="M652.94 128H29.426c-26.727 0-40.112 32.314-21.213 51.213L71.82 242.82A45 45 0 0 1 85 274.64V704h1v708.045C86 1551.196 198.804 1664 337.955 1664h5.09C482.196 1664 595 1551.196 595 1412.045V704h2V274.64c0-11.935 4.924-23.381 13.363-31.82l63.698-63.607C692.96 160.314 679.667 128 652.94 128z"
      style={{
        fill: '#3498db',
      }}
    />
    <path
      d="M1790.109 1586.355 1558 832V274.64c0-11.935 4.924-23.381 13.363-31.82l63.698-63.607c18.899-18.899 5.605-51.213-21.122-51.213H990.426c-26.727 0-40.112 32.314-21.213 51.213l63.607 63.607a45 45 0 0 1 13.18 31.82V832l-232.109 754.355c-11.872 38.583 16.978 77.645 57.347 77.645h861.525c40.368 0 69.218-39.062 57.346-77.645z"
      style={{
        fill: '#1abc9c',
      }}
    />
    <path
      d="M-1457-119h267v282h-267z"
      style={{
        fill: '#3498db',
      }}
    />
    <path
      d="M-1457 430h414v146h-414z"
      style={{
        fill: '#1abc9c',
      }}
    />
    <path
      d="M-1043-98h228v342h-228z"
      style={{
        fill: '#b3b3b3',
      }}
    />
    <path
      d="M351 384h192v64H351zM351 639h192v64H351zM351 894h192v64H351zM1302 384h192v64h-192zM1302 639h192v64h-192zM1302 894h192v64h-192z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconCheckupTube);
export default ForwardRef;
