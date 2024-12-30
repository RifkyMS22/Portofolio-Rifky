// src/components/About.js
import React from 'react';
import './About.css'; // Jika Anda ingin menambahkan styling khusus untuk About

// Impor foto Anda
import myPhoto from '../assets/images/my-photo.jpg';

function About() {
  return (
    <section id="about" className="section-about">
      <h2>Tentang Saya</h2>
      <div className="about-container">
        {/* Menampilkan foto */}
        <img src={myPhoto} alt="Foto Saya" className="about-photo" />

        <div className="about-text">
          <p>Halo! Saya seorang pengembang perangkat lunak yang bersemangat belajar teknologi baru. Saya suka membangun aplikasi web yang dapat memecahkan masalah dan membuat hidup lebih mudah.</p>
          <p>Keahlian saya meliputi JavaScript, React, Node.js, dan lainnya.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
