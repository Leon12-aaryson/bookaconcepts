import image1 from "@/images/booka.jpg";
import image2 from "@/images/booka.jpg";
import image3 from "@/images/booka.jpg";

const galleryItems = [
  { id: 1, title: "Project 1", description: "Description for Project 1", image: image1 },
  { id: 2, title: "Project 2", description: "Description for Project 2", image: image2 },
  { id: 3, title: "Project 3", description: "Description for Project 3", image: image3 },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Work Gallery</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and services we've completed for our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg group h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
