'use client'

import { useState } from 'react'

const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Garden", icon: "🏡" },
  { name: "Beauty", icon: "💄" },
  { name: "Sports", icon: "⚽" },
  { name: "Books", icon: "📚" },
  { name: "Toys", icon: "🧸" },
  { name: "Automotive", icon: "🚗" },
  { name: "Health", icon: "💊" },
  { name: "Groceries", icon: "🛒" },
  { name: "Pet Supplies", icon: "🐾" },
  { name: "Travel", icon: "✈️" },
]

export default function Component() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [satoshiBalance, setSatoshiBalance] = useState(0)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  const connectWallet = () => {
    setIsWalletConnected(true)
    setSatoshiBalance(100)
  }

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', padding: '16px', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
        <h1>WinPurchase</h1>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: '16px' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Deals</a>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Coupons</a>
          <button onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
            Categories
          </button>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Blog</a>
          {isWalletConnected ? (
            <div>
              <span>₿ {satoshiBalance}</span>
              <button onClick={() => setIsWalletConnected(false)}>Disconnect</button>
            </div>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </nav>
      </header>

      {isCategoriesOpen && (
        <div style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
          <h3>Browse Categories</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {categories.map(category => (
              <button key={category.name} style={{ padding: '8px', border: '1px solid #ccc' }}>
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <main style={{ padding: '32px' }}>
        <section style={{ textAlign: 'center', padding: '32px', backgroundColor: 'black', color: 'white' }}>
          <h1>Save Money with WinPurchase</h1>
          <p>Find the best deals and coupons for your favorite online stores. Earn satoshis with every visit!</p>
          <input type="text" placeholder="Search for deals" style={{ padding: '8px', marginRight: '8px' }} />
          <button style={{ padding: '8px' }}>Search</button>
        </section>

        <section style={{ textAlign: 'center', padding: '32px' }}>
          <h2>Featured Deals</h2>
          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <DealCard
              title="50% off Electronics"
              description="Get amazing discounts on the latest gadgets"
              coupon="TECH50"
              link="https://example.com/electronics"
            />
            <DealCard
              title="Buy 1 Get 1 Free on Clothing"
              description="Refresh your wardrobe with this incredible offer"
              coupon="FASHION2FOR1"
              link="https://example.com/fashion"
            />
            <DealCard
              title="20% off Home Decor"
              description="Spruce up your living space with discounted home items"
              coupon="HOME20"
              link="https://example.com/home"
            />
          </div>
        </section>
      </main>

      <footer style={{ padding: '16px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>© 2023 WinPurchase. All rights reserved.</p>
        <nav>
          <a href="#" style={{ marginRight: '16px', textDecoration: 'none', color: 'black' }}>Terms of Service</a>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Privacy</a>
        </nav>
      </footer>
    </div>
  )
}

function DealCard({ title, description, coupon, link }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Coupon Code: {coupon}</p>
      <a href={link} style={{ textDecoration: 'none', color: 'blue' }}>Get Deal</a>
    </div>
  )
}