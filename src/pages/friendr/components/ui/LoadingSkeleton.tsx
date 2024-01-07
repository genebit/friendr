import { Skeleton } from "@components/ui"

const LoadingSkeleton: React.FC = () => {
  return (
    <section className="flex flex-col gap-3 h-[14rem] w-[35rem] overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center justify-between gap-20 animate-fade-in w-100">
          <div className="flex items-center gap-3">
            <Skeleton className="w-[2.75rem] h-[2.75rem] rounded-full" />
            <span className="flex flex-col gap-3">
              <Skeleton className="w-[10rem] h-[1rem] rounded-sm" />
              <Skeleton className="w-[13rem] h-[0.75rem] rounded-sm" />
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default LoadingSkeleton
