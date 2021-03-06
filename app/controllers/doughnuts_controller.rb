class DoughnutsController < ApplicationController
	before_action :find_doughnut, only: [:show, :edit, :update, :destroy]
	before_action :authenticate_user!, except: [:index, :show]
	def index
		@doughnuts = Doughnut.all.order("created_at desc")
		@savory = Doughnut.where(doughnut_type: 'Savory')
		@sweet = Doughnut.where(doughnut_type: 'Sweet')
	end

	def new
		@doughnut = Doughnut.new
	end

	def create
		@doughnut = Doughnut.new doughnut_params
		if @doughnut.save
			redirect_to @doughnut, notice: "your doughnut was successfully saved"
		else
			render 'new'
		end
	end

	def show
	end

	def edit
	end

	def update
		if @doughnut.update doughnut_params
			redirect_to @doughnut, notice: "your doughnut was successfully updated"
		else
			render 'edit'
		end
	end

	def destroy
		@doughnut.destroy
		redirect_to doughnuts_path
	end
	
	private

	def find_doughnut
		@doughnut = Doughnut.friendly.find(params[:id])
	end
	def doughnut_params
		params.require(:doughnut).permit(:title, :description, :image, :doughnut_type, :slug)
	end

end
