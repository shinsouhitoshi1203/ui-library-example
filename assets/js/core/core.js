import reducer from './reducer.js';

export default function renderHTML([f, ...subStr], ...$$) {
     return $$.reduce((a, $, i) => a.concat($, subStr[i]), [f])
          .filter((e) => (e && e != true) || e === 0)
          .join('');
}

export function initializeStore(reducer) {
     let state = reducer();
     let rootDOMs = new Map();

     function reloadUI() {
          for (const [dom, component, params] of rootDOMs) {
               dom.innerHTML = component(params); /// component is the APP.
          }
     }

     return {
          // use to render the UI for all object declared in the map.
          attach(selectorDOM, componentFunction, params) {
               rootDOMs.set(selectorDOM, componentFunction, params);
               reloadUI();
          },

          // set connection from the Store to View component
          connect(selector = (state) => state, params) { // connect (state => ...) ==>  a
               return (componentFunction) => {  // a(component) : return a function to push it to rootDOMs
                    return (props, args = params) => {
                         return componentFunction(
                              Object.assign({}, props, selector(state)), args
                         );
                    };
               };
          },

          dispatch(action, ...val) {
               state = reducer(state, action, val); 
               reloadUI()
          },
     };
}
