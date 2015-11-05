class WelcomeController < ApplicationController
	def index
		@doughnuts = Doughnut.all
		@posts = Post.all.limit(3).order("created_at desc")
	end
end
