import { Image } from "antd";

interface LogoProps {
  style?: React.CSSProperties;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ style, height = 60 }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBlock: "1em", ...style }}>
      <Image src="MegaMed.png" height={height} preview={false} />
    </div>
  );
};

export default Logo;
