import React from "react";
import { animated, useSpring } from "react-spring";

export default function ModelItem(props) {
  const { itemClassName, itemImg, trans, xyzStats } = props;

  //   const tranHairstyle = (x, y, z) =>
  //     `scale(${scaleNum}) translate3d(${x}px,${y}px,${z}px)`;

  const { xyz } = useSpring({
    from: { xyz: xyzStats },
    xyz: [0, 0, 0],
    config: { duration: 1000 },
    reset: true,
  });
  return (
    <animated.div
      className={itemClassName}
      style={{
        background: `${itemImg}`,
        transform: xyz.interpolate(trans),
      }}
    />
  );
}
