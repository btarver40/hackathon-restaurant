class Api::CartsController < ApplicationController
  def index
  end

    def index
        cars = Cart.all
        render json: cart 
    end

    def show
        render json: @cart
    end

    def create
        cart = Cart.new(cart_params)
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
        params.require(:cart).permit(:item_count, :cart_total)
    end
end
