import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import useAppStoreAdmin from '../../store/AppStoreAdmin';
import useAppStore from '../../store/AppStore';

const initialForm = {
  name: '',
  size: '',
  description: '',
  condition: '',
  starting_price: '',
  min_bid_price: '',
  category_id: '',
  status: true,
  start_date: '',
  end_date: '',
};

const ManageProducts = () => {
  const products = useAppStoreAdmin((state) => state.products) || [];
  const categories = useAppStoreAdmin((state) => state.categories) || [];
  const token = useAppStore((state) => state.token);
  const actionGetAllProductsAdmin = useAppStoreAdmin((state) => state.actionGetAllProductsAdmin);
  const actionGetAllCategories = useAppStoreAdmin((state) => state.actionGetAllCategories);
  const actionCreateProduct = useAppStoreAdmin((state) => state.actionCreateProduct);
  const actionUpdateProduct = useAppStoreAdmin((state) => state.actionUpdateProduct);
  const actionDeleteProduct = useAppStoreAdmin((state) => state.actionDeleteProduct);
  const actionAddProductImage = useAppStoreAdmin((state) => state.actionAddProductImage);
  const actionDeleteProductImage = useAppStoreAdmin((state) => state.actionDeleteProductImage);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [images, setImages] = useState([]); // สำหรับไฟล์ใหม่
  const [previewImages, setPreviewImages] = useState([]); // สำหรับ preview
  const [existingImages, setExistingImages] = useState([]); // สำหรับแก้ไขสินค้า

  useEffect(() => {
    actionGetAllProductsAdmin(token);
    actionGetAllCategories();
  }, [token, actionGetAllProductsAdmin, actionGetAllCategories]);

  const openAdd = () => {
    setForm(initialForm);
    setEditId(null);
    setShowForm(true);
    setImages([]);
    setPreviewImages([]);
    setExistingImages([]);
  };

  const openEdit = (product) => {
    setForm({
      name: product.name,
      size: product.size,
      description: product.description,
      condition: product.condition,
      starting_price: product.starting_price,
      min_bid_price: product.min_bid_price,
      category_id: product.category_id,
      status: product.status,
      start_date: product.start_date ? product.start_date.slice(0, 16) : '',
      end_date: product.end_date ? product.end_date.slice(0, 16) : '',
    });
    setEditId(product.id);
    setShowForm(true);
    setImages([]);
    setPreviewImages([]);
    setExistingImages(product.images || []);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map(file => URL.createObjectURL(file)));
  };

  const handleDeleteImage = async (productId) => {
    if (window.confirm('Delete all images for this product?')) {
      await actionDeleteProductImage(productId, token);
      setExistingImages([]);
      toast.success('All images deleted successfully');
    }
  };

  const handleDelete = async (product) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await actionDeleteProductImage(product.id, token); // Delete related images
      await actionDeleteProduct(product.id, token);
      setExistingImages([]);
      toast.success('Product deleted successfully');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category_id || !form.starting_price || !form.min_bid_price || !form.start_date || !form.end_date) {
      toast.error('Please fill in all required fields');
      return;
    }
    let productId = editId;
    if (editId) {
      await actionUpdateProduct(editId, form, token);
      toast.success('Product updated successfully');
    } else {
      const res = await actionCreateProduct(form, token);
      productId = res.data.id; // รองรับทั้งแบบส่ง id ตรง/ใน product
      toast.success('Product created successfully');
    }
    // อัปโหลดรูป (ถ้ามี)
    if (images.length > 0 && productId) {
      const readerPromises = images.map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = e => resolve(e.target.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
      const base64Images = await Promise.all(readerPromises);
      await actionAddProductImage(productId, { FileImage: base64Images }, token); 
      toast.success('Images uploaded successfully');
    }
    setShowForm(false);
    setEditId(null);
    setForm(initialForm);
    setImages([]);
    setPreviewImages([]);
    setExistingImages([]);
  };

  return (
    <div className="max-w-full mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Products</h2>
      <button className="mb-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={openAdd}>+ Add Product</button>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-700">
              <th className="py-3 px-4 text-left font-semibold">ID</th>
              <th className="py-3 px-4 text-left font-semibold">Product Name</th>
              <th className="py-3 px-4 text-left font-semibold">Category</th>
              <th className="py-3 px-4 text-center font-semibold">Starting Price</th>
              <th className="py-3 px-4 text-center font-semibold">Status</th>
              <th className="py-3 px-4 text-center font-semibold">Start Date</th>
              <th className="py-3 px-4 text-center font-semibold">End Date</th>
              <th className="py-3 px-4 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product.id} className="hover:bg-blue-50 transition">
                <td className="py-2 px-4">{idx + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category?.name || '-'}</td>
                <td className="py-2 px-4 text-center">{product.starting_price?.toLocaleString()} THB</td>
                <td className="py-2 px-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${product.status ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                    {product.status ? 'Open' : 'Closed'}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">{product.start_date ? new Date(product.start_date).toLocaleString('en-US') : '-'}</td>
                <td className="py-2 px-4 text-center">{product.end_date ? new Date(product.end_date).toLocaleString('en-US') : '-'}</td>
                <td className="py-2 px-4 text-center">
                  <div className="flex gap-2 justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                      onClick={() => openEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs shadow transition"
                      onClick={() => handleDelete(product)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
          <form className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-10" onSubmit={handleSubmit}>
            <h3 className="font-bold mb-4">{editId ? 'Edit Product' : 'Add Product'}</h3>
            <input className="w-full mb-2 p-2 border rounded" placeholder="Product Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input className="w-full mb-2 p-2 border rounded" placeholder="Size" value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} />
            <textarea className="w-full mb-2 p-2 border rounded" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <input className="w-full mb-2 p-2 border rounded" placeholder="Condition (%)" type="number" min={0} max={100} value={form.condition} onChange={e => setForm({ ...form, condition: e.target.value })} />
            <input className="w-full mb-2 p-2 border rounded" placeholder="Starting Price" type="number" value={form.starting_price} onChange={e => setForm({ ...form, starting_price: e.target.value })} required />
            <input className="w-full mb-2 p-2 border rounded" placeholder="Minimum Bid Price" type="number" value={form.min_bid_price} onChange={e => setForm({ ...form, min_bid_price: e.target.value })} required />
            <select className="w-full mb-2 p-2 border rounded" value={form.category_id} onChange={e => setForm({ ...form, category_id: e.target.value })} required>
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <div className="flex gap-2 mb-2">
              <select
                className="w-full p-2 border rounded"
                value={form.status ? 'true' : 'false'}
                onChange={e => setForm({ ...form, status: e.target.value === 'true' })}
                required> 
                <option value="">Select Status</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flex gap-2 mb-2">
              <input className="flex-1 p-2 border rounded" type="datetime-local" value={form.start_date} onChange={e => setForm({ ...form, start_date: e.target.value })} required />
              <input className="flex-1 p-2 border rounded" type="datetime-local" value={form.end_date} onChange={e => setForm({ ...form, end_date: e.target.value })} required />
            </div>
            {/* Upload Images */}
            <div className="mb-2">
              <label className="block mb-1 font-medium">Upload Product Images (multiple allowed)</label>
              <label
                htmlFor="product-images"
                className="inline-block bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mb-4"
              >
                Choose Images
              </label>
              <input
                id="product-images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              {/* Preview new images */}
              {previewImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {previewImages.map((src, idx) => (
                    <img key={idx} src={src} alt="preview" className="w-16 h-16 object-cover rounded" />
                  ))}
                </div>
              )}
              {/* Preview existing images (edit mode only) */}
              {editId && existingImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {existingImages.map((img, idx) => (
                    <img key={idx} src={img.url} alt="old" className="w-16 h-16 object-cover rounded border-2 border-blue-300" />
                  ))}
                  <button type="button" className="ml-2 text-xs text-red-500 underline" onClick={() => handleDeleteImage(editId)}>Delete All Images</button>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded" type="submit">Confirm</button>
              <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded" type="button" onClick={() => {
                setShowForm(false);
                setEditId(null);
                setForm(initialForm);
                setImages([]);
                setPreviewImages([]);
                setExistingImages([]);
              }}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;