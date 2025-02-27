import React, { useEffect } from 'react';
import { 
  MessageSquare, 
  ShoppingBag, 
  Zap, 
  Instagram, 
  Search, 
  ShoppingCart, 
  Home, 
  Gift, 
  Sparkles, 
  Link, 
  Clock, 
  ChevronUp,
  Linkedin,
  Twitter,
  Send,
  Eye,
  Camera,
  Bot
} from 'lucide-react';

function App() {
  // Intersection Observer for fade-in animations
  // This is used to detect when an element is in the viewport and add a class to it to trigger a fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Instagram UI Blur Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-5">
            {/* Background animation elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Instagram UI Elements (Blurred) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-96 bg-white rounded-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white rounded-xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white rounded-xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center">
              <div className="bg-blue-600 p-3 rounded-full">
                <MessageSquare size={28} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold ml-3 text-blue-600">Beeblue AI</h1>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
              Turn Your Instagram Explore into a Shopping Cart Instantly!
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 fade-in animation-delay-300">
              Beeblue AI helps you shop seamlessly on Instagram. Just DM any post or reel, and our AI extracts and identifies the products for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in animation-delay-600">
              <a 
                href="https://instagram.com/beeblue.shop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Instagram size={20} className="mr-2" />
                Try Now on Instagram
              </a>
              <button 
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-full border border-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">What is Beeblue AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beeblue AI is an Instagram-based AI service that enhances your shopping experience by analyzing Instagram posts and reels. Our AI vision models recognize and extract all products, making shopping effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Instagram DM Mockup */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg fade-in">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                {/* Instagram DM Header */}
                <div className="bg-gray-100 p-4 flex items-center border-b">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Beeblue.shop</p>
                    <p className="text-xs text-gray-500">AI Shopping Assistant</p>
                  </div>
                </div>
                
                {/* Instagram DM Chat */}
                <div className="p-4 bg-white">
                  {/* User Message */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-blue-100 rounded-2xl py-2 px-4 max-w-xs">
                      <p className="text-sm">I love this outfit! Can you help me find it?</p>
                    </div>
                  </div>
                  
                  {/* Instagram Post Shared */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-gray-100 rounded-xl overflow-hidden w-48">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-400 text-xs">Instagram Post</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bot Response */}
                  <div className="flex mb-4">
                    <div className="bg-gray-100 rounded-2xl py-2 px-4 max-w-xs">
                      <p className="text-sm font-semibold">Analyzing your image... ✨</p>
                    </div>
                  </div>
                  
                  {/* Bot Results */}
                  <div className="flex mb-4">
                    <div className="bg-gray-100 rounded-2xl py-3 px-4">
                      <p className="text-sm font-semibold mb-2">I found these items:</p>
                      <div className="space-y-2">
                        <div className="bg-white p-2 rounded-lg flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-md flex-shrink-0"></div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">Blue Denim Jacket</p>
                            <p className="text-xs text-blue-600">$49.99 - Shop Now</p>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-md flex-shrink-0"></div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">White Sneakers</p>
                            <p className="text-xs text-blue-600">$79.99 - Shop Now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Features */}
            <div className="flex flex-col justify-center space-y-6 fade-in animation-delay-300">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Camera size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Vision</h3>
                  <p className="text-gray-600">Our advanced AI extracts products from Instagram posts & reels with incredible accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <ShoppingCart size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">One-Click Shopping</h3>
                  <p className="text-gray-600">Instantly get links to buy products you see on Instagram without endless searching.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart & Seamless</h3>
                  <p className="text-gray-600">Works directly via Instagram DM - no additional apps or websites needed.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Search size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product Discovery</h3>
                  <p className="text-gray-600">Find similar products at different price points to match your budget and style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shop from Instagram in three simple steps
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full transition-all duration-300 hover:shadow-lg fade-in">
              <div className="relative">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">1</div>
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-200"></div>
              </div>
              <div className="mb-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <Instagram size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Something You Love</h3>
              <p className="text-gray-600">Explore Instagram and see a product in a post or reel that catches your eye.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full transition-all duration-300 hover:shadow-lg fade-in animation-delay-300">
              <div className="relative">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">2</div>
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-200"></div>
              </div>
              <div className="mb-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <MessageSquare size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Send as DM to @beeblue.shop</h3>
              <p className="text-gray-600">Share the post with our AI assistant via Instagram DM for instant analysis.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full transition-all duration-300 hover:shadow-lg fade-in animation-delay-600">
              <div className="relative">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">3</div>
              </div>
              <div className="mb-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <ShoppingBag size={48} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Product Links & Suggestions</h3>
              <p className="text-gray-600">Receive instant purchase options, pricing, and similar product recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Why Use Beeblue AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers unique advantages to enhance your Instagram shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Product Recognition</h3>
              <p className="text-gray-600">No more manual searching! Our AI instantly identifies products in any Instagram content.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-300">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <ShoppingCart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Shopping Recommendations</h3>
              <p className="text-gray-600">Save time and effort with direct links to products and similar alternatives.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-600">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Instagram size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Works Inside Instagram DMs</h3>
              <p className="text-gray-600">No extra apps needed - everything happens right inside your Instagram messages.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Search size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Similar Products Easily</h3>
              <p className="text-gray-600">Our AI helps discover alternatives at different price points to match your budget.</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-300">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Powered by Advanced AI Vision</h3>
              <p className="text-gray-600">Cutting-edge image analysis technology ensures accurate product identification.</p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-600">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Responsive</h3>
              <p className="text-gray-600">Get product information within seconds of sending an Instagram post.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Who Can Benefit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beeblue AI is perfect for anyone who discovers products on Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <ShoppingBag size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fashion Enthusiasts</h3>
              <p className="text-gray-600">Find the latest outfits & styles effortlessly from fashion influencers and brands.</p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-300">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beauty & Skincare Lovers</h3>
              <p className="text-gray-600">Discover makeup & skincare products from beauty influencers and tutorials.</p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-600">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Home size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Home & Lifestyle Shoppers</h3>
              <p className="text-gray-600">Easily shop home decor & gadgets spotted in Instagram home tours and lifestyle content.</p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 fade-in animation-delay-900">
              <div className="bg-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Gift size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gift Shoppers</h3>
              <p className="text-gray-600">Instantly find and buy gifts without endless scrolling through multiple websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Beeblue AI Now!</h2>
            <p className="text-xl mb-10">
              Start shopping smarter on Instagram today. Just DM us any post or reel, and let our AI do the rest!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/beeblue.shop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Instagram size={20} className="mr-2" />
                DM Us on Instagram
              </a>
              <button 
                className="bg-transparent hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full border border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                onClick={() => scrollToSection('how-it-works')}
              >
                <Eye size={20} className="mr-2" />
                Watch How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? Reach out to our team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-lg fade-in">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📧</span> support@beeblue.shop
                </p>
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Legal</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">Privacy Policy</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">Terms of Service</a>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-2 rounded-full mr-2">
                <MessageSquare size={20} className="text-blue-600" />
              </div>
              <span className="text-xl font-bold">Beeblue AI</span>
            </div>
            <div className="text-sm text-blue-200">
              © {new Date().getFullYear()} Beeblue AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;