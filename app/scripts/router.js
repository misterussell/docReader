import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Document from './components/Document';

import store from './store';

const container = document.getElementById('container');

const Router = Backbone.Router.extend({
  routes: {
    '' : 'home'
  },
  home() {
    ReactDom.render(<Document doc={store.doc} />, container)
  }
});

export default new Router();
