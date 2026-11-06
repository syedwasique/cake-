import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { BRAND, INSTAGRAM_POSTS } from '../../lib/data';

export default function InstagramGallery() {
  return (
    <section id="instagram-strip" className="py-24 sm:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Visual Journal & Daily Bakes"
          title="Inside the Kitchen with"
          italicWord={BRAND.handle}
          subtitle="Behind-the-scenes ganache pours, finished celebration centerpieces, and daily fresh bakes at Shop R 708."
          theme="dark"
          align="center"
          className="mb-14"
        />

        {/* 6-Tile Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Instagram"
              className="group relative aspect-square bg-espresso-900 overflow-hidden border border-gold-400/20 hover:border-gold-400 block shadow-lg"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-luxury"
              />

              {/* Dark Cocoa & Gold Hover Vignette */}
              <div className="absolute inset-0 bg-espresso-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-center z-10 backdrop-blur-[2px]">
                <div className="flex justify-end">
                  <ExternalLink className="w-4 h-4 text-gold-400" />
                </div>

                <div className="space-y-1 my-auto">
                  <InstagramIcon className="w-5 h-5 text-gold-300 mx-auto mb-1" />
                  <p className="text-[10px] font-sans text-cream-200/90 line-clamp-2 italic">
                    "{post.caption}"
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 text-[10px] font-sans text-gold-300/80 pt-2 border-t border-gold-400/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-gold-400 text-gold-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-xs font-sans text-cream-300/80">
            Join our private confectionery circle on Instagram:
          </span>
          <Button
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            icon={InstagramIcon}
          >
            Follow {BRAND.handle}
          </Button>
        </div>
      </div>
    </section>
  );
}
