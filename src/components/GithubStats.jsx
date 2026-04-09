import React from 'react';

const GithubStats = () => {
  return (
    <section id="github-stats" className="section">
      <h2 className="section-title">
        <i className="fa-brands fa-github" style={{ marginRight: '15px' }}></i>
        GitHub Stats
      </h2>
      <div className="stats-container fade-in">
        <a href="https://github.com/Luffy2769" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=Luffy2769&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a" 
            alt="GitHub Stats" 
            className="stats-img glass-card" 
            style={{ padding: '0' }}
          />
        </a>
        <a href="https://github.com/Luffy2769" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Luffy2769&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a" 
            alt="Top Languages" 
            className="stats-img glass-card"
            style={{ padding: '0' }}
          />
        </a>
      </div>
      <div className="stats-container fade-in" style={{ paddingTop: '0' }}>
        <a href="https://github.com/Luffy2769" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Luffy2769&theme=tokyonight&hide_border=true&background=0f172a" 
            alt="GitHub Streak" 
            className="stats-img glass-card"
            style={{ padding: '0' }}
          />
        </a>
      </div>
    </section>
  );
};

export default GithubStats;
