export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  category: string;
  author: {
    name: string;
    image: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-boost-your-beauty-business",
    title: "How to Boost Your Beauty Business",
    excerpt: "Explore effective strategies to enhance your beauty services and grow your clientele.",
    content: `
      <h2 id="scheduling-importance">Understanding the Importance of Scheduling</h2>
      <p>Effective scheduling is crucial for beauty service providers to manage their time and client appointments efficiently. A well-structured schedule not only enhances productivity but also improves client satisfaction.</p>
      
      <h2 id="booking-tips">Tips for Optimizing Your Booking Process</h2>
      <p>To streamline your booking process, consider using a dedicated platform that integrates payment options and appointment management. This can save you time and reduce the stress of managing multiple tools.</p>
      
      <h2 id="technology-role">The Role of Technology in Beauty Services</h2>
      <p>Embracing technology in your beauty business can lead to significant improvements. From automated reminders to AI-driven customer interactions, technology can help you focus more on your craft.</p>
    `,
    date: "Jan 11, 2024",
    readTime: 5,
    category: "Business Tips",
    author: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
    }
  },
  {
    slug: "real-success-stories",
    title: "Real Success Stories from Beauty Providers",
    excerpt: "Get inspired by the journeys of successful beauty service providers.",
    content: `
      <h2 id="success-stories">Success Stories That Inspire</h2>
      <p>Read about how beauty professionals have transformed their businesses using modern booking solutions.</p>
      
      <h2 id="key-learnings">Key Learnings</h2>
      <p>Discover the strategies and tools that helped these professionals succeed.</p>
    `,
    date: "Jan 15, 2024",
    readTime: 5,
    category: "Client Stories",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
    }
  },
  {
    slug: "latest-beauty-trends",
    title: "Latest Trends in Beauty Industry",
    excerpt: "Stay updated on the newest trends shaping the beauty landscape.",
    content: `
      <h2 id="current-trends">Current Beauty Industry Trends</h2>
      <p>Explore the latest innovations and trends in the beauty industry.</p>
      
      <h2 id="future-outlook">Future Outlook</h2>
      <p>What to expect in the coming years and how to prepare your business.</p>
    `,
    date: "Jan 18, 2024",
    readTime: 5,
    category: "Industry News",
    author: {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop"
    }
  }
];

export function getBlogPost(slug: string): BlogPost {
  return blogPosts.find(post => post.slug === slug) || blogPosts[0];
}