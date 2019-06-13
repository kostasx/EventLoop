class ElementObserver {

	constructor( elementId ){
		this.element = document.getElementById( elementId );
	}

	update( model ){
		this.element.innerHTML = model.number;
		this.element.style.backgroundColor = model.color;
	}

}
