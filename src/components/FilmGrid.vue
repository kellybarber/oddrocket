<template>
  <div class="film-grid">
    <div class="film-grid__header">
      <button
        v-for="(film, index) in filmTypes"
        :key="index"
        class="filter-button"
        @click="setFilter(film)"
      >
        {{ formatTitle(film) }}
      </button>
    </div>
    <div class="film-grid__container">
      <FilmGridCard
        ref="card"
        v-for="(film, index) in filteredFilms"
        :key="index"
        :film="film"
      />
    </div>
  </div>
</template>

<script>
  import { TimelineMax } from 'gsap';
  import FilmGridCard from './FilmGridCard';

  export default {
    name       : 'FilmGrid',
    components : { FilmGridCard },
    props : {
      films : { type : Array, default : [] }
    },
    data() {
      const filmTypes = [ 'all', 'feature', 'short', 'music', 'commercial' ];

      return {
        selectedType : filmTypes[0],
        filmTypes
      }
    },
    computed : {
      filteredFilms() {
        if (this.selectedType === 'all') return this.films;
        return this.films.filter(film => film.type === this.selectedType);
      }
    },
    mounted() {
      this.animateInCards();
    },
    methods : {
      setFilter(filmType) {
        this.selectedType = filmType;
      },
      formatTitle(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      animateInCards(delay = 0) {
        const { card : filmCards } = this.$refs;

        const timeline = new TimelineMax({ delay });

        filmCards.forEach(filmCard => {
          timeline.fromTo(filmCard.$el, 0.5, { y : 40 }, { y : 0, ease : Sine.easeOut })
        })
      }
    }
  }
</script>

<style scoped>

  .film-grid__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: var(--black);
  }
  .filter-button {
    position: relative;
    margin: 0 3rem;
    color: var(--white);
    background: none;
    border: none;
    cursor: pointer;
  }
  .filter-button:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: -3rem;
    height: 100%;
    width: 1px;
    background-color: var(--white);
  }

  .film-grid__container {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-auto-rows: 200px;
  }

</style>
