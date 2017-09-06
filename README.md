# meteor-iview

[iView](https://www.iviewui.com/) 2.0 Vue.js UI toolkit for Meteor. Includes JS, CSS and fonts. Default language is set to `en-US` (`iView` from npm is set to `zh-CN` ).

## Installation

```
meteor npm i -S vue     // install vue from npm
meteor add efrancis:iview
```

Then in your client startup code

```js
import Vue from 'vue';
import iView from 'meteor/efrancis:iview';
Vue.use(iView);
```

Now you can use iView components in your app.

### Build + Deploy

To update `iview` from npm:

```bash
rm -rf iview
git clone https://github.com/iview/iview iview
rm -rf ./iview/.git
rm -rf ./iview/.github
rm -rf ./iview/examples
cd ./iview
npm i
rm -rf ./node_modules/vue
# set src/local/index.js defaultLang to ./lang/en-US
npm run dist:prod
rm .babelrc
```

Then publish new version

```
meteor publish
git tag -a <version>
git push origin <version>
```