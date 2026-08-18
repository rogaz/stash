class Folder < ApplicationRecord
  has_many :snippets, dependent: :nullify

  validates :name, presence: true, uniqueness: true, length: { minimum: 4 }

end
