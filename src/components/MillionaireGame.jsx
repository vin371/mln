import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, HelpCircle, ArrowLeft, Trophy, PlayCircle, XCircle, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_QUESTIONS = [
  { q: "Phạm trù 'Tất yếu' trong triết học Mác – Lênin được hiểu là gì?", options: ["Điều xảy ra ngẫu nhiên, không thể đoán trước", "Cái do những nguyên nhân cơ bản bên trong kết cấu vật chất quyết định", "Sự sắp đặt của một lực lượng siêu nhiên", "Điều xảy ra hoàn toàn do ý muốn chủ quan"], correct: 1, desc: "Tất yếu là cái do bản chất, do nguyên nhân bên trong quyết định và nhất định phải xảy ra." },
  { q: "Tự do theo quan điểm của triết học Mác – Lênin là gì?", options: ["Sự giải thoát khỏi mọi sự ràng buộc", "Sống và làm việc theo bản năng", "Khả năng nhận thức và vận dụng quy luật khách quan vào thực tiễn", "Làm bất cứ điều gì mình muốn không cần lý do"], correct: 2, desc: "Tự do là sự nhận thức được cái tất yếu và hành động dựa trên sự nhận thức đó." },
  { q: "Quan điểm nào cho rằng tự do là tuyệt đối, không bị ràng buộc bởi bất cứ điều kiện khách quan nào?", options: ["Chủ nghĩa duy tâm chủ quan (Hiện sinh)", "Triết học Mác – Lênin", "Chủ nghĩa duy vật biện chứng", "Chủ nghĩa duy vật lịch sử"], correct: 0, desc: "Chủ nghĩa hiện sinh của Sartre cho rằng 'con người bị kết án là phải tự do'." },
  { q: "Thuyết định mệnh (cho rằng con người hoàn toàn phục tùng số phận) thường gắn với trường phái triết học nào?", options: ["Chủ nghĩa hiện sinh", "Chủ nghĩa duy vật siêu hình", "Chủ nghĩa duy tâm chủ quan", "Chủ nghĩa duy vật biện chứng"], correct: 1, desc: "Duy vật siêu hình coi mọi thứ đều tuân theo nhân quả cứng nhắc, triệt tiêu tự do." },
  { q: "Theo triết học Mác – Lênin, cơ sở của tự do là gì?", options: ["Cảm xúc chủ quan", "Niềm tin tôn giáo", "Tất yếu khách quan", "Ý chí cá nhân"], correct: 2, desc: "Tự do phải dựa trên cơ sở nhận thức và tuân theo tất yếu khách quan." },
  { q: "Để đạt được tự do thực sự, con người cần phải làm gì đối với cái 'tất yếu'?", options: ["Chạy trốn và phớt lờ nó", "Nhận thức và cải tạo nó thông qua hoạt động thực tiễn", "Phó mặc cho tự nhiên an bài", "Cầu nguyện để thay đổi nó"], correct: 1, desc: "Chỉ nhận thức thôi chưa đủ, phải thông qua thực tiễn cải tạo thế giới mới đạt được tự do." },
  { q: "Mối quan hệ giữa 'tự do' và 'tất yếu' mang tính chất gì?", options: ["Độc lập, không liên quan đến nhau", "Biện chứng, thống nhất và chuyển hóa lẫn nhau", "Đối lập, loại trừ lẫn nhau", "Hoàn toàn ngẫu nhiên"], correct: 1, desc: "Tự do và tất yếu không tách rời mà chuyển hóa cho nhau trong quá trình phát triển." },
  { q: "Câu nói: 'Tự do là cái tất yếu đã được nhận thức' là của nhà triết học nào?", options: ["J.P. Sartre", "G.W.F. Hegel", "C. Mác", "I. Kant"], correct: 1, desc: "Đây là luận điểm nổi tiếng của Hegel, đánh dấu bước tiến lớn trong tư duy triết học." },
  { q: "Theo C. Mác, bước tiến từ 'vương quốc của tất yếu' sang 'vương quốc của tự do' đạt tới đỉnh cao trong xã hội nào?", options: ["Tư bản chủ nghĩa", "Phong kiến", "Cộng sản chủ nghĩa", "Chiếm hữu nô lệ"], correct: 2, desc: "Chỉ trong xã hội cộng sản, con người mới thực sự làm chủ tự nhiên và xã hội toàn diện." },
  { q: "Trong hoạt động thực tiễn, tiêu chí quan trọng nhất để đánh giá mức độ tự do là gì?", options: ["Khả năng đạt được mục đích đề ra nhằm cải tạo thế giới", "Sự thỏa mãn mọi cảm xúc cá nhân", "Không phải tham gia lao động", "Thoát khỏi mọi quy luật tự nhiên"], correct: 0, desc: "Khả năng đạt mục đích là thước đo xem con người đã làm chủ được hoàn cảnh hay chưa." },
  { q: "Quan điểm của Chủ nghĩa duy tâm khách quan (Hegel) về tự do và tất yếu có hạn chế lớn nhất là gì?", options: ["Phủ nhận sự tồn tại của tất yếu", "Tách rời tự do và tất yếu", "Coi tất yếu là sản phẩm của Tinh thần tuyệt đối (thần bí)", "Đề cao quá mức vai trò thực tiễn"], correct: 2, desc: "Hegel đã thần bí hóa cái tất yếu, tách nó khỏi thế giới vật chất." },
  { q: "Trong quá trình nhận thức, vai trò của khoa học đối với tự do là gì?", options: ["Hạn chế sự tự do sáng tạo", "Cung cấp tri thức về các quy luật khách quan để làm chủ tự nhiên", "Chỉ mang tính chất giải trí thuần túy", "Không đóng vai trò gì quan trọng"], correct: 1, desc: "Khoa học giúp con người khám phá tất yếu, từ đó mở rộng phạm vi tự do." },
  { q: "Hành động theo 'chủ nghĩa duy ý chí' (bất chấp quy luật khách quan) sẽ dẫn đến kết quả tất yếu nào?", options: ["Đạt được tự do tuyệt đối", "Làm chủ được mọi hoàn cảnh", "Thất bại trong hoạt động thực tiễn", "Giải phóng sức lao động"], correct: 2, desc: "Nếu bỏ qua tất yếu khách quan, mọi hành động chủ quan đều sẽ chuốc lấy thất bại." },
  { q: "Trong xã hội có giai cấp, mức độ tự do của mỗi cá nhân luôn gắn liền mật thiết với yếu tố nào?", options: ["Sự bình đẳng tuyệt đối về sinh học", "Tương quan quyền lực và vị thế kinh tế, chính trị", "Sự độc lập hoàn toàn khỏi xã hội", "Lòng nhân ái của con người"], correct: 1, desc: "Trong xã hội phân chia giai cấp, tự do luôn mang tính lịch sử - cụ thể và phụ thuộc vào địa vị kinh tế." },
  { q: "V.I. Lênin đã khẳng định về mối quan hệ giữa nhận thức và tự do như thế nào?", options: ["Nhận thức khách quan càng sâu sắc thì tự do càng bị thu hẹp", "Nhận thức khách quan càng sâu sắc thì tự do của con người càng được mở rộng", "Con người càng nhận thức nhiều thì càng trở nên thụ động", "Nhận thức không ảnh hưởng đến sự vận động của tất yếu"], correct: 1, desc: "Sự hiểu biết càng sâu về thế giới khách quan, năng lực làm chủ (tự do) của con người càng lớn." }
];

