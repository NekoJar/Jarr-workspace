"use client";
import Image from "next/image";
import styles from "../style.module.scss";
import { useInView } from "react-intersection-observer";

export default function useSlide({
  src,
  height,
  width,
  className,
}: {
  src: string;
  height: number;
  width: number;
  className: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.container}>
      <p>Custom Slide Animation</p>
      <div style={{ overflow: "hidden" }} className={styles.imageContainer}>
        <Image
          ref={ref}
          src={src}
          fill
          alt="image"
          width={width}
          height={height}
          className={className}
          style={{
            opacity: inView ? 1 : 0,
          }}
        />
        <div
          className={styles.slider}
          style={{
            left: inView ? "100%" : "0%",
            top: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
            backgroundColor: "#e9c6b0",
            transition: "left 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        ></div>
      </div>
    </div>
  );
}
