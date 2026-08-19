class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  inertia_share do
    {
      current_user: nil, # Add authentication later
      folders: Folder.order(:name).select(:id, :name),
      flash: {
        notice: flash[:notice],
        alert: flash[:alert]
      }
    }
  end
end
