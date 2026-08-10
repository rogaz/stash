class Snippet < ApplicationRecord
  enum :snippet_type, { code: 0, prompt: 1, command: 2, note: 3 }

  validates :title, presence: true, uniqueness: true, length: { minimum: 4 }
  validates :content, presence: true
  validates :snippet_type, presence: true

  scope :favorites, -> { where(favorite: true) }
  scope :by_type, ->(type) { where(snippet_type: type) }
end
