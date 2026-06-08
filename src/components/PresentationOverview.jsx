import React from 'react';
import { motion } from 'framer-motion';
import { Users, ListOrdered, Cpu, BookOpen, Sparkles, UserCircle, GraduationCap, UsersRound } from 'lucide-react';

const PresentationOverview = () => {
  const classInfo = {
    code: "Half1_IA1908",
    group: "Nhóm 3",
    topic: "Phạm trù Tự do và Tất yếu trong Triết học Mác – Lênin",
  };

  const members = [
    { name: "Nguyễn Hoàng Kha", id: "SE183062", role: "Trưởng nhóm" },
    { name: "Chu Phúc Minh Vượng", id: "SE180126", role: "Thành viên" },
    { name: "Nguyễn Thanh Phong", id: "SE181679", role: "Thành viên" },
    { name: "Nguyễn Đức Anh", id: "SE184588", role: "Thành viên" },
  ];

  const outline = [
    { title: "I. Đặt vấn đề: Khởi nguồn khái niệm", desc: "Bóc tách định nghĩa cơ bản của 'Tự do' và 'Tất yếu' - hai phạm trù tưởng chừng như luôn đối đầu nhau.", path: "/home#theory" },
    { title: "II. Lăng kính triết học: Các cuộc tranh luận", desc: "Cùng nhìn lại lịch sử để xem Chủ nghĩa duy tâm, duy vật siêu hình đã từng lý giải bài toán này ra sao.", path: "/home#dialectics" },
    { title: "III. Trọng tâm: Lời giải của Mác - Lênin", desc: "Phần cốt lõi nhất của bài: Làm rõ chân lý 'Tự do là sự nhận thức cái tất yếu' qua lăng kính duy vật biện chứng.", path: "/home#connections", highlight: true },
  ];

  const aiSources = [
    { name: "ChatGPT", use: "Tổng hợp khái niệm, gợi ý cấu trúc bài thuyết trình và kiểm tra logic luận điểm." },
    { name: "Claude", use: "Biên tập nội dung học thuật, làm rõ mối quan hệ biện chứng giữa Tự do và Tất yếu." },
    { name: "NotebookLLM", use: "Phân tích tài liệu giáo trình MLN111, trích dẫn và đối chiếu nguồn tham khảo." },
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
    <section id="overview" className="min-h-screen py-24 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative">
      {/* Background ambient effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ethereal-blue/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ethereal-purple/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Lớp & Nhóm — banner nổi bật */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-ethereal-blue/20 border border-ethereal-blue/20"
        >
          <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-ethereal-blue/40 px-6 py-10 md:px-12 md:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.35)_0%,_transparent_55%)]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-ethereal-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-ethereal-cyan font-bold text-xs uppercase tracking-[0.25em] mb-8">
                <Sparkles className="w-4 h-4" /> MLN111 — Triết học Mác – Lênin
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 min-w-[220px]">
                    <div className="w-14 h-14 rounded-xl bg-ethereal-blue flex items-center justify-center shadow-lg shadow-ethereal-blue/40 shrink-0">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ethereal-cyan mb-1">Lớp học</p>
                      <p className="text-2xl md:text-3xl font-black text-white tracking-tight">{classInfo.code}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-ethereal-purple/40 rounded-2xl px-6 py-5 min-w-[180px] ring-2 ring-ethereal-purple/30">
                    <div className="w-14 h-14 rounded-xl bg-ethereal-purple flex items-center justify-center shadow-lg shadow-ethereal-purple/40 shrink-0">
                      <UsersRound className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ethereal-purple/90 mb-1">Thuyết trình</p>
                      <p className="text-2xl md:text-3xl font-black text-white tracking-tight">{classInfo.group}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl lg:text-right lg:border-l lg:border-white/10 lg:pl-8">
                  {classInfo.topic}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-zinc-200 pb-8"
        >
          <div>
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
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{member.id} · {member.role}</div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {outline.map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.path}
                  whileHover={{ y: -5 }}
                  className={`block p-6 backdrop-blur-md border rounded-2xl relative group/item transition-all cursor-pointer ${
                    item.highlight
                      ? "bg-ethereal-blue/20 border-ethereal-cyan/60 ring-1 ring-ethereal-cyan/30"
                      : "bg-zinc-800/40 border-zinc-700/50 hover:border-ethereal-cyan/50"
                  }`}
                >
                  <div className="text-6xl font-black text-white/5 absolute top-2 right-4 group-hover/item:text-ethereal-cyan/10 transition-colors">
                    0{index + 1}
                  </div>
                  {item.highlight && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-ethereal-cyan mb-2 relative z-10">
                      Phần trọng tâm — {classInfo.group}
                    </span>
                  )}
                  <h4 className="text-lg font-bold mb-3 text-white group-hover/item:text-ethereal-cyan relative z-10 pr-8 transition-colors">{item.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{item.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* AI Sources - Span full width */}
          <motion.div variants={itemVariants} className="lg:col-span-12 bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 rounded-[2rem] p-8 relative overflow-hidden">
            <h3 className="text-xl font-bold flex items-center gap-3 uppercase tracking-widest text-zinc-800 mb-6">
              <Cpu className="w-6 h-6 text-ethereal-purple" /> Nguồn AI tham khảo
            </h3>
            <p className="text-sm text-zinc-500 mb-6 max-w-3xl">
              Nội dung website được biên soạn với sự hỗ trợ của các công cụ AI dưới đây. Mọi luận điểm đều được đối chiếu với giáo trình MLN111 và tư liệu chính thống.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiSources.map((src) => (
                <div
                  key={src.name}
                  className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-ethereal-purple/30 hover:bg-white transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-ethereal-purple" />
                    <span className="font-bold text-zinc-800">{src.name}</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">{src.use}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default PresentationOverview;
