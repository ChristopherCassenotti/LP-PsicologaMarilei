import { motion, useReducedMotion } from "motion/react";

const easing = [0.22, 1, 0.36, 1];
const entranceDelay = 0.2;

function getOffset(direction, distance) {
  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return offsets[direction] || offsets.up;
}

function getRevealVariants({
  direction,
  distance,
  duration,
  delay,
  scale,
  includeEntranceDelay = false,
}) {
  return {
    hidden: {
      opacity: 0,
      scale,
      ...getOffset(direction, distance),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: delay + (includeEntranceDelay ? entranceDelay : 0),
        duration,
        ease: easing,
      },
    },
  };
}

function getMotionElement(as) {
  return motion[as] || motion.div;
}

export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.72,
  amount = 0.18,
  margin = "0px 0px -12% 0px",
  once = true,
  scale = 1,
  viewport,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = getMotionElement(as);

  return (
    <MotionElement
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={
        shouldReduceMotion ? undefined : { once, amount, margin, ...viewport }
      }
      variants={
        shouldReduceMotion
          ? undefined
          : getRevealVariants({
              direction,
              distance,
              duration,
              delay,
              scale,
              includeEntranceDelay: true,
            })
      }
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

export function RevealGroup({
  as = "div",
  children,
  className = "",
  delayChildren = 0,
  stagger = 0.08,
  amount = 0.16,
  margin = "0px 0px -10% 0px",
  once = true,
  viewport,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = getMotionElement(as);

  return (
    <MotionElement
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={
        shouldReduceMotion ? undefined : { once, amount, margin, ...viewport }
      }
      variants={
        shouldReduceMotion
          ? undefined
          : {
              hidden: {},
              show: {
                transition: {
                  delayChildren: delayChildren + entranceDelay,
                  staggerChildren: stagger,
                },
              },
            }
      }
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

export function RevealItem({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 22,
  duration = 0.62,
  scale = 1,
  ...props
}) {
  const MotionElement = getMotionElement(as);

  return (
    <MotionElement
      variants={getRevealVariants({
        direction,
        distance,
        duration,
        delay,
        scale,
      })}
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
