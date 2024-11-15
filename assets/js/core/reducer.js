const $ = document.querySelector.bind(document);
function init() {
     return {
          cars: {
               data: ['BMW', "Honda"],
               requested: false
          },
          
     };
}

export default function reducer(state = init(), action, ...args) {
     switch (action) {
          case 'reload':
               if ($('.reload').innerText == "Clear the list") {
                    state.cars.requested = false;
               } else {
                    state.cars.requested = true;
               }
               
               return state;
          case 'add':
               state.cars.data.push(args[0]);
               state.cars.requested = true;
               return state;
          case 'kill':
               delete state.cars.data[args[0]];
               state.cars.data = (state.cars.data.filter(e=>e!==null));
               state.cars.requested = (state.cars.data.length>0);
               return state;
          default:
               return state;
               break;
     }
}
