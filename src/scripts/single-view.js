const Backbone = require('backbone')
const $ = ('jquery')
const appContainer = document.querySelector('#app-container')


const EtsySinglePage = Backbone.View.extend({

          el: "#app-container",

          _buildTemplate: function(theCollection){

                  var htmlStr = theCollection.models.map(function(etsyObj){
                  //         console.log(etsyObj)

                    return `
                          <div class="container single-view">
                             <div class="col-xs-12 col-sm-6">
                              <div class="thumbnail">
                                <img src="${etsyObj.get('Images')[0].url_170x135}" alt="...">
                                <p> ${etsyObj.get('description')}</p>
                              </div>
                            </div>
                              <div class="product-info">
                                  <h5> ${etsyObj.get('title')} </h5>
                                  <p> ${etsyObj.get('listing_id')}</p>
                                  <p> ${etsyObj.get('price')} </p>
                                </div>
                              </div>
                            </div>
                            `

            }).join('')

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





// var etsySinglePage = function(theCollection){
//
// console.log(theCollection)
//   var bigStr = theCollection.models.map(function(etsyObj){
//         console.log(etsyObj)
//     return `
//
//        <div class="container single-view">
//         <div class="col-xs-12 col-sm-6">
//           <div class="thumbnail">
//             <img src=${etsyObj.get('Images')[0].url_170x135} alt="...">
//             <p> ${etsyObj.get('description')}</p>
//           </div>
//         </div>
//           <div class="product-info">
//               <h5> ${etsyObj.get('title')} </h5>
//               <p> ${etsyObj.get('listing_id')}</p>
//               <p> ${etsyObj.get('price')} </p>
//             </div>
//           </div>
//         </div>
//
//           `
//
//
//         }).join('')
//
//       return bigStr
//   }
module.exports = EtsySinglePage
