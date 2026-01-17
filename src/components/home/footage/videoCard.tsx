'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

interface VideoCardProps {
  src: string
  poster: string
}

export function VideoCard({ src, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (!videoRef.current) return
    videoRef.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className="relative max-w-56 h-80 rounded-xl overflow-hidden group shadow-lg">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        className="w-full h-full object-cover cursor-pointer"
        onClick={isPlaying ? handlePause : handlePlay}
      />

      {/* Overlay */}
      <motion.button
        type="button"
        onClick={isPlaying ? handlePause : handlePlay}
        initial={false}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl">
          {isPlaying ? (
            <Pause className="w-7 h-7 text-black" />
          ) : (
            <Play className="w-7 h-7 text-black ml-1" />
          )}
        </div>
      </motion.button>
    </div>
  )
}
