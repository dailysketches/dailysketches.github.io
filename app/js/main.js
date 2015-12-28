$(document).ready(function() {
	function init() {
		initHighlightJs();
		skipModernizr();
		enableViewToggle('.snippet-button', '.code', 'snippet');
		enableViewToggle('.pseudocode-button', '.code', 'pseudocode');
		enableViewToggle('.examples-button', '.pattern', 'examples');
		enableViewToggle('.description-button', '.media-description', 'description');
	}

	function initHighlightJs() {
		/* jshint ignore:start */
		hljs.initHighlightingOnLoad();
		/* jshint ignore:end */
	}

	function skipModernizr() {
		$('html').removeClass('no-js').addClass('js');
	}

	function enableViewToggle(trigger, root, target) {
		$(trigger).each(function() {
			var button = $(this);
			var snippet = button.closest(root).children('.' + target);

			button.click(function(e) {
				e.preventDefault();
				var visible = snippet.is(':hidden');
				snippet.slideToggle('slow');
				button.text(visible ? 'hide ' + target : 'show ' + target);
			});
		});
	}

	init();
});