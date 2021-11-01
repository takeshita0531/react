class PostsController < ApplicationController
    protect_from_forgery :except => [:destroy, :create]

    def new
        @post = Post.new
    end

    def index
        @post_all = Post.all();
    end

    def show
        @post = Post.find(params[:id])
    end

    def edit
        @post = Post.find(params[:id])
    end

    def create
        post_create = Post.create(post_params)
        if post_create.save
            redirect_to root_path
        else
            redirect_to posts_path
        end
    end

    def update
        post_update = Post.find(params[:id])
        if post_update.update(post_params)
            render json: post_update
            # redirect_to root_path
        else
            redirect_to root_path
        end
    end

    def destroy
        post = Post.find(params[:id])
        if post.delete
            render json: post
        else
            redirect_to root_path
        end
    end

    private

    def post_params
        params.require(:post).permit(:content, :check)
    end
end
