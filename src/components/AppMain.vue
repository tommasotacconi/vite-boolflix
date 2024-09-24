<script>
import { store } from '../store.js';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default {
  data() {
    return {
      store,
      availableFlagIcons: [
        'xx',
        'ad',
        'ae',
        'af',
        'ag',
        'ai',
        'al',
        'am',
        'ao',
        'aq',
        'ar',
        'as',
        'at',
        'au',
        'aw',
        'ax',
        'az',
        'ba',
        'bb',
        'bd',
        'be',
        'bf',
        'bg',
        'bh',
        'bi',
        'bj',
        'bl',
        'bm',
        'bn',
        'bo',
        'bq',
        'br',
        'bs',
        'bt',
        'bv',
        'bw',
        'by',
        'bz',
        'ca',
        'cc',
        'cd',
        'cf',
        'cg',
        'ch',
        'ci',
        'ck',
        'cl',
        'cm',
        'cn',
        'co',
        'cr',
        'cu',
        'cv',
        'cw',
        'cx',
        'cy',
        'cz',
        'de',
        'dj',
        'dk',
        'dm',
        'do',
        'dz',
        'ec',
        'ee',
        'eg',
        'eh',
        'er',
        'es',
        'et',
        'fi',
        'fj',
        'fk',
        'fm',
        'fo',
        'fr',
        'ga',
        'en',
        'gd',
        'ge',
        'gf',
        'gg',
        'gh',
        'gi',
        'gl',
        'gm',
        'gn',
        'gp',
        'gq',
        'gr',
        'gs',
        'gt',
        'gu',
        'gw',
        'gy',
        'hk',
        'hm',
        'hn',
        'hr',
        'ht',
        'hu',
        'id',
        'ie',
        'il',
        'im',
        'in',
        'io',
        'iq',
        'ir',
        'is',
        'it',
        'je',
        'jm',
        'jo',
        'jp',
        'ke',
        'kg',
        'kh',
        'ki',
        'km',
        'kn',
        'kp',
        'kr',
        'kw',
        'ky',
        'kz',
        'la',
        'lb',
        'lc',
        'li',
        'lk',
        'lr',
        'ls',
        'lt',
        'lu',
        'lv',
        'ly',
        'ma',
        'mc',
        'md',
        'me',
        'mf',
        'mg',
        'mh',
        'mk',
        'ml',
        'mm',
        'mn',
        'mo',
        'mp',
        'mq',
        'mr',
        'ms',
        'mt',
        'mu',
        'mv',
        'mw',
        'mx',
        'my',
        'mz',
        'na',
        'nc',
        'ne',
        'nf',
        'ng',
        'ni',
        'nl',
        'no',
        'np',
        'nr',
        'nu',
        'nz',
        'om',
        'pa',
        'pe',
        'pf',
        'pg',
        'ph',
        'pk',
        'pl',
        'pm',
        'pn',
        'pr',
        'ps',
        'pt',
        'pw',
        'py',
        'qa',
        're',
        'ro',
        'rs',
        'ru',
        'rw',
        'sa',
        'sb',
        'sc',
        'sd',
        'se',
        'sg',
        'sh',
        'si',
        'sj',
        'sk',
        'sl',
        'sm',
        'sn',
        'so',
        'sr',
        'ss',
        'st',
        'sv',
        'sx',
        'sy',
        'sz',
        'tc',
        'td',
        'tf',
        'tg',
        'th',
        'tj',
        'tk',
        'tl',
        'tm',
        'tn',
        'to',
        'tr',
        'tt',
        'tv',
        'tw',
        'tz',
        'ua',
        'ug',
        'um',
        'us',
        'uy',
        'uz',
        'va',
        'vc',
        've',
        'vg',
        'vi',
        'vn',
        'vu',
        'wf',
        'ws',
        'ye',
        'yt',
        'za',
        'zm',
        'zw',
        'arab',
        'cefta',
        'cp',
        'dg',
        'eac',
        'es-ct',
        'es-ga',
        'es-pv',
        'eu',
        'gb-eng',
        'gb-nir',
        'gb-sct',
        'gb-wls',
        'ic',
        'pc',
        'sh-ac',
        'shhl',
        'sh-ta',
        'un',
        'xk',
      ],
    }
  },
  methods: {
    getVoteInStars(vote) {
      const fraction = vote / 10;
      const starsGrade = Math.round(5 * fraction);
      return starsGrade;
    },
    getUnfilledStars(vote) {return 5 - this.getVoteInStars(vote)}, 
  },
  props: {
    userStatus: {
      type: Boolean,
      required: true,
    },
    apiImg: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lg mt-4 pt-1">    
      <!-- Results for films -->
      <div class="films-wrapper card text-center">
        <div class="card-header">
          Films
        </div>
        <div class="card-body">
          <div class="row row-gap-5">
            <!-- Col with a card -->
            <div class="col-4" v-if="this.userStatus" v-for="film in store.filmsCorrespondances">
              <!-- Single card with film or tv series info -->
              <div class="film-card h-100" style="width: 18rem;">
                <img :src="[`${apiImg}/w342/${film.poster_path}`]" alt="" class="card-img-top">
                <div class="wrapper-show">
                  <div class="card-header">
                    {{ film.title }}
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <span>Original title:</span>
                      {{ film.original_title }}
                    </li>
                    <li class="list-group-item">
                      <span>Original language: </span>
                      <span class="language" :class="[{ ['fi']: availableFlagIcons.includes(film.original_language) }, `fi-${film.original_language}`]">{{ availableFlagIcons.includes(film.original_language) ? '' : film.original_language }}</span>
                    </li>
                    <li class="list-group-item">
                      <span>Vote (max 5 stars): </span> 
                      <font-awesome-icon class="fa-star" :icon="['fa-solid', 'fa-star']" v-for="star in getVoteInStars(film.vote_average)" />
                      <font-awesome-icon class="fa-star" :icon="['fa-regular', 'fa-star']" v-for="star in getUnfilledStars(film.vote_average)" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div class="card-footer text-body-secondary">
          Found {{ store.filmsCorrespondances.length }} films
        </div>
      </div>
      <!-- Results for tv-series -->
      <div class="series-wrapper card text-center">
        <div class="card-header">
          TV series
        </div>
        <div class="card-body">
          <div class="row row-gap-5">
            <!-- Col with a card -->
            <div class="col-4" v-if="this.userStatus" v-for="series in store.seriesCorrespondances">
              <!-- Single card with film or tv series info -->
              <div class="series-card h-100" style="width: 18rem;">
                <img :src="[`${apiImg}/w342/${series.poster_path}`]" alt="" class="card-img-top">
                <div class="wrapper-show">
                  <div class="card-header">
                    {{ series.title }}
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <span>Original title:</span>
                      {{ series.original_title }}
                    </li>
                    <li class="list-group-item">
                      <span>Original language: </span>
                      <span class="language" :class="[{ ['fi']: availableFlagIcons.includes(series.original_language) }, `fi-${series.original_language}`]">{{ availableFlagIcons.includes(series.original_language) ? '' : series.original_language }}</span>
                    </li>
                    <li class="list-group-item">
                      <span>Vote (max 5):</span> 
                      {{ series.vote_average }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-body-secondary">
          Found  {{ store.seriesCorrespondances.length }} TV series
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .films-wrapper,
  .series-wrapper {
    margin-bottom: 60px;
  }

  .film-card,
  .series-card {
    margin: auto auto;
    text-align: left;
  }

  .film-card,
  .card-header{
  .series-card {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .card ul span:not(.fi, .language) {
    filter: invert(0.3);
  }

  .fa-star {
    margin-left: 5px;
  }
  
</style>