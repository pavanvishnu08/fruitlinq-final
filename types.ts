import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface FranchiseFormData {
  name: string;
  city: string;
  phone: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  interestType: 'Franchise' | 'Partnership' | 'Support';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}