"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const router = useRouter();

  // Demo user state
  const [user, setUser] = useState({
    name: 'User',
    email: 'User@example.com',
    memberSince: 'Date',
  });

  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editEmail, setEditEmail] = useState(user.email);

  const handleLogout = () => {
    // Clear user session or token here if implemented
    router.push('/signin-signup');
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser({ ...user, name: editName, email: editEmail });
    setEditing(false);
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {user.name}
            </h1>
            <p className="text-gray-500 text-sm">Member since {user.memberSince}</p>
          </div>
          {!editing ? (
            <button
              className="mt-4 sm:mt-0 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
          ) : null}
        </div>

        {/* Edit Profile Modal */}
        {editing && (
          <form
            onSubmit={handleSaveProfile}
            className="mb-8 bg-gray-50 border rounded p-6 max-w-md mx-auto"
          >
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                value={editEmail}
                onChange={e => setEditEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Account Details */}
          <div className="bg-gray-50 p-4 rounded border">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Account Information</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> ••••••••••</p>
            <button className="text-sm text-orange-500 hover:underline mt-2">Change Password</button>
          </div>

          {/* Shipping Address */}
          <div className="bg-gray-50 p-4 rounded border">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Shipping Address</h2>
            <p>123 Creative Lane, Bengaluru, IN</p>
            <p>560001</p>
            <button className="text-sm text-orange-500 hover:underline mt-2">Edit Address</button>
          </div>

          {/* Order History */}
          <div className="bg-gray-50 p-4 rounded border">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Orders</h2>
            <ul className="text-sm space-y-2">
              <li>Order #12456 – <span className="text-green-600">Delivered</span></li>
              <li>Order #12399 – <span className="text-yellow-600">Processing</span></li>
              <li>Order #12213 – <span className="text-red-600">Cancelled</span></li>
            </ul>
            <button className="text-sm text-orange-500 hover:underline mt-2">View All Orders</button>
          </div>

          {/* Saved Designs */}
          <div className="bg-gray-50 p-4 rounded border">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Saved Designs</h2>
            <ul className="text-sm space-y-2">
              <li>“Eco Label Template”</li>
              <li>“T-shirt - Summer Campaign”</li>
              <li>“Thank You Cards - v2”</li>
            </ul>
            <button className="text-sm text-orange-500 hover:underline mt-2">Manage Designs</button>
          </div>
        </div>

        {/* Newsletter Settings */}
        <div className="mt-8 bg-gray-50 p-4 rounded border">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Email Preferences</h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" defaultChecked />
            <span>Subscribe to Printo's offers and updates</span>
          </label>
        </div>

        {/* Logout */}
        <div className="mt-10 text-center">
          <button
            className="text-red-500 hover:underline text-sm"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
