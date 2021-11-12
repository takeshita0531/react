class PostsController < ApplicationController
    protect_from_forgery :except => [:destroy, :create, :update]

    def new
        @post = Post.new
    end
    
    def index
        posts = Post.all
        respond_to do |format|      
            format.html
            format.json {render :json => posts}
        end    
        # render json: posts
    end

    def show
        post = Post.find(params[:id])
        respond_to do |format|      
            format.html
            format.json {render :json => post}
        end    
    end

    def edit
        @post = Post.find(params[:id])
    end

    def create
        post_create = Post.create(post_params)
        if post_create.save
            respond_to do |format|      
                format.html
                format.json {render :json => post_create}
            end    
        else
            redirect_to posts_path
        end
    end

    def update
        post_update = Post.find(params[:id])
        if post_update.update(post_params)
            respond_to do |format|      
                format.html
                format.json {render :json => post_update}
            end    
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
