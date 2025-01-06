import { getSortedPostsData } from '@/lib/posts';
import Image from 'next/image'
import Link from 'next/link'
import { Key } from 'react';

export default function Home() {
  const posts = getSortedPostsData();
  const lastPost = posts[0];
  return (
    <div className="bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lastest */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image 
                src={lastPost.image} 
                alt="Latest blog post" 
                width={600} 
                height={400} 
                className="w-full"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{lastPost.title}</h2>
                <p className="text-gray-600 mb-4">{lastPost.description}</p>
                <Link href="/post/exciting-new-biomes" className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
              </div>
            </div>
            {/* Lastest */}
            <div className="space-y-6">
              {/*  */}
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              {posts.map((value) => (
                <div key={value.id} className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-md text-gray-600 mb-2">{value.description}</p>
                  <p className="text-sm text-black mb-4">Author: {value.author} - Date: {value.date}</p>
                  <Link href={`/blog/${value.id}`} className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
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
            {posts.map((i) => (
              <div key={i.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={i.image} 
                  alt={`Blog post ${i.title}`} 
                  width={400} 
                  height={200} 
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{i.title}</h3>
                  <p className="text-md text-gray-600 mb-2">{i.description}</p>
                  <p className="text-sm text-black mb-4">Author: {i.author} - Date: {i.date}</p>
                  <Link href={`/blog/${i.id}`} className="text-emerald-600 hover:text-emerald-700 font-semibold">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}