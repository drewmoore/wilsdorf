class WelcomeController < ApplicationController
  def index
    @page = Page.find_by(controller: params[:controller], action: params[:action])
    if @page
      @contents = get_contents @page
      @graphics = get_graphics @page
    end
  end
end
