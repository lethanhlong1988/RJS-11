import pic from "../assets/forest-waterfall.jpg";

export default function Places({ title, places, onSeclectPlace }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {places.length === 0 && (
        <p className="fallback-text">
          Select the places you would like to visit below.
        </p>
      )}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => {
            return (
              <li key={place.id} className="place-item">
                <button onClick={() => onSeclectPlace(place.id)}>
                  <img src={place.image.src} alt={place.image.alt} />
                  <h3>{place.title}</h3>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
