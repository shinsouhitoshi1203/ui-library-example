import { attach, dispatch } from './core/store.js';
import CarsManager from './component/app.js';
const $ = document.querySelector.bind(document);

const app = $('#app');

attach(app, CarsManager, {}); // attach to 'embed' components to a node

function submit (){
   const str = $("#app-input").value;
   if (str!="") {
      dispatch('add', str);
      $("#app-input").value = "";
      $("#app-input").focus();
   }
}

$('#app').onclick = (e) => {
   
     if (e.target.matches('.add')) {
      submit();
          
     } else if (e.target.matches('.reload')) {
          dispatch('reload');
     } else if (e.target.matches('.kill')) {
          dispatch('kill', e.target.dataset.id);
      }
};

$('#app').onkeypress = function(e) {
   if ((e.target.matches("#app-input")) && (e.key=="Enter")) {
      submit();
   }
}
