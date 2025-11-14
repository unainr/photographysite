import React from 'react'
import StatCard from './state-card'

export const StateSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#e09043]/16 via-transparent to-primary/5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-muted-foreground">Excellence proven through numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard number="10" label="Years Experience" suffix="+" delay={0} />
            <StatCard number="2500" label="Happy Clients" suffix="+" delay={100} />
            <StatCard number="50000" label="Photos Delivered" suffix="+" delay={200} />
            <StatCard number="98" label="Client Satisfaction" suffix="%" delay={300} />
          </div>
        </div>
      </section>
  )
}
