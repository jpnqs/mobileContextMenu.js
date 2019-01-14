const mobileContextMenu = {
    content: [],
    container: null,
    setup: function () {
        this.setupContainer();
        this.setupListeners();
        this.hide();
    },
    setupContainer: function () {
        let htmls = document.getElementsByTagName('html');
        var html = htmls[0];
        if (html != null) {
            this.container = document.createElement('div');
            this.container.className = 'mobileCtxMenuContainer';
            this.container.style.height = '0%';
            this.container.style.width = '100%';
            html.appendChild(this.container);
        } else {
            // throw error
        }
    },
    setupListeners: function () {
        window.addEventListener('contextmenu', ev => {
            ev.preventDefault();
            this.show();
        });
        window.addEventListener('blur', _ => {
            this.hide();
        });
        window.addEventListener('resize', _ => {
            this.hide();
        });
    }, 
    buildFromTemplate: function (temp) {
        this.setup();
        temp.forEach(el=>{
            var add = null;
            switch(el.type) {
                case 'button':
                    add = this.createButton(el.text, el.click);
                break;
                case 'seperator':
                    add = this.createSeperator();
                break;
                default: 
                    add = null;
                break;
            }
            if (add != null) {
                this.container.appendChild(add);
            }
        });
    },
    createButton: function (text, click) {
        let button = document.createElement('button');
        button.innerHTML = text;
        button.className = 'mobileCtxMenuButton';
        button.addEventListener('click', ev => {
            click(ev);
            this.hide();
        });
        return button;
    },
    createSeperator: function () {
        let seperator = document.createElement('div');
        seperator.className = 'mobileCtxMenuSeperator';
        return seperator;
    },
    show: function () {
        if (this.container != null) {
            this.setDisabledStatus(false);
            this.container.style.height = (Math.floor(window.innerHeight/2).toString() + "px");
            this.container.style.opacity = '1';
        }
    },
    hide: function () {
        if (this.container != null) {
            this.setDisabledStatus(true);
            this.container.style.height = "0px";
            this.container.style.opacity = '0';
        }
    },
    setDisabledStatus: function (bool) {
        this.container.childNodes.forEach(el => {
            el.disabled = bool;
        });
    },
}

mobileContextMenu.buildFromTemplate([
    {
        type: 'button',
        text: 'button 1',
        click: c => {
            console.log('click');
        }
    }, 
    {
        type: 'button',
        text: 'button 2',
        click: c => {
            console.log('click 2');
        }
    },
    {
        type: 'seperator'
    },
    {
        type: 'button',
        text: 'button 3',
        click: c=> {
            console.log('click 3');
        }
    },
    {
        type: 'button',
        text: 'button 4',
        click: c=> {
            console.log('click 4');
        }
    },
    {
        type: 'seperator'
    },
    {
        type: 'button',
        text: 'button 5',
        click: c=> {
            console.log('click 5');
        }
    },
    {
        type: 'button',
        text: 'button 6',
        click: c=> {
            console.log('click 6');
        }
    },
    {
        type: 'seperator'
    },
    {
        type: 'button',
        text: 'button 7',
        click: c=> {
            console.log('click 7');
        }
    },
    {
        type: 'button',
        text: 'button 8',
        click: c=> {
            console.log('click 8');
        }
    }
]);
