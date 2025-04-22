
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log('Form submitted');
    // You could add a success toast message here
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-primary/10 rounded-full text-portfolio-primary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-muted-foreground">hello@yourname.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-primary/10 rounded-full text-portfolio-primary mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-primary/10 rounded-full text-portfolio-primary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Your Email</label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="I'd like to discuss a project that involves..." 
                  rows={5}
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/80 text-white"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
