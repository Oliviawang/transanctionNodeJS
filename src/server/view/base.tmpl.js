define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),static = locals_.static,base = locals_.base,title = locals_.title;
jade.indent = [];
buf.push("\n<!--\nCreated by owang on 10/6/14.\n\n--><!DOCTYPE html>\n<meta charset=\"utf-8\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n  <head>\n    <link type=\"image/x-icon\" rel=\"shortcut icon\"" + (jade.attr("href", '' + (static) + '/icons/common/favicon.ico', true, true)) + ">\n    <link rel=\"stylesheet\" type=\"text/css\"" + (jade.attr("href", '' + (base) + '/bower_components/bootstrap/dist/css/bootstrap.min.css', true, true)) + ">\n    <link rel=\"stylesheet\" type=\"text/css\"" + (jade.attr("href", '' + (static) + '/css/main.css', true, true)) + ">\n    <script type=\"text/javascript\"" + (jade.attr("src", '' + (base) + '/bower_components/requirejs/require.js', true, true)) + "></script>\n    <script type=\"text/javascript\"" + (jade.attr("src", '' + (base) + '/bower_components/jquery/dist/jquery.min.js', true, true)) + "></script>\n    <script type=\"text/javascript\"" + (jade.attr("src", '' + (base) + '/bower_components/bootstrap/dist/js/bootstrap.min.js', true, true)) + "></script>\n    <script>\n      var staticPath = '" + (jade.escape((jade.interp = static) == null ? '' : jade.interp)) + "';\n      requirejs.config({\n         baseUrl: '" + (jade.escape((jade.interp = static) == null ? '' : jade.interp)) + "/js'\n      });\n    </script>\n    <script type=\"text/javascript\"" + (jade.attr("src", '' + (base) + '/app.config.js', true, true)) + "></script>\n  </head>\n  <body>\n    <div id=\"header\">\n      <div class=\"paypal-img-logo\">PayPal</div>\n      <h1>" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</h1>\n    </div>\n    <footer><span id=\"footer\"> 2014 CopyRight @</span></footer>\n  </body>\n</html>");;return buf.join("");
}

});