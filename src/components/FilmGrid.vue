<template>
  <div class="film-grid">
    <div class="film-grid__header">
      <button
        v-for="(film, index) in filmTypes"
        :key="index"
        :class="['filter-button', 'btn-standard', { 'btn-standard-active' : film === selectedType }]"
        @click="setFilter(film)"
      >
        {{ formatTitle(film) }}
      </button>
    </div>
    <div
      ref="filmGrid"
      class="film-grid__container"
    >
      <FilmGridCard
        v-for="(film, index) in filteredFilms"
        :key="index"
        :film="film"
      />
    </div>
  </div>
</template>

<script>
  import FilmGridCard from './FilmGridCard';
  import { TweenMax } from 'gsap';

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
      },
    },
    mounted() {
      this.animateInCards();
    },
    methods : {
      setFilter(filmType) {
        if (this.selectedType === filmType) return;
        this.selectedType = filmType;
        this.$nextTick(this.animateInCards);
      },
      formatTitle(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      animateInCards() {
        const filmCards = this.$refs.filmGrid.children;
        TweenMax.staggerFrom(filmCards, 0.8, { y: 90 }, 0.12);
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
    margin: 2rem 0 4rem;
  }
  .filter-button {
    position: relative;
    margin: 0 3rem;
    padding: 0 0.5rem;
    font-size: 1.6em;
    font-weight: 200;
    color: var(--black);
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .filter-button:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -3rem;
    height: 60%;
    width: 1px;
    background-color: var(--black);
    transform: translateY(-50%);
  }

  .film-grid__container {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(40rem, 1fr) );
    grid-auto-rows: 220px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
  }

</style>
