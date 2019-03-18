import { TweenMax } from 'gsap';

export const fadeIn = el => {
  TweenMax.fromTo(el, 1.5, { autoAlpha : 0 }, { autoAlpha : 1 });
};
export const fadeOut = el => {
  TweenMax.fromTo(el, 1.5, { autoAlpha : 1 }, { autoAlpha : 0 });
};

export const slideUpIn = el => {
  TweenMax.fromTo(el, 1.5, { autoAlpha : 0, yPercent : 30 }, {
    autoAlpha : 1,
    yPercent  : 0,
    ease      : Expo.easeOut
  });
};
export const slideUpOut = el => {
  TweenMax.fromTo(el, 1.5, { autoAlpha : 0, yPercent : 0 }, {
    autoAlpha : 1,
    yPercent  : 30,
    ease      : Expo.easeOut
  });
};

export const slideUpInText = el => {
  TweenMax.fromTo(el, 2, { autoAlpha : 0, yPercent : 80 }, {
    autoAlpha : 1,
    yPercent  : 0,
    ease      : Expo.easeOut
  });
};

export const slideUpOutText = el => {
  TweenMax.fromTo(el, 2, { autoAlpha : 0, yPercent : 0 }, {
    autoAlpha : 1,
    yPercent  : 80,
    ease      : Expo.easeOut
  });
};