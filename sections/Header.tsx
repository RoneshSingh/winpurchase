    "use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-purple-600"
        >
          WinPurchase
        </motion.div>
        <nav>
          <Button variant="ghost" className="mr-2">
            Login
          </Button>
          <Button>Register</Button>
        </nav>
      </div>
    </motion.header>
  )
}