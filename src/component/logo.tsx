// import { Image } from "antd";
import { SVGLogo } from "./icons/logo";

interface LogoProps {
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <div style={{ position: "relative", width: "80px", height: "40px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: -15,
          left: 0,
          ...style,
        }}
      >
        <SVGLogo />
      </div>
    </div>
  );
};

export default Logo;
