$(document).ready(
		function() {

			$('.chat_head').click(function() {
				$('.chat_body').slideToggle('slow');
			});
			$('.msg_head').click(function() {
				$('.msg_wrap').slideToggle('slow');
			});

			$('.close').click(function() {
				$('.msg_box').hide();
			});

			
			
			var flag;
			$('#aaa').click(
					function() {
						$('#colorChooser').minicolors();

				     
				                var rndColor = websocketclient.getRandomColor();
				                $("#colorChooser").minicolors('value', rndColor);
				      

						$('.msg_wrap').show();
						$('.msg_box').show();

						websocketclient.subscribe($('#subscribeTopic')
								.val(), parseInt($('#QoSInput').val()), $(
								'#colorChooser').val().substring(1))
				       flag=true;

					});
			
			
			$('#bbb').click(
					function() {
						$('#colorChooser').minicolors();

				     
				                var rndColor = websocketclient.getRandomColor();
				                $("#colorChooser").minicolors('value', rndColor);
				      

						$('.msg_wrap').show();
						$('.msg_box').show();

						websocketclient.subscribe($('#subscribeTopic2')
								.val(), parseInt($('#QoSInput').val()), $(
								'#colorChooser').val().substring(1))
						
						 flag =false;
					
						
					});
			
			

//			  $("#myonoffswitch").change(function(){    
//				  var flag =
//				   flag = $(this).prop("checked");
//					 console.log($(this).prop("checked"));});
					
//			var flag=true;	
//			
//			  $("#myonoffswitch").change(function(){    
//				 
//			   flag = $(this).prop("checked");
//			   if(flag){
//				   websocketclient.publish($('#publishTopicAll').val(),$('#publishPayloadLeave').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
//				   $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);		  
//			   }else{
//				   websocketclient.publish($('#publishTopicAll').val(),$('#publishPayloadJoin').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
//				   $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
//				   
//			   }
//			   console.log($(this).prop("checked"));
//			   
//			  });
			
			$('textarea').keypress(
					function(e) {
						if (e.keyCode == 13) {
							e.preventDefault();
							
//							websocketclient.publish($('#publishTopic').val(),$('#publishPayload').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
//		   				var input_text = document.getElementById("publishPayload");
//		                   input_text.value = '';
//		                    $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
console.log(flag);
		                    
		     if(flag){
		    	 console.log("0000000000000000");
                   websocketclient.publish($('#publishTopic').val(),$('#publishPayload').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
   				var input_text = document.getElementById("publishPayload");
                   input_text.value = '';
                    $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
						
			}else{
				console.log("1111111111111111");
				 websocketclient.publish($('#publishTopicAll').val(),$('#publishPayload').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
		          var input_text = document.getElementById("publishPayload");
                 input_text.value = '';
                  $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
			};		
	       
						  	
						}
					});
	
				
			
		});