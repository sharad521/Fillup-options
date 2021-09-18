import View from '../View/index.js'
import template from './template.js'

 export default  class Keyboard extends View{
    initialize(data,options){
        this.valueDisplay = ''
    }
    setDomEvents(){
        return{
        '.alphabet click': this.displayName.bind(this)
        }
    }
    onBeforeRender(){
        console.log('rendering')
    }
    onRender(){
        console.log('sucessfully rendered')
    }
    templateFunction(){
        return template
    }
    getAttribute(){
        return{
            class: 'frame',
        }
    }
    displayName(text){
       const keyPress = Object.keys(text.target.dataset)[0]
       const displying = Object.values(text.target.dataset)[0]
       switch(keyPress){
           case 'word':
               this.displayWord(displying)
               break;
            case 'delete':
                this.deleteAlphabet()
                break;
            case 'final':
                this.finalizeAlphabet()
                break;
            case 'area':
                this.spaceBetween(displying)
                break;
            default:
                break;
       }
    }
    
    displayWord(words){
        if(this.valueDisplay.length >= 26)return
        this.valueDisplay += words
        this.showWords (this.valueDisplay)
    }
    showWords(text){
        const show = this.$el.querySelector('.nameDisplay')
        show.innerText = text
    }
    deleteAlphabet(){
        this.valueDisplay = this.valueDisplay.slice(0,-1)
        this.showWords (this.valueDisplay)
      }
    finalizeAlphabet(){
      const outbox = this.$el.querySelector('.finalShow')
      outbox.innerText = this.valueDisplay
      this.valueDisplay = ''
      this.displayWord(this.valueDisplay)
    }
    spaceBetween(spaces){
        this.valueDisplay +=spaces
        this.showWords (this.valueDisplay)
    }
}