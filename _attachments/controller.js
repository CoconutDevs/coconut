// Generated by CoffeeScript 1.6.3
var Controller;

Controller = {
  displaySiteNav: function() {
    var model, staticView;
    Coconut.siteNav.empty();
    if (Coconut.currentAdmin !== null) {
      model = Coconut.currentAdmin;
    }
    staticView = new SiteNavView({
      template: JST["_attachments/templates/SiteNavView.handlebars"],
      model: model
    });
    Coconut.siteNav.show(staticView);
  },
  displayUserScanner: function() {
    var staticView;
    staticView = new VerifyView({
      template: JST["_attachments/templates/ScanVerifyView.handlebars"]
    });
    staticView.nextUrl = "#scanRetry/user";
    Coconut.mainRegion.show(staticView);
  },
  displayAdminScanner: function() {
    var staticView;
    staticView = new VerifyView({
      template: JST["_attachments/templates/VerifyView.handlebars"]
    });
    staticView.nextUrl = "#scanRetry";
    Coconut.mainRegion.show(staticView);
  },
  displayRegistration: function(user) {
    $("#message").html("");
    if (typeof user !== "undefined") {
      return Coconut.router.navigate("#new/result/Individual%20Registration", true);
    } else {
      return Coconut.router.navigate("#new/result/Admin%20Registration", true);
    }
  },
  displayUserMain: function() {
    var staticView;
    $("#message").html("");
    staticView = new StaticView();
    Coconut.mainRegion.show(staticView);
  },
  postUserRegistrationMenu: function() {
    var dashboardLayout, dashboardView, staticView;
    $("#message").html("");
    dashboardLayout = new DashboardLayout();
    Coconut.mainRegion.show(dashboardLayout);
    dashboardView = new ClientDashboardView({
      model: Coconut.currentClient
    });
    dashboardLayout.dashboardRegion.show(dashboardView);
    staticView = new StaticView({
      template: JST["_attachments/templates/PostUserRegistrationMenuView.handlebars"]
    });
    dashboardLayout.contentRegion.show(staticView);
  },
  postAdminRegistrationMenu: function() {
    var staticView;
    $("#message").html("");
    staticView = new StaticView({
      template: JST["_attachments/templates/PostAdminRegistrationMenuView.handlebars"]
    });
    Coconut.mainRegion.show(staticView);
  },
  enrollUser: function() {
    var staticView;
    $("#message").html("");
    staticView = new StaticView({
      template: JST["_attachments/templates/Enroll.handlebars"]
    });
    staticView.user = 'user';
    Coconut.mainRegion.show(staticView);
  },
  enrollAdmin: function() {
    var staticView;
    $("#message").html("");
    staticView = new StaticView({
      template: JST["_attachments/templates/Enroll.handlebars"]
    });
    staticView.user = 'admin';
    Coconut.mainRegion.show(staticView);
  },
  displayReportMenu: function() {
    var staticView;
    $("#message").html("");
    staticView = new UserFormView({
      template: JST["_attachments/templates/UserReportMenu.handlebars"]
    });
    Coconut.mainRegion.show(staticView);
  },
  displayImmunization: function() {
    var staticView;
    $("#message").html("");
    staticView = new UserFormView({
      template: "ImmunizationForm"
    });
    Coconut.mainRegion.show(staticView);
  },
  saveRecord: function(record) {
    $("#message").html("");
    record = new Record(record);
    record.post();
    console.log('saved' + JSON.stringify(record));
    Coconut.trigger("userMain");
  },
  scanRetry: function(user) {
    var staticView;
    $("#message").html("");
    staticView = new StaticView({
      template: JST["_attachments/templates/ScanRetry.handlebars"]
    });
    staticView.user = user;
    Coconut.mainRegion.show(staticView);
  },
  showDashboard: function(user) {
    var staticView;
    if (Coconut.currentClient !== null) {
      staticView = new ClientDashboardView({
        model: Coconut.currentClient
      });
      Coconut.dashboardRegion.show(staticView);
    }
  },
  displaySync: function() {
    Coconut.syncView = new SyncView();
    Coconut.syncView.render();
  },
  loadTestClient: function() {
    var client;
    $("#message").html("");
    client = new Result({
      _id: 'TestClient'
    });
    return client.fetch({
      success: function() {
        console.log(JSON.stringify(client));
        Coconut.currentClient = client;
        return Coconut.router.navigate("displayClientRecords", true);
      },
      error: function(model, err, cb) {
        return console.log(JSON.stringify(err));
      }
    });
  },
  displayClientRecords: function() {
    var clientId, dashboardLayout, dashboardView, results, viewOptions,
      _this = this;
    if (Coconut.currentClient) {
      clientId = Coconut.currentClient.get("_id");
      viewOptions = {};
      results = new SecondaryIndexCollection;
      return results.fetch({
        fetch: 'query',
        options: {
          query: {
            key: clientId,
            include_docs: true,
            fun: 'by_clientId'
          }
        },
        success: function() {
          var dashboardLayout, dashboardView;
          console.log(JSON.stringify(results));
          viewOptions = {
            collection: results
          };
          dashboardLayout = new DashboardLayout();
          Coconut.mainRegion.show(dashboardLayout);
          dashboardView = new ClientDashboardView({
            model: Coconut.currentClient
          });
          dashboardLayout.dashboardRegion.show(dashboardView);
          return dashboardLayout.contentRegion.show(new HomeCompositeView(viewOptions));
        },
        error: function(model, err, cb) {
          return console.log(JSON.stringify(err));
        }
      });
    } else {
      dashboardLayout = new DashboardLayout();
      Coconut.mainRegion.show(dashboardLayout);
      dashboardView = new ClientDashboardView({
        model: Coconut.currentClient
      });
      dashboardLayout.dashboardRegion.show(dashboardView);
      return dashboardLayout.contentRegion.show(new HomeCompositeView(viewOptions));
    }
  }
};
