import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Security', path: '/security' },
      { label: 'Integrations', path: '/integrations' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
      { label: 'Contact', path: '/contact' }
    ],
    resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Documentation', path: '/docs' },
      { label: 'Support', path: '/support' },
      { label: 'Community', path: '/community' }
    ]
  };
}
