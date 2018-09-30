import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Components/ToDo';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDo/>, document.getElementById('root'));
registerServiceWorker();
