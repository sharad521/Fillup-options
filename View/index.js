export default class View {
    constructor(data, options) {
        this.data = data || 'null'
        this.options = options || 'null'
        this.$el = null
        this.template = this.templateFunction()
        this.initialize(data,options)
    }
    initialize(data, options) {}
    getAttributes() {
        return {}
    }
    templateFunction() {
        return options => `<div></div>`
    }
    templateContext() {
        return {}
    }
    setDomEvents() {
        return {}
    }
    render(el) {
        this.onBeforeRender()
        const block = document.createElement('div')
        block.innerHTML = this.template(this.templateContext())
        el.innerHTML = ''
        el.appendChild(block)
        this.$el = el.querySelector('div')
        this.attachAttributes(this.getAttributes())
        this.addDomEvents()
        this.onRender()
    }
    onRender() {

    }
    onBeforeRender() {

    }
    addDomEvents() {
        const events = this.setDomEvents()
        if (typeof(events) !== 'object' || events instanceof Array) return
        const eventKeys = Object.keys(events)
        if (!eventKeys.length) return
        try {
            eventKeys.forEach(key => {
                if((key[0] === '.' || key[0] === '#') && key[1] && typeof(events[key]) === 'function' && key.split(' ').length === 2) {
                    let [selector, eventType] = key.split(' ')
                    const element = this.$el.querySelectorAll(selector)
                    Array.from(element).forEach(el => {
                        el.addEventListener(eventType, events[key])
                    })
                }
            })
        } catch(e) {
            throw new Error(e)
        }
    }
    attachAttributes(attrs) {
        const attributes = Object.keys(attrs)
        const values = Object.values(attrs)
        attributes.forEach((attribute, ind) => {
            this.$el.setAttribute(attribute, values[ind])
        })
    }

}