const appContainer = document.querySelector('#app-container')
const $ = require('jquery')
const Backbone = require('backbone')

const EtsyModel = Backbone.Model.extend({

})

const EtsyCollection = Backbone.Collection.extend({
    model: EtsyModel,
    url: '',
  parse: function(rawJSONRes){
    return rawJSONRes.results

  },
  initialize: function(viewInput='active'){
    this.url ="https://openapi.etsy.com/v2/listings/"+ viewInput +".js?includes=Images&api_key=b8zlwj5ok9r7m39jzv399tlz&callback=?"

  }

})

module.exports = {
  EtsyModel : EtsyModel,
  EtsyCollection: EtsyCollection
}
