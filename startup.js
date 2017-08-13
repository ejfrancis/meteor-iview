import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
  import Vue from 'vue';
  import iView from './iview/src/index.js';
  Vue.use(iView);
}