class User < ApplicationRecord
  # Include default devise modules. Others available are:
<<<<<<< Updated upstream
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable,  :validatable

  has_many :group_users
  has_many :groups, through: :group_users
end
=======
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
>>>>>>> Stashed changes
