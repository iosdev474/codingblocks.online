import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  subtitle: DS.attr(),
  summary: DS.attr(),
  promoVideo: DS.attr(),
  popularity: DS.attr(),
  hoursPerDay: DS.attr(),
  isFree: DS.attr(),
  duration: DS.attr(),
  lecturesCount: DS.attr(),
  ratingCount: DS.attr(),
  videosDuration: DS.attr(),
  type: DS.attr(),
  color: DS.attr(),
  backgroundImage: DS.attr(),
  video: DS.belongsTo('attachment'),
  image: DS.belongsTo('attachment'),
  runs: DS.hasMany('run'),
  sections: DS.hasMany('section'),
  instructor: DS.belongsTo('instructor'),
  coverImage: DS.attr(),
})
