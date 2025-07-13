import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './AdminEventForm.module.css';

import competative from "../../assets/clubimgs/competative.webp"
import coding from "../../assets/clubimgs/coding.webp"
import dp from "../../assets/clubimgs//photography.webp"
import startup from "../../assets/clubimgs/startup.webp"
import robotics from "../../assets/clubimgs/robotics.webp"
import ls from "../../assets/clubimgs/ls.webp"
import internship from "../../assets/clubimgs/internship.webp"
import linquistic from "../../assets/clubimgs/linguistic.webp"
import Finance from "../../assets/clubimgs/finance.webp"
import sports from "../../assets/clubimgs/sports.webp"
import cc from "../../assets/clubimgs/cc.webp"
import arts from "../../assets/clubimgs/cc.webp"
import electronics from "../../assets/clubimgs/electronics.webp"
import eco from "../../assets/clubimgs/competative.webp"
import yoga from "../../assets/clubimgs/competative.webp"
import he from "../../assets/clubimgs/competative.webp"

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

  const clubs = [
    { name: 'Competitive Club', icon: competative },
    { name: 'Coding Club', icon: coding },
    { name: 'Electronics Club', icon: electronics },
    { name: 'Arts & Crafts Club', icon: arts },
    { name: 'Cultural & Choreography Club', icon: cc },
    { name: 'Studio Club', icon: dp },
    { name: 'Internship & Career Opportunities Club', icon: internship },
    { name: 'Startup Club', icon: startup },
    { name: 'Higher Education Club', icon: he },
    { name: 'Sports and Games Club', icon: sports },
    { name: 'Eco club', icon: eco },
    { name: 'Lecture Series Club', icon: ls },
    { name: 'Linguistic & Personality Development Club', icon: linquistic },
    { name: 'Research Club', icon: startup }, //research
    { name: 'Finance Club', icon: Finance },
    { name: 'Robotics Club', icon: robotics },
    { name: 'Yoga Club', icon: yoga }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If club name changes and we have a matching club, set its icon
    if (name === 'clubName') {
      const selectedClub = clubs.find(club => club.name === value);
      if (selectedClub) {
        setFormData(prev => ({ ...prev, clubIcon: selectedClub.icon }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Please select an event image");

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
          <select
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select Club</option>
            {clubs.map((club, index) => (
              <option key={index} value={club.name}>{club.name}</option>
            ))}
          </select>

          <div className={styles.iconPreview}>
            {formData.clubIcon ? (
              <img 
                src={formData.clubIcon} 
                alt="Club Icon" 
                className={styles.iconImage}
              />
            ) : (
              <span className={styles.iconPlaceholder}>Icon</span>
            )}
          </div>
        </div>

        <div className={styles.fileInputContainer}>
          <label className={styles.fileInputLabel}>
            Event Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className={styles.fileInput}
            />
          </label>
        </div>

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