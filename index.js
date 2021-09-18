import Keyboard from "./Keyboard/index.js"
import Pinbox from "./pinBox/index.js"
const keypad = new Keyboard()
keypad.render(document.getElementById("root4"))
const pinpad = new Pinbox()
pinpad.render(document.getElementById("root5"))
