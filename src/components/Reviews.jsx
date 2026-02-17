import { useEffect, useState } from "react";
import "./Review.css";

const reviews = [
  { name: "Aman Verma", text: "The food is always fresh and delicious!", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Sharma", text: "Super convenient and healthy.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rahul Mehta", text: "Excellent service and quality meals.", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Sneha Kapoor", text: "Affordable and nutritious.", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Arjun Singh", text: "Best decision for my health.", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Neha Gupta", text: "Tasty meals and on-time delivery.", image: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Rohit Das", text: "Fantastic customer support.", image: "https://randomuser.me/api/portraits/men/81.jpg" },
  { name: "Kavya Iyer", text: "Healthy food that tastes amazing!", image: "https://randomuser.me/api/portraits/women/36.jpg" },
  { name: "Vikram Rao", text: "Highly recommended.", image: "https://randomuser.me/api/portraits/men/90.jpg" }
];

function Reviews() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState("enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("exit");

      setTimeout(() => {
        setIndex(prev => (prev + 3) % reviews.length);
        setAnimate("enter");
      }, 600); // match animation duration
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = reviews.slice(index, index + 3);

  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>

      <div className={`reviews-container ${animate}`}>
        {visibleReviews.map((review, i) => (
          <div className="review-card" key={i}>
            <img src={review.image} alt={review.name} />
            <p>"{review.text}"</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
