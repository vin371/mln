import React from 'react';
import { motion } from 'framer-motion';
import { Users, ListOrdered, Cpu, MessageSquare, Book, GitBranch, Sparkles, UserCircle } from 'lucide-react';

const PresentationOverview = () => {
  const members = [
    { name: "Nguyễn Hoàng Kha", id: "SE183062", role: "Trưởng nhóm" },
    { name: "Chu Phúc Minh Vượng", id: "SE180126", role: "Thành viên" },
    { name: "Nguyễn Thanh Phong", id: "SE181679", role: "Thành viên" },
    { name: "Nguyễn Đức Anh", id: "SE184588", role: "Thành viên" },
  ];

  const outline = [
    { title: "I. Đặt vấn đề: Khởi nguồn khái niệm", desc: "Bóc tách định nghĩa cơ bản của 'Tự do' và 'Tất yếu' - hai phạm trù tưởng chừng như luôn đối đầu nhau.", path: "/home#theory" },
    { title: "II. Lăng kính triết học: Các cuộc tranh luận", desc: "Cùng nhìn lại lịch sử để xem Chủ nghĩa duy tâm, duy vật siêu hình đã từng lý giải bài toán này ra sao.", path: "/home#dialectics" },
    { title: "III. Trọng tâm: Lời giải của Mác - Lênin", desc: "Phần cốt lõi nhất của bài: Làm rõ chân lý 'Tự do là sự nhận thức cái tất yếu' qua lăng kính duy vật biện chứng.", path: "/home#connections" },
    { title: "IV. Từ lý luận đến thực tiễn: Lời kết", desc: "Đúc kết bài học: Chúng ta phải hành động thế nào để vừa tôn trọng quy luật khách quan, vừa làm chủ cuộc sống?", path: "/home#cases" },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="overview" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ethereal-blue/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ethereal-purple/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-zinc-200 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ethereal-blue/10 border border-ethereal-blue/20 text-ethereal-blue font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" /> Môn học: Triết học Mác – Lênin
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 leading-tight">
              Tổng quan <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ethereal-blue to-ethereal-purple">Thuyết trình</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Giảng viên hướng dẫn</p>
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-ethereal-blue/10 flex items-center justify-center text-ethereal-blue">
                <UserCircle className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-zinc-800">
                Hoàng Thắng
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Team Members - Span 4 */}
          <motion.div variants={itemVariants} className="lg:col-span-4 bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users className="w-48 h-48 text-ethereal-blue translate-x-12 -translate-y-12" />
            </div>
            <h3 className="text-xl font-bold flex items-center gap-3 uppercase tracking-widest text-zinc-800 mb-8 relative z-10">
              <Users className="w-6 h-6 text-ethereal-blue" /> Đội ngũ
            </h3>
            <div className="space-y-3 flex-1 flex flex-col justify-center relative z-10">
              {members.map((member, i) => (
                <div 
                  key={member.id}
                  className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-ethereal-blue/30 hover:bg-white transition-all flex items-center gap-4 group/card shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover/card:text-ethereal-blue group-hover/card:border-ethereal-blue/30 transition-colors">
                    <UserCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-800 group-hover/card:text-ethereal-blue transition-colors">{member.name}</div>
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{member.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Outline - Span 8 */}
          <motion.div variants={itemVariants} className="lg:col-span-8 bg-zinc-900 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            {/* Dark glass effect inside */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ethereal-blue/20 via-zinc-900 to-zinc-900" />
            
            <h3 className="text-xl font-bold flex items-center gap-3 uppercase tracking-widest text-white mb-10 relative z-10">
              <ListOrdered className="w-6 h-6 text-ethereal-cyan" /> Nội dung chính
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {outline.map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.path}
                  whileHover={{ y: -5 }}
                  className="block p-6 bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 hover:border-ethereal-cyan/50 rounded-2xl relative group/item transition-all cursor-pointer"
                >
                  <div className="text-6xl font-black text-white/5 absolute top-2 right-4 group-hover/item:text-ethereal-cyan/10 transition-colors">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white group-hover/item:text-ethereal-cyan relative z-10 pr-8 transition-colors">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{item.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
};

export default PresentationOverview;
