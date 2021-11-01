var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
	displayMessage: false,
	buttonLabel: 'Print Hello World',
	print: 'Print Hello World',
	remove: 'remove Hello World'
  },
  methods:{
	SayHelloWorld: function () {
      this.displayMessage = !this.displayMessage;
	  if(!this.displayMessage){
		this.buttonLabel = this.print;
	  }else{
		this.buttonLabel = this.remove;
	  }
	  
    }
  }
})