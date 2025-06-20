import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import ThuVienSo from './components/ThuVienSo.jsx';
import MainPage from './components/MainPage.jsx'; // Thêm dòng này
import { Card, CardContent } from './components/ui/card';
import { Star, MapPin, Mail, Phone } from 'lucide-react';
import { Routes, Route, Link } from "react-router-dom"; // Thêm dòng này

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-4 py-4 md:px-8 bg-gradient-to-r from-red-500 to-red-600">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <div className="text-white font-bold text-lg hidden md:block">Đảng viên VN</div>
          </div>
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-red-100 transition-colors font-medium">
              Trang chủ
            </Link>
            <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">
              Tin tức
            </a>
            <Link to="/thu-vien-so" className="text-white hover:text-red-100 transition-colors font-medium">
              Thư viện số
            </Link>
            <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">
              Hướng dẫn
            </a>
          </div>
          {/* Login Button */}
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-red-600 transition-colors"
          >
            Đăng nhập
          </Button>
        </nav>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thu-vien-so" element={<ThuVienSo />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="font-bold text-xl">Đảng viên VN</div>
              </div>
              <p className="text-gray-400">
                Ứng dụng số tay đảng viên điện tử, cung cấp thông tin chính thống, kịp thời cho đảng viên.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Thư viện số
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hướng dẫn sử dụng
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-red-500" />
                  <span className="text-gray-400">123 Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-500" />
                  <span className="text-gray-400">+84 123 456 789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-red-500" />
                  <span className="text-gray-400">info@dangvien.vn</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Đảng viên VN. Bản quyền thuộc về Trung tâm CNTT MobiFone.</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;