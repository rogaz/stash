class SnippetsController < ApplicationController
  def index
    @snippets = Snippet.order(created_at: :desc)

    flash[:notice] = 'Welcome to snippets'

    render inertia: "Snippets/Index", props: {
      snippets: @snippets.map { |s| serialize_snippet(s) }
  }
  end

  def show
    @snippet = Snippet.find(params[:id])

    render inertia: "Snippets/Show", props: {
      snippet: serialize_snippet(@snippet)
    }
  end

  def new
    render inertia: "Snippets/New", props: {
      snippet_types: Snippet.snippet_types.keys }
  end

  def create
    @snippet = Snippet.new(snippet_params)
    @snippet.folder_id = Folder.first&.id

    if @snippet.save
      redirect_to snippets_path, notice: "Snippet created!"
    else
      redirect_to new_snippet_path, inertia: { errors: @snippet.errors }
    end
  end

  def edit
    @snippet = Snippet.find(params[:id])

    render inertia: "Snippets/Edit", props: {
      snippet: serialize_snippet(@snippet),
      snippet_types: Snippet.snippet_types.keys
    }
  end

  def update
    @snippet = Snippet.find(params[:id])

    if @snippet.update(snippet_params)
      redirect_to snippets_path, notice: "Snippet updated!"
    else
      redirect_to edit_snippet_path(@snippet), inertia: { errors: @snippet.errors }
    end
  end

  def destroy
    @snippet = Snippet.find(params[:id])
    @snippet.destroy

    redirect_to snippets_path, notice: "Snippet deleted!"
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :title,
      :content,
      :language,
      :description,
      :snippet_type,
      :favorite
    )
  end

  def serialize_snippet(snippet)
    {
      id: snippet.id,
      title: snippet.title,
      content: snippet.content,
      language: snippet.language,
      description: snippet.description,
      snippet_type: snippet.snippet_type,
      favorite: snippet.favorite,
      created_at: snippet.created_at.iso8601,
      updated_at: snippet.updated_at.iso8601
    }
  end
end
