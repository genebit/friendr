import React from "react"
import IUser from "@type/interfaces/user"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui"

interface FriendAvatarProps {
  user: IUser
}

const FriendAvatar: React.FC<FriendAvatarProps> = ({ user }) => {
  return (
    <div className="group">
      <Avatar className="transition-all scale-110 hover:scale-150 hover:z-10">
        <AvatarImage src={user.picture.thumbnail} />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-[-6rem] left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md px-5 py-3 border border-slate-300">
        <p className="font-bold">
          {user.name.title}. {user.name.first} {user.name.last}
        </p>
        <small>
          {user.gender[0].toUpperCase() + user.gender.substring(1, user.gender.length)} • {user.email}
        </small>
      </span>
    </div>
  )
}

export default FriendAvatar
