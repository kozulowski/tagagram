/*!
* jQuery tagagram Plugin v0.1.0
* https://github.com/kozulowski/tagagram
*
* Copyright 2013 Jakub Bilko
* Released under the MIT license
*/
(function(e){function s(e,t,n,r){var i;if(r=="single"){i="https://api.instagram.com/v1/tags/"+e+"/media/recent?client_id="+n+"&limit="+t}else if(r=="multiPage"||r=="all"){i="https://api.instagram.com/v1/tags/"+e+"/media/recent?client_id="+n}return i}function o(n){e.ajax({url:n,type:"GET",dataType:"jsonp",cache:false}).done(function(n){e.each(n.data,function(e,n){t.append(f(n))})})}function u(n){if(r<i){e.ajax({url:n,type:"GET",dataType:"jsonp",cache:false}).done(function(n){e.each(n.data,function(e,n){t.append(f(n))});r++;if(n.pagination.next_url)u(n.pagination.next_url)})}}function a(n){e.ajax({url:n,type:"GET",dataType:"jsonp",cache:false}).done(function(n){e.each(n.data,function(e,n){t.append(f(n))});if(n.pagination.next_url)a(n.pagination.next_url)})}function f(e){var t=n.template;t=t.replace("{link}",e.link);t=t.replace("{low_resolution}",e.images.low_resolution.url);t=t.replace("{thumbnail}",e.images.thumbnail.url);t=t.replace("{standard_resolution}",e.images.standard_resolution.url);t=t.replace("{caption}",e.caption.text);t=t.replace("{likes}",e.likes.count);return t}var t,n,r,i;e.fn.getTaggedMedia=function(f){t=this;n=e.extend({clientId:"",tagName:"",mode:"single",limit:20,pageCount:1,template:'<a href="{link}"><img src="{low_resolution}" alt="" /></a>'},f);url=s(n.tagName,n.limit,n.clientId,n.mode);if(n.mode=="single"){o(url)}else if(n.mode=="multiPage"){r=0;i=n.pageCount;u(url)}else if(n.mode=="all"){a(url)}};})(jQuery)