import View from "../View/index.js";
import template from "../pinBox/template.js"; 

export default class Pinbox extends View{
    initialize(data,options){
        this.displayNum = ''
    }
    setDomEvents(){
        return{
            '.number click' : this.writePin.bind(this)
        }
    }
    getAttributes(){
        return{
            class : 'frame1',
        }
    }
    templateFunction(){
        return template
    }
    writePin(event){
        const buttonPress = Object.keys(event.target.dataset)[0]
        const valueShow = Object.values(event.target.dataset)[0]
        switch(buttonPress){
            case 'num':
               this.numberEntry(valueShow)
               break;
            case 'events':
                this.eventDetect(valueShow)
                break;
            default:
                break;
        }
    }
    numberEntry(numbs){
        if(this.displayNum.length >=4) return
        this.displayNum += numbs
        this.entryNum(this.displayNum)
       
    }
    entryNum(text){
        const NM = this.$el.querySelector('.pinCodeDisplay')
        NM.innerText = text
    }
    eventDetect(react){
        switch(react){
            case 'enter':
                this.enterValue()
                break;
            case 'delete':
                this. deleteValue()
                break;
            default:
                break;
        }
    }
    enterValue(){
        const dis1 = this.$el.querySelector('.finalShows1')
        const dis = this.$el.querySelector('.finalShows')
        dis.innerText = this.displayNum
        if(this.displayNum === '1234'){
            dis1.innerText = `it is correct`
        }
        else{
            dis1.innerText =`it is not correct`
        }
        this.displayNum =''
        this.entryNum(this.displayNum)
    }
    deleteValue(){
        this.displayNum = this.displayNum.slice(0,-1)
        this.entryNum(this.displayNum)
    }
}