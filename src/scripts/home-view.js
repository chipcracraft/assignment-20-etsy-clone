const Backbone = require('backbone')
const $ = require('jquery')
const appContainer = document.querySelector('#app-container')


const homeView = Backbone.View.extend({

        el: "#app-container",

        _buildTemplate: function(theCollection){
          var htmlStr = ''

          for (var i = 0; i < theCollection.models.length; i++){
            var etsyInfo = theCollection.models[i]
            htmlStr += '<div class="row">'
            htmlStr +=  '<div class= "col-xs-12 col-sm-4">'
            htmlStr +=    '<div class="thumbnail etsy-info">'
            // htmlStr +=      '<img src='
            htmlStr +=      '<h5>' + etsyInfo.get('title')+ '</h5>'
            htmlStr +=      '<h5>' + etsyInfo.get('price')+ '</h5>'
            htmlStr +=   '</div>'
            htmlStr +=  '</div>'
            htmlStr += '</div>'
          }

              return htmlStr

        },
            initialize: function(a){

              this.coll = a
              this.coll.on('sync', this.render.bind(this))
            },

            render: function(){

              this.el.innerHTML += this._buildTemplate(this.coll)

            }

})

module.exports = homeView
