import starImage from '../assets/star.png';

export default function Card({ item }) {
  let badgeText;
  item.openSpots === 0 ? (badgeText = 'SOLD OUT') : (badgeText = 'ONLINE');

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img
        src={`../images/${item.coverImg}`}
        alt={`Photo of ${item.coverImg}`}
        className='card--image'
      />
      <div className='card--stats'>
        <img src={starImage} alt='Icon of star' className='card--star' />
        <span>{item.stats.rating}</span>
        <span className='gray'>({item.stats.reviewCount}) • </span>
        <span className='gray'>{item.location}</span>
      </div>
      <p className='card--title'>{item.title}</p>
      <p className='card--price'>
        <span className='bold'>From ${item.price}</span> / person
      </p>
    </div>
  );
}
