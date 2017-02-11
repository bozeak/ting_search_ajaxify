(function($) {
  'use strict';

  // var svalue = $('input[name="search_block_form"]').val();

  // window.history.pushState("string", "Title", svalue);
  // $('.pane-search-result').ready(function() {
  //
  //   var svalue = Drupal.settings.TingSearchAjaxify.key;
  //
  //   $.ajax({
  //     url: Drupal.settings.basePath + 'ajaxify/search/' + svalue,
  //     success: function (response) {
  //       search_wrapper.html("<div class='search-results-wrapper' id='search-results-wrapper'>" + response[3].data + "</div>");
  //     }
  //   });
  // });

  Drupal.behaviors.TingSearchAjaxify = {
    attach: function (context, settings) {
      // Drupal.attachBehaviors('ding_facetbrowser');
      $(document).trigger('facetBrowser');
      // console.log('123123');
      var svalue = $('input[name="search_block_form"]').val();
      var search_wrapper = $('#search-results-wrapper');
      var facetbrowser = $('#js-facet-browser-toggle');
      var query = Drupal.settings.ding_facetbrowser.query;

      window.history.pushState("string", "Title", query);
      $.ajax({
        url: Drupal.settings.basePath + 'ajaxify/search/' + query,
        // type: 'POST',
        // data: {
        //   search_block_form: svalue
        // },
        success: function (response) {
          // var results_count = response[1].data;
          // $('.pane-search-result-count').html(results_count);
          //
          // // Return facets data.
          // var facet_content = response[2].data;
          // console.log(facet_content);
          // facetbrowser.replaceWith(facet_content);
          //
          // // Return search results data.
          // var search_content = response[3].data;
          // // search_wrapper.html("<div class='search-results-wrapper' id='search-results-wrapper'>" + search_content + "</div>");
          // search_wrapper.html(search_content);
          //
        }
      });

    }
  };

}) (jQuery);
