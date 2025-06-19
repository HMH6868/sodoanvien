import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Download, Play, Users, BookOpen, Calendar, Bell, Star, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import Tintuc from './tintuc'; // Assuming tintuc.js exports a component named Tintuc

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
            <Link to="/tin-tuc" className="text-white hover:text-red-100 transition-colors font-medium">
              Tin tức
            </Link>
            <Link to="#" className="text-white hover:text-red-100 transition-colors font-medium">
              Thư viện số
            </Link>
            <Link to="#" className="text-white hover:text-red-100 transition-colors font-medium">
              Hướng dẫn
            </Link>
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

      {/* Main Content Area for Routing */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="px-4 py-12 md:px-8 bg-gradient-to-br from-red-500 via-red-600 to-red-700">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Tương lai của ứng dụng Số tay Đảng viên điện tử
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed text-red-100">
                      Trong thời đại công nghệ thông tin hiện nay, việc cung cấp đầy đủ, kịp thời cho cán bộ, đảng viên những
                      thông tin chính thống có ý nghĩa rất quan trọng. Nhận thức rõ điều đó, Trung tâm CNTT MobiFone, đã xây
                      dựng và đưa vào triển khai thử nghiệm "Số tay đảng viên điện tử".
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3">
                        <Download className="w-5 h-5 mr-2" />
                        Tải ứng dụng
                      </Button>

                      <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 font-semibold px-8 py-3">
                        <Play className="w-5 h-5 mr-2" />
                        Xem video
                      </Button>
                    </div>
                  </div>

                  {/* Right Content - Phone Mockups */}
                  <div className="relative">
                    <div className="flex justify-center items-center space-x-4">
                      {/* Phone mockup */}
                      <div className="relative transform rotate-12 z-10">
                        <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                            <div className="bg-red-600 text-white text-xs px-4 py-2 flex justify-between items-center">
                              <span>9:41</span>
                              <div className="flex space-x-1">
                                <div className="w-4 h-2 bg-white rounded-sm"></div>
                              </div>
                            </div>
                            <div className="p-4 space-y-4">
                              <div className="flex items-center space-x-3 bg-red-50 p-3 rounded-lg">
                                <div className="w-12 h-12 bg-red-600 rounded-full"></div>
                                <div>
                                  <div className="font-semibold text-sm">Nguyễn Văn Anh</div>
                                  <div className="text-xs text-gray-600">Đảng viên chính thức</div>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                {[
                                  { name: "Tin tức", color: "bg-red-500" },
                                  { name: "Lịch hoạt", color: "bg-yellow-500" },
                                  { name: "Văn kiện", color: "bg-blue-500" },
                                  { name: "Học tập", color: "bg-green-500" },
                                  { name: "Tư liệu", color: "bg-purple-500" },
                                  { name: "Thông tin", color: "bg-gray-500" },
                                ].map((item, index) => (
                                  <div key={index} className="text-center">
                                    <div className={`w-12 h-12 ${item.color} rounded-xl mx-auto mb-1`}></div>
                                    <div className="text-xs">{item.name}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-16 md:px-8 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ứng dụng cung cấp đầy đủ các tính năng cần thiết cho hoạt động của đảng viên
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Quản lý thông tin",
                      description: "Quản lý hồ sơ đảng viên, thông tin cá nhân và lịch sử hoạt động",
                    },
                    {
                      icon: <Calendar className="w-8 h-8" />,
                      title: "Lịch sinh hoạt",
                      description: "Theo dõi lịch sinh hoạt đảng, cuộc họp và các sự kiện quan trọng",
                    },
                    {
                      icon: <BookOpen className="w-8 h-8" />,
                      title: "Tài liệu học tập",
                      description: "Truy cập kho tài liệu, văn kiện đảng và tài liệu học tập",
                    },
                    {
                      icon: <Bell className="w-8 h-8" />,
                      title: "Thông báo",
                      description: "Nhận thông báo nhanh về các hoạt động và quyết định mới",
                    },
                  ].map((feature, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-red-600 mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="px-4 py-16 md:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tin tức mới nhất</h2>
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    Xem tất cả
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Hội nghị Trung ương 8 khóa XIII thành công tốt đẹp",
                      excerpt: "Hội nghị đã thảo luận và quyết định nhiều vấn đề quan trọng của đất nước...",
                      date: "15/11/2024",
                    },
                    {
                      title: "Triển khai ứng dụng số tay đảng viên trên toàn quốc",
                      excerpt: "Ứng dụng đã được triển khai thành công tại nhiều tỉnh thành...",
                      date: "12/11/2024",
                    },
                    {
                      title: "Nâng cao chất lượng sinh hoạt đảng trong thời đại số",
                      excerpt: "Việc ứng dụng công nghệ thông tin vào hoạt động đảng mang lại hiệu quả tích cực...",
                      date: "10/11/2024",
                    },
                  ].map((news, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="h-48 bg-gray-200"></div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{news.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                        <div className="text-sm text-gray-400">{news.date}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        } />
        <Route path="/tin-tuc" element={<Tintuc />} />
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
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/tin-tuc" className="text-gray-400 hover:text-white transition-colors">
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Thư viện số
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Hướng dẫn sử dụng
                  </Link>
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
