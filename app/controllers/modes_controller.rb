class ModesController < ApplicationController
    protect_from_forgery :except => [:create]

    def index
        mode = Mode.order(updated_at: :desc).limit(1)
        respond_to do |format|      
            format.html
            format.json {render :json => mode}
        end    
    end

    def create
        mode_new = Mode.create(mode_params)
        if mode_new.save
            respond_to do |format|      
                format.html
                format.json {render :json => mode_new}
            end    
        else
            redirect_to posts_path
        end
    end

    private

    def mode_params
        params.require(:mode).permit(:filter)
    end
end
