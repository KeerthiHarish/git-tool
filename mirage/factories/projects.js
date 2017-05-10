import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return "First project";
  },
  description() {
    return "Dummy project created for showcase";
  }
});
