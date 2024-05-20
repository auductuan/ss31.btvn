import React, { useState } from 'react';
import './Modal.css';
export default function EditModal() {
    const EditModal = ({ onClose, onConfirm, todo }) => {
        const [name, setName] = useState(todo.name);
      
        const handleConfirm = () => {
          onConfirm({ ...todo, name });
        };
      
  return (
    <div>
      <div className="form">
      <div className="text-1">
        <b>Chỉnh sửa</b>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button onClick={onClose}>Hủy</button>
        <button onClick={handleConfirm}>Lưu</button>
      </div>
    </div>
    </div>
  )
}
}
