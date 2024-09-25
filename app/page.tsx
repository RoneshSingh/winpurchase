"use client"

import { motion } from "framer-motion"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { CouponCard } from "@/sections/CouponCards"
import { Footer } from "@/sections/Footer"

export default function App() {
  const coupons = [
    { id: 1, code: "WIN10", discount: "10% off" },
    { id: 2, code: "SAVE20", discount: "20% off" },
    { id: 3, code: "FLASH50", discount: "50% off" },
    { id: 4, code: "EXTRA15", discount: "15% off" },
    { id: 5, code: "DEAL25", discount: "25% off" },
    { id: 6, code: "SUPER30", discount: "30% off" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
        >
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} code={coupon.code} discount={coupon.discount} />
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}