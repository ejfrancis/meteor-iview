# meteor-iview

[iView](https://www.iviewui.com/) 2.0 Vue.js UI toolkit for Meteor. Includes JS, CSS and fonts.

## Installation

```
meteor npm i -S vue     // install vue from npm
meteor add efrancis:iview
```

Then you can use iView components in your app.

### Build + Deploy

To update `iview` from npm:

```bash
rm -rf iview
git clone https://github.com/iview/iview iview
rm -rf ./iview/.git
cd ./iview
npm i
npm run dist:prod
```

Then publish new version

```
meteor publish
git tag -a <version>
git push origin <version>
```