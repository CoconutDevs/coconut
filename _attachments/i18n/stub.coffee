window.polyglot = new Polyglot()
window.polyglot.extend({
    "Home": "Início"
})

Handlebars.registerHelper   'polyglot', (phrase)->
    window.polyglot.t(phrase)

fetchTranslation = (languge) ->
    deferred = $.Deferred();
#    Coconut.translation = {} if !Coconut.translation
    translation = new Translation {_id: languge}
    translation.fetch
        success: (record)->
            json = record.toJSON()
            window.polyglot = new Polyglot()
            window.polyglot.extend(json)
            Handlebars.registerHelper   'polyglot', (phrase)->
                window.polyglot.t(phrase)
            deferred.resolve()

        error: (error, response) ->
            console.log("Unable to fetch translation for " + " languge:" + languge + " model:" + JSON.stringify(error) + " response: " + response)
    return deferred.promise()

deferred = fetchTranslation "pt"
deferred.done ->
    console.log("Got translation.")
