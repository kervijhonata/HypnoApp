class MenuItem {

    constructor(props = {}, content){
        this.props = props;
        this.content = content;
        this.id = props.id || `menu-item-${Math.random().toString(36).substr(2, 9)}`;
        this.label = props.label;
        this.
        this.name = props.name || content.toLowerCase().replace(/\s+/g, '-');
    }

    render(){
        const li = document.createElement('li');
        li.dataset.id = this.id;
        li.classList.add = 'menu-item';
        li.textContent = this.content;
        return li;
    }
}