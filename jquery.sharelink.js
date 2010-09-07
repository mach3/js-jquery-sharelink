/**
 * jquery.sharelink.js
 * @version 1.0
 * @author mach3
 * @requires jQuery http://jquery.com/
 */

$.fn.extend({
	/**
	 * Function to return information about URLs for social bookmark ( network ) services as object.
	 * @class
	 * @property {string} twitter http://twitter.com/share?url={{url}}&text={{title}}
	 * @property {string} facebook http://www.facebook.com/sharer.php?u={{url}}
	 * @property {string} livedoor http://clip.livedoor.com/clip/add?link={{url}}&title={{title}}
	 * @property {string} hatena http://b.hatena.ne.jp/add?url={{url}}
	 * @property {string} delicious http://b.hatena.ne.jp/add?url={{url}}
	 * @property {string} google https://www.google.com/bookmarks/mark?op=add&bkmk={{url}}&title={{title}}
	 * @property {string} yahoo http://bookmarks.yahoo.co.jp/bookmarklet/showpopup?t={{title}}&u={{url}}&ei=UTF-8
	 */
	sharelinkURL:function(){
		return {
			"twitter" : "http://twitter.com/share?url={{url}}&text={{title}}",
			"facebook" : "http://www.facebook.com/sharer.php?u={{url}}",
			"livedoor" : "http://clip.livedoor.com/clip/add?link={{url}}&title={{title}}",
			"hatena" : "http://b.hatena.ne.jp/add?url={{url}}",
			"delicious" : "http://www.delicious.com/save?url={{url}}&title={{title}}",
			"google" : "https://www.google.com/bookmarks/mark?op=add&bkmk={{url}}&title={{title}}",
			"yahoo" : "http://bookmarks.yahoo.co.jp/bookmarklet/showpopup?t={{title}}&u={{url}}&ei=UTF-8"
		};
	},
	/**
	 * Function to return default configuration for sharelink as object.
	 * @class
	 * @property {string} url URL of web page you want to share.
	 * @property {string} title Title of web page you want to share.
	 * @property {string} target Target window string.
	 * @property {boolean} encode Boolean if encode URL and title or not.
	 */
	sharelinkDefaultOption:function(){
		return {
			url:location.href,
			title:document.title,
			target:"_blank",
			encode:true
		};
	},
	/**
	 * Function to attach links for social bookmark ( network ) services to anchor elements.
	 * @class
	 * @param {string} type The name of service. (see keys of sharelinkURL)
	 * @param {object} option The configurations for sharelink. (see sharelinkDefaultOption)
	 * @returns {object} jQuery object itself.
	 */
	sharelink:function( type, option ){
		var op = $.extend( $().sharelinkDefaultOption(), option ),
			urls = $().sharelinkURL(),
			makelink = function(){
				return urls[type]
				.replace( /{{url}}/g, (op.encode) ? encodeURI( op.url ) : op.url )
				.replace( /{{title}}/g, (op.encode) ? encodeURI( op.title ) : op.title );				
			};
		$(this).attr("href", makelink());
		$(this).attr("target", op.target);
		return this;
	}
});
