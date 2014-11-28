class Config extends Backbone.Model
  initialize: ->
    @set
      _id: "coconut.config"

  fetch: (options) ->
    super
      success:->
        Coconut.config.local = new LocalConfig()
        Coconut.config.local.fetch
          success: ->
            options.success?()
          error: ->
            options.error?()
      error:->
        options.error?()


  url: "/configuration"

  title: -> @get("title") || "Coconut"

  database_name: ->
    Coconut.db_name

  design_doc_name: ->
    Coconut.ddoc_name

  cloud_url: ->
    "#{@get "synchronization_target"}"

  cloud_url_with_credentials: ->
    @cloud_url().replace(/https:\/\//,"https://#{@get "cloud_credentials"}@")

  coconut_central_url: ->
      "#{@get "coconut_central_url"}"

  coconut_central_url_with_credentials: ->
      @coconut_central_url().replace(/https:\/\//,"https://#{@get "cloud_credentials"}@")
