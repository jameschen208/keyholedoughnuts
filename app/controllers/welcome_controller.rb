class WelcomeController < ApplicationController
	def index
		@doughnuts = Doughnut.all
		@posts = Post.all

	end

	def mail
		require 'mandrill'
		msg = Mandrill::API.new
		message = {  
			:subject=> params[:subject],  
			:from_name=> params[:name],  
			:text=> params[:text],  
			:to=>[{:email=> "keyholedoughnuts@gmail.com", :name=> "James"}],  
			:from_email=> params[:email]
		}
		sending = msg.messages.send message 
		puts sending
		# if message.send
		# end
		redirect_to root_path, notice: "I will get back to you shortly!"

	end

end