const PRIZES = [
  "200,000", "400,000", "600,000", "1,000,000", "2,000,000", 
  "3,000,000", "6,000,000", "10,000,000", "14,000,000", "22,000,000",
  "30,000,000", "40,000,000", "60,000,000", "85,000,000", "150,000,000"
];

const LETTERS = ['A', 'B', 'C', 'D'];

const MillionaireGame = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, won, lost
  const [currentLevel, setCurrentLevel] = useState(0);
  const [questions, setQuestions] = useState([]);
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // 'checking', 'correct', 'incorrect'
  
  // Audio state
  const [isMuted, setIsMuted] = useState(false);


  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [usedAudience, setUsedAudience] = useState(false);
  const [audienceVotes, setAudienceVotes] = useState(null);
  
  useEffect(() => {
    // Randomize 15 questions for a game session
    const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuestions(shuffled);
  }, [gameState]);



  const startGame = () => {
    setCurrentLevel(0);
    setUsed5050(false);
    setHiddenOptions([]);
    setUsedAudience(false);
    setAudienceVotes(null);
    setSelectedAnswer(null);
    setAnswerStatus(null);
    setGameState('playing');
    
    if (!isMuted) {
      const bgMusic = new Audio('/audio/bg.mp3');
      bgMusic.loop = false;
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {});
    }
  };

  // Âm thanh khi trả lời đúng
  const correctSoundRef = useRef(null);

  const handleAnswer = (index) => {
    if (answerStatus !== null || hiddenOptions.includes(index)) return;
    
    setSelectedAnswer(index);
    setAnswerStatus('checking');
    
    setTimeout(() => {
      if (index === questions[currentLevel].correct) {
        setAnswerStatus('correct');
        if (!isMuted) {
          correctSoundRef.current = new Audio('/audio/correct.mp3');
          correctSoundRef.current.volume = 0.8;
          correctSoundRef.current.play().catch(() => {});
        }
      } else {
        setAnswerStatus('incorrect');
        if (!isMuted) {
          const wrongSound = new Audio('/audio/wrong.mp3');
          wrongSound.volume = 0.8;
          wrongSound.play().catch(() => {});
        }
        setTimeout(() => {
          setGameState('lost');
        }, 3000);
      }
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (correctSoundRef.current) {
      correctSoundRef.current.pause();
      correctSoundRef.current.currentTime = 0;
    }
    
    if (currentLevel === 14) {
      setGameState('won');
    } else {
      setCurrentLevel(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswerStatus(null);
      setHiddenOptions([]);
      setAudienceVotes(null);
    }
  };

  const use5050 = () => {
    if (used5050 || gameState !== 'playing') return;
    const correctIdx = questions[currentLevel].correct;
    let wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIdx);
    wrongIndices.sort(() => Math.random() - 0.5);
    setHiddenOptions([wrongIndices[0], wrongIndices[1]]);
    setUsed5050(true);
  };

  const useAudience = () => {
    if (usedAudience || gameState !== 'playing') return;
    const correctIdx = questions[currentLevel].correct;
    
    let votes = [0, 0, 0, 0];
    let remaining = 100;
    
    // Give majority to correct answer (40-80%)
    const correctVote = Math.floor(Math.random() * 40) + 40;
    votes[correctIdx] = correctVote;
    remaining -= correctVote;
    
    // Distribute remaining
    [0, 1, 2, 3].forEach(idx => {
      if (idx !== correctIdx && !hiddenOptions.includes(idx)) {
        const vote = Math.floor(Math.random() * remaining);
        votes[idx] = vote;
        remaining -= vote;
      }
    });
    
    // Add leftover to a random non-hidden option
    const validIndices = [0, 1, 2, 3].filter(i => !hiddenOptions.includes(i));
    votes[validIndices[Math.floor(Math.random() * validIndices.length)]] += remaining;
    
    setAudienceVotes(votes);
    setUsedAudience(true);
  };

  const currentQ = questions[currentLevel];
  const guaranteedPrize = currentLevel >= 10 ? PRIZES[9] : currentLevel >= 5 ? PRIZES[4] : "0";

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white overflow-hidden flex flex-col relative select-none">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
      
      <div className="relative z-10 flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="w-12" /> {/* Spacer for centering */}
          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 filter drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
              Ai Là Triệu Phú
            </h1>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-xs font-bold mt-1">Phiên Bản Triết Học</p>
          </div>
          {/* <button 
            onClick={() => setIsMuted(!isMuted)}
            className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-400/50 text-white flex items-center justify-center hover:bg-blue-800 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]"
            title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? <VolumeX className="w-6 h-6 text-red-400" /> : <Volume2 className="w-6 h-6 text-green-400" />}
          </button> */}
        </div>

        {gameState === 'start' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
          >
            <div className="w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/40 to-transparent flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <PlayCircle className="w-24 h-24 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Chào mừng đến với chương trình!</h2>
            <p className="text-blue-200 mb-12 text-lg leading-relaxed">
              Bạn sẽ trải qua 15 câu hỏi triết học Mác - Lênin. Trả lời đúng để giành phần thưởng cao nhất. Hãy cẩn thận vì bạn chỉ có 2 quyền trợ giúp.
            </p>
            <button 
              onClick={startGame}
              className="px-12 py-4 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full font-black uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-transform border border-blue-400"
            >
              Bắt Đầu Chơi
            </button>
          </motion.div>
        )}

        {(gameState === 'won' || gameState === 'lost') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            {gameState === 'won' ? (
              <Trophy className="w-32 h-32 text-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
            ) : (
              <XCircle className="w-32 h-32 text-red-500 mb-6 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
            )}
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              {gameState === 'won' ? 'Tuyệt Vời! Bạn Là Triệu Phú!' : 'Trò Chơi Kết Thúc!'}
            </h2>
            <p className="text-2xl text-blue-300 font-medium mb-2">
              Bạn đã dừng lại ở câu {currentLevel + 1}
            </p>
            <p className="text-3xl font-bold text-yellow-400 mb-12">
              Tiền thưởng: {gameState === 'won' ? PRIZES[14] : guaranteedPrize} VNĐ
            </p>
            
            <button 
              onClick={startGame}
              className="px-10 py-4 bg-white text-blue-900 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition-colors"
            >
              Chơi Lại Từ Đầu
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && currentQ && (
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Left: Main Game Area */}
            <div className="flex-1 flex flex-col">
              
              {/* Lifelines & Audience Result */}
              <div className="flex justify-between items-start mb-8 h-32">
                <div className="flex gap-4">
                  <button 
                    disabled={used5050}
                    onClick={use5050}
                    className={`relative w-16 h-12 rounded-full flex items-center justify-center font-black border-2 transition-all ${used5050 ? 'border-slate-800 bg-slate-900 text-slate-700' : 'border-blue-400 bg-blue-900 text-white hover:bg-blue-800 shadow-[0_0_15px_rgba(96,165,250,0.4)]'}`}
                  >
                    50:50
                    {used5050 && <div className="absolute inset-0 flex items-center justify-center text-red-500 rotate-45 text-4xl">/</div>}
                  </button>
                  <button 
                    disabled={usedAudience}
                    onClick={useAudience}
                    className={`relative w-16 h-12 rounded-full flex items-center justify-center border-2 transition-all ${usedAudience ? 'border-slate-800 bg-slate-900 text-slate-700' : 'border-blue-400 bg-blue-900 text-white hover:bg-blue-800 shadow-[0_0_15px_rgba(96,165,250,0.4)]'}`}
                  >
                    <Users className="w-6 h-6" />
                    {usedAudience && <div className="absolute inset-0 flex items-center justify-center text-red-500 rotate-45 text-4xl">/</div>}
                  </button>
                </div>

                {/* Audience Votes Chart */}
                {audienceVotes && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 h-24 items-end bg-blue-950/50 p-4 rounded-xl border border-blue-900">
                    {audienceVotes.map((v, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-blue-300 font-bold">{v}%</span>
                        <div className="w-8 bg-blue-500 rounded-t-sm transition-all duration-1000" style={{ height: `${v}%` }} />
                        <span className="text-xs font-bold">{LETTERS[i]}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-end pb-8">
                {/* Question Box */}
                <div className="relative mb-6">
                  {/* Hexagon shape bg */}
                  <div className="absolute inset-0 bg-blue-900 border-2 border-blue-400 rounded-xl flex items-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <div className="w-4 h-full border-r-2 border-blue-400/50" />
                    <div className="flex-1" />
                    <div className="w-4 h-full border-l-2 border-blue-400/50" />
                  </div>
                  <div className="relative py-8 px-12 text-center text-lg md:text-2xl font-bold min-h-[120px] flex items-center justify-center">
                    {currentQ.q}
                  </div>
                </div>

                {/* Answer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQ.options.map((opt, idx) => {
                    const isHidden = hiddenOptions.includes(idx);
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = answerStatus === 'correct' && isSelected;
                    const isWrong = answerStatus === 'incorrect' && isSelected;
                    const isRevealedCorrect = answerStatus === 'incorrect' && idx === currentQ.correct;
                    
                    let bgClass = "bg-blue-950 border-blue-600";
                    if (isSelected && answerStatus === 'checking') bgClass = "bg-yellow-500 border-yellow-300 text-black";
                    else if (isCorrect || isRevealedCorrect) bgClass = "bg-green-500 border-green-300 text-black animate-pulse";
                    else if (isWrong) bgClass = "bg-red-500 border-red-300 text-white";
                    
                    if (isHidden) return (
                      <div key={idx} className="relative h-16 rounded-full border-2 border-slate-800 bg-slate-900/50" />
                    );

                    return (
                      <button
                        key={idx}
                        disabled={answerStatus !== null}
                        onClick={() => handleAnswer(idx)}
                        className={`relative min-h-[4rem] py-3 rounded-3xl border-2 transition-colors flex items-center px-6 text-left group hover:border-yellow-400 ${bgClass}`}
                      >
                        <span className={`font-black mr-4 flex-shrink-0 ${isSelected && answerStatus !== null ? 'text-black' : 'text-yellow-400'}`}>
                          {LETTERS[idx]}:
                        </span>
                        <span className="font-semibold text-sm md:text-base leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Next Question Button */}
                {answerStatus === 'correct' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex justify-center"
                  >
                    <button 
                      onClick={handleNextQuestion}
                      className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all animate-bounce"
                    >
                      {currentLevel === 14 ? 'Hoàn thành' : 'Câu tiếp theo'}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right: Prize Ladder */}
            <div className="hidden lg:flex flex-col w-64 bg-blue-950/50 border border-blue-900 rounded-3xl p-6 justify-between">
              {[...PRIZES].reverse().map((prize, idx) => {
                const step = 14 - idx;
                const isCurrent = step === currentLevel;
                const isPassed = step < currentLevel;
                const isMilestone = step === 4 || step === 9 || step === 14;
                
                return (
                  <div 
                    key={step} 
                    className={`flex justify-between items-center px-4 py-1.5 rounded-full font-bold text-sm transition-colors ${
                      isCurrent ? 'bg-yellow-500 text-black scale-110 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 
                      isPassed ? 'text-blue-300' :
                      isMilestone ? 'text-white' : 'text-blue-500'
                    }`}
                  >
                    <span className="w-6">{step + 1}</span>
                    <span className="flex-1 text-right">{prize}</span>
                  </div>
                );
              })}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default MillionaireGame;
