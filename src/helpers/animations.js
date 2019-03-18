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

export const slideInNav = (el, done) => {
  TweenMax.fromTo(el, 1.4, { xPercent : -100 }, {
    xPercent  : 0,
    ease      : Expo.easeOut,
    onComplete : done
  });
  done();
};
export const slideOutNav = (el, done) => {
  TweenMax.to(el, 0.6, {
    xPercent  : -100,
    ease      : Expo.easeIn,
    onComplete : done
  });
};
