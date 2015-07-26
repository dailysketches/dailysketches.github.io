$(document).ready(function() {
	function init() {
		initHighlightJs();
		enableViewToggle('.snippet-button', '.code', '.snippet');
		enableViewToggle('.examples-button', '.pattern', '.examples');
	}

	function initHighlightJs() {
		/* jshint ignore:start */
		hljs.initHighlightingOnLoad();
		/* jshint ignore:end */
	}

	function enableViewToggle(trigger, root, target) {
		$(trigger).each(function() {
			var button = $(this);
			var snippet = button.closest(root).children(target);

			button.click(function(e) {
				e.preventDefault();
				snippet.slideToggle('slow');
			});
		});
	}

	init();
});