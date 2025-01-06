import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lastest */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="Latest blog post" 
                width={600} 
                height={400} 
                className="w-full"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Exciting New Biomes Coming Soon!</h2>
                <p className="text-gray-600 mb-4">Get ready for an adventure like never before as we introduce stunning new biomes to our Minecraft server...</p>
                <Link href="/post/exciting-new-biomes" className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
              </div>
            </div>
            {/* Lastest */}
            <div className="space-y-6">
              {/*  */}
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              {[1].map((i) => (
                <div key={i} className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">Community Event: Build Contest Results</h4>
                  <p className="text-sm text-gray-600 mb-4">Check out the amazing creations from our recent build contest...</p>
                  <Link href={`/post/community-event-${i}`} className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={`/placeholder.svg?height=200&width=400&text=Post ${i}`} 
                  alt={`Blog post ${i}`} 
                  width={400} 
                  height={200} 
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Server Update: New Plugins Added</h3>
                  <p className="text-sm text-gray-600 mb-4">We've added some exciting new plugins to enhance your gameplay experience...</p>
                  <Link href={`/post/server-update-${i}`} className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

