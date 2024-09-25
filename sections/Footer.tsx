"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About WinPurchase</h3>
            <p className="text-sm text-gray-600">
              WinPurchase is your go-to platform for the best deals and coupons. Save money on your favorite brands
              with our exclusive offers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Home</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Coupons</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Deals</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to get the latest deals and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 WinPurchase. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}