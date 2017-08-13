import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
  console.log('efrancis:iview startup isClient');
  import Vue from 'vue';
  import iView from './iview/src/index.js';

  Meteor.startup(() => {
    Vue.use(iView);
  });
} else {
  console.log('efrancis:iview startup isServer');
}
