# Oink

Oink is a small library for editing properties on DOM elements. It replaces this

	var el = document.getElementById('some-id');
	el.style.backgroundColor = '#ccc';
	el.style.fontSize = '1em';

with this

	 var el = document.getElementById('some-id');
	 oink(el)
		.css({
			backgroundColor: '#ccc',
			fontSize: '1em'
		});

The Oink API is chainable and currently supports the following

	oink(element) // element can be a DOM node or another Oink object  
		.css()
		.attr()
		.appendTo()
		.append()
		.text()
		.click()

It's basically like jQuery but a lot less powerfull (and a lot smaller).

## Why the name Oink?

Why not? Also, I wanted a name starting with the letter "o" so I could do this

	(function (o) {
		var el = document.getElementById('some-id');
		o(element)
			.css(...)

	}(window.oink));