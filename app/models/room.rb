class Room < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	has_many :room_messages, dependent: :destroy,
                         inverse_of: :room

end
