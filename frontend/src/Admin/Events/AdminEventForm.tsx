import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './AdminEventForm.module.css';

const AdminEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    clubName: '',
    clubIcon: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('description', formData.description);
    payload.append('date', formData.date);
    payload.append('time', formData.time);
    payload.append('club', JSON.stringify({ name: formData.clubName, icon: formData.clubIcon }));
    payload.append('image', image);

    try {
      setSubmitting(true);
      await axios.post(`http://localhost:5000/api/events`, payload);
      setSuccess(true);
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        clubName: '',
        clubIcon: '',
      });
      setImage(null);
    } catch (error) {
      console.error("Error posting event:", error);
      alert("Failed to post event");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.heading}>Post New Event</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          required
          className={styles.input}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Event Description"
          required
          className={styles.textarea}
        />

        <div className={styles.row}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.row}>
          <input
            type="text"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            placeholder="Club Name"
            required
            className={styles.input}
          />
          <input
            type="text"
            name="clubIcon"
            value={formData.clubIcon}
            onChange={handleChange}
            placeholder="Emoji Icon (🎨)"
            required
            className={styles.input}
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className={styles.input}
        />

        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Post Event'}
        </motion.button>

        {success && <p className={styles.successMsg}>Event posted successfully!</p>}
      </form>
    </motion.div>
  );
};

export default AdminEventForm;
