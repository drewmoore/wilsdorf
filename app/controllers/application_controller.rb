class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :get_pages
  layout :layout_by_resource
  before_filter :update_sanitized_params, if: :devise_controller?

  def after_sign_in_path_for user
    controls_path
  end

  def after_account_update_path_for user
    controls_path
  end

  def get_pages
    if session
      @pages = Page.all
    end
  end

  private

  def get_contents page
    contents = {}
    page.contents.each do |c|
      contents[c.identifier] = c
    end
    return contents
  end

  def get_graphics page
    graphics = {}
    page.graphics.each do |g|
      graphics[g.identifier] = g
    end
    return graphics
  end

  protected

  def layout_by_resource
    if devise_controller?
      "users_custom"
    else
      "application"
    end
  end

  def update_sanitized_params
    devise_parameter_sanitizer.for(:account_update) << :role
  end

end
