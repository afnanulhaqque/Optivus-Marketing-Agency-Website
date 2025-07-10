import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import {
  FileText,
  Mail,
  Settings,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  Calendar,
  Activity
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DashboardStats {
  totalPosts: number;
  totalContacts: number;
  activeServices: number;
  totalCampaigns: number;
  recentActivity: any[];
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    totalContacts: 0,
    activeServices: 0,
    totalCampaigns: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', contacts: 45, posts: 12 },
    { name: 'Feb', contacts: 52, posts: 15 },
    { name: 'Mar', contacts: 48, posts: 18 },
    { name: 'Apr', contacts: 61, posts: 22 },
    { name: 'May', contacts: 55, posts: 19 },
    { name: 'Jun', contacts: 67, posts: 25 },
  ];

  const campaignData = [
    { name: 'Week 1', opens: 1200, clicks: 240 },
    { name: 'Week 2', opens: 1350, clicks: 280 },
    { name: 'Week 3', opens: 1180, clicks: 220 },
    { name: 'Week 4', opens: 1420, clicks: 310 },
  ];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch blog posts count
      const { count: postsCount } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });

      // Fetch contacts count
      const { count: contactsCount } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });

      // Fetch active services count
      const { count: servicesCount } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      // Fetch campaigns count
      const { count: campaignsCount } = await supabase
        .from('email_campaigns')
        .select('*', { count: 'exact', head: true });

      // Fetch recent activity (recent blog posts and contacts)
      const { data: recentPosts } = await supabase
        .from('blog_posts')
        .select('title, created_at, status')
        .order('created_at', { ascending: false })
        .limit(5);

      const { data: recentContacts } = await supabase
        .from('contact_submissions')
        .select('name, email, created_at, status')
        .order('created_at', { ascending: false })
        .limit(5);

      const recentActivity = [
        ...(recentPosts || []).map(post => ({
          type: 'blog_post',
          title: `New blog post: ${post.title}`,
          time: post.created_at,
          status: post.status
        })),
        ...(recentContacts || []).map(contact => ({
          type: 'contact',
          title: `New contact from ${contact.name}`,
          time: contact.created_at,
          status: contact.status
        }))
      ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 10);

      setStats({
        totalPosts: postsCount || 0,
        totalContacts: contactsCount || 0,
        activeServices: servicesCount || 0,
        totalCampaigns: campaignsCount || 0,
        recentActivity
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Blog Posts',
      value: stats.totalPosts,
      icon: FileText,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Contact Submissions',
      value: stats.totalContacts,
      icon: Mail,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Active Services',
      value: stats.activeServices,
      icon: Settings,
      color: 'bg-purple-500',
      change: '+3%'
    },
    {
      title: 'Email Campaigns',
      value: stats.totalCampaigns,
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+15%'
    }
  ];

  const quickActions = [
    { title: 'Create New Post', icon: FileText, href: '/admin/blog/new', color: 'bg-blue-500' },
    { title: 'Add Service', icon: Settings, href: '/admin/services/new', color: 'bg-green-500' },
    { title: 'View Contacts', icon: Mail, href: '/admin/contacts', color: 'bg-purple-500' },
    { title: 'New Campaign', icon: TrendingUp, href: '/admin/campaigns/new', color: 'bg-orange-500' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your website.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                <p className="text-sm text-green-600 mt-1">{card.change} from last month</p>
              </div>
              <div className={`${card.color} p-3 rounded-lg`}>
                <card.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Activity Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="contacts" fill="#009B4D" />
              <Bar dataKey="posts" fill="#FFCC00" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="opens" stroke="#009B4D" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="#FFCC00" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className={`${action.color} p-2 rounded-lg mr-3`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{action.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {stats.recentActivity.slice(0, 6).map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  activity.type === 'blog_post' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {activity.type === 'blog_post' ? (
                    <FileText className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Mail className="h-4 w-4 text-green-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.time).toLocaleDateString()}
                  </p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  activity.status === 'published' || activity.status === 'read' 
                    ? 'bg-green-100 text-green-800'
                    : activity.status === 'draft' || activity.status === 'new'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;