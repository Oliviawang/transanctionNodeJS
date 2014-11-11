define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),uis = locals_.uis;
jade.indent = [];
buf.push("\n<!--Created by owang on 10/7/14.\n-->\n<ul>");
// iterate uis
;(function(){
  var $$obj = uis;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var val = $$obj[i];

buf.push("\n  <li class=\"list-item\"> " + (jade.escape((jade.interp = val.date) == null ? '' : jade.interp)) + " " + (jade.escape((jade.interp = val.user) == null ? '' : jade.interp)) + " " + (jade.escape((jade.interp = val.user) == null ? '' : jade.interp)) + "\n    <ul>\n      <li> - " + (jade.escape((jade.interp = val.description) == null ? '' : jade.interp)) + "</li>\n    </ul>\n  </li>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var val = $$obj[i];

buf.push("\n  <li class=\"list-item\"> " + (jade.escape((jade.interp = val.date) == null ? '' : jade.interp)) + " " + (jade.escape((jade.interp = val.user) == null ? '' : jade.interp)) + " " + (jade.escape((jade.interp = val.user) == null ? '' : jade.interp)) + "\n    <ul>\n      <li> - " + (jade.escape((jade.interp = val.description) == null ? '' : jade.interp)) + "</li>\n    </ul>\n  </li>");
    }

  }
}).call(this);

buf.push("\n</ul>");;return buf.join("");
}

});