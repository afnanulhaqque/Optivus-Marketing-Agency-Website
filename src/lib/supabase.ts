import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          role: 'admin' | 'editor';
          full_name: string;
          avatar_url?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role?: 'admin' | 'editor';
          full_name: string;
          avatar_url?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: 'admin' | 'editor';
          full_name?: string;
          avatar_url?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          title: string;
          description: string;
          icon: string;
          features: string[];
          image_url?: string;
          status: 'active' | 'inactive';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          icon: string;
          features: string[];
          image_url?: string;
          status?: 'active' | 'inactive';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          icon?: string;
          features?: string[];
          image_url?: string;
          status?: 'active' | 'inactive';
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          featured_image?: string;
          category: string;
          tags: string[];
          status: 'draft' | 'published';
          author_id: string;
          seo_title?: string;
          seo_description?: string;
          published_at?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          featured_image?: string;
          category: string;
          tags?: string[];
          status?: 'draft' | 'published';
          author_id: string;
          seo_title?: string;
          seo_description?: string;
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string;
          featured_image?: string;
          category?: string;
          tags?: string[];
          status?: 'draft' | 'published';
          seo_title?: string;
          seo_description?: string;
          published_at?: string;
          updated_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company?: string;
          phone?: string;
          service: string;
          message: string;
          status: 'new' | 'read' | 'archived';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string;
          phone?: string;
          service: string;
          message: string;
          status?: 'new' | 'read' | 'archived';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          status?: 'new' | 'read' | 'archived';
          updated_at?: string;
        };
      };
      email_campaigns: {
        Row: {
          id: string;
          name: string;
          subject: string;
          content: string;
          status: 'draft' | 'scheduled' | 'sent';
          sent_count: number;
          open_rate: number;
          click_rate: number;
          scheduled_at?: string;
          sent_at?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          subject: string;
          content: string;
          status?: 'draft' | 'scheduled' | 'sent';
          sent_count?: number;
          open_rate?: number;
          click_rate?: number;
          scheduled_at?: string;
          sent_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          subject?: string;
          content?: string;
          status?: 'draft' | 'scheduled' | 'sent';
          sent_count?: number;
          open_rate?: number;
          click_rate?: number;
          scheduled_at?: string;
          sent_at?: string;
          updated_at?: string;
        };
      };
      media_assets: {
        Row: {
          id: string;
          filename: string;
          original_name: string;
          file_type: string;
          file_size: number;
          url: string;
          alt_text?: string;
          usage_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          filename: string;
          original_name: string;
          file_type: string;
          file_size: number;
          url: string;
          alt_text?: string;
          usage_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          alt_text?: string;
          usage_count?: number;
          updated_at?: string;
        };
      };
    };
  };
};