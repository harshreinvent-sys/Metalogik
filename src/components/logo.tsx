import Image from "next/image";
import logo from "./logo.png";

type LogoProps = {
  size?: "header" | "footer";
};

export default function Logo({ size = "header" }: LogoProps) {
  return (
    <Image
      alt="Metalogik – Precision Metal Solutions"
      className={`logo logo-${size}`}
      priority={size === "header"}
      src={logo}
    />
  );
}
