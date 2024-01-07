import { User } from "react-feather"
import useFetchUsers from "@/pages/friendr/hooks/useFetchUsers"
import { Toaster, toast } from "sonner"
import IUser from "@type/interfaces/user"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@components/ui"
import { FriendAvatar, LoadingSkeleton, RefreshButton, UserCard } from "./components"

const friends: IUser[] = []

const FriendrPage = () => {
  const { users, loading, refetchUsers, dismissUser, setFetchSize } = useFetchUsers()

  function dismiss(user: IUser, i: number) {
    dismissUser(i)

    // Trigger toast
    toast("User Dismissed!", {
      description: `${user.name.title}. ${user.name.first} ${user.name.last} has been removed.`,
    })
  }

  function add(user: IUser, i: number) {
    // Add user to friends list
    friends.push(user)

    dismissUser(i)

    // Trigger toast
    toast("Friend Added!", {
      description: `${user.name.title}. ${user.name.first} ${user.name.last} is now your friend!`,
    })
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center mt-[5rem]">
        <header className="flex flex-col justify-center gap-5">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">Recommended for you!</h1>
            <p className="mt-2 leading-7 text-center">This could be the start of your new friendship.</p>
          </div>
          <RefreshButton onRefresh={refetchUsers} isLoading={loading} />
        </header>
        <section className="flex flex-col justify-center gap-10 mt-10">
          <Select onValueChange={(value) => setFetchSize(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Show 5 People" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="5">Show 5</SelectItem>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="15">Show 15</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <hr className="w-full border-t-2 border-slate-950" />
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <section className="flex flex-col gap-3 h-[14rem] w-[35rem] overflow-hidden">
              {users.length != 0 ? (
                users.map((user, index) => (
                  <UserCard
                    key={index}
                    user={user}
                    index={index}
                    onAdd={() => add(user, index)}
                    onDismiss={() => dismiss(user, index)}
                  />
                ))
              ) : (
                <p className="text-center">
                  {friends.length === 0 ? "You're a tough one! " : ""}
                  <a href="#" className="underline" onClick={refetchUsers}>
                    Refresh
                  </a>
                  {" to find more friends!"}
                </p>
              )}
            </section>
          )}
          <hr className="w-full border-t-2 border-slate-950" />
        </section>
        <section className="flex flex-col gap-5 mt-10">
          <div className="flex items-center justify-center">
            <User size={20} className="me-3" />
            <h4 className="text-xl font-bold tracking-tight scroll-m-20">My Friends</h4>
          </div>
          <div className="relative flex -space-x-3 rtl:space-x-reverse">
            {friends.length != 0 ? (
              friends.map((user, index) => <FriendAvatar key={index} user={user} />)
            ) : (
              <p className="italic text-slate-500">You have no friends yet!</p>
            )}
          </div>
        </section>
      </main>
      <Toaster position="top-right" theme="dark" />
    </>
  )
}

export default FriendrPage
