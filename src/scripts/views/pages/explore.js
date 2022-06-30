import data from '../../../../DATA.json';
import '../../component/app-search';
import DataSourceSearch from '../../data/data-source-search';
import DataSourceCategory from '../../data/data-seurce-category';
import { createItemTemplate, noData } from '../templates/template-creator';

const Explore = {
  render() {
    return `
      <app-search></app-search>
      <app-category-bar></app-category-bar>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 justify-content-evenly'></div>
      <div id='nodata'></div>
    `;
  },

  afterRender() {
    const destinationContainer = document.querySelector('#items');
    const noDataContainer = document.querySelector('#nodata');

    data.destinations.forEach((item) => {
      destinationContainer.innerHTML += createItemTemplate(item);
    });

    const renderResult = results => {
      for (let index = 0; index < results.length; index++) {
        const item = results[index];
        destinationContainer.innerHTML += createItemTemplate(item);
      }
    };

    const searchElement = document.querySelector('app-search');

    const onButtonSearchClicked = async () => {
      try {
        if (!searchElement.value) {
          noDataContainer.innerHTML = `<div class='text-center fs-1 mt-3'>Tidak ada kata kunci!</div>${noData()}`;
          destinationContainer.innerHTML = '';
        } else {
          const result = await DataSourceSearch.show(searchElement.value);
          destinationContainer.innerHTML = '';
          noDataContainer.innerHTML = '';
          renderResult(result);
        }
      } catch (message) {
        destinationContainer.innerHTML = '';
        noDataContainer.innerHTML = `<div class='text-center fs-1 mt-3'>Kata kunci ${searchElement.value} Tidak di temukan!</div>${noData()}`;
      }
    };
    searchElement.clickEvent = onButtonSearchClicked;

    const onCaregoryAllClicked = async () => {
      try {
        const result = await DataSourceCategory.show('');
        noDataContainer.innerHTML = '';
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-all').addEventListener('click', onCaregoryAllClicked);

    const onCaregoryMuseumClicked = async () => {
      try {
        const result = await DataSourceCategory.show('museum');
        noDataContainer.innerHTML = '';
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-museum').addEventListener('click', onCaregoryMuseumClicked);

    const onCaregoryPantaiClicked = async () => {
      try {
        const result = await DataSourceCategory.show('pantai');
        noDataContainer.innerHTML = '';
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-pantai').addEventListener('click', onCaregoryPantaiClicked);

    const onCaregoryGunungClicked = async () => {
      try {
        const result = await DataSourceCategory.show('gunung');
        noDataContainer.innerHTML = '';
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-gunung').addEventListener('click', onCaregoryGunungClicked);

    const onCaregorySejarahClicked = async () => {
      try {
        const result = await DataSourceCategory.show('sejarah');
        noDataContainer.innerHTML = '';
        destinationContainer.innerHTML = '';
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };
    document.querySelector('#caregory-sejarah').addEventListener('click', onCaregorySejarahClicked);
  },
};

export default Explore;
