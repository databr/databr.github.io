window.DataBRToolbar = {
  load: function(_parent) {
    DataBRToolbar.generate(_parent);

    var menu = $('#navigation-menu');
    var menuToggle = $('#js-mobile-menu');
    var signUp = $('.sign-up');

    $(menuToggle).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle(function(){
        if(menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });

    $(".nav .nav-link").click(function() {
      $(".nav .nav-link").each(function() {
        $(this).removeClass("active-nav-item");
      });
      $(this).addClass("active-nav-item");
      $(".nav .more").removeClass("active-nav-item");
    });
  },
  generate: function(_parent){
    var header = $("<header></header>").addClass("navigation");
    var wrapper = $("<div></div>").addClass("navigation-wrapper");
    var logo = $("<a />").attr("href", "http://databr.io").
      addClass("logo").
      html("<span>data</span><span>br</span>");

    var jsmenu = $("<a />").attr("href", "").
      attr("id", "js-mobile-menu").
      addClass("navigation-menu-button").
      text("MENU");

    var nav = $("<div />").addClass("nav");
    var menu = $("<ul />").attr("id", "navigation-menu");

    DataBRToolbar.addItem(menu, "http://console.databr.io/", "Console");
    DataBRToolbar.addItem(menu, "http://bots.databr.io/help", "Bots");
    DataBRToolbar.addItem(menu, "http://databr.io/help", "Ajude!");
    DataBRToolbar.addItem(menu, "http://databr.io/about", "Sobre");

    nav.append(menu);

    wrapper.append(logo);
    wrapper.append(jsmenu);
    wrapper.append(nav);

    header.append(wrapper);

    $(_parent).prepend(header);
  },
  addItem: function(_parent, href, text){
    var li = $("<li />").addClass("nav-link");
    var link = $("<a />").attr("href", href).html(text);

    li.append(link);
    _parent.append(li);
  }
};
