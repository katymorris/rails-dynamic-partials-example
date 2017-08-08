class PostsController < ApplicationController
  def show
  	@limit = 5
  	@posts = Post.all
  end

  def create
		#create new post
		@post = Post.new(post_params)
		@limit = 1
		if @post.save
				@posts = Post.where(:id => @post.id)
	    	respond_to do |format|
		      format.html {render :partial => 'posts/user_post'}      
		    end

	  	else
	    	puts 'error'
		end
  end

	private

		def post_params
		  params.require(:post).permit(:content)
		end

end
