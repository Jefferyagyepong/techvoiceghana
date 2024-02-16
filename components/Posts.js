import React from "react";
import Post from "./Post";
import styles from "/sass/Post.module.scss";
const Posts = () => {
  const blogPosts = [
    {
      title: "Learn Web Developement",
      body: "Certainly! Learning web development can be an exciting journey. Here's a step-by-step guide to help you get started with web development:Understand the Basics HTML (HyperText Markup Language): Learn the fundamentals of HTML, which is the markup language used to structure content on the web.CSS (Cascading Style Sheets): Understand how CSS is used for styling and formatting HTML elements, making your web pages visually appealing.Master the Fundamentals:JavaScript: Learn JavaScript to add interactivity and dynamic behavior to your web pages. Understand concepts like variables, functions, loops, and arrays Version Control:Learn version control using tools like Git. This helps you track changes to your code and collaborate with others.Responsive Design:Study responsive web design to ensure your websites work well on various devices and screen sizes. Learn about media queries and flexible grid layouts. Frameworks and Libraries:Explore popular front-end frameworks like React, Angular, or Vue.js. These can simplify and streamline the development process. Back-End Development: Learn a server-side language such as Node.js (JavaScript), Python (Django or Flask), Ruby (Ruby on Rails), or PHP. Understand how to handle server-side logic, databases, and server communication. Databases: Familiarize yourself with databases. Learn SQL for relational databases (like MySQL or PostgreSQL) or NoSQL databases (like MongoDB) for non-relational data. APIs (Application Programming Interfaces):Understand how to work with APIs to fetch and send data between the front end and back end. Learn about RESTful APIs and JSON.Build Tools and Task Runners:Explore tools like Webpack, Gulp, or Parcel to automate tasks, bundle and optimize your code. Testing and Debugging: Learn about testing frameworks and debugging tools to ensure your code is robust and bug-free. Web Security: Understand common security issues and best practices for securing your web applications. Continuous Learning: Stay updated with the latest trends and technologies in web development. Follow blogs, attend webinars, and participate in the developer community. Portfolio: Build a portfolio showcasing your projects. This is essential for demonstrating your skills to potential employers or clients. Collaboration and Version Control Hosting: Get familiar with platforms like GitHub or GitLab for hosting your code repositories and collaborating with others. Deployment: Learn how to deploy your web applications to servers or cloud platforms like Heroku, AWS, or Netlify Soft Skills: Develop soft skills like problem-solving, communication, and teamwork. These are crucial in a collaborative development environment. Remember, practice is key in web development. Work on real-world projects, contribute to open-source projects, and don't be afraid to experiment with new technologies. Happy coding!",
      author: "Jeffery Agyepong",
      imgUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      title: "HTML",
      body: "Absolutely! HTML (HyperText Markup Language) is the foundation of web development, and it's essential to understand its basics. Here's a beginner's guide to learning HTML: 1. Introduction to HTML: HTML Structure: Understand the basic structure of an HTML document. It includes elements like <!DOCTYPE html>, <html>, <head>, and <body>. 2. HTML Elements: Tags: Learn about HTML tags, which are used to define elements on a webpage. Tags are enclosed in angle brackets, like <tag>content</tag>.Attributes: Explore attributes that provide additional information about HTML elements. Attributes are added to the opening tag and provide details like class, id, src, etc. 3. Common HTML Elements: Headings: Use <h1> to <h6> for headings with varying levels of importance. Paragraphs: Employ <p> tags for paragraphs. Links: Create hyperlinks with <a> tags. Understand the href attribute for linking to other pages or resources. Lists: Use <ul>, <ol>, and <li> for unordered and ordered lists. Images: Embed images using the <img> tag with the src attribute. 4. HTML Forms: Learn how to create forms using the <form> tag. Explore form elements like <input>, <select>, <textarea>, and their attributes. 5. Semantic HTML: Understand the importance of semantic HTML for better page structure and accessibility. Semantic elements like <header>, <nav>, <main>, <article>, <section>, and <footer> provide meaning to the content. 6. HTML5: Familiarize yourself with HTML5 features and tags, such as <article>, <nav>, <section>, <header>, <footer>, <canvas>, and <video>. 7. Validation: Use the W3C Markup Validation Service to check if your HTML code is valid and follows web standards. 8. Responsive Design: Learn about responsive design principles, including the use of meta tags like <meta name=viewport content=width=device-width, initial-scale=1.0> for mobile-friendly pages. 9. HTML Entities: Understand HTML entities for special characters, such as &lt; for < and &gt; for >. 10. Practice: Apply your knowledge by creating simple web pages. Practice is crucial for reinforcing what you've learned.",
      author: "Jeffery Agyepong",
      imgUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
 
  ];
  return (
    <div className={styles.post}>
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
export default Posts;


