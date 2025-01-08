// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Message sent successfully!');
    this.reset();
  });
  
  // Sample data for the skills proficiency
// Sample data for the skills proficiency
const skillsData = {
    HTML: 80,
    CSS: 75,
    JavaScript: 60,
    React: 85,
    Python: 80,
    Java: 80,
    Mern:70,
    ML_DL:70
  };
  
  const skillsList = Object.keys(skillsData);
  const valuesList = Object.values(skillsData);
  
  // Create the bar chart using Plotly
  const data = [{
    x: skillsList,
    y: valuesList,
    type: 'bar',
    marker: {
      color: 'lightblue',
    },
    text: valuesList.map(value => `${value}%`),  // Add percentage text for each bar
    hoverinfo: 'x+y+text', 
  }];
  
  const layout = {
    title: 'Skills Proficiency',
    xaxis: { title: 'Skills' },
    yaxis: { title: 'Proficiency (%)' },
    hovermode: 'closest',
    bargap: 0.6,  // Adjust this value to decrease the width of the bars
  };
  
  Plotly.newPlot('chart-container', data, layout);
  
  // Hover effect on skill names to highlight the corresponding bar in the chart
  const skillsElements = document.querySelectorAll('.skill');
  
  skillsElements.forEach(skillElement => {
    skillElement.addEventListener('mouseenter', (e) => {
      const skill = e.target.dataset.skill;
      const index = skillsList.indexOf(skill);
      // Highlight the corresponding bar on hover
      Plotly.restyle('chart-container', {
        marker: { color: skillsList.map((s, i) => i === index ? '#7386ff' : 'lightblue') }
      });
    });
  
    skillElement.addEventListener('mouseleave', () => {
      // Reset the bar chart colors when hover ends
      Plotly.restyle('chart-container', {
        marker: { color: 'lightblue' }
      });
    });
  });
  