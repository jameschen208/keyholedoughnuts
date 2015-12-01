class WelcomeController < ApplicationController
	def index
		@doughnuts = Doughnut.all
		@posts = Post.all.limit(6).order("created_at desc")

	end

	def about

	end

	def about
		
	end
	
	def about
		
	end
	def mail
		require 'mandrill'
		msg = Mandrill::API.new
		message = {  
			:subject=> params[:subject],  
			:from_name=> params[:name],  
			:text=> params[:text],  
			:to=>[{:email=> "keyholedoughnuts@gmail.com", :name=> "keyhole owners"}],  
			:from_email=> params[:email]
		}
		sending = msg.messages.send message 
		puts sending
		redirect_to root_path, notice: "I will get back to you shortly!"

	end

end
