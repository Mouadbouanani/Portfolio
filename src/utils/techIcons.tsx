import React from 'react';

// Import SVG files from assets
import tailwind from '../assets/logos/tailwind.svg';
// Official technology logos using external CDN sources
export const getTechIcon = (techName: string): React.ReactNode => {
  const normalizedName = techName.toLowerCase().replace(/[\/\s+.]/g, '');

  // Map technology names to their respective SVG CDN links or local assets
  const iconMap: Record<string, string> = {
    // Languages
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'c': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'cpp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'csharp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    'kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'scala': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
    'dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',

    // Frontend
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
    'sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'jquery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'materialui': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'threejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    'electron': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
    'graphql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',

    // Backend
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'springboot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', // Using spring icon
    'django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'fastapi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',

    // Mobile
    'android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'ios': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    'swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',

    // Databases
    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',

    // DevOps & Tools
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    'tailwind': tailwind,

    // Additional Icons needed for skills
    'reactnative': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Using react icon for react native
    'html5css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', // Using html icon
    'jee': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', // Using java icon
    'githubactions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', // Using github icon
    'cicd': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', // Using jenkins icon
    'mongodbatlas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', // Using mongodb icon
    'mvc': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', // Using spring icon
    'mtv': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', // Using django icon
    'restapi': 'https://www.svgrepo.com/show/354228/rest-api.svg',
    'microservices': 'https://www.svgrepo.com/show/354067/microservices.svg',
    'kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
    'eureka': 'https://raw.githubusercontent.com/spring-io/spring-website/master/static/img/projects/spring-cloud.svg', // Using Spring Cloud icon for Eureka
    'nexus': 'https://cdn.worldvectorlogo.com/logos/sonatype-nexus-3.svg',
  };

  const iconSrc = iconMap[normalizedName];

  if (iconSrc) {
    // Check if it's a string (URL) or imported SVG
    if (typeof iconSrc === 'string') {
      return (
        <img
          src={iconSrc}
          alt={techName}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop if fallback also fails
            target.style.display = 'none';
          }}
        />
      );
    } else {
      // It's an imported SVG module, render it directly
      return (
        <img
          src={iconSrc}
          alt={techName}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop if fallback also fails
            target.style.display = 'none';
          }}
        />
      );
    }
  } else {
    // Fallback icon
    return (
      <svg viewBox="0 0 24 24" className="w-full h-full" >
        <circle cx="12" cy="12" r="10" fill="none" stroke="#00C2FF" strokeWidth="1.5" />
        <text x="12" y="16" fontSize="10" fill="#00C2FF" textAnchor="middle" fontWeight="bold">{techName.substring(0, 2).toUpperCase()}</text>
      </svg >
    );
  }
};