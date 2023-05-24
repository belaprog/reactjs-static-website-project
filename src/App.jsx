import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import cardsData from './data/data.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardsData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </section>
      {/* <section className='cards-list'>
        {cardsData.map(item => (
          <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpot={item.openSpots}
          />
        ))}
      </section> */}
    </div>
  );
}

export default App;
