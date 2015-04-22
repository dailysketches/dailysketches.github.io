$(document).ready(function() {
	function init() {
		initHighlightJs();
		enableViewSnippet();
	}

	function initHighlightJs() {
		/* jshint ignore:start */
		hljs.initHighlightingOnLoad();
		/* jshint ignore:end */
	}

	function enableViewSnippet() {
		$('.snippet-button').each(function() {
			var button = $(this);
			var snippet = button.closest('.code').children('.snippet');

			button.click(function(e) {
				e.preventDefault();
				snippet.slideToggle('slow');
			});
		});
	}

	init();
});