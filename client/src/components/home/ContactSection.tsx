import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll contact you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Reach out to us for any inquiries or to schedule a service. We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
              
              {/* Contact Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="air_conditioning">Air Conditioning & Refrigeration</SelectItem>
                            <SelectItem value="mechanical">General Mechanical Workshop</SelectItem>
                            <SelectItem value="generator">Generator Services</SelectItem>
                            <SelectItem value="spare_parts">Genuine Spare Parts</SelectItem>
                            <SelectItem value="ambulance">Ambulance Services</SelectItem>
                            <SelectItem value="roof_cut">Pop Top Roof Cut</SelectItem>
                            <SelectItem value="vehicle_seats">Tourist Vehicle Seats</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-secondary mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-neutral-600">123 Kampala Road, Kampala, Uganda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-neutral-600">+256 700 000 000</p>
                    <p className="text-neutral-600">+256 780 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-neutral-600">info@bookaconcepts.com</p>
                    <p className="text-neutral-600">support@bookaconcepts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-4 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-neutral-600">Saturday: 8:00 AM - 2:00 PM</p>
                    <p className="text-neutral-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 hover:bg-primary/80">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 hover:bg-primary/80">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 hover:bg-primary/80">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 hover:bg-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-50 rounded-lg overflow-hidden h-80">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-neutral-600">Map will be integrated here</p>
                  <p className="text-sm text-neutral-600 mt-2">123 Kampala Road, Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
