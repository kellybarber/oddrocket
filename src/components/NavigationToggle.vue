<template>
  <button
    :class="['nav-toggle', { 'nav-alternate' : value }]"
    @click="toggleNavigation"
  >
    <svg class="toggle-svg">
      <g class="toggle-group">
        <line class="toggle-line" x1="0" x2="100%" y1="-5" y2="-5"></line>
        <line class="toggle-line" x1="0" x2="100%"></line>
        <line class="toggle-line" x1="0" x2="100%" y1="5" y2="5"></line>
      </g>
    </svg>
  </button>
</template>

<script>
  import { TimelineMax } from 'gsap';
  import { EventBus }    from "Utils/EventBus";

  export default {
    props : {
      value : { type : Boolean, required : true }
    },
    mounted() {
      this.timeline = new TimelineMax({ paused : true });
      this.loadToggleAnimations();
      EventBus.$on('toggle-navigation', this.toggleNavigation)
    },
    methods : {
      toggleNavigation() {
        const nextState = !this.value;
        this.$emit('input', nextState);
        this.animateToggle(nextState);
      },
      animateToggle(nextState) {
        if (nextState) {
          this.timeline.play();
        } else {
          this.timeline.reverse();
        }
      },
      loadToggleAnimations() {
        const [ lineOne, lineTwo, lineThree ] = document.getElementsByClassName('toggle-line');

        this.timeline
          .to(lineTwo, 0.5, {
            scale           : 0,
            transformOrigin : 'center',
            ease            : Expo.easeOut
          })
          .to(lineOne, 0.6, {
            y               : 5,
            rotation        : 45,
            transformOrigin : 'center',
            ease            : Expo.easeOut
          })
          .to(lineThree, 0.6, {
            y               : -5,
            rotation        : -45,
            transformOrigin : 'center',
            ease            : Expo.easeOut
          }, '-=0.6')
      }
    }
  }
</script>

<style scoped>
  .nav-toggle {
    position: fixed;
    top: 1.3rem;
    left: 5rem;
    height: 8rem;
    width: 8rem;
    z-index: var(--nav-toggle-index);
    cursor: pointer;

    border: none;
    outline: none;
    background: none;
  }

  .toggle-svg {
    height: 100%;
    width: 100%;
  }
  .toggle-group {
    transform: translateY(50%);
  }
  .toggle-line {
    stroke: var(--black);
    stroke-width: 2px;
    transition: stroke .2s ease-out .6s;
  }
  .nav-alternate .toggle-line {
    stroke: var(--white);
    transition: stroke .2s ease-out;
  }

</style>