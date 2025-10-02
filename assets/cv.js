// Dynamically populate CV sections from Rahulranjan_CV.json
fetch('Rahulranjan_CV.json')
  .then(response => response.json())
  .then(data => {
    // Helper to get text by label
    function getTexts(label) {
      return data.texts.filter(t => t.label === label).map(t => t.text);
    }
    
    // About
    document.querySelector('#about p').innerHTML = 'Research-focused professional with expertise in machine learning, data analysis, and software development. Currently pursuing advanced research in biomedical signal processing and deep learning applications.';
    
    // Education
    document.querySelector('#education ul').innerHTML = `
      <li><strong>Master of Engineering (Research)</strong> - Monash University (2023-2025)
        <ul><li>Specialization: Biomedical Engineering, Machine Learning</li></ul>
      </li>
      <li><strong>Bachelor of Engineering</strong> - BITS Pilani
        <ul><li>Department of Physics</li></ul>
      </li>`;
    
    // Experience
    document.querySelector('#experience ul').innerHTML = `
      <li><strong>Research Intern</strong> - Centre for Railway Information Systems (CRIS), New Delhi (Jan - May 2022)
        <ul>
          <li>Designed and implemented predictive maintenance algorithms, reducing equipment downtime by 18%</li>
          <li>Developed ML-based anomaly detection system for critical railway infrastructure</li>
        </ul>
      </li>
      <li><strong>Information Technology Officer</strong> - Aglow Engineers, Kolkata (Jun 2022 - Feb 2023)
        <ul>
          <li>Engineered and automated data pipelines to migrate manual entry systems into robust SQL databases</li>
          <li>Built machine learning forecasting models for proactive vulnerability detection and system maintenance</li>
        </ul>
      </li>
      <li><strong>Software Development Intern</strong> - Xilinx (now AMD), Hyderabad (Jul - Dec 2021)
        <ul>
          <li>Developed the Data Flow Sync Checker, a key timing analysis tool used by over 25 engineers for FPGA design</li>
          <li>Automated verification algorithms, resulting in a 30% improvement in design validation efficiency</li>
        </ul>
      </li>`;
    
    // Publications
    document.querySelector('#publications ul').innerHTML = `
      <li><strong>Published:</strong> Roha, V. S., Ranjan, R., & Yuce, M. R. (2025). Evolving Blood Pressure Estimation: From Feature Analysis to Image-Based Deep Learning Models. <em>Journal of Medical Systems</em>, 49(1), 97.</li>
      <li><strong>Under Review:</strong> Roha, V. S., Ranjan, R., & Yuce, M. R. (2025). Lightweight Smartphone-Based Blood Pressure Monitoring via Facial PPG Reconstruction and Temporal Pattern Encoding. <em>Information Fusion</em>.</li>
      <li><strong>Under Review:</strong> Ranjan, R., Roha, V. S., & Yuce, M. R. (2025). VITAL Net: A Hybrid Framework for SpO2 and HR Estimation Using Smartphone rPPG Video. <em>IEEE Applied Sensing Conference</em>.</li>`;
    
    // Skills
    document.querySelector('#skills ul').innerHTML = `
      <li><strong>Programming:</strong> Python, MATLAB, C++, JavaScript, SQL</li>
      <li><strong>Machine Learning:</strong> Deep Learning, Computer Vision, Signal Processing, TensorFlow, PyTorch</li>
      <li><strong>Tools & Technologies:</strong> Git, Docker, Flask, React, FPGA Design</li>
      <li><strong>Research Areas:</strong> Biomedical Signal Processing, Remote Photoplethysmography, Healthcare AI</li>`;
    
    // Projects
    document.querySelector('#projects ul').innerHTML = `
      <li><strong>LLM-based Civic Engagement Platform</strong> - Monash University (2024)
        <ul>
          <li>Developed a full-stack email generation tool using OpenRouter LLM API with safety filters</li>
          <li>Deployed application with Flask backend and React frontend</li>
        </ul>
      </li>
      <li><strong>Monte Carlo Simulations on Ising Models</strong> - BITS Pilani (2021-2022)
        <ul>
          <li>Conducted simulations on 2D/3D Ising models to analyze phase transitions and critical exponents</li>
          <li>Optimized simulation runtime by 40% through vectorization and multiprocessing techniques</li>
        </ul>
      </li>`;
    
    // Awards
    document.querySelector('#awards ul').innerHTML = `
      <li>The Duke of Edinburgh's International Award - Silver (2015)</li>`;
    
    // Contact
    document.querySelector('#contact ul').innerHTML = `
      <li>Email: <a href="mailto:rahulrkm0038@gmail.com">rahulrkm0038@gmail.com</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/rahul-ranjan-b595891b1" target="_blank">linkedin.com/in/rahul-ranjan-b595891b1</a></li>
      <li>GitHub: <a href="https://github.com/rahul201722" target="_blank">github.com/rahul201722</a></li>
      <li>Phone: +91 7997193400</li>`;
  })
  .catch(error => {
    console.log('JSON file not found, using fallback content');
    // Fallback content is already loaded above
  });
