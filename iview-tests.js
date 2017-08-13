// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by iview.js.
import { name as packageName } from "meteor/efrancis:iview";

// Write your tests here!
// Here is an example.
Tinytest.add('iview - example', function (test) {
  test.equal(packageName, "iview");
});
