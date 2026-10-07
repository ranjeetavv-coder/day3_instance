import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTopic, setActiveTopic] = useState("Docker");

  const topics = {
    Docker: {
      icon: "🐳",
      title: "Docker",
      description:
        "Docker is a platform used to build, package, and run applications inside containers.",
      commands: [
        "docker --version",
        "docker build -t reactapp .",
        "docker run -d -p 8081:80 reactapp",
        "docker ps",
      ],
    },

    Git: {
      icon: "🌿",
      title: "Git",
      description:
        "Git is a version control system used to track changes in your source code.",
      commands: [
        "git init",
        "git add .",
        "git commit -m \"Initial commit\"",
        "git push",
      ],
    },

    "Docker Hub": {
      icon: "☁️",
      title: "Docker Hub",
      description:
        "Docker Hub is a cloud-based registry where Docker images can be stored and shared.",
      commands: [
        "docker login",
        "docker tag reactapp username/reactapp:latest",
        "docker push username/reactapp:latest",
        "docker pull username/reactapp:latest",
      ],
    },

    React: {
      icon: "⚛️",
      title: "React",
      description:
        "React is a JavaScript library used to build interactive and reusable user interfaces.",
      commands: [
        "npm create vite@latest",
        "npm install",
        "npm run dev",
        "npm run build",
      ],
    },
  };

  const currentTopic = topics[activeTopic];

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>🚀 Learning DevOps</h1>
          <p>Learn • Build • Containerize • Deploy</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <span className="badge">DEVOPS LEARNING</span>

        <h2>Welcome to My DevOps Learning Page</h2>

        <p>
          Explore the basic tools and technologies used in modern DevOps
          development and deployment.
        </p>
      </section>

      {/* Topics */}
      <section className="topics-section">
        <h2>🛠️ DevOps Technologies</h2>

        <div className="topic-buttons">
          {Object.keys(topics).map((topic) => (
            <button
              key={topic}
              className={activeTopic === topic ? "topic-btn active" : "topic-btn"}
              onClick={() => setActiveTopic(topic)}
            >
              {topics[topic].icon} {topic}
            </button>
          ))}
        </div>

        {/* Selected Topic */}
        <div className="topic-card">
          <div className="topic-icon">{currentTopic.icon}</div>

          <h3>{currentTopic.title}</h3>

          <p>{currentTopic.description}</p>

          <h4>💻 Important Commands</h4>

          <div className="commands">
            {currentTopic.commands.map((command, index) => (
              <div className="command" key={index}>
                <span>$</span> {command}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section">
        <h2>🔄 DevOps Workflow</h2>

        <div className="workflow">
          <div className="workflow-card">
            <span>💻</span>
            <h3>Code</h3>
            <p>Develop the application</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>🌿</span>
            <h3>Git</h3>
            <p>Track and manage code</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>🐳</span>
            <h3>Docker</h3>
            <p>Containerize application</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>☁️</span>
            <h3>Docker Hub</h3>
            <p>Share Docker image</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>🚀</span>
            <h3>Deploy</h3>
            <p>Run the application</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>🚀 Learning DevOps with React & Docker</p>
        <p>Built for DevOps Practice</p>
      </footer>

    </div>
  );
}

export default App;