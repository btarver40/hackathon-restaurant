class Api::CartsController < ApplicationController
 before_action :set_cart, only: [:show, :update, :destroy]

    def index
        carts = Cart.all
        render json: carts
    end

    def show
        render json: @cart
    end

    def create
        cart = current_user.carts.new(cart_params)
        if cart.save
            render json: cart
        else
            render json: {errors: cart.errors.full_messages}, status: 422
        end
    end

    def update
        if @cart.update(cart_params)
            render json: @cart
        else
            render json: {errors: @cart.errors.full_messages}, status: 422
         end
    end

    def destroy
        @cart.destroy 
    end

    private

    def set_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.require(:cart).permit(:name, :description, :price)
    end
end
