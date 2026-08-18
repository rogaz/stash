class Tag < ApplicationRecord

  has_many :taggings, dependent: :destroy
  has_many :snippets, through: :taggings

  validates :name, presence: true, uniqueness: true, length: { minimum: 2 }

end
