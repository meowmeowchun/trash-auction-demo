import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function TrashAuction() {
  const trashItems = [
    { id: 68, price: "68 NT$", image: "/placeholder.svg?height=200&width=200" },
    { id: 69, price: "69 NT$", image: "/placeholder.svg?height=200&width=200" },
    { id: 70, price: "690 NT$", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="min-h-screen bg-yellow-400">
      <header className="p-4 text-center">
        <h1 className="text-xl font-bold">We sell the useless stuff you don't even want.</h1>
      </header>
      
      <div className="bg-blue-700 p-8">
        <h2 className="text-6xl font-bold text-red-500 text-center" style={{ fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Trash Auction
        </h2>
      </div>

      <div className="max-w-md mx-auto my-8">
        <Carousel>
          <CarouselContent>
            {trashItems.map((item) => (
              <CarouselItem key={item.id}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <img src={item.image} alt={`Trash #${item.id}`} className="mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Trash #{item.id}</h3>
                      <p className="text-xl">{item.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="bg-blue-700 p-4 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 inline-block px-4 py-2 bg-red-600">
          We have the BEST TRASH all over the world!!!
        </h3>
      </div>

      <footer className="bg-red-600 p-4 text-center text-white">
        <p>We don't give a fuck about our copyright. Use this to set up your trash website, you're welcome.</p>
      </footer>
    </div>
  )
}