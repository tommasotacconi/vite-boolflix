import { reactive } from 'vue';

export const store = reactive({
  searchedString: '',
  filmsCorrespondances: [],
  seriesCorrespondances: [],
})
