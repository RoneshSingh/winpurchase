"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CouponCardProps {
  code: string
  discount: string
}

export function CouponCard({ code, discount }: CouponCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-white shadow-md rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3">
          <CardTitle className="text-lg font-bold">{discount}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <p className="text-xs text-gray-600 mb-1">Use code:</p>
          <p className="text-lg font-bold text-gray-800 mb-2">{code}</p>
        </CardContent>
        <CardFooter className="p-2">
          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs">
            Copy Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}