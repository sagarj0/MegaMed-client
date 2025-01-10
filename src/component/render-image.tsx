import { Image } from "antd";

export const renderImage = (src?: string | null, alt?: string, height: number = 100) =>
  src && <Image src={src} alt={alt} height={height} loading="lazy" />;
