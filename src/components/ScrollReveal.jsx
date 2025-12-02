import { useScrollReveal } from '../hooks/useScrollReveal';

function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 0.6,
  className = ''
}) {
  const [ref, isVisible] = useScrollReveal({ once: true, threshold: 0.1 });

  const animations = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-down': {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'zoom-in': {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    'zoom-out': {
      initial: { opacity: 0, transform: 'scale(1.2)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    'slide-up': {
      initial: { opacity: 0, transform: 'translateY(60px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'slide-down': {
      initial: { opacity: 0, transform: 'translateY(-60px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'slide-left': {
      initial: { opacity: 0, transform: 'translateX(60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'slide-right': {
      initial: { opacity: 0, transform: 'translateX(-60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'rotate-in': {
      initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
    },
    'flip-up': {
      initial: { opacity: 0, transform: 'perspective(1000px) rotateX(-20deg)' },
      animate: { opacity: 1, transform: 'perspective(1000px) rotateX(0deg)' }
    },
    'flip-left': {
      initial: { opacity: 0, transform: 'perspective(1000px) rotateY(20deg)' },
      animate: { opacity: 1, transform: 'perspective(1000px) rotateY(0deg)' }
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...selectedAnimation.initial,
        ...(isVisible ? selectedAnimation.animate : {}),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;