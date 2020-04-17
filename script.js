(function() {
  /**
   * Helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  /**
   *
   *   var quickviews = bulmaQuickview.attach(); // quickviews now contains an array of all Quickview instances

   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */

  function setupMenuHandlers() {
    document.querySelectorAll('.modal-button').forEach(function(el) {
      el.addEventListener('click', function() {
        var target = document.querySelector(el.getAttribute('data-target'));
        target.classList.add('is-active');
        target.querySelector('.modal-close').addEventListener('click', function() {
          target.classList.remove('is-active');
        });
      });
    });

    // Textbox on radio option
    $(function() {
      $('input[name="answer"]').on('click', function() {
        if ($(this).val() === 'orderproblem') {
          $('#orderproblemtext').show();
        } else {
          $('#orderproblemtext').hide();
        }
      });
    });

    // Close mobile & tablet menu on item click
    $('.navbar-item').each(function() {
      $(this).click(function() {
        if ($('#navbar-burger').hasClass('is-active')) {
          $('#navbar-burger').removeClass('is-active');
          $('#navbar-menu-id').removeClass('is-active');
        }
      });
    });

    // Open or Close mobile & tablet menu
    $('#navbar-burger').click(function() {
      if ($('#navbar-burger').hasClass('is-active')) {
        $('#navbar-burger').removeClass('is-active');
        $('#navbar-menu-id').removeClass('is-active');
      } else {
        $('#navbar-burger').addClass('is-active');
        $('#navbar-menu-id').addClass('is-active');
      }
    });

    $(document).ready(function() {
      $('#select').on('change', function() {
        switch (this.value) {
          case 'none':
            $('#airplanes-box').hide();
            $('#helicopters-box').hide();
            $('#subscribe-form').hide();

            break;
          case 'all':
            $('#airplanes-box').show();
            $('#helicopters-box').show();
            $('#subscribe-form').show();

            break;
          case 'airplanes':
            $('#airplanes-box').show();
            $('#helicopters-box').hide();
            $('#subscribe-form').show();

            break;
          case 'helicopters':
            $('#airplanes-box').hide();
            $('#helicopters-box').show();
            $('#subscribe-form').show();

            break;
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      // Dropdowns

      var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

      if ($dropdowns.length > 0) {
        $dropdowns.forEach(function($el) {
          $el.addEventListener('click', function(event) {
            event.stopPropagation();
            $el.classList.toggle('is-active');
          });
        });

        document.addEventListener('click', function() {
          closeDropdowns();
        });
      }

      function closeDropdowns() {
        $dropdowns.forEach(function($el) {
          $el.classList.remove('is-active');
        });
      }

      // Close dropdowns if ESC pressed
      document.addEventListener('keydown', function(event) {
        var e = event || window.event;
        if (e.keyCode === 27) {
          closeDropdowns();
        }
      });

      // Functions

      function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
      }
    });
  }

  window.onload = setupMenuHandlers;
})();
