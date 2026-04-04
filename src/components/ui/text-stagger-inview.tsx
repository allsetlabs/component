'use client';

import * as React from 'react';
import {
  type HTMLMotionProps,
  motion,
  MotionConfig,
  stagger,
  type StaggerOrigin,
} from 'motion/react';

export type AnimationT = 'left' | 'right' | 'top' | 'bottom' | 'z' | 'blur' | 'default';

const ANIMATION_VARIANTS = {
  left: {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  top: {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  bottom: {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  z: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  blur: {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  },
  default: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const;

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

function WordStagger({ children, animation, ...props }: WordProps) {
  const characters = String(children).split('');
  const animationVariants = ANIMATION_VARIANTS[animation || 'default'];
  return (
    <span className="inline-block text-nowrap" {...props}>
      {characters.map((char, index) => (
        <motion.span className="inline-block" variants={animationVariants} key={`${char}-${index}`}>
          {char}
        </motion.span>
      ))}
    </span>
  );
}

interface TextStaggerInviewProps extends HTMLMotionProps<'span'> {
  staggerValue?: number;
  staggerStart?: StaggerOrigin;
  animation?: AnimationT;
  as?: React.ElementType;
}

function TextStaggerInview({
  children,
  transition,
  className,
  viewport = { once: true, amount: 0.25 },
  staggerValue = 0.02,
  staggerStart = 'first',
  animation,
  as: Component = 'span',
  ...props
}: TextStaggerInviewProps) {
  const words = String(children).split(' ');

  const MotionComponent = motion.create(Component);
  return (
    // eslint-disable-next-line react-hooks/static-components
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      transition={{
        delayChildren: stagger(staggerValue, { from: staggerStart }),
      }}
      {...props}
    >
      <MotionConfig
        transition={{
          ease: transition?.ease || 'easeOut',
          ...transition,
        }}
      >
        {words.map((word: string, index: number) => (
          <React.Fragment key={`${word}-${index}`}>
            <WordStagger data-word={word} animation={animation}>
              {word}
            </WordStagger>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </MotionConfig>
    </MotionComponent>
  );
}

export { TextStaggerInview, WordStagger };
export type { TextStaggerInviewProps };
