import { SVGProps } from "types/common";

/* ICON 작업시
  1. icon은 Figma나 XD에서 export한 svg파일을 https://react-svgr.com/playground/ 에서 변환한 코드로 리엑트 컴포넌트로 만들어준다.
  2. SVGProps를 기본으로 받고 필요한 props는 추가로 해당 type과 합쳐서 사용한다.
  3. 사용하는 props에는 디폴트 파라미터를 넣어준다.
 */

type Props = SVGProps & {
  fill2?: string;
  stroke2?: string;
  strokeWidth2?: number;
};

const SvgComponent: React.FC<Props> = ({
  width = 60,
  height = 60,
  viewBox = "0 0 60 60",
  fill = "none",
  stroke = "#F57902",
  strokeWidth = 2,
  fill2 = "#FFF5E4",
  stroke2 = "#F57902",
  strokeWidth2 = 2,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={30} cy={30} r={30} fill={fill2} />
    <path
      d="M40 29V31.6706V42H20V31.3602V29"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M34.6667 18H18.6133C18.1747 18 17.7967 18.286 17.7033 18.6908L16 24.6C16 27.0288 18.0907 29 20.6667 29C23.2427 29 25.3333 27.0288 25.3333 24.6C25.3333 27.0288 27.424 29 30 29C32.576 29 34.6667 27.0288 34.6667 24.6C34.6667 27.0288 36.7573 29 39.3333 29C41.9093 29 44 27.0288 44 24.6L42.2967 18.6908C42.2033 18.286 41.8253 18 41.3867 18H34.6667V18Z"
      stroke={stroke2}
      strokeWidth={strokeWidth2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
