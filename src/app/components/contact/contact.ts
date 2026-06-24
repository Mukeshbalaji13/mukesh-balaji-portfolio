import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);

  contactForm!: FormGroup;
  formState = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  messageLength = signal(0);

  contactItems = [
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Chennai, Tamil Nadu', href: '#', bg: 'rgba(99,102,241,0.1)', color: '#6366F1', external: false },
    { icon: 'fa-solid fa-envelope', label: 'Email', value: 'mukeshbalaji0804@gmail.com', href: 'mailto:mukeshbalaji0804@gmail.com', bg: 'rgba(6,182,212,0.1)', color: '#06B6D4', external: false },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: '+91 9092756406', href: 'tel:+919092756406', bg: 'rgba(16,185,129,0.1)', color: '#10B981', external: false },
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    });
  }

  shouldShowError(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  getError(field: string): string {
    const ctrl = this.contactForm.get(field);
    if (!ctrl?.errors) return '';
    if (ctrl.errors['required']) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    if (ctrl.errors['minlength']) return `Too short (min ${ctrl.errors['minlength'].requiredLength} chars)`;
    if (ctrl.errors['maxlength']) return `Too long (max 500 chars)`;
    if (ctrl.errors['email']) return 'Enter a valid email address';
    return 'Invalid input';
  }

  updateCharCount() {
    this.messageLength.set(this.contactForm.get('message')?.value?.length ?? 0);
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formState.set('loading');
    const { name, email, subject, message } = this.contactForm.value;

    try {
      const emailjs = (window as any).emailjs;

      if (emailjs) {
        await emailjs.send(
          'service_9s7zaoy',
          'template_gqi5o4k',
          {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'mukeshbalaji0804@gmail.com',
          },
          'yFOMRsLA8WBovpBVU'
        );
        this.formState.set('success');
      } else {
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:mukeshbalaji0804@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        this.formState.set('success');
      }
    } catch {
      this.formState.set('error');
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.formState.set('idle');
    this.messageLength.set(0);
  }
}
