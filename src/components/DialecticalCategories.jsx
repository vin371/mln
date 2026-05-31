import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, BookOpen, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: "Chủ nghĩa Duy vật Siêu hình",
    desc: "Thuyết Định Mệnh: Mọi sự vật đều bị ràng buộc bởi chuỗi nhân quả tất yếu cứng nhắc, hoàn toàn phủ nhận sự tồn tại của tự do.",
    images: ["/image/1.png"],
    definition: [
      "Vạn vật trong vũ trụ, bao gồm cả hành động của con người, đều bị ràng buộc chặt chẽ bởi các quy luật tự nhiên theo một chuỗi nhân quả không thể né tránh.",
      "Ảo giác về sự tự do xuất hiện chẳng qua là do chúng ta chưa nhận thức được những nguyên nhân sâu xa đang điều khiển hành động của chính mình.",
      "Tương tự như việc một con chim lầm tưởng mình tự do sải cánh, trong khi thực tế nó hoàn toàn tuân theo bản năng sinh tồn và định luật khí động học."
    ],
    relationship: [
      "Điểm sáng: Thừa nhận sự tồn tại khách quan của các quy luật tất yếu, giáng đòn mạnh mẽ vào các tư tưởng thần học hay duy tâm về một ý chí tự do siêu nhiên.",
      "Hạn chế: Triệt tiêu hoàn toàn sự tự do của con người, biến nhân loại thành những cỗ máy thụ động không có ý chí hay trách nhiệm. Điều này dễ dẫn đến lối sống bi quan, buông xuôi trước số phận đã được an bài."
    ],
    lessons: [
      "Paul Holbach (1723–1789)",
      "Julien Offray de La Mettrie (1709–1751)",
      "Pierre-Simon Laplace (1749–1827) – với khái niệm (con quỷ Laplace)"
    ]
  },
  {
    title: "Chủ nghĩa Duy tâm Khách quan",
    desc: "Triết học Hegel: Lần đầu tiên thống nhất được tự do và tất yếu, nhưng lại gán sự thống nhất đó vào 'Tinh thần tuyệt đối' thần bí.",
    images: ["/image/2.png"],
    definition: [
      "Tất yếu được hiểu là sự vận động mang tính quy luật của 'Tinh thần tuyệt đối' xuyên suốt chiều dài lịch sử.",
      "Tự do không đồng nghĩa với sự tùy tiện chủ quan, mà là quá trình con người nhận thức và hành động phù hợp với dòng chảy tất yếu của lịch sử.",
      "Tư tưởng cốt lõi của Hegel được đúc kết qua câu nói: “Tự do chính là cái tất yếu đã được nhận thức”.",
      "Sự tự do thực sự chỉ nở rộ ở đỉnh cao của sự phát triển tinh thần, biểu hiện qua nhà nước pháp quyền, nghệ thuật, tôn giáo và triết học."
    ],
    relationship: [
      "Điểm sáng: Đã có công lớn trong việc xóa bỏ sự đối lập siêu hình, lần đầu tiên gắn kết tự do và tất yếu thành một thể thống nhất biện chứng. Đây là tiền đề tư tưởng quan trọng cho triết học Mác sau này.",
      "Hạn chế: Mang nặng tính thần bí và duy tâm khi cho rằng tất yếu bắt nguồn từ 'Tinh thần tuyệt đối' chứ không phải thực tại vật chất. Sự tự do bị quy gọn thành việc tuân phục tinh thần chung, hạ thấp vai trò thực tiễn và khả năng cải tạo thế giới của con người."
    ],
    lessons: [
      "Georg Wilhelm Friedrich Hegel (1770–1831)"
      ]
  },
  {
    title: "Chủ nghĩa Duy tâm Chủ quan",
    desc: "Triết học Hiện sinh: Đề cao tột độ cái tôi cá nhân, cho rằng 'Con người bị kết án là phải tự do', từ chối mọi quy luật khách quan.",
    images: ["/image/3.png"],
    definition: [
       "Theo Sartre, 'Con người bị kết án là phải tự do', một sự tự do tuyệt đối ngay từ khi tồn tại.",
       "Con người không bị đóng khung bởi bất kỳ bản chất định sẵn hay quy luật khách quan nào, từ tự nhiên, xã hội cho đến thần linh.",
       "Mọi giới hạn hay sự tất yếu (nếu có) đều do tự thân con người tạo ra và hoàn toàn có thể bị phá bỏ theo ý chí cá nhân.",
       "Chính vì hành động hoàn toàn do tự do định đoạt, con người phải gánh chịu trách nhiệm tuyệt đối cho mọi lựa chọn của mình."
    ],
    relationship: [
      "Điểm sáng: Đề cao tột độ tính năng động, sức sáng tạo và tinh thần trách nhiệm của cái tôi cá nhân, đập tan lối tư duy định mệnh và chủ nghĩa duy vật máy móc.",
      "Hạn chế: Đẩy sự tự do lên mức cực đoan, chối bỏ mọi quy luật khách quan của tự nhiên và xã hội. Điều này dẫn đến những bế tắc phi lý trong việc giải thích hiện thực, đồng thời gây ra nguy cơ khủng hoảng đạo đức khi mọi hành vi (kể cả cái ác) đều có thể được viện cớ là sự lựa chọn tự do."
    ],
    lessons: [
      "Jean-Paul Sartre (1905–1980)",
      "Albert Camus (1913–1960) (một phần)"
    ]
  },
  {
    title: "Quan điểm Thần học & Tôn giáo",
    desc: "Sự tất yếu là 'ý Chúa' hoặc 'thiên mệnh'. Tự do của con người chỉ là quyền lựa chọn nhỏ bé nằm trong giới hạn đã được an bài.",
    images: ["/image/4.png"],
    definition: [
       "Sự tất yếu ở đây chính là sự an bài của Đấng tối cao (thiên mệnh, ý Chúa).",
       "Tự do chỉ đơn thuần là quyền lựa chọn của con người nằm trong giới hạn mà thần linh đã vạch sẵn.",
        "Dù con người được ban cho 'ý chí tự do' để hành động, nhưng đích đến và kết cục cuối cùng vẫn do Đấng sáng tạo nắm giữ.",
        "Khoảng trống giữa sự định đoạt của Chúa và quyền tự quyết của con người luôn là một mầu nhiệm thiêng liêng, đòi hỏi sự chấp nhận vô điều kiện bằng đức tin."
    ],
    relationship: [
      "Điểm sáng: Lý giải được khát vọng tự do ý chí gắn liền với trách nhiệm đạo đức cá nhân, để lại dấu ấn vô cùng sâu đậm trong tiến trình phát triển của văn minh phương Tây.",
      "Hạn chế: Thiếu cơ sở khoa học, nhuốm màu duy tâm và thần bí. Việc phải dùng đến 'đức tin' để khỏa lấp mâu thuẫn giữa tiền định và tự do cho thấy sự bất lực về mặt logic, hoàn toàn không thể kiểm chứng qua lăng kính thực tiễn."
    ],
    lessons: [
      "Thánh Augustine (354–430)",
      "Thomas Aquinas (1225–1274)",
      "Phật giáo: Có yếu tố thần học nhưng không hoàn toàn tương đồng với quan điểm thần học phương Tây."
    ]
  }
];

const DialecticalCategories = () => {
  const [selected, setSelected] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const getDefinitionItems = (definition) => {
    if (!definition) return [];
    if (Array.isArray(definition)) return definition;
    if (typeof definition === 'object') return Object.values(definition);
    return [definition];
  };

  const handleOpen = (item) => {
    setSelected(item);
    setImgIdx(0);
  };

  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-ethereal-blue mb-6 uppercase tracking-tighter italic">
            CÁC QUAN ĐIỂM TRIẾT HỌC TRƯỚC MÁC VỀ TỰ DO VÀ TẤT YẾU
          </h2>
          <div className="h-2 w-24 bg-ethereal-cyan mx-auto mb-8 rounded-full" />
          <p className="text-lg text-zinc-500 max-w-3xl mx-auto font-medium">
            Trước khi triết học Mác – Lênin xuất hiện, đã có nhiều trường phái triết học bàn về mối quan hệ giữa tự do và tất yếu. Nhìn chung, các quan điểm này đều chưa giải quyết triệt để mối quan hệ biện chứng giữa hai phạm trù, và thường rơi vào một trong hai khuynh hướng: tuyệt đối hóa tất yếu hoặc tuyệt đối hóa tự do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleOpen(item)}
              className="group cursor-pointer bg-white rounded-3xl border-2 border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-ethereal-blue/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative bg-zinc-100">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-black uppercase tracking-widest bg-ethereal-blue px-3 py-1 rounded-full">Chi tiết</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-zinc-800 mb-3 uppercase tracking-tight group-hover:text-ethereal-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-zinc-200"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 lg:top-6 lg:right-6 z-20 bg-white/50 hover:bg-zinc-100 text-zinc-800 p-3 rounded-full backdrop-blur-md transition-all shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-auto relative bg-zinc-50 flex items-center justify-center group/img min-h-[300px] border-b lg:border-b-0 lg:border-r border-zinc-100 p-2 lg:p-4">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selected.images[imgIdx]}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={selected.images[imgIdx]} 
                    alt={selected.title}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </AnimatePresence>
                
                {selected.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImgIdx(prev => (prev === 0 ? selected.images.length - 1 : prev - 1)); }}
                      className="absolute left-4 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-800 shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImgIdx(prev => (prev === selected.images.length - 1 ? 0 : prev + 1)); }}
                      className="absolute right-4 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-800 shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-6 flex gap-2">
                      {selected.images.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setImgIdx(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${i === imgIdx ? 'bg-ethereal-blue w-6' : 'bg-zinc-300'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="lg:w-1/2 p-6 md:p-10 lg:p-12 overflow-y-auto max-h-[70vh] lg:max-h-[85vh] bg-white relative custom-scrollbar">
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 mb-3 uppercase tracking-tight leading-tight">
                  {selected.title}
                </h3>
                <div className="h-1.5 w-20 bg-gradient-to-r from-ethereal-blue to-ethereal-cyan mb-10 rounded-full" />

                <div className="space-y-10">
                  {/* Định nghĩa */}
                  <div className="space-y-5">
                    <h4 className="flex items-center gap-3 text-ethereal-blue font-black uppercase tracking-widest text-sm">
                      <div className="p-2 bg-ethereal-blue/10 rounded-xl"><BookOpen className="w-5 h-5" /></div>
                      Định nghĩa & Bản chất
                    </h4>
                    <div className="grid gap-4">
                      {getDefinitionItems(selected.definition).map((val, i) => (
                        <div key={i} className="group relative bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 pl-6">
                           <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-ethereal-blue to-ethereal-cyan rounded-l-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
                           <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mối quan hệ / Đánh giá */}
                  <div className="space-y-5">
                    <h4 className="flex items-center gap-3 text-ethereal-blue font-black uppercase tracking-widest text-sm">
                      <div className="p-2 bg-ethereal-blue/10 rounded-xl"><Info className="w-5 h-5" /></div>
                      Đánh giá phân tích
                    </h4>
                    <div className="grid gap-4">
                      {(selected.relationship || []).map((text, i) => {
                        const isPro = text.toLowerCase().startsWith('điểm sáng') || text.toLowerCase().startsWith('ưu điểm');
                        const isCon = text.toLowerCase().startsWith('hạn chế') || text.toLowerCase().startsWith('nhược điểm');
                        
                        let colorClasses = "bg-zinc-50 border-zinc-200 text-zinc-700";
                        let icon = <div className="text-zinc-400 font-bold mr-3 mt-1">•</div>;
                        
                        if (isPro) {
                           colorClasses = "bg-emerald-50/50 border-emerald-100 text-emerald-900";
                           icon = <div className="text-emerald-600 font-bold mr-3 mt-0.5 text-lg">✓</div>;
                        } else if (isCon) {
                           colorClasses = "bg-rose-50/50 border-rose-100 text-rose-900";
                           icon = <div className="text-rose-500 font-bold mr-3 mt-0.5 text-lg">✕</div>;
                        }

                        const parts = text.split(':');
                        const prefix = parts.length > 1 ? parts[0] : null;
                        const content = parts.length > 1 ? parts.slice(1).join(':') : text;

                        return (
                          <div key={i} className={`flex items-start p-5 md:p-6 rounded-2xl border ${colorClasses}`}>
                            {icon}
                            <div className="text-sm md:text-base leading-relaxed font-medium">
                              {prefix ? (
                                <>
                                  <span className="font-bold uppercase tracking-wider text-xs opacity-80 block mb-1.5">{prefix}</span>
                                  {content.trim()}
                                </>
                              ) : (
                                content
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Bài học thực tiễn / Đại diện */}
                  {selected.lessons && (
                    <div className="space-y-5 pb-4">
                      <h4 className="flex items-center gap-3 text-ethereal-blue font-black uppercase tracking-widest text-sm">
                        <div className="p-2 bg-ethereal-blue/10 rounded-xl"><Lightbulb className="w-5 h-5" /></div>
                        Đại diện tiêu biểu
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selected.lessons.map((text, i) => (
                          <div key={i} className="bg-zinc-100/80 hover:bg-zinc-200 transition-colors text-zinc-800 text-sm font-semibold px-4 py-2.5 rounded-xl border border-zinc-200/80 shadow-sm">
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DialecticalCategories;

