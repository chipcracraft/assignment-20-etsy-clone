const appContainer = document.querySelector('#app-container')
// const Bootstrap = require('bootstrap')
const $ = require('jquery')
const Backbone = require('backbone')
const { EtsyModel,EtsyCollection } = require('./model-collection.js')
const HomeView = require('./home-view.js')
const EtsySinglePage = require('./single-view.js')



const AppRouter = Backbone.Router.extend({

  routes: {
    "details/:id" : "showIndyPage",
    "" : "showHomePage"
  },



  showIndyPage: function(listing){
      const singleEtsy = new EtsyCollection(listing)


        singleEtsy.fetch().then(function(){
          const singlePageView = new EtsySinglePage(singleEtsy)
          singlePageView.render()
          singleEtsy.fetch()


      })

  },

  showHomePage: function(){
      appContainer.innerHTML = '<h2>Etsy</h2>'

        const activeEtsy = new EtsyCollection()

        activeEtsy.fetch().then(function(){
          const mainViewPage = new HomeView(activeEtsy)
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
