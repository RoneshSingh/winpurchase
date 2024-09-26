"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Menu, X, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react'

export default function WinPurchaseLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            WinPurchase
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Coupons</Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Deals</Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Categories</Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <Input type="search" placeholder="Search deals..." className="w-64" />
              <Button type="submit" variant="ghost" size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button className="hidden md:inline-flex">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:hidden bg-white px-4 py-2"
          >
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Coupons</Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Deals</Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Categories</Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
            </nav>
            <form className="mt-4 flex items-center">
              <Input type="search" placeholder="Search deals..." className="w-full" />
              <Button type="submit" variant="ghost" size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button className="mt-4 w-full">Sign Up</Button>
          </motion.div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Discover Amazing Deals & Coupons
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-xl text-gray-600 mb-8"
          >
            Save big on your favorite brands with our exclusive offers
          </motion.p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">
                Get Deals
              </Button>
            </div>
          </form>
        </section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>50% Off Electronics</CardTitle>
                <CardDescription>Valid until June 30, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get amazing discounts on the latest gadgets and electronics.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Claim Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Buy 1 Get 1 Free</CardTitle>
                <CardDescription>Fashion & Accessories</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Double your wardrobe with this exclusive offer on selected items.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Shop Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>20% Off Home Decor</CardTitle>
                <CardDescription>Limited Time Offer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Revamp your living space with discounted home decor items.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Explore Deals <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Affiliate Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">
              <Link href="#" className="flex items-center">
                Amazon Deals <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="#" className="flex items-center">
                eBay Offers <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="#" className="flex items-center">
                Walmart Savings <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WinPurchase</h3>
              <p className="text-gray-400">Your one-stop destination for the best deals and coupons.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WinPurchase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}