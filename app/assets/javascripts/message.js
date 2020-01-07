$(function(){ 
  function buildHTML(message){
   if ( message.image_tag ) {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="message-user">
           <div class="message-user__logo">
             ${message.user_name}
           </div>
           <div class="message-user_info">
             ${message.created_at}
           </div>
         </div>
         <div class="message-text">
           <p class="message-text__logo">
             ${message.content}
           </p>
         </div>
         <img src=${message.image_tag} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="message-user">
           <div class="message-user__logo">
             ${message.user_name}
           </div>
           <div class="message-user_info">
             ${message.created_at}
           </div>
         </div>
         <div class="message-text">
           <p class="message-text__logo">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })

  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  return false;
});
});

