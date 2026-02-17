import React, { useState } from "react";

function App() {
  const [activeMeal, setActiveMeal] = useState("Breakfast");

  const recipes = [
    {
      title: "Smoothie Bowl",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      kcal: "220 kcal",
      time: "5 min",
    },
    {
      title: "Seared Scallops",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      kcal: "420 kcal",
      time: "20 min",
    },
    {
      title: "High Protein Sandwich",
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
      kcal: "250 kcal",
      time: "15 min",
    },
{
  title: "Avocado Toast",
  img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80",
  kcal: "280 kcal",
  time: "10 min",
}


  ];

  return (
    <div style={styles.outer}>
      <div style={styles.container}>
        
        
        <div style={styles.sidebar}>
          <div style={styles.logo}>F</div>

          <h4 style={styles.sidebarTitle}>Meal Type</h4>
          {["Breakfast", "Lunch", "Dinner"].map((item) => (
            <p
              key={item}
              onClick={() => setActiveMeal(item)}
              style={{
                ...styles.sidebarItem,
                ...(activeMeal === item && styles.activeSidebar),
              }}
            >
              {item}
            </p>
          ))}

          <h4 style={{ ...styles.sidebarTitle, marginTop: 30 }}>
            Dietary
          </h4>
          <p style={styles.sidebarItem}>Low-Carb</p>
          <p style={styles.sidebarItem}>Vegetarian</p>
          <p style={styles.sidebarItem}>Keto</p>
        </div>

       
        <div style={styles.main}>
          
       
          <div style={styles.navbar}>
            <div>
              <span style={styles.navItem}>Home</span>
              <span style={styles.navItem}>Meal Plans</span>
              <span style={{ ...styles.navItem, fontWeight: 700 }}>
                Recipes
              </span>
              <span style={styles.navItem}>Forum</span>
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              style={styles.avatar}
            />
          </div>

         
          <div style={styles.hero}>
            <div>
              <h2 style={{ margin: 0 }}>Got a Recipe That Rocks?</h2>
              <p style={{ opacity: 0.85 }}>
                Share it & inspire others.
              </p>
              <button style={styles.heroButton}>+ Add Recipe</button>
            </div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="burger"
              style={{ width: 120 }}
            />
          </div>

          <h3 style={{ marginTop: 40 }}>Recommended</h3>

          <div style={styles.grid}>
            {recipes.map((item, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={styles.cardImage}
                />
                <div style={{ padding: 18 }}>
                  <h4 style={{ margin: "5px 0" }}>{item.title}</h4>
                  <div style={styles.tagRow}>
                    <span style={styles.tag}>{item.kcal}</span>
                    <span style={styles.tag}>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  outer: {
   
    minHeight: "100vh",
    padding: 40,
    fontFamily: "Inter, sans-serif",
  },
  container: {
    background: "#ffffff",
    borderRadius: 30,
    display: "flex",
    minHeight: "90vh",
    overflow: "hidden",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  },
  sidebar: {
    width: 240,
    background: "#fff",
    padding: 30,
  },
  logo: {
    width: 45,
    height: 45,
    background: "#7f5af0",
    color: "#fff",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    marginBottom: 30,
  },
  sidebarTitle: {
    marginBottom: 10,
    fontSize: 14,
    opacity: 0.6,
  },
  sidebarItem: {
    margin: "8px 0",
    color: "#777",
    cursor: "pointer",
    transition: "0.3s",
  },
  activeSidebar: {
    color: "#7f5af0",
    fontWeight: 700,
  },
  main: {
    flex: 1,
    padding: "30px 40px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navItem: {
    marginRight: 25,
    cursor: "pointer",
    fontWeight: 500,
  },
  avatar: {
    borderRadius: "50%",
    width: 40,
    height: 40,
  },
  hero: {
    background: "linear-gradient(135deg, #7f5af0, #9b5de5)",
    borderRadius: 20,
    padding: 30,
    marginTop: 30,
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroButton: {
    marginTop: 15,
    padding: "10px 22px",
    borderRadius: 25,
    border: "none",
    background: "white",
    color: "#7f5af0",
    cursor: "pointer",
    fontWeight: 700,
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 25,
    marginTop: 20,
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "0.4s",
  },
  cardImage: {
    width: "100%",
    height: 170,
    objectFit: "cover",
  },
  tagRow: {
    display: "flex",
    gap: 10,
    marginTop: 10,
  },
  tag: {
    background: "#f1f1f1",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12,
  },
};

export default App;
