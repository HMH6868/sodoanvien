import React from 'react';
import { Card, CardContent } from './ui/card';  



function ThuVienSo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Thư viện số</h1>
      <div className="flex gap-8">
        {/* Sidebar bên trái */}
        <div className="w-1/4 space-y-6">
          {/* Menu thư mục */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-bold text-white bg-red-600 rounded p-2 mb-3 flex items-center">
              <span className="mr-2">▶</span> TÀI NGUYÊN THƯ VIỆN SỐ
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                <span> Thư viện chung</span>
                <span className="text-red-600 font-bold">(723)</span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                <span> Tài liệu hướng dẫn chung</span>
                <span className="text-red-600 font-bold">(0)</span>
              </li>
              {/* ...thêm các mục khác tương tự... */}
            </ul>
          </div>
          {/* Tài liệu nổi bật */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="font-bold text-white bg-red-600 rounded p-2 mb-3 flex items-center">
              <span className="mr-2">●</span> TÀI LIỆU NỔI BẬT
            </div>
            <ul className="space-y-2">
              <li className="text-red-600 text-sm">Lý lịch đảng viên (Mẫu 1-HSDV)</li>
              <li className="text-red-600 text-sm">Sổ danh sách Đảng viên (Mẫu 7-HSDV)</li>
              <li className="text-red-600 text-sm">Phiếu báo Đảng viên ra khỏi Đảng (Mẫu 5-HSDV)</li>
              {/* ... */}
            </ul>
          </div>
        </div>
        {/* Nội dung bên phải */}
        <div className="flex-1">
          {/* Thanh tìm kiếm */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          {/* Danh sách tài liệu */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-xl">Tài liệu chung</h2>
              <a href="#" className="text-red-600 font-medium flex items-center hover:underline">
                Xem thêm <span className="ml-1">→</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Communist_hammer_and_sickle.svg/1200px-Communist_hammer_and_sickle.svg.png"
                    alt="Tài liệu"
                    className="w-24 h-32 object-cover rounded mb-2 bg-red-200"
                  />
                  <div className="font-semibold text-center">Kế hoạch 294{i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThuVienSo;