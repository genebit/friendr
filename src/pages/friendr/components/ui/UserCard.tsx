import React from "react"
import IUser from "@type/interfaces/user"
import { Avatar, AvatarFallback, AvatarImage, Button } from "@components/ui"
import { Heart, X } from "react-feather"

interface UserCardProps {
  user: IUser
  index: number
  onAdd: () => void
  onDismiss: () => void
}

const UserCard: React.FC<UserCardProps> = ({ user, index, onAdd, onDismiss }) => {
  return (
    <div className="flex items-center justify-between gap-20 w-100" style={{ opacity: 1 - index * 0.2 }}>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user.picture.thumbnail} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span>
          <p>
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <small>
            {user.gender[0].toUpperCase() + user.gender.substring(1, user.gender.length)} • {user.email}
          </small>
        </span>
      </div>
      <div className="flex gap-3">
        <Button variant={"ghost"} onClick={onAdd} className="w-10 h-10 p-0 active:scale-90">
          <Heart />
        </Button>
        <Button variant={"ghost"} onClick={onDismiss} className="w-10 h-10 p-0 active:scale-90">
          <X />
        </Button>
      </div>
    </div>
  )
}

export default UserCard
