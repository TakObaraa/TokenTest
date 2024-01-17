import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIconSearch = (
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
    <path d="m463.864 428.319-76.815-78.292c27.453-34.387 43.867-77.974 43.867-125.397 0-111.088-90.055-201.143-201.143-201.143S28.63 113.542 28.63 224.63s90.055 201.143 201.143 201.143c37.27 0 72.173-10.137 102.101-27.804a36.659 36.659 0 0 0 2.43 2.738l77.349 78.837c14.004 14.273 36.927 14.492 51.2.488l.522-.512c14.274-14.005 14.493-36.928.489-51.201zM74.344 224.63c0-85.841 69.588-155.429 155.429-155.429s155.429 69.588 155.429 155.429-69.588 155.429-155.429 155.429S74.344 310.471 74.344 224.63z" />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSearch);
export default ForwardRef;
