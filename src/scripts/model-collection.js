const appContainer = document.querySelector('#app-container')
const $ = require('jquery')
const Backbone = require('backbone')

const UserModel = Backbone.Model.extend({
 url : ""
})

const UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: '',
  parse: function(rawJSONRes){
    return rawJSONRes.results

  },
  initialize: function(){
    this.url ="https://openapi.etsy.com/v2/listings/active.js?api_key=b8zlwj5ok9r7m39jzv399tlz&callback=?"

  }

})

module.exports = UserCollection
