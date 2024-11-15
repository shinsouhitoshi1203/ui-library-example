import renderHTML from './../core/core.js';
import reducer from './../core/reducer.js';
import { connect } from './../core/store.js';
const $ = document.querySelector.bind(document);

function CarsManager(props, args) {
     
     const x = props.cars;
     let htmls = "";
     if (x.requested ) {
          if (x.data.length==0) htmls = "<p>No data available</p>"; else
          htmls = renderHTML`
               <ul>
                    ${x.data.map((e,i) => `
                         <li>
                              ${e}
                              <button class="kill" data-id="${i}">delete</button>
                         </li>
                         <br>
                    `)}
               </ul>
          `;
     }
     const loadBtn = ((!x.requested) ? '<button class="reload">Reload cars</button>' : '<button class="reload">Clear the list</button>');
     
     // here we render the UI for the app, using store we have declared as `props`
     
     return renderHTML`
        <h2>Cars Management</h2>
        ${loadBtn} 
        <button class="add"> Add cars </button> 
        <input type="text" id="app-input"> 

        ${htmls }

    `;
     // ${props.map((e, i) => `<p><b>${e}</b></p>`)}
}

const connectWith = connect(state=>state, );

export default connectWith(CarsManager);
