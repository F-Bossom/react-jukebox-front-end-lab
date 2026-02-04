import { useState } from "react";

const initialState = {
  title: "",
  artist: "",
  length: "",
  releaseYear: ""
};

const TrackForm = ({
  handleAddTrack,
  handleUpdateTrack,
  handleFormOpen,
  selected,
}) => {
  const [formData, setFormData] = useState(selected || initialState);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops default form submit behaviour
    try {
      if (selected) {
        handleUpdateTrack(formData, selected._id);
      } else {
        handleAddTrack(formData);
      }

      handleFormOpen();
      setFormData({
        title: "",
        artist: "",
        length: "",
        releaseYear: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />

        <label htmlFor="length">Length</label>
        <input
          type="text"
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
        />

        <label htmlFor="releaseYear">Release Year</label>
        <input
          type="text"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {selected ? "Update Track" : "Add New Track"}{" "}
        </button>
      </form>
    </div>
  );
};

export default TrackForm;
