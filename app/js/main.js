$(document).ready(function() {
	function initHighlightJs() {
		/* jshint ignore:start */
		hljs.initHighlightingOnLoad();
		/* jshint ignore:end */
	}

	function skipModernizr() {
		$('html').removeClass('no-js').addClass('js');
	}

	function enableViewToggle(trigger, root, targetSelector, targetName) {
		$(trigger).each(function() {
			var button = $(this);
			var snippet = button.closest(root).children(targetSelector);

			button.click(function(e) {
				e.preventDefault();
				var visible = snippet.is(':hidden');
				snippet.slideToggle('slow');
				button.text(visible ? 'hide ' + targetName : 'show ' + targetName);
			});
		});
	}

	function init() {
		initHighlightJs();
		skipModernizr();
		enableViewToggle('.snippet-button', '.code', '.snippet', 'snippet');
		enableViewToggle('.pseudocode-button', '.code', '.pseudocode', 'pseudocode');
		enableViewToggle('.examples-button', '.pattern', '.examples', 'examples');
		enableViewToggle('.description-button', '.media-description', '.long', 'description');
	}

	init();
});