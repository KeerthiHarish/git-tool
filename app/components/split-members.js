import Ember from 'ember';

// var $ = Ember.$;

export default Ember.Component.extend({
  tagName: "",

  splitedMembers: Ember.computed('members', function() {
    let members = [];
    this.get('members').split(',').forEach((member) => {
      if(member.trim().length) {
        members.push(member);
      }
    });

    return members;
    // let members = this.get('members').split(',');
    // let memberStr = '';
    // members.forEach((member, index) => {
    //   if(member.length) {
    //     if(index != members.length-1) {
    //       memberStr = memberStr + member + ', ';
    //     } else {
    //       memberStr = memberStr + member;
    //     }
    //   }
    // })
    // debugger
    // return memberStr;
  })
});
