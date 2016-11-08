import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Document from './components/Document';

import store from './store';

const container = document.getElementById('container');

const Router = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'readingList' : 'list'
  },
  home() {
    ReactDom.render(<Document doc={store.doc} />, container)
  },
  list() {
    console.log('List rendered');
    //the list function needs a collection made to generate the different
    //the different docs to read through
  }
});

export default new Router();
