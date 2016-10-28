const $ = require('jquery')
const Backbone = require('backbone')
const UserCollection = require('./model-collection.js')
const {ViewTemplateConstructor,templateFn} = require('./view.js')



console.log(Backbone)
document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

const AppRouter = Backbone.Router.extend({

  routes: {
    "details/:id" : "showIndyPage",
    "" : "showHomePage"
  },

  showHomePage: function(){
        const coll = new UserCollection()
        coll.fetch().then(function(){

      console.log(coll)
    })
      // const view = new ViewTemplateConstructor()
      // view.render(coll)

  },



  initialize: function(){
    Backbone.history.start()
  }

})
const app = new AppRouter()
