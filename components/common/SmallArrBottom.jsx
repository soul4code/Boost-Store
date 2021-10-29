const SmallArrBottom = (props) => {
  return (
    <svg
      width="12px"
      height="8px"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={props.addClass}
      {...props}
    >
      <rect
        x={12}
        y={8}
        width={12}
        height={8}
        rx={4}
        transform="rotate(-180 12 8)"
        fill="url(#small-arr_svg__pattern0)"
      />
      <defs>
        <pattern
          id="small-arr_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#small-arr_svg__image0_101:760"
            transform="scale(.08333 .125)"
          />
        </pattern>
        <image
          id="small-arr_svg__image0_101:760"
          width={12}
          height={8}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAb0lEQVQYlX2QQQqAMBADRwuCP+jR/z9HEDx49BUiRFLbQ2sxEFh2MyxkkAQwARf/SpkRmIET2IDYQWK+nSkrKUha9WqXFP0127N3ljOhdyhQb0cBWujIrsIt0EKfcA+wF0l3tufqXmpt5QqtumrgAfgT1vFp0YlmAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default SmallArrBottom;
