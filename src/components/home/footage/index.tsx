import { VideoCard } from './videoCard'

export default function Footage() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">
        Explore the Library
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works – each piece crafted with
        intention, emotion, and style.
      </p>

      <div className="flex flex-wrap items-center justify-center mt-10 gap-6 px-4">
        <VideoCard
          src="/images/footage/footage1.mp4"
          poster="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop"
        />

        <VideoCard
          src="/images/footage/footage2.mp4"
          poster="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&w=600&h=900&auto=format&fit=crop"
        />
        <VideoCard
          src="/images/footage/footage2.mp4"
          poster="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&w=600&h=900&auto=format&fit=crop"
        />
        <VideoCard
          src="/images/footage/footage2.mp4"
          poster="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&w=600&h=900&auto=format&fit=crop"
        />
      </div>
    </>
  )
}
