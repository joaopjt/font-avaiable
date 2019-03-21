# Old Browser Detector

⚡ Lightweight code to verify if a font is avaiable on client

## Getting Started

**Download** the script file clicking [here](http://github.com/joaopjt/font-avaiable/blob/master/dist/fontavaiable.min.js)

OR

**Install package** via npm:
```bash
npm install font-avaiable
```
---

### Creating instance
```html
<script src="fontavaiable.min.js"></script> // Import downloaded script file
<script type="text/javascript">
  console.log(fontAvaiable('Arial')); // true
</script>
```

You can import the module with ES6 syntax too:

```javascript
// const isFontAvaiable = require('font-avaiable');
import isFontAvaiable from 'old-browser-detector';

isFontAvaiable('Comic Sans MS'); // Return `true` if font is avaiable.
```

## Contribute

In first of all, fork the repo.

After clone the fork, make sure of use node `v6.11.4`. Install the dependencies, and **rollup** globally.
To build files, use the `rollup -c`.

Then, make a pull request with a nice description of changes.

## License

[MIT License](https://opensource.org/licenses/MIT).

## Made with ❤️ by
- [João Julio](http://github.com/joaopjt)

> Be part of this list too, contribute with us :)
