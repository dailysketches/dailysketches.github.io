!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),$(document).ready(function(){function a(){b(),c(),d(".snippet-button",".code","snippet"),d(".pseudocode-button",".code","pseudocode"),d(".examples-button",".pattern","examples")}function b(){hljs.initHighlightingOnLoad()}function c(){$("html").removeClass("no-js").addClass("js")}function d(a,b,c){$(a).each(function(){var a=$(this),d=a.closest(b).children("."+c);a.click(function(b){b.preventDefault();var e=d.is(":hidden");d.slideToggle("slow"),a.text(e?"hide "+c:"show "+c)})})}a()});