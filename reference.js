!function () {
  "use strict";
  var Spotlight = {
    selectors: {
      that: "bb-that",
      spotlight: ".bb-that-spotlight",
      spotlightActive: "bb-that-spotlight--active",
      dataEndpoint: "data-spotlight-service",
    },
    logs: {
      invalidTHAT: "THAT was not rendered correctly. ",
      noEndpoint: "Spotlight retrieval endpoint not set. ",
      noSpotlight: "There are no spotlights to display at the moment ",
      parsingError: "There was an error when parsing the spotlight response ",
      invalidResponse: "There was an error when retrieving the spotlight ",
      spotlightSeen: "The spotlight has already been seen and closed.",
    },
    cookieName: "bloomberg.that.spotlight",
    cookieDuration: 1,
    spotlightEvent: "bloomberg.that.spotlight",
    endpoint: "",
    tophat: null,
    init: function () {
      this.validateTHAT() && this.retrieveSpotlight();
    },
    validateTHAT: function () {
      var $valid = !1;
      return (
        (this.tophat = document.querySelector("div#" + this.selectors.that)),
        this.tophat
          ? ((this.endpoint = this.tophat.getAttribute(
              this.selectors.dataEndpoint
            )),
            this.endpoint ? ($valid = !0) : this.log(!0, this.logs.noEndpoint))
          : this.log(!0, this.logs.invalidTHAT),
        $valid
      );
    },
  };
};
