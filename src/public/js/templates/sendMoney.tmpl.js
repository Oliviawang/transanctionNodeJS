define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};

jade.indent = [];
buf.push("\n<!--\nCreated by owang on 10/8/14.\n\n-->\n<form id=\"moneyForm\">\n  <div class=\"input-group\"><span class=\"input-group-addon\">To:</span>\n    <input type=\"text\" placeholder=\"example@paypal.com\" name=\"to\" class=\"form-control\"/>\n  </div>\n  <div class=\"input-group\"><span class=\"input-group-addon\">Amount:</span>\n    <input type=\"text\" name=\"amount\" placeholder=\"1.00\" class=\"form-control\"/>\n    <div class=\"input-group-btn\">\n      <button id=\"currency\" type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">USD<span class=\"caret\"></span></button>\n      <ul id=\"dropdown\" role=\"menu\" class=\"dropdown-menu dropdown-menu-right\">\n        <li><a href=\"#\">USD</a></li>\n        <li><a href=\"#\">CNY</a></li>\n        <li><a href=\"#\">CAD</a></li>\n        <li><a href=\"#\">EUR</a></li>\n        <li><a href=\"#\">JPY</a></li>\n        <li><a href=\"#\">AUD</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"input-group\"><span class=\"input-group-addon\">Message:(optional)</span>\n    <input type=\"textarea\" name=\"message\" class=\"form-control\"/>\n  </div><span>What's this payment for?</span>\n  <div class=\"input-group vertical-border\"><span class=\"input-group-addon text-left\">\n      <input type=\"radio\" name=\"option\" value=\"1\"/> I am sending money to family or friends<br/>\n      <input type=\"radio\" name=\"option\" value=\"2\"/> I am paying for goods or servcies</span></div>\n  <div class=\"input-group button-group\">\n    <button id=\"clear\" type=\"button\" class=\"btn btn-default\">Clear</button>\n    <button id=\"next\" type=\"button\" class=\"btn btn-primary\"> Next</button>\n  </div>\n</form>\n<div id=\"loader\"></div>");;return buf.join("");
}

});