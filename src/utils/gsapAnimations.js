import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal an element with a soft fade and light upward movement.
 * @param {string|Element} element - The target element(s)
 * @param {Object} options - Custom GSAP options
 */
export const fadeInUp = (element, options = {}) => {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    ...options,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: "top 85%",
      toggleActions: "play none none none",
      ...options.scrollTrigger,
    },
  });
};

/**
 * Reveal multiple elements with a stagger effect.
 * @param {string|Element[]} elements - The target elements
 * @param {number} stagger - Delay between each element's animation
 * @param {Object} options - Custom GSAP options
 */
export const fadeInStagger = (elements, stagger = 0.15, options = {}) => {
  return gsap.from(elements, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: stagger,
    ...options,
    scrollTrigger: {
      trigger: options.trigger || elements,
      start: "top 85%",
      toggleActions: "play none none none",
      ...options.scrollTrigger,
    },
  });
};

/**
 * Scale an element in with a soft fade.
 * @param {string|Element} element - The target element
 * @param {Object} options - Custom GSAP options
 */
export const scaleIn = (element, options = {}) => {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    ...options,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: "top 85%",
      toggleActions: "play none none none",
      ...options.scrollTrigger,
    },
  });
};

/**
 * Horizontal reveal effect (left or right)
 * @param {string|Element} element 
 * @param {number} x - Pixel offset
 * @param {Object} options 
 */
export const revealX = (element, x = 30, options = {}) => {
  return gsap.from(element, {
    x: x,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    ...options,
    scrollTrigger: {
      trigger: options.trigger || element,
      start: "top 85%",
      toggleActions: "play none none none",
      ...options.scrollTrigger,
    },
  });
};

/**
 * Batch multi-element reveal for better performance
 */
export const batchReveal = (elements, options = {}) => {
  return ScrollTrigger.batch(elements, {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        overwrite: true,
      }),
    start: "top 85%",
    ...options,
  });
};

export default gsap;
