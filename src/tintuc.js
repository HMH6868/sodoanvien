import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

function Tintuc() {
  const latestNews = {
    title: "Tiêu đề tin tức nổi bật",
    excerpt: "Tóm tắt nội dung tin tức nổi bật...",
    date: "Ngày đăng, DD/MM/YYYY HH:MM",
    category: "Chuyên mục nổi bật",
  };

  const partyNews = [
    {
      category: "Doanh nghiệp Trung ương",
      title: "Hội nghị Ban Thường vụ Đảng ủy Khối Doanh nghiệp Trung ương...",
      date: "29/11/2024 09:52",
    },
    {
      category: "Chuyên mục Đảng",
      title: "Hội nghị Ban Chỉ đạo của Đảng ủy Khối về Tổng kết th...",
      date: "29/11/2024 09:50",
    },
    {
      category: "Chuyên mục Đảng",
      title: "Trao tặng Huy hiệu 45 năm tuổi Đảng cho đồng chí Trầ...",
      date: "29/11/2024 09:41",
    },
  ];

  const enterpriseNews = [
    {
      category: "Doanh nghiệp Trung ương",
      title: "Hội nghị chào mừng Đoàn cán bộ Quản lý báo chí",
      date: "29/11/2024 09:30",
    },
    {
      category: "Doanh nghiệp Trung ương",
      title: "Truyền hình trực tiếp Hội nghị đối thoại định kỳ tạo nói làm việc năm 2024",
      date: "29/11/2024 09:00",
    },
  ];

  return (
    <>
      {/* PHẦN MÀU ĐỎ */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {/* Tin tức mới nhất */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tin tức mới nhất</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-96 bg-red-700 flex items-center justify-center text-red-100">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                  </svg>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{latestNews.title}</h3>
                  <p className="text-gray-700 mb-4">{latestNews.excerpt}</p>
                  <div className="text-sm text-gray-500">{latestNews.date}</div>
                </CardContent>
              </Card>

              <div className="bg-red-700 text-white p-8 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-yellow-300 font-semibold text-lg mb-2">{latestNews.category}</div>
                  <h3 className="text-4xl font-bold mb-4">Truyền hình trực tiếp</h3>
                  <div className="text-red-100 text-sm">{latestNews.date}</div>
                </div>
                <div className="flex justify-end">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </section>

          {/* Tin tức Đảng */}
          <section className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tin tức Đảng</h2>
            <div className="relative">
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {partyNews.map((news, index) => (
                  <Card key={index} className="min-w-[280px] max-w-[300px] hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-700">
                      <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                      </svg>
                    </div>
                    <CardContent className="p-4">
                      <div className="text-yellow-600 text-sm font-semibold mb-1">{news.category}</div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900">{news.title}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{news.date}</span>
                        <Share2 className="w-4 h-4 text-gray-800" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4 z-10">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer">
                  <ChevronLeft className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4 z-10">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer">
                  <ChevronRight className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* PHẦN TÁCH RA, NỀN TRẮNG */}
      <section className="bg-white text-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tiêu đề đầu mục với sọc nghiêng */}
          <div className="flex items-center mb-5">
            <div className="bg-red-700 text-white font-bold px-4 py-2 text-sm uppercase relative z-10">
              DOANH NGHIỆP TRUNG ƯƠNG
              <div className="absolute top-0 right-[-14px] h-full w-5 bg-red-200 transform skew-x-[30deg] z-[-1]" />
            </div>
            <div className="flex-1 border-b-2 border-red-600 h-10 bg-gray-100" />
          </div>

          {/* Tin chính: ảnh nhỏ hơn, chữ vừa phải */}
          <div className="mb-4">
            <div className="rounded border overflow-hidden">
              <div className="h-[200px] bg-gray-200 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                </svg>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold leading-tight text-gray-800">
                  Hội nghị Ban Thường vụ Đảng ủy Khối Doanh nghiệp Trung ương tháng 11/2024
                </h3>
              </div>
            </div>
          </div>

          {/* Tin phụ nhỏ gọn */}
          <div className="space-y-3 border-t border-gray-300 pt-3">
            {[
              {
                title: "Hội nghị chào mừng Đoàn cán bộ Quản lý báo chí",
              },
              {
                title: "Truyền hình trực tiếp Hội nghị đối thoại định kỳ tạo nơi làm việc năm 2024",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-[56px] h-[48px] bg-gray-200 flex items-center justify-center rounded-sm shadow-sm">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                  </svg>
                </div>
                <p className="text-sm leading-snug text-gray-700 hover:text-blue-600 cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tiêu đề với sọc đỏ nghiêng */}
          <div className="flex items-center mb-5">
            <div className="bg-red-700 text-white font-bold px-4 py-2 text-sm uppercase relative z-10">
              CHUYÊN MỤC ĐẢNG
              <div className="absolute top-0 right-[-14px] h-full w-5 bg-red-200 transform skew-x-[30deg] z-[-1]" />
            </div>
            <div className="flex-1 border-b-2 border-red-600 h-10 bg-gray-100" />
          </div>

          {/* Tin chính */}
          <div className="mb-4">
            <div className="rounded border overflow-hidden">
              <div className="h-[180px] bg-gray-200 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                </svg>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold leading-tight text-gray-800">
                  Truyền hình trực tiếp
                </h3>
              </div>
            </div>
          </div>

          {/* Tin phụ */}
          <div className="space-y-3 border-t border-gray-300 pt-3">
            {[
              {
                title:
                  "Hội nghị Ban Chỉ đạo của Đảng ủy Khối về Tổng kết thực hiện Nghị quyết số 18-NQ/TW, ngày 25/10/2017 của Ban Chấp hành Trung ương khóa XII",
              },
              {
                title:
                  "Trao tặng Huy hiệu 45 năm tuổi Đảng cho đồng chí Trần Quốc Vượng",
              },
              {
                title:
                  "Củng cố hơn nữa quan hệ láng giềng tốt đẹp Việt Nam - Campuchia",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-[56px] h-[48px] bg-gray-200 flex items-center justify-center rounded-sm shadow-sm">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                  </svg>
                </div>
                <p className="text-sm leading-snug text-gray-700 hover:text-blue-600 cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tintuc;
