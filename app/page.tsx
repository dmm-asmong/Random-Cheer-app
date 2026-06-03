'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Heart, Sparkles, RefreshCw } from 'lucide-react'

const cheerMessages = [
  "오늘도 정말 고생 많았어요! 당신은 충분히 잘하고 있어요.",
  "당신의 노력은 결코 헛되지 않을 거예요. 조금만 더 힘내요!",
  "지금 있는 그대로의 모습으로도 당신은 충분히 빛나요.",
  "힘들 땐 잠시 쉬어가도 괜찮아요. 당신은 여전히 소중하니까요.",
  "내일은 오늘보다 더 좋은 일이 기다리고 있을 거예요.",
  "당신은 생각보다 훨씬 더 강하고 멋진 사람이에요.",
  "포기하지 마세요. 당신의 꿈은 꼭 이루어질 거예요.",
  "오늘 하루도 버텨낸 당신, 정말 대단해요!",
  "당신의 작은 노력이 모여 큰 기적을 만들 거예요.",
  "온 세상이 당신을 응원하고 있다는 걸 잊지 마세요!"
]

export default function Home() {
  const [message, setMessage] = useState(cheerMessages[0])

  const getRandomMessage = () => {
    let newMessage = message
    while (newMessage === message) {
      newMessage = cheerMessages[Math.floor(Math.random() * cheerMessages.length)]
    }
    setMessage(newMessage)
  }

  return (
    <main className="min-h-screen bg-[#FFF9F2] flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4D96FF] rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#FFD93D] rounded-full opacity-30"></div>
        
        <div className="relative bg-white border-8 border-[#2D3436] rounded-[60px] p-16 shadow-[16px_16px_0px_0px_#2D3436] flex flex-col items-center text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#FF6B6B] rounded-2xl rotate-3 flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 mb-8 tracking-tight">HAPPY</h1>
          
          <div className="h-40 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl text-[#2D3436] leading-relaxed font-bold"
              >
                &quot;{message}&quot;
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            onClick={getRandomMessage}
            className="group relative flex items-center gap-4 px-12 py-6 bg-[#6BCB77] border-4 border-[#2D3436] rounded-full text-white text-2xl font-black hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_#2D3436]"
          >
            <RefreshCw className="w-8 h-8" />
            새로운 응원 받기
          </button>
        </div>
      </div>
    </main>
  )
}
