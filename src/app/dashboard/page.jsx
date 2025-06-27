'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemList);
    };
    fetchItems();
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const openModal = (item = null) => {
    setIsEditing(!!item);
    setModalItem(item || { name: '', price: '', description: '', image: '', discount: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
    setIsEditing(false);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalItem({ ...modalItem, [name]: value });
  };

  const handleSave = async () => {
    if (!modalItem.name || !modalItem.price || !modalItem.image.startsWith('http')) return;

    const itemData = {
      name: modalItem.name,
      price: parseFloat(modalItem.price),
      description: modalItem.description,
      image: modalItem.image,
      discount: parseFloat(modalItem.discount) || 0
    };

    if (isEditing) {
      const itemRef = doc(db, 'items', modalItem.id);
      await updateDoc(itemRef, itemData);
      setItems(items.map(i => i.id === modalItem.id ? { id: modalItem.id, ...itemData } : i));
    } else {
      const docRef = await addDoc(collection(db, 'items'), itemData);
      setItems([...items, { id: docRef.id, ...itemData }]);
    }

    closeModal();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'items', id));
    setItems(items.filter(item => item.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-3xl mb-4">Admin Login</h1>
        <button className="px-4 py-2 bg-blue-600 rounded text-white" onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleLogout}>Logout</button>
      </div>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Item</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => openModal()}>Add New Item</button>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <div className="mb-2">
              <p className="text-lg font-medium">{item.name} - ₹{item.price}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">Discount: {item.discount}%</p>
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mt-2 border border-red-500"
                onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
              />
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-yellow-400 rounded" onClick={() => openModal(item)}>Edit</button>
              <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
            <div className="flex flex-col gap-3">
              <input type="text" name="name" placeholder="Item Name" className="border px-2 py-1 rounded" value={modalItem.name} onChange={handleModalChange} />
              <input type="number" name="price" placeholder="Price" className="border px-2 py-1 rounded" value={modalItem.price} onChange={handleModalChange} />
              <input type="text" name="description" placeholder="Description" className="border px-2 py-1 rounded" value={modalItem.description} onChange={handleModalChange} />
              <input type="number" name="discount" placeholder="Discount (%)" className="border px-2 py-1 rounded" value={modalItem.discount} onChange={handleModalChange} />
              <input type="text" name="image" placeholder="Image URL (https://...)" className="border px-2 py-1 rounded" value={modalItem.image} onChange={handleModalChange} />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={closeModal}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
