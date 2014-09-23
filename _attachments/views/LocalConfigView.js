// Generated by CoffeeScript 1.6.3
var LocalConfigView, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LocalConfigView = (function(_super) {
  __extends(LocalConfigView, _super);

  function LocalConfigView() {
    _ref = LocalConfigView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LocalConfigView.prototype.el = '#content';

  LocalConfigView.prototype.render = function() {
    var _ref1;
    this.$el.html("      <form id='local-config'>        <h1>Configure your Coconut system</h1>        <label>Coconut Cloud URL</label>        <input type='text' name='coconut-cloud' size='60' value='https://kiwicentral.org:6984/coconut-central/'></input>        <fieldset id='mode-fieldset'>          <legend>Mode</legend>            <label for='cloud'>Cloud (reporting system)</label>            <input id='cloud' name='mode' type='radio' value='cloud'></input>            <label for='mobile'>Mobile (data collection, probably on a tablet)</label>            <input id='mobile' name='mode' type='radio' value='mobile'></input>        </fieldset>        <button>Save</button>        <div id='message'></div>      </form>    ");
    if (Coconut.config.get("mode") == null) {
      $("#mode-fieldset").hide();
      $("#mobile").prop("checked", true);
    }
    return (_ref1 = Coconut.config.local) != null ? _ref1.fetch({
      success: function() {
        return js2form($('#local-config').get(0), Coconut.config.local.toJSON());
      },
      error: function() {
        return $('#message').html("Complete the fields before continuing");
      }
    }) : void 0;
  };

  LocalConfigView.prototype.events = {
    "click #local-config button": "saveLocal"
  };

  LocalConfigView.prototype.save = function() {
    var coconutCloud, coconutCloudConfigURL, localConfig;
    localConfig = $('#local-config').toObject();
    coconutCloud = $("input[name=coconut-cloud]").val();
    coconutCloudConfigURL = "" + coconutCloud + "/coconut.config";
    if (localConfig.mode && (coconutCloud != null)) {
      $('#message').html("Downloading configuration file from " + coconutCloudConfigURL + "<br/>");
      $.ajax({
        url: coconutCloudConfigURL,
        dataType: "jsonp",
        success: function(cloudConfig) {
          $('#message').append("Saving configuration file<br/>");
          delete cloudConfig["_rev"];
          return Coconut.config.save(cloudConfig, {
            success: function() {
              $('#message').append("Creating local configuration file<br/>");
              localConfig = new LocalConfig();
              return localConfig.save({
                _id: "coconut.config.local"
              }, {
                success: function() {
                  var sync;
                  $('#message').append("Local configuration file saved<br/>");
                  sync = new Sync();
                  return sync.save(null, {
                    success: function() {
                      $('#message').append("Updating application<br/>");
                      return sync.getFromDocs({
                        success: function() {
                          Coconut.router.navigate("", false);
                          return location.reload();
                        },
                        error: function(model, err, cb) {
                          return console.log(JSON.stringify(err));
                        }
                      });
                    },
                    error: function(model, err, cb) {
                      return console.log(JSON.stringify(err));
                    }
                  });
                },
                error: function(model, err, cb) {
                  return console.log(JSON.stringify(err));
                }
              });
            }
          });
        },
        error: function(error) {
          return console.log("Couldn't find config file at " + coconutCloudConfigURL);
        }
      });
      return false;
    } else {
      $('#message').html("Fields incomplete");
      return false;
    }
  };

  LocalConfigView.prototype.saveLocal = function() {
    var cloudConfig, coconutCloud, coconutCloudConfigURL, localConfig;
    localConfig = $('#local-config').toObject();
    coconutCloud = $("input[name=coconut-cloud]").val();
    coconutCloudConfigURL = "" + coconutCloud + "/coconut.config";
    cloudConfig = {
      "_id": "coconut.config",
      "_rev": "11-7b57beeb6ba84273897732a2a798b4b1",
      "title": "Coconut Clinic",
      "cloud": "localhost:5984",
      "local_couchdb_admin_username": "admin",
      "local_couchdb_admin_password": "password",
      "cloud_credentials": "coco:blond4eva!",
      "date_format": "YYYY-MM-DD",
      "datetime_format": "YYYY-MM-DD HH:mm:ss",
      "sync_mode": "couchdb-sync",
      "synchronization_target": "https://kiwicentral.org:6984/coconut-moz-2014/"
    };
    Coconut.config.save(cloudConfig, {
      success: function() {
        $('#message').append("Creating local configuration file<br/>");
        Coconut.config.local = new LocalConfig();
        return Coconut.config.local.save({
          _id: "coconut.config.local",
          coconutCloud: coconutCloud
        }, {
          success: function() {
            var sync;
            $('#message').append("Local configuration file saved<br/>");
            sync = new Sync();
            return sync.save(null, {
              success: function() {
                $('#message').append("Updating application<br/>");
                _.delay(function() {
                  return document.location.reload();
                }, 3000);
                return sync.getFromJSs({
                  success: function() {
                    Coconut.syncView.sync.replicateToServer();
                    Coconut.router.navigate("", false);
                    return location.reload();
                  },
                  error: function(model, err, cb) {
                    return console.log(JSON.stringify(err));
                  }
                });
              },
              error: function(model, err, cb) {
                return console.log(JSON.stringify(err));
              }
            });
          },
          error: function(model, err, cb) {
            return console.log(JSON.stringify(err));
          }
        });
      },
      error: function(model, err, cb) {
        return console.log(JSON.stringify(err));
      }
    });
    return false;
  };

  return LocalConfigView;

})(Backbone.View);
