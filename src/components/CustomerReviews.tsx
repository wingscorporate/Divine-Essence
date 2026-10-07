import React from 'react';
import { Star } from 'lucide-react';

interface CustomerReview {
  name: string;
  city: string;
  review: string;
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

// Keep review content here so names, locations, copy, and images are easy to edit.
const customerReviews: CustomerReview[] = [
  {
    name: 'Aarav Mehta',
    city: 'Delhi',
    review: 'The shipping rates made a noticeable difference once our order volume started growing.',
  },
  {
    name: 'Priya Nair',
    city: 'Bengaluru',
    review: 'I like having product sourcing and courier support handled through one dependable team.',
  },
  {
    name: 'Rohan Sharma',
    city: 'Mumbai',
    review: 'The onboarding was straightforward, and the team explained the rate structure clearly.',
  },
  {
    name: 'Kavya Joshi',
    city: 'Jaipur',
    review: 'Our dispatch process feels much more organised now, especially for COD orders.',
  },
  {
    name: 'Sourav Sen',
    city: 'Kolkata',
    review: 'The practical guidance helped us choose products with healthier room for margins.',
  },
  {
    name: 'Neha Kulkarni',
    city: 'Pune',
    review: 'Support has been responsive whenever we needed help with a shipment or rate query.',
  },
  {
    name: 'Aditya Verma',
    city: 'Lucknow',
    review: 'It is useful to have more than one courier option without managing separate setups.',
  },
  {
    name: 'Isha Patel',
    city: 'Ahmedabad',
    review: 'Clear communication and predictable coordination have made our daily fulfilment easier.',
  },
];

const ReviewCard: React.FC<{ review: CustomerReview }> = ({ review }) => (
  <article className="customer-review-card shrink-0 w-[290px] sm:w-[330px] rounded-2xl bg-white border border-[#E5E8EA] shadow-sm p-5">
    <div className="flex items-center gap-3 mb-4">
      <div
        className="h-12 w-12 rounded-full border-2 border-[#FFF3E8] bg-[#FFF3E8] text-[#F58220] flex items-center justify-center text-sm font-extrabold"
        aria-hidden="true"
      >
        {getInitials(review.name)}
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#182229]">{review.name}</h3>
        <p className="text-xs text-[#667078]">{review.city}</p>
      </div>
    </div>

    <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-[#F58220] text-[#F58220]" aria-hidden="true" />
      ))}
    </div>

    <p className="text-sm leading-relaxed text-[#5F6B70]">“{review.review}”</p>
  </article>
);

export const CustomerReviews: React.FC = () => (
  <section id="reviews" className="customer-reviews-section overflow-hidden py-16 md:py-20" aria-labelledby="customer-reviews-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58220] mb-3">Seller Stories</p>
        <h2 id="customer-reviews-heading" className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#182229]">
          Customer Reviews
        </h2>
        <p className="mt-3 text-base text-[#667078]">Real experiences from sellers building their online businesses across India.</p>
      </div>
    </div>

    <div className="customer-reviews-marquee w-full" aria-label="Customer reviews">
      <div className="customer-reviews-track flex w-max items-stretch gap-5 px-3">
        {[...customerReviews, ...customerReviews].map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  </section>
);
