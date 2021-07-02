# casparcg-html-text 
This is a simple text HTML template for use with CasparCG.

### usage ###
Add to your `templates` folder you've likely already configured.

* `PLAY` adds it to screen
* `STOP` sets the class to `display:none`
* `UPDATE` updates the values to match the new values
* use `CLEAR` and `PLAY` again to refresh the files in case of code modification real-time

Use the keys below, sent as JSON:
* texto - text content
* fonte - font
* cor - color (hex or rgba)
* estilo - weight
* tamanho - size (pixels)
* espaco - letter spacing (pixels)

### modifications ###
To change the key names you can just modify the  `texto.js` file.
To add custom fonts, import them into the `fonts.css` file
