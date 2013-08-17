define(['jquery','underscore','backbone'], function($,_,Backbone) {
 	var View=Backbone.View.extend({
 		events:{
 			"keyup #cmd":"exec",
 			"click #btnrun":"fortheval",
 			"click .setcode":"setcode"
 		},
 		setcode:function(e) {
 			$("#cmd").val($(e.target).text());
 		},
	 	exec:function() {
	 		if (13===event.keyCode) this.fortheval();
	 	},
	 	fortheval:function() {
			this.vm.exec($("#cmd").val());
	 	},
	      ticktype: function ticktype(t) { 
	      	 $("#output").val( $("#output").val()+t); 
	      },  // 輸出
 		initialize:function() {
		  this.vm=new JeForthVm();
		  var output=document.getElementById("output");
		  this.vm.ticktype=this.ticktype; 
		}
 	});
 	
 	return new View({el:$(".mainview")});
});