import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../axiosConfig';
import styles from './Jobs.module.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Get user from Redux state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    if (user && user.userType === 'freelancer') {
      fetchJobs(); // Fetch jobs only if the user is a freelancer
    }
  }, [user]);

  const handleBidClick = (jobId) => {
    navigate(`/jobs/${jobId}/bid`);
  };

  if (user && user.userType === 'client') {
    return <p>As a client, you do not have access to the job listings.</p>; // Message for clients
  }

  return (
    <div className={styles.jobsContainer}>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} className={styles.jobCard}>
            <h2 className={styles.jobTitle}>{job.title}</h2>
            <p className={styles.jobDescription}>{job.description}</p>
            <p className={styles.jobBudget}>Budget: ${job.budget}</p>
            <button className={styles.bidButton} onClick={() => handleBidClick(job._id)}>
              Bid on this job
            </button>
          </div>
        ))
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default Jobs;
