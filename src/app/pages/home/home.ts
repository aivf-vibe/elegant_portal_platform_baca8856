import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  features = [
    {
      icon: '🧠',
      title: 'AI-Powered Learning',
      description: 'Advanced algorithms that adapt to each student\'s learning style and pace for optimal results.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track progress with detailed insights and actionable recommendations for continuous improvement.'
    },
    {
      icon: '🎯',
      title: 'Personalized Paths',
      description: 'Custom learning journeys tailored to individual goals, strengths, and areas for growth.'
    },
    {
      icon: '🤖',
      title: 'Smart Tutoring',
      description: '24/7 AI tutors that provide instant help, explanations, and guidance whenever needed.'
    },
    {
      icon: '🏆',
      title: 'Gamified Progress',
      description: 'Engaging challenges and rewards that make learning fun and motivate students to excel.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security with complete data privacy and protection for all users.'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'High School Teacher',
      content: 'EduAI has transformed how my students learn. The personalized approach has improved engagement by 300%.',
      avatar: '👩‍🏫'
    },
    {
      name: 'Michael Chen',
      role: 'University Student',
      content: 'The AI tutor helped me understand complex concepts I struggled with for months. It\'s like having a personal professor!',
      avatar: '👨‍🎓'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Parent',
      content: 'My daughter\'s confidence has soared since using EduAI. She actually looks forward to studying now!',
      avatar: '👩‍👧'
    }
  ];

  ngOnInit() {
    this.observeElements();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animation classes
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
