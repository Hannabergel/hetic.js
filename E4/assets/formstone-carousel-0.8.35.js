/*! formstone v0.8.35 [core.js] 2015-12-28 | MIT License | formstone.it */

var Formstone=window.Formstone=function(a,b,c){"use strict";function d(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(c),m.Plugins[a].initialized=!0)}function e(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function f(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},d=["transition","-webkit-transition"],e={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},f="transitionend",g="",h="",i=c.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in i.style){f=b[a],m.support.transition=!0;break}p.transitionEnd=f+".{ns}";for(a in d)if(d.hasOwnProperty(a)&&d[a]in i.style){g=d[a];break}m.transition=g;for(a in e)if(e.hasOwnProperty(a)&&e[a]in i.style){m.support.transform=!0,h=e[a];break}m.transform=h}function g(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,h)}function h(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(b,m.windowWidth,m.windowHeight)}function i(){if(m.support.raf){m.window.requestAnimationFrame(i);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(b)}}function j(a,b){return parseInt(a.priority)-parseInt(b.priority)}var k=function(){this.Version="0.8.35",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=b,this.$window=a(b),this.document=c,this.$document=a(c),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),pointer:!!b.PointerEvent,raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=m.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},m=new k,n=a.Deferred(),o={base:"{ns}",element:"{ns}-element"},p={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};k.prototype.NoConflict=function(){m.DontConflict=!0;for(var b in m.Plugins)m.Plugins.hasOwnProperty(b)&&(a[b]=m.Conflicts[b],a.fn[b]=m.Conflicts.fn[b])},k.prototype.Plugin=function(c,f){return m.Plugins[c]=function(c,d){function f(b){var e,f,g,i="object"===a.type(b),j=this,k=a();for(b=a.extend(!0,{},d.defaults||{},i?b:{}),f=0,g=j.length;g>f;f++)if(e=j.eq(f),!h(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,n=e.data(c+"-options"),o=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},b,"object"===a.type(n)?n:{});e.addClass(d.classes.raw.element).data(s,o),d.methods._construct.apply(e,[o].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,g=k.length;g>f;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[h(e)]);return j}function g(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(s)}function h(a){return a.data(s)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:f.apply(this,arguments)}}function k(c){var e=d.utilities[c]||d.utilities._initialize||!1;return e?e.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1)):void 0}function n(b){d.defaults=a.extend(!0,d.defaults,b||{})}function q(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),g=h(f)||{};"undefined"!==a.type(g.$el)&&b.apply(f,[g].concat(Array.prototype.slice.call(arguments,1)))}return c}var r="fs-"+c,s="fs"+c.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=e("classes",r,o,d.classes),d.events=e("events",c,p,d.events),d.functions=a.extend({getData:h,iterate:q},l,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:g},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:n},d.utilities),d.widget&&(m.Conflicts.fn[c]=a.fn[c],a.fn[s]=i,m.DontConflict||(a.fn[c]=a.fn[s])),m.Conflicts[c]=a[c],a[s]=d.utilities._delegate||k,m.DontConflict||(a[c]=a[s]),d.namespace=c,d.namespaceClean=s,d.guid=0,d.methods._resize&&(m.ResizeHandlers.push({namespace:c,priority:d.priority,callback:d.methods._resize}),m.ResizeHandlers.sort(j)),d.methods._raf&&(m.RAFHandlers.push({namespace:c,priority:d.priority,callback:d.methods._raf}),m.RAFHandlers.sort(j)),d}(c,f),n.then(function(){d(c)}),m.Plugins[c]};var q=null,r=20;return m.$window.on("resize.fs",g),g(),i(),a(function(){m.$body=a("body"),n.resolve(),m.support.nativeMatchMedia=m.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),p.clickTouchStart=p.click+" "+p.touchStart,f(),m}(jQuery,window,document);

/*! formstone v0.8.35 [mediaquery.js] 2015-12-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(l[c]=b[c]?a.merge(b[c],l[c]):l[c]);l=a.extend(l,b),l.minWidth.sort(p.sortDesc),l.maxWidth.sort(p.sortAsc),l.minHeight.sort(p.sortDesc),l.maxHeight.sort(p.sortAsc);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in l[d])if(l[d].hasOwnProperty(e)){var f=window.matchMedia("("+t[d]+": "+(l[d][e]===1/0?1e5:l[d][e])+l.unit+")");f.addListener(g),s[d][l[d][e]]=f}}g()}function d(a,b,c){var d=o.matchMedia(b),e=i(d.media);r[e]||(r[e]={mq:d,active:!0,enter:{},leave:{}},r[e].mq.addListener(h));for(var f in c)c.hasOwnProperty(f)&&r[e].hasOwnProperty(f)&&(r[e][f][a]=c[f]);h(r[e].mq)}function e(a,b){if(a)if(b){var c=i(b);r[c]&&(r[c].enter[a]&&delete r[c].enter[a],r[c].leave[a]&&delete r[c].leave[a])}else for(var d in r)r.hasOwnProperty(d)&&(r[d].enter[a]&&delete r[d].enter[a],r[d].leave[a]&&delete r[d].leave[a])}function f(){q={unit:l.unit};for(var a in t)if(t.hasOwnProperty(a))for(var c in s[a])if(s[a].hasOwnProperty(c)){var d="Infinity"===c?1/0:parseInt(c,10),e=t[a].indexOf("width")>-1?b.fallbackWidth:b.fallbackHeight,f=a.indexOf("max")>-1;b.support.nativeMatchMedia?s[a][c].matches&&(f?(!q[a]||d<q[a])&&(q[a]=d):(!q[a]||d>q[a])&&(q[a]=d)):f?!q[a]&&d>e&&(q[a]=d):(!q[a]&&0!==q[a]||d>q[a]&&e>d)&&(q[a]=d)}}function g(){f(),n.trigger(m.mqChange,[q])}function h(a){var b=i(a.media),c=r[b],d=a.matches,e=d?m.enter:m.leave;if(c&&(c.active||!c.active&&d)){for(var f in c[e])c[e].hasOwnProperty(f)&&c[e][f].apply(c.mq);c.active=!0}}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function j(){return q}var k=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:d,unbind:e},events:{mqChange:"mqchange"}}),l={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},m=a.extend(k.events,{enter:"enter",leave:"leave"}),n=b.$window,o=n[0],p=k.functions,q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);

/*! formstone v0.8.35 [touch.js] 2015-12-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){a.touches=[],a.touching=!1,this.on(q.dragStart,r.killEvent),a.swipe&&(a.pan=!0),a.scale&&(a.axis=!1),a.axisX="x"===a.axis,a.axisY="y"===a.axis,b.support.pointer?(n(this,"none"),this.on(q.pointerDown,a,e)):this.on(q.touchStart,a,e).on(q.mouseDown,a,f)}function d(){this.off(q.namespace),n(this,"")}function e(a){a.preventManipulation&&a.preventManipulation();var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end|cancel)$/i))return void j(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.clientX,b.touches[e].pageY=c.clientY);d||b.touches.push({id:c.pointerId,pageX:c.clientX,pageY:c.clientY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?f(a):c.type.match(/move$/i)&&g(a)}function f(c){var d=c.data,f="undefined"!==a.type(d.touches)?d.touches[0]:null;d.touching||(d.startE=c.originalEvent,d.startX=f?f.pageX:c.pageX,d.startY=f?f.pageY:c.pageY,d.startT=(new Date).getTime(),d.scaleD=1,d.passed=!1),d.$links&&d.$links.off(q.click);var h=k(d.scale?q.scaleStart:q.panStart,c,d.startX,d.startY,d.scaleD,0,0,"","");if(d.scale&&d.touches&&d.touches.length>=2){var i=d.touches;d.pinch={startX:l(i[0].pageX,i[1].pageX),startY:l(i[0].pageY,i[1].pageY),startD:m(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},h.pageX=d.startX=d.pinch.startX,h.pageY=d.startY=d.pinch.startY}d.touching||(d.touching=!0,d.pan&&s.on(q.mouseMove,d,g).on(q.mouseUp,d,j),b.support.pointer?s.on([q.pointerMove,q.pointerUp,q.pointerCancel].join(" "),d,e):s.on([q.touchMove,q.touchEnd,q.touchCancel].join(" "),d,e),d.$el.trigger(h))}function g(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,i=g>0?"right":"left",n=h>0?"down":"up",o=Math.abs(g)>t,p=Math.abs(h)>t;if(!c.passed&&c.axis&&(c.axisX&&p||c.axisY&&o))j(b);else{!c.passed&&(!c.axis||c.axis&&c.axisX&&o||c.axisY&&p)&&(c.passed=!0),c.passed&&(r.killEvent(b),r.killEvent(c.startE));var s=!0,u=k(c.scale?q.scale:q.pan,b,e,f,c.scaleD,g,h,i,n);if(c.scale)if(c.touches&&c.touches.length>=2){var v=c.touches;c.pinch.endX=l(v[0].pageX,v[1].pageX),c.pinch.endY=l(v[0].pageY,v[1].pageY),c.pinch.endD=m(v[1].pageX-v[0].pageX,v[1].pageY-v[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,u.pageX=c.pinch.endX,u.pageY=c.pinch.endY,u.scale=c.scaleD,u.deltaX=c.pinch.endX-c.pinch.startX,u.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(s=!1);s&&c.$el.trigger(u)}}function h(b,c){b.on(q.click,c,i);var d=a._data(b[0],"events").click;d.unshift(d.pop())}function i(a){r.killEvent(a,!0),a.data.$links.off(q.click)}function j(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,i=f-c.startY,j=(new Date).getTime(),l=c.scale?q.scaleEnd:q.panEnd,m=g>0?"right":"left",n=i>0?"down":"up",o=Math.abs(g)>1,p=Math.abs(i)>1;if(c.swipe&&Math.abs(g)>t&&j-c.startT<u&&(l=q.swipe),c.axis&&(c.axisX&&p||c.axisY&&o)||o||p){c.$links=c.$el.find("a");for(var r=0,v=c.$links.length;v>r;r++)h(c.$links.eq(r),c)}var w=k(l,b,e,f,c.scaleD,g,i,m,n);s.off([q.touchMove,q.touchEnd,q.touchCancel,q.mouseMove,q.mouseUp,q.pointerMove,q.pointerUp,q.pointerCancel].join(" ")),c.$el.trigger(w),c.touches=[],c.scale,c.touching=!1}function k(b,c,d,e,f,g,h,i,j){return a.Event(b,{originalEvent:c,bubbles:!0,pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,directionX:i,directionY:j})}function l(a,b){return(a+b)/2}function m(a,b){return Math.sqrt(a*a+b*b)}function n(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var o=!b.window.PointerEvent,p=b.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1},methods:{_construct:c,_destruct:d},events:{pointerDown:o?"MSPointerDown":"pointerdown",pointerUp:o?"MSPointerUp":"pointerup",pointerMove:o?"MSPointerMove":"pointermove",pointerCancel:o?"MSPointerCancel":"pointercancel"}}),q=p.events,r=p.functions,s=b.$window,t=10,u=50;q.pan="pan",q.panStart="panstart",q.panEnd="panend",q.scale="scale",q.scaleStart="scalestart",q.scaleEnd="scaleend",q.swipe="swipe"}(jQuery,Formstone);

/*! formstone v0.8.35 [carousel.js] 2015-12-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){J.iterate.call(K,i)}function d(){K=a(G.base)}function e(c){var e,f=[H.base,c.customClass,c.rtl?H.rtl:H.ltr];c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,b.support.transform||(c.useMargin=!0);var i="",k="",l=[H.control,H.control_previous].join(" "),m=[H.control,H.control_next].join(" ");if(c.controls&&!c.customControls&&(i+='<div class="'+H.controls+'">',i+='<button type="button" class="'+l+'">'+c.labels.previous+"</button>",i+='<button type="button" class="'+m+'">'+c.labels.next+"</button>",i+="</div>"),c.pagination&&(k+='<div class="'+H.pagination+'">',k+="</div>"),c.autoHeight&&f.push(H.auto_height),c.contained&&f.push(H.contained),c.single&&f.push(H.single),this.addClass(f.join(" ")).wrapInner('<div class="'+H.wrapper+'"><div class="'+H.container+'"><div class="'+H.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+H.viewport+'"></div>').append(k),c.$viewport=this.find(G.viewport).eq(0),c.$container=this.find(G.container).eq(0),c.$canister=this.find(G.canister).eq(0),c.$pagination=this.find(G.pagination).eq(0),c.$paginationItems=c.$pagination.find(G.page),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([H.controls,H.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(l),c.$controlNext=a(c.controls.next).addClass(m)):(c.$controls=this.find(G.controls).eq(0),c.$controlPrevious=c.$controls.find(G.control_previous),c.$controlNext=c.$controls.find(G.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null,"object"===a.type(c.show)){var n=c.show,o=[],p=[];for(e in n)n.hasOwnProperty(e)&&p.push(e);p.sort(J.sortAsc);for(e in p)p.hasOwnProperty(e)&&o.push({width:parseInt(p[e]),count:n[p[e]],mq:window.matchMedia("(min-width: "+parseInt(p[e])+"px)")});c.show=o}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d()}function f(b){J.clearTimer(b.autoTimer),J.startTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.$controlItems.removeClass([G.control,H.control_previous,G.control_next,G.visible].join(" ")).off(I.namespace),b.$images.off(I.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([H.item,H.visible,G.item_previous,G.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([H.controls,H.controls_custom,H.visible].join(" ")),this.removeClass([H.base,H.ltr,H.rtl,H.enabled,H.animated,H.contained,H.single,H.auto_height,H.customClass].join(" ")),d()}function g(a){a.enabled&&(J.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([H.enabled,H.animated].join(" ")).off(I.namespace),a.$canister.fsTouch("destroy").off(I.namespace).attr("style","").css(M,"none"),a.$items.css({width:"",height:""}).removeClass([H.visible,G.item_previous,G.item_next].join(" ")),a.$images.off(I.namespace),a.$controlItems.off(I.namespace),a.$pagination.html(""),u(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(L,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(H.enabled).on(I.click,G.page,a,s),a.$controlItems.on(I.click,a,r),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(I.panStart,a,y).on(I.pan,a,z).on(I.panEnd,a,A).on(I.swipe,a,B).css(M,""),j(a),a.$images.on(I.load,a,p),a.autoAdvance&&(a.autoTimer=J.startTimer(a.autoTimer,a.autoTime,function(){q(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return u(a),void a.$canister.css({height:""});for(this.removeClass(H.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=x(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([H.visible,H.item_previous,H.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=g.eq(a.rtl?g.length-1:0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i-2*a.itemMargin):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+H.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?u(a):v(a),a.$paginationItems=a.$el.find(G.page),t(a,a.index,!1),setTimeout(function(){a.$el.addClass(H.animated)},5)}}function j(a){a.$items=a.$canister.children().not(":hidden").addClass(H.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(I.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b,c){a.enabled&&(J.clearTimer(a.autoTimer),t(a,b-1,!0,c))}function n(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount-1),t(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),t(a,b)}function p(a){var b=a.data;b.resizeTimer=J.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function q(a){var b=a.index+1;b>=a.pageCount&&(b=0),t(a,b)}function r(b){J.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(H.control_next)?1:-1);J.clearTimer(c.autoTimer),t(c,d)}function s(b){J.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));J.clearTimer(c.autoTimer),t(c,d)}function t(a,b,c,d){if(0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),!(a.count<1)){a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition=D(a,a.leftPosition),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(M,"none").css(L,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(M,"")},5)):a.$canister.css(L,"translateX("+a.leftPosition+"px)"),a.$items.removeClass([H.visible,H.item_previous,H.item_next].join(" "));for(var e=0,f=a.pages.length;f>e;e++)e===b?a.pages[e].$items.addClass(H.visible):a.pages[e].$items.not(a.pages[b].$items).addClass(b>e?H.item_previous:H.item_next);a.autoHeight&&a.$canister.css({height:a.pages[b].height}),c!==!1&&d!==!0&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(I.update,[b]),a.index=b,w(a)}}function u(a){a.$controls.removeClass(H.visible),a.$controlItems.removeClass(H.visible),a.$pagination.removeClass(H.visible)}function v(a){a.$controls.addClass(H.visible),a.$controlItems.addClass(H.visible),a.$pagination.addClass(H.visible)}function w(a){a.$paginationItems.removeClass(H.active).eq(a.index).addClass(H.active),a.infinite?a.$controlItems.addClass(H.visible):a.pageCount<1?a.$controlItems.removeClass(H.visible):(a.$controlItems.addClass(H.visible),a.index<=0?a.$controlPrevious.removeClass(H.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(H.visible))}function x(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function y(a){var b=a.data;if(J.clearTimer(b.autoTimer),!b.single){if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(L).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(M,"none"),z(a)}b.isTouching=!0}function z(a){var b=a.data;b.single||(b.touchLeft=D(b,b.leftPosition+a.deltaX),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(L,"translateX("+b.touchLeft+"px)"))}function A(a){var b=a.data,c=Math.abs(a.deltaX),d=E(b,a),e=!1;if(!b.single){var f,g,h=Math.abs(b.touchLeft),i=!1,j=b.rtl?"right":"left";if(a.directionX===j)for(f=0,g=b.pages.length;g>f;f++)i=b.pages[f],h>Math.abs(i.left)+20&&(e=f+1);else for(f=b.pages.length-1,g=0;f>=g;f--)i=b.pages[f],h<Math.abs(i.left)&&(e=f-1)}e===!1&&(e=50>c?b.index:b.index+d),C(b,e)}function B(a){var b=a.data,c=E(b,a),d=b.index+c;C(b,d)}function C(a,b){a.$canister.css(M,""),t(a,b),a.isTouching=!1}function D(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),0>b&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function E(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var F=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,single:!1,rtl:!1,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{update:"update"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,reset:k,resize:i,update:l}}),G=F.classes,H=G.raw,I=F.events,J=F.functions,K=[],L=b.transform,M=b.transition}(jQuery,Formstone);
