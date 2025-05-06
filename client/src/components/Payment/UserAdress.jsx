import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAppStore from '../../store/AppStore';

const DATA_URL = 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json';

// DropdownList component สำหรับ province, district, sub-district
const DropdownList = ({
  label,
  id,
  list,
  value,
  onChange,
  disabled
}) => (
  <>
    <label className="block mb-1 font-medium" htmlFor={id}>{label}</label>
    <select
      className="w-full mb-2 p-2 border rounded"
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
    >
      <option value="">เลือก{label}</option>
      {list && list.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </select>
  </>
);

const UserAdress = () => {
  const user = useAppStore((state) => state.user);
  const updateUserAddress = useAppStore((state) => state.actionUpdateUser);
  const token = useAppStore((state) => state.token);
  const [address, setAddress] = useState(null); // หรือ mockUserAddress
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    fullName: '', phone: '', address: '', province: '', province_id: '', district: '', district_id: '', subDistrict: '', subDistrict_id: '', postcode: ''
  });
  const [allData, setAllData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);

  useEffect(() => {
    axios.get(DATA_URL).then(res => {
      setAllData(res.data);
      setProvinces(res.data.map(p => ({ id: p.id, name: p.name_th, amphure: p.amphure })));
    });
  }, []);

  // โหลด address จาก user (ถ้ามี)
  useEffect(() => {
    
    if (user && user.address) {
      try {
        setAddress(JSON.parse(user.address));
        
      } catch {
        setAddress(null);
      }
    } else {
      setAddress(null);
    }
  }, [user]);

  // เมื่อเลือกจังหวัด
  const handleProvince = (e) => {
    const province_id = e.target.value;
    const province = provinces.find(p => p.id === parseInt(province_id));
    setForm({ ...form, province: province?.name || '', province_id, district: '', district_id: '', subDistrict: '', subDistrict_id: '', postcode: '' });
    setDistricts(province ? province.amphure.map(a => ({ id: a.id, name: a.name_th, tambon: a.tambon })) : []);
    setSubDistricts([]);
  };
  // เมื่อเลือกอำเภอ
  const handleDistrict = (e) => {
    const district_id = e.target.value;
    const district = districts.find(d => d.id === parseInt(district_id));
    setForm({ ...form, district: district?.name || '', district_id, subDistrict: '', subDistrict_id: '', postcode: '' });
    setSubDistricts(district ? district.tambon.map(t => ({ id: t.id, name: t.name_th, zip_code: t.zip_code })) : []);
  };
  // เมื่อเลือกตำบล
  const handleSubDistrict = (e) => {
    const subDistrict_id = e.target.value;
    const subDistrict = subDistricts.find(s => s.id === parseInt(subDistrict_id));
    setForm({ ...form, subDistrict: subDistrict?.name || '', subDistrict_id, postcode: subDistrict?.zip_code || '' });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddress(form);
    setShowForm(false);
    
    if (user && token) {
      await updateUserAddress(user.id, { address: JSON.stringify(form) }, token);
    }
  };

  // handle edit
  const handleEdit = () => {
    setForm({ ...address });
    // set districts/subDistricts ตาม address เดิม
    const province = provinces.find(p => p.name === address.province);
    setDistricts(province ? province.amphure.map(a => ({ id: a.id, name: a.name_th, tambon: a.tambon })) : []);
    const district = province?.amphure.find(d => d.name_th === address.district);
    setSubDistricts(district ? district.tambon.map(t => ({ id: t.id, name: t.name_th, zip_code: t.zip_code })) : []);
    setShowForm(true);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">ที่อยู่สำหรับจัดส่ง</h2>
        {address ? (
          <button className="px-4 py-1 bg-blue-500 text-white rounded" onClick={handleEdit}>แก้ไข</button>
        ) : (
          <button className="px-4 py-1 bg-green-500 text-white rounded" onClick={() => setShowForm(true)}>+ เพิ่มที่อยู่</button>
        )}
      </div>
      {address && (
        <div className="mb-4">
          <div className="mb-1 font-semibold">{address.fullName} ({address.phone})</div>
          <div className="text-sm text-gray-700">{address.address} {address.subDistrict} {address.district} {address.province} {address.postcode}</div>
        </div>
      )}
      {/* Popup ฟอร์มที่อยู่ */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowForm(false)} />
          <form className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10" onSubmit={handleSubmit}>
            <h3 className="font-bold mb-4">{address ? 'แก้ไขที่อยู่' : 'เพิ่มที่อยู่'}</h3>
            <input className="w-full mb-2 p-2 border rounded" placeholder="ชื่อ-นามสกุล" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} required />
            <input className="w-full mb-2 p-2 border rounded" placeholder="เบอร์โทรศัพท์" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
            <input className="w-full mb-2 p-2 border rounded" placeholder="บ้านเลขที่/หมู่/ซอย/ถนน" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required />
            <DropdownList
              label="จังหวัด"
              id="province_id"
              list={provinces}
              value={form.province_id}
              onChange={handleProvince}
            />
            <DropdownList
              label="อำเภอ/เขต"
              id="district_id"
              list={districts}
              value={form.district_id}
              onChange={handleDistrict}
              disabled={!form.province_id}
            />
            <DropdownList
              label="ตำบล/แขวง"
              id="subDistrict_id"
              list={subDistricts}
              value={form.subDistrict_id}
              onChange={handleSubDistrict}
              disabled={!form.district_id}
            />
            <input className="w-full mb-2 p-2 border rounded" placeholder="รหัสไปรษณีย์" value={form.postcode} onChange={e => setForm({ ...form, postcode: e.target.value })} required />
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-green-600 text-white py-2 rounded" type="submit">บันทึก</button>
              <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded" type="button" onClick={() => setShowForm(false)}>ยกเลิก</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserAdress;
