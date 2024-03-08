import { useState, useRef } from "react";

import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
// import ChildComponent from "./components/ChildComponent";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => {
      return prevPickedPlaces.filter(
        (place) => place.id !== selectedPlace.current,
      );
    });
    modal.current.close();
  }

  function handleSelectPlace(id) {
    console.log(id);
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const pickedPlace = AVAILABLE_PLACES.find((place) => place.id === id);
      return [pickedPlace, ...prevPickedPlaces];
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <div>
          <button onClick={handleStopRemovePlace}>Close</button>
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onRemove={handleRemovePlace}
          />
        </div>
      </Modal>
      <header>
        <img src={logoImg} alt="" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <button>Test</button>
        <Places
          title="I'd like to visit ..."
          places={pickedPlaces}
          onSeclectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSeclectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
