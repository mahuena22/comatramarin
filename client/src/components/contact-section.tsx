import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  productType: z.string().min(1, "Veuillez sélectionner un type de produit"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productType: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée avec succès!",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "+229 XX XX XX XX (Cotonou)",
        "+225 XX XX XX XX (Abidjan)",
        "+228 XX XX XX XX (Lomé)"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@comatra-fm.com",
        "commercial@comatra-fm.com"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+229 XX XX XX XX"]
    }
  ];

  const businessHours = [
    { day: "Lundi - Vendredi", hours: "7h00 - 18h00" },
    { day: "Samedi", hours: "7h00 - 13h00" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Nous contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenez contact avec nos équipes pour vos projets d'aquaculture et vos besoins en produits aquatiques
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-montserrat font-bold text-card-foreground mb-6">
              Demande de devis
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Votre nom et prénom" 
                          {...field}
                          data-testid="input-name"
                        />
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
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="votre@email.com" 
                          {...field}
                          data-testid="input-email"
                        />
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
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+XXX XX XX XX XX" 
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de produit</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-product-type">
                            <SelectValue placeholder="Sélectionnez un type de produit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="poissons-nobles">Poissons nobles</SelectItem>
                          <SelectItem value="crustaces-coquillages">Crustacés & Coquillages</SelectItem>
                          <SelectItem value="equipements-aquacoles">Équipements aquacoles</SelectItem>
                          <SelectItem value="services-logistiques">Services logistiques</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
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
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Décrivez vos besoins..." 
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full px-8 py-4 rounded-lg font-montserrat font-semibold text-white shadow-lg"
                  disabled={submitContactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {submitContactMutation.isPending ? "Envoi en cours..." : "Envoyer la demande"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-muted-foreground">
                {businessHours.map((hours, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{hours.day}</span>
                    <span data-testid={`hours-${index}`}>{hours.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
