// Unified motion tokens for the entire portfolio.
// Two easing curves, four duration tiers.

export const EASE_IN_OUT = [0.25, 0.1, 0.25, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const duration = {
  micro: 0.2,
  element: 0.4,
  section: 0.8,
  page: 1.2,
} as const;

export const transition = {
  micro: { duration: duration.micro, ease: EASE_IN_OUT },
  element: { duration: duration.element, ease: EASE_IN_OUT },
  section: { duration: duration.section, ease: EASE_OUT },
  page: { duration: duration.page, ease: EASE_OUT },
} as const;
