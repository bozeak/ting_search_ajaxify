(function($) {
  'use strict';

  Drupal.behaviors.TingSearchAjaxify = {
    attach: function(context, settings) {

      $(document, context).once(function() {
        $(this).load('ajaxify');
      });
      $(".pager a").each(function(){
        $(".pager a").addClass("use-ajax");
      });

      $('.pane-search-result .pane-content').attr('id', 'search-results-wrapper');
      $('.pane-search-result-count .page-title').attr('id', 'search-count');



      $('.search-results ul.pager li a').click(search_result_pager);

      // Filter Results Paginations
      function search_result_pager() {
        var thisLink = $(this);
        var thisUrl = getLocation(this.href);
        var target = $("#search-results-wrapper");
        $.ajax({
          url: Drupal.settings.basePath + 'ajaxify' + thisUrl.search,
          type: "GET",
          success: function(data) {
            console.log(data);
            $(target).html(data[3].data);
            // Drupal.attachBehaviors(".search-results");
          }
        });
        return false;
      }

      var getLocation = function(href) {
        var l = document.createElement("a");
        l.href = href;
        return l;
      };
    }
  };

}) (jQuery);
