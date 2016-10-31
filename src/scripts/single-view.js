const Backbone = require('backbone')
const $ = ('jquery')
const appContainer = document.querySelector('#app-container')


const singleView = Backbone.View.extend({

  el: "#app-container",

  _buildTemplate: function(theCollection){


      var htmlStr = '<div class="container single-view">'
          htmlStr += '<div class="col-xs-12 col-sm-6">'







          htmlStr +=  '</div>'
          htmlStr += '</div>'

  }

})
