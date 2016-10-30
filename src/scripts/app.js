const appContainer = document.querySelector('#app-container')
const $ = require('jquery')
const Backbone = require('backbone')
const EtsyCollection = require('./model-collection.js')
const homeView = require('./home-view.js')



const AppRouter = Backbone.Router.extend({

  routes: {
    "details/:id" : "showIndyPage",
    "" : "showHomePage"
  },

  showHomePage: function(){
      appContainer.innerHTML = '<h2>Hello there</h2>'
        const activeEtsy = new EtsyCollection()

        activeEtsy.fetch().then(function(){
          const mainViewPage = new homeView(activeEtsy)
          mainViewPage.render()
          activeEtsy.fetch()

      console.log(activeEtsy)
    })

  },

  initialize: function(){
    Backbone.history.start()
  }

})
const app = new AppRouter()
