import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

function Tintuc() {
  // Placeholder data for news items
  const latestNews = {
    title: "Tiêu đề tin tức nổi bật",
    excerpt: "Tóm tắt nội dung tin tức nổi bật...",
    date: "Ngày đăng, DD/MM/YYYY HH:MM",
  };

  const partyNews = [
    {
      category: "Chuyên mục Đảng",
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
    // Add more placeholder news items if needed to match the layout
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
    // Add more placeholder news items if needed
  ];

  return (
    <div className="bg-red-600 text-white"> {/* Changed background and removed padding/min-height */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8"> {/* Added vertical padding back for content spacing */}
        {/* Latest News Section */}
        <section className=""> {/* Removed mb-12 */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tin tức mới nhất</h2> {/* Changed text color and removed mb-6 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured News Card */}
            <Card className="overflow-hidden">
              <div className="h-96 bg-red-700 flex items-center justify-center text-red-100"> {/* Changed placeholder background and text color */}
                {/* Placeholder Image */}
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                </svg>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{latestNews.title}</h3> {/* Changed text color back for readability on white card */}
                <p className="text-gray-700 mb-4">{latestNews.excerpt}</p> {/* Changed text color back for readability on white card */}
                <div className="text-sm text-gray-500">{latestNews.date}</div> {/* Changed text color back for readability on white card */}
              </CardContent>
            </Card>

            {/* Live Broadcast Section */}
            <div className="bg-red-700 text-white p-8 rounded-lg flex flex-col justify-between"> {/* Darkened background slightly */}
              <div>
                <div className="text-yellow-300 font-semibold text-lg mb-2">{latestNews.category}</div>
                <h3 className="text-4xl font-bold mb-4">Truyền hình trực tiếp</h3>
                <div className="text-red-100 text-sm">{latestNews.date}</div>
              </div>
              <div className="flex justify-end">
                 <Share2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div> {/* Closing div for grid layout */}
        </section> {/* Closing section tag */}

        {/* Party News Section */}
        <section className="mt-8"> {/* Added margin top to separate sections */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tin tức Đảng</h2> {/* Added title */}
          <div className="relative"> {/* This div will be the positioning context for arrows */}
            <div className="flex space-x-6 overflow-x-auto pb-4"> {/* This div contains the partyNews cards */}
              {partyNews.map((news, index) => (
                <Card key={index} className="min-w-[280px] max-w-[300px] hover:shadow-lg transition-shadow cursor-pointer">
                   <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-700">
                     {/* Placeholder Image */}
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
            </div> {/* Closing div for flex space-x-6 */}
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4 z-10"> {/* Left arrow div, positioned relative to its new parent */}
              <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer">
                <ChevronLeft className="w-6 h-6 text-red-600" />
              </div>
            </div> {/* Closing div for left arrow */}
            {/* Placeholder for Right Arrow */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4 z-10"> {/* Right arrow div, positioned relative to its new parent */}
              <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer">
                <ChevronRight className="w-6 h-6 text-red-600" />
              </div>
            </div> {/* Closing div for right arrow */}
          </div> {/* Closing div for relative positioning */}
        </section> {/* Closing section tag */}

        {/* Enterprise News Section */}
        <section className="mt-8"> {/* Added margin top to separate sections */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Doanh nghiệp Trung ương</h2> {/* Added title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Changed to grid layout */}
              {enterpriseNews.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer text-gray-900"> {/* Removed min/max width, added text color */}
                   <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-700">
                     {/* Placeholder Image */}
                     <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M4 4h16v16H4V4zm14 14V6l-2.5 2.5L13 6l-3 3-3.5-3.5L6 7V6H5v12h13zM6 18v-1.5l3-3 3.5 3.5L16 13l2.5 2.5V18H6z" />
                     </svg>
                   </div>
                   <CardContent className="p-4">
                     <div className="text-yellow-600 text-sm font-semibold mb-1">{news.category}</div>
                     <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3> {/* Removed text-gray-900 */}
                     <div className="flex justify-between items-center text-sm text-gray-500">
                       <span>{news.date}</span>
                       <Share2 className="w-4 h-4 text-gray-800" />
                     </div>
                   </CardContent>
                </Card>
              ))}
            </div> {/* Closing div for grid layout */}
         </section>
       </div>
     </div>
  );
}


export default Tintuc;
