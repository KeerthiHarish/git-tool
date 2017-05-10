import Ember from 'ember';

export default Ember.Component.extend({

  tagName: "",

  nameLetter: Ember.computed("name", function() {
    var firstLetter = "", lastLetter = "", name;
    if (this.get("name") !== undefined) {
      name = this.get('name').split(' ');
      firstLetter = name[0][0]
      lastLetter = name[1][0]
    }
    return firstLetter + "" + lastLetter;
  })
});
