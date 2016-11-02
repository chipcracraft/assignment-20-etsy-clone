const Backbone = require('backbone')
const $ = require('jquery')
const appContainer = document.querySelector('#app-container')


const HomeView = Backbone.View.extend({

        el: "#app-container",

        _buildTemplate: function(theCollection){
                var htmlStr = ''


          for (var i = 0; i < theCollection.models.length; i++){
            var etsyInfo = theCollection.models[i]

                  htmlStr +=  '<div class= "col-xs-12 col-sm-6 col-md-4 col-lg-3">'
                  htmlStr +=  '<a href=#details/'+etsyInfo.get('listing_id')+'>'
                  htmlStr +=    '<div class="thumbnail etsy-info">'
                  htmlStr +=      '<img src=' + etsyInfo.get("Images")[0].url_170x135 +' alt="..."  >'
                  htmlStr +=      '<h5>' + etsyInfo.get('title')+ '</h5>'
                  htmlStr +=      '<h5>' + etsyInfo.get('price')+ '</h5>'
                  htmlStr +=    '</a>'
                  htmlStr +=   '</div>'
                  htmlStr +=  '</div>'

          }

              return htmlStr

        },
            initialize: function(a){

              this.coll = a
              this.coll.on('sync', this.render.bind(this))
            },

            render: function(){

              this.el.innerHTML = this._buildTemplate(this.coll)

            }

})

module.exports = HomeView
