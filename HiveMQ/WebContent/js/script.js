$(document).ready(
		function() {

			//計算msg_box數量
			var count=0;
			var flag;
			var showid;
			$('.chat_head').click(function() {
				$('.chat_body').slideToggle('slow');
			});
			$('.msg_head').click(function() {
				$('.msg_wrap').slideToggle('slow');
			});

			$('.close').click(function() {
				$('.msg_box').hide();
				count--;
			});

			
			
			
			$('#aaa').click(
					function() {
						$('#colorChooser').minicolors();
				         var rndColor = websocketclient.getRandomColor();
				         var floatpx = count*290
				                $("#colorChooser").minicolors('value', rndColor);
//								$('#chat_box').append("<div class='msg_box' style='right:floatpx px'><div class='msg_head'>000<div class='close'>x</div></div><div class='msg_wrap'><div class='msg_body'><div id='messEdit'></div><div class='msg_push'></div></div><div class='msg_footer'><textarea class='msg_input' id='publishPayload' rows='4'></textarea></div></div></div>");			
		      

						$('.msg_wrap').show();
						$('.msg_box').show();

						websocketclient.subscribe($('#subscribeTopic')
								.val(), parseInt($('#QoSInput').val()), $(
								'#colorChooser').val().substring(1))
				       flag=true;

						count++;
						console.log(count);
						showid="#messEdit1";
						 test1(showid);
					});
			
			
			$('#bbb').click(
					function() {
						$('#colorChooser').minicolors();

				     
				                var rndColor = websocketclient.getRandomColor();
				                $("#colorChooser").minicolors('value', rndColor);
//								$('#chat_box').append("<div class='msg_box' style='right:550px'><div class='msg_head'>000<div class='close'>x</div></div><div class='msg_wrap'><div class='msg_body'><div id='messEdit'></div><div class='msg_push'></div></div><div class='msg_footer'><textarea class='msg_input' id='publishPayload' rows='4'></textarea></div></div></div>");			


						$('.msg_wrap').show();
						$('.msg_box').show();

						websocketclient.subscribe($('#subscribeTopic2')
								.val(), parseInt($('#QoSInput').val()), $(
								'#colorChooser').val().substring(1))
						
						 flag =false;
					count++;		
					showid="#messEdit2";
					
					test1(showid);
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
                   websocketclient.publish($('#publishTopic').val(),$('#publishPayload1').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
   				var input_text = document.getElementById("publishPayload1");
                   input_text.value = '';
                    $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
						
			}else{
				console.log("1111111111111111");
				 websocketclient.publish($('#publishTopicAll').val(),$('#publishPayload2').val(),parseInt($('#publishQoSInput').val(),10),$('#publishRetain').is(':checked'));
		          var input_text = document.getElementById("publishPayload2");
                 input_text.value = '';
                  $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
			};		
	       
						  	
						}
					});
	
			document.write('<script src="js/app.js"></script>');	
			
		});

