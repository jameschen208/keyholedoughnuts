class WelcomeController < ApplicationController
	def index
		@doughnuts = Doughnut.all
	end
end
