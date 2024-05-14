import React from 'react';
import styles from './Home.module.css'
import restaurant from "../../assets/Restaurant.jpg";
import imageSrc from "../../assets/food.jpg";

function Home() {
  const cardsData = [
    { text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "John Doe", designation: "CEO" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Jane Smith", designation: "Manager" },
    { text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Alice Johnson", designation: "Manager" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Bob Brown", designation: "Head Chef" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Emily Davis", designation: "CEO" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, illum optio nemo aspernatur a tenetur maxime voluptas officia, aut quidem cumque rerum modi eaque tempora suscipit veritatis quaerat sed ea sunt fugiat eum amet doloribus tempore id. Voluptate exercitationem distinctio quisquam! Rem quo tenetur cumque repellat cum laboriosam, ipsam explicabo.", name: "Michael Wilson", designation: "CEO" }
  ];

  return (
    <div>
      {/* First Section */}
      <div className={styles.hero}>
        <img src={restaurant} alt="Restaurant" className={styles.heroImage} />
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>Let us find your Forever Food.</h1>
          <p className={styles.heroSubtitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>Search Now</button>
            <button className={styles.button2}>Know more</button>
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div className={styles.container}>
        <img src={imageSrc} alt="Your Image" className={styles.image} />
        <div className={styles.text}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <button className={styles.button}>Get in Touch</button>
        </div>
      </div>
      
      {/* Third Section */}
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardText}>{card.text}</div>
            <div className={styles.cardDetails}>
              <div>{card.name}</div>
              <div>{card.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
