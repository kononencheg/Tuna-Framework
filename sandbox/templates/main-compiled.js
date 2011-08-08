function c() {
  this.b = !!console
}
var f = e, g;
for(g in f.prototype) {
  if(typeof f.prototype[g] === "function") {
    c.prototype[g] = f.prototype[g]
  }
}
c.prototype.info = function(a) {
  this.b ? console.log(a) : alert(a)
};
var h = new function(a) {
  this.a = null;
  if(a) {
    this.a = a
  }
}(new c);
function e() {
}
e.prototype.info = function() {
  throw Error("Method info(message:String) must be implemented!");
};
function i(a, b) {
  this.e = a;
  this.c = b ? b.split(".") : []
}
;function j(a, b) {
  this.f = [];
  j.d.constructor.call(this, a, b)
}
(function(a, b) {
  function d() {
  }
  d.prototype = b.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.d = b.prototype
})(j, i);
for(var k = new i(document.getElementById("users_count"), "users.length"), l = k.c, m = {users:[{id:1, firstName:"\u0421\u0435\u0440\u0433\u0435\u0439", lastName:"\u041a\u043e\u043d\u043e\u043d\u0435\u043d\u043a\u043e"}, {id:2, firstName:"\u041c\u0430\u0440\u0438\u043d\u0430", lastName:"\u0422\u0435\u043e\u0434\u043e\u0440\u0438"}, {id:3, firstName:"\u041c\u0430\u0440\u0438\u043d\u0430", lastName:"\u041a\u043e\u043d\u043e\u043d\u0435\u043d\u043a\u043e"}]}, n = null, o = !m ? window : m, p, q = 0, 
r = l.length;q < r;) {
  p = l[q];
  o = o[p];
  if(!o) {
    break
  }
  q++
}
n = o;
k.e.innerHTML = String(n);
window.element = document.createElement("div");
element.innerHTML = '<span id="span">text</span>';
(function() {
  for(var a = arguments[0], b = 1, d = arguments.length;b < d;) {
    a += ", " + arguments[b];
    b++
  }
  h.a && h.a.info(a)
})(document.getElementById("span").id);

