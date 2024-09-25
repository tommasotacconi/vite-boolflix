<script>
import { reactive } from 'vue';

export default {
  setup() {
    const styleObject = reactive({
      backgroundSize: '120%',
      backgroundPosition: 'center',
    });

    return {
      styleObject
    };
  },
  data() {
    return {
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
    operaInfo: {
      type: Object,
      required: false,
    },
    apiImg: {
      type: String,
      required: true,
    }
  },
  computed: {
    backgroundImg: function () {return `url(${this.apiImg}/w342/${this.operaInfo.poster_path})`}
  }
}
</script>

<template>
  <!-- Single card with film or tv series info -->
  <div class="card opera-card" style="width: 18rem;" :style="[styleObject, { backgroundImage: backgroundImg }]">
    <img :src="[`${apiImg}/w342/${operaInfo.poster_path}`]" alt="" class="card-img">
    <div class="wrapper-show">
      <div class="card-header">
        {{ operaInfo.title ? operaInfo.title : operaInfo.name }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span>Original title:</span>
          {{ operaInfo.original_title ? operaInfo.original_title : operaInfo.original_name }}
        </li>
        <li class="list-group-item">
          <span>Original language: </span>
          <span class="language" :class="[{ ['fi']: availableFlagIcons.includes(operaInfo.original_language) }, `fi-${operaInfo.original_language}`]">{{ availableFlagIcons.includes(operaInfo.original_language) ? '' : operaInfo.original_language }}</span>
        </li>
        <li class="list-group-item">
          <span>Vote: </span> 
          <font-awesome-icon class="fa-star" :icon="['fa-solid', 'fa-star']" v-for="star in getVoteInStars(operaInfo.vote_average)" />
          <font-awesome-icon class="fa-star" :icon="['fa-regular', 'fa-star']" v-for="star in getUnfilledStars(operaInfo.vote_average)" />
        </li>
        <li class="list-group-item">
          <span>Overview: </span>
          {{ operaInfo.overview }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .opera-card {
    height: 429px;
    margin: auto auto;
    text-align: left;
    color: #fff;
    border-color: #888;
    
    position: relative;
    overflow: hidden;
  }

  .opera-card {
    .card-header {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 700;
      border-bottom-color: #fff; 

      position: relative;
    }

    ul {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow: auto;
    };

    .list-group-item {
      background-color: transparent;
      color: #fff;
    }

    .list-group-item:last-child {
      margin-right: 5px;

      overflow: auto;
      flex-grow: 1;

      &::-webkit-scrollbar {
        width: 4px;
        padding-right: 5px;
      }
      
      &::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 6px #ececec;
         
        border-radius: 10px;
      }
      
      &::-webkit-scrollbar-thumb {
        // -webkit-box-shadow: inset 0 0 6px #ececec
        
        background: var(--bs-info);
        filter: invert(0.2);        
      }
    }

    .list-group-item:last-child::-webkit-scrollbar-button {
        width: 5px;
      }

    ul span:not(.fi, .language) {
      filter: invert(0.2);
      color: var(--bs-info);
    }

    .fa-star {
      margin-left: 5px;
    }
  }
  
  .wrapper-show {
    display: none;
    height: 100%;
  }

  .opera-card:hover .wrapper-show {
    display: flex;
    flex-direction: column;
  }

  .opera-card:hover .card-img {
    display: none;
  }

  .opera-card:hover::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: var(--bs-card-inner-border-radius);
    background-color: #000000ae;
  }
</style>