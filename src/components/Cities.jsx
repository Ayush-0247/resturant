
import "./Cities.css";
function Cities() {
  const cities = [
{
  name: "Patna",
 image: "https://images.unsplash.com/photo-1642069695904-528045db6443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF0bmF8ZW58MHx8MHx8fDA%3D"

}
,
    {
      name: "Punjab",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    },
    {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
  },
  ];

  return (
<section 
id="cities" 
className="cities">
  <h2>We Are In These Cities</h2>

  <div className="scroll-wrapper">
    <div className="scroll-track">
      {cities.concat(cities).map((city, index) => (
        <div className="city-card" key={index}>
          <img src={city.image} alt={city.name} />
          <h3>{city.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Cities;

