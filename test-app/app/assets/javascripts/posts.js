//create post
function createPost(value) {
  	var data = {
    post: {
    	"content": value,
    }
  }
  $.ajax({
    type: "POST",
    url: "/posts",
    data: data,
    dataType: "html",
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    success: function(response){
      console.log("post was added");
      $('.post-container').append(response);
    }, error: function(err) {
	        console.log(err);
	        alert('Something went wrong');
	    }
  });
}

//doc ready
$( document ).ready(function() {
    //event listener
	$('body').on('click', 'button', function() {
		//get the value in the textarea
		var value = $('textarea').val();
		//send the value to the ajax request
		createPost(value);
	});
});