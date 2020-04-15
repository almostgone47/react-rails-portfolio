class Api::V1::BlogController < ApplicationController
  def index
    blog = Blog.all.order(created_at: :desc)
    render json: blog
  end

  def create
    blog = Blog.create!(blog_params)
    if blog
      render json: blog
    else
      render json: blog.errors
    end
  end

  def show
    if blog
      render json: blog
    else 
      render json: blog.errors
    end
  end

  def destroy
    blog&.destroy
    render json: { message: 'Blog deleted!'}
  end

  private

  def blog_params
    params.permit(:title, :body, :image)
  end

  def blog
    @blog ||= Blog.find(params[:id])
  end
end
