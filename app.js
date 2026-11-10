/**
 * ============================================================================
 * TRUTH OR DARE - VNR202 (CHUYÊN ĐỀ ĐẠI HỘI XI - 2011) - DELUXE EDITION
 * 14 Câu Hỏi Truth chuẩn từ Outline_VNR202_N6.docx + 4 Ô Đặc Biệt + 12 Thử Thách Dare
 * Tích hợp 3D Card Flip, Vòng Đếm Giờ SVG, Thẻ Bài Dare Hoàng Gia & Bục Vinh Danh Top 3
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. KHO DỮ LIỆU GỐC (14 CÂU HỎI TRUTH + 4 Ô ĐẶC BIỆT + 12 THỬ THÁCH DARE)
// ----------------------------------------------------------------------------
const TRUTH_QUESTIONS = [
  {
    id: 'q1',
    type: 'truth',
    points: 100,
    themeIcon: '🌐',
    themeTag: 'BỐI CẢNH LỊCH SỬ & HỘI NHẬP QUỐC TẾ',
    themeSub: 'Dấu mốc Việt Nam hội nhập sâu rộng vào nền kinh tế thế giới trước thềm Đại hội XI',
    question: 'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?',
    options: [
      { key: 'A', text: '2005' },
      { key: 'B', text: '2006' },
      { key: 'C', text: '2007' },
      { key: 'D', text: '2008' }
    ],
    correctKey: 'C',
    explanation: 'Việt Nam chính thức trở thành thành viên thứ 150 của WTO vào tháng 1/2007.'
  },
  {
    id: 'q2',
    type: 'truth',
    points: 100,
    themeIcon: '📉',
    themeTag: 'BỐI CẢNH KINH TẾ THẾ GIỚI & TRONG NƯỚC',
    themeSub: 'Tác động từ biến động kinh tế toàn cầu giai đoạn 2008–2009 đối với Việt Nam',
    question: 'Cuộc khủng hoảng tài chính toàn cầu 2008–2009 đã tác động đến nền kinh tế Việt Nam như thế nào?',
    options: [
      { key: 'A', text: 'Làm giảm nhu cầu xuất khẩu và đầu tư' },
      { key: 'B', text: 'Khiến Việt Nam ngừng hội nhập quốc tế' },
      { key: 'C', text: 'Làm tăng mạnh nguồn vốn đầu tư nước ngoài' },
      { key: 'D', text: 'Không gây ảnh hưởng đáng kể' }
    ],
    correctKey: 'A',
    explanation: 'Khủng hoảng tài chính toàn cầu 2008–2009 làm thu hẹp thị trường quốc tế, giảm nhu cầu xuất khẩu và dòng vốn đầu tư.'
  },
  {
    id: 'q3',
    type: 'truth',
    points: 100,
    themeIcon: '🏛️',
    themeTag: 'DẤU MỐC ĐẠI HỘI ĐẢNG TOÀN QUỐC',
    themeSub: 'Sự kiện chính trị trọng đại định hướng phát triển đất nước giai đoạn 2011–2020',
    question: 'Đại hội XI diễn ra vào năm nào và là Đại hội đại biểu toàn quốc lần thứ mấy?',
    options: [
      { key: 'A', text: 'Năm 2006 – Đại hội X' },
      { key: 'B', text: 'Năm 2011 – Đại hội XI' },
      { key: 'C', text: 'Năm 2016 – Đại hội XII' },
      { key: 'D', text: 'Năm 2021 – Đại hội XIII' }
    ],
    correctKey: 'B',
    explanation: 'Đại hội đại biểu toàn quốc lần thứ XI của Đảng họp tại Hà Nội vào tháng 1/2011.'
  },
  {
    id: 'q4',
    type: 'truth',
    points: 100,
    themeIcon: '⚙️',
    themeTag: 'NHẬN DIỆN MÔ HÌNH TĂNG TRƯỞNG KINH TẾ',
    themeSub: 'Đặc điểm và giới hạn của mô hình tăng trưởng kinh tế theo chiều rộng',
    question: 'Mô hình tăng trưởng theo chiều rộng thường dựa nhiều vào những yếu tố nào?',
    options: [
      { key: 'A', text: 'Năng suất lao động và đổi mới công nghệ' },
      { key: 'B', text: 'Vốn đầu tư, lao động và khai thác tài nguyên' },
      { key: 'C', text: 'Chất lượng nguồn nhân lực' },
      { key: 'D', text: 'Khoa học và công nghệ' }
    ],
    correctKey: 'B',
    explanation: 'Tăng trưởng theo chiều rộng chủ yếu dựa vào mở rộng vốn đầu tư, lao động giá rẻ và khai thác tài nguyên thiên nhiên.'
  },
  {
    id: 'q5',
    type: 'truth',
    points: 100,
    themeIcon: '🌱',
    themeTag: 'ĐỔI MỚI MÔ HÌNH TĂNG TRƯỞNG ĐẠI HỘI XI',
    themeSub: 'Chuyển dịch từ chiều rộng sang kết hợp hợp lý giữa chiều rộng và chiều sâu',
    question: 'Đại hội XI đặt ra yêu cầu chuyển đổi mô hình tăng trưởng theo hướng nào?',
    options: [
      { key: 'A', text: 'Tăng trưởng nhanh bằng mọi giá' },
      { key: 'B', text: 'Tập trung khai thác tài nguyên' },
      { key: 'C', text: 'Nâng cao chất lượng, hiệu quả và tính bền vững' },
      { key: 'D', text: 'Chỉ chú trọng phát triển công nghiệp' }
    ],
    correctKey: 'C',
    explanation: 'Chuyển đổi mô hình tăng trưởng từ chiều rộng sang chiều sâu, nâng cao chất lượng, hiệu quả, sức cạnh tranh và tính bền vững.'
  },
  {
    id: 'q6',
    type: 'truth',
    points: 100,
    themeIcon: '🎓',
    themeTag: 'ĐỘT PHÁ CHIẾN LƯỢC VỀ NGUỒN NHÂN LỰC',
    themeSub: 'Vai trò quyết định của con người và tri thức trong công nghiệp hóa, hiện đại hóa',
    question: 'Vì sao phát triển nguồn nhân lực, đặc biệt là nguồn nhân lực chất lượng cao, được xem là một đột phá chiến lược?',
    options: [
      { key: 'A', text: 'Giúp giảm nhu cầu hội nhập' },
      { key: 'B', text: 'Là yếu tố quan trọng nâng cao năng suất và năng lực cạnh tranh' },
      { key: 'C', text: 'Thay thế hoàn toàn máy móc' },
      { key: 'D', text: 'Giúp giảm quy mô nền kinh tế' }
    ],
    correctKey: 'B',
    explanation: 'Nhân lực chất lượng cao là chìa khóa ứng dụng KH-CN, nâng cao năng suất lao động và sức cạnh tranh của nền kinh tế.'
  },
  {
    id: 'q7',
    type: 'truth',
    points: 100,
    themeIcon: '📜',
    themeTag: 'CƯƠNG LĨNH (BỔ SUNG, PHÁT TRIỂN NĂM 2011)',
    themeSub: 'Tư duy lý luận của Đảng về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam',
    question: 'Cương lĩnh năm 2011 nêu và nhấn mạnh việc nhận thức, giải quyết bao nhiêu mối quan hệ lớn?',
    options: [
      { key: 'A', text: '6 mối quan hệ lớn' },
      { key: 'B', text: '7 mối quan hệ lớn' },
      { key: 'C', text: '8 mối quan hệ lớn' },
      { key: 'D', text: '9 mối quan hệ lớn' }
    ],
    correctKey: 'C',
    explanation: 'Cương lĩnh (bổ sung, phát triển năm 2011) xác định 8 mối quan hệ lớn cần nắm vững và giải quyết tốt.'
  },
  {
    id: 'q8',
    type: 'truth',
    points: 100,
    themeIcon: '⚠️',
    themeTag: 'THÁCH THỨC KINH TẾ VĨ MÔ TRƯỚC ĐẠI HỘI XI',
    themeSub: 'Nhận diện những điểm nghẽn và bất ổn vĩ mô cần tập trung tháo gỡ',
    question: 'Đâu KHÔNG phải là một trong ba bất ổn kinh tế nổi bật trước Đại hội XI: lạm phát, nợ xấu, bất động sản hay thiếu hụt lao động phổ thông?',
    options: [
      { key: 'A', text: 'Lạm phát tăng cao' },
      { key: 'B', text: 'Nợ xấu trong hệ thống ngân hàng' },
      { key: 'C', text: 'Thị trường bất động sản suy giảm / đóng băng' },
      { key: 'D', text: 'Thiếu hụt lao động phổ thông' }
    ],
    correctKey: 'D',
    explanation: 'Ba bất ổn kinh tế vĩ mô nổi bật giai đoạn này là: Lạm phát cao, Nợ xấu ngân hàng và Bất động sản đóng băng (không phải thiếu hụt lao động phổ thông).'
  },
  {
    id: 'q9',
    type: 'truth',
    points: 100,
    themeIcon: '🏦',
    themeTag: 'TÁI CƠ CẤU NỀN KINH TẾ TRỌNG TÂM',
    themeSub: 'Ba trụ cột tái cơ cấu gắn liền với chuyển đổi mô hình tăng trưởng',
    question: 'Ba lĩnh vực trọng tâm được xác định trong quá trình tái cơ cấu nền kinh tế là gì?',
    options: [
      { key: 'A', text: 'Đầu tư công, hệ thống tổ chức tín dụng và doanh nghiệp nhà nước' },
      { key: 'B', text: 'Giáo dục, y tế và du lịch' },
      { key: 'C', text: 'Nông nghiệp, thương mại và dịch vụ' },
      { key: 'D', text: 'Xuất khẩu, nhập khẩu và tiêu dùng' }
    ],
    correctKey: 'A',
    explanation: 'Tái cơ cấu nền kinh tế tập trung vào 3 trụ cột: Tái cơ cấu đầu tư công, hệ thống ngân hàng - tổ chức tín dụng, và doanh nghiệp nhà nước (DNNN).'
  },
  {
    id: 'q10',
    type: 'scramble',
    points: 100,
    themeIcon: '🧩',
    themeTag: 'THỬ THÁCH GIẢI MÃ TỪ KHÓA TRỌNG TÂM',
    themeSub: 'Đột phá chiến lược đầu tiên về hoàn thiện thể chế kinh tế tại Đại hội XI',
    question: 'GIẢI MÃ TỪ KHÓA: Sắp xếp các cụm từ sau thành một khái niệm hoàn chỉnh: [ TẾ ] - [ THỊ ] - [ TRƯỜNG ] - [ KINH ] - [ XHCN ] - [ ĐỊNH HƯỚNG ]',
    scrambleWords: ['TẾ', 'THỊ', 'TRƯỜNG', 'KINH', 'XHCN', 'ĐỊNH HƯỚNG'],
    targetPhrase: 'KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN',
    explanation: 'Đáp án: KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN (Hoàn thiện thể chế kinh tế thị trường định hướng XHCN là một trong 3 đột phá chiến lược).'
  },
  {
    id: 'q11',
    type: 'truth',
    points: 100,
    themeIcon: '🧭',
    themeTag: 'VĂN KIỆN CHIẾN LƯỢC ĐẠI HỘI XI (2011)',
    themeSub: 'Kim chỉ nam phát triển kinh tế - xã hội Việt Nam suốt thập niên 2011–2020',
    question: 'Đại hội XI thông qua văn kiện nào xác định định hướng phát triển đất nước trong giai đoạn 10 năm (2011–2020)?',
    options: [
      { key: 'A', text: 'Chiến lược phát triển kinh tế – xã hội 2011–2020' },
      { key: 'B', text: 'Hiến pháp năm 1992' },
      { key: 'C', text: 'Cương lĩnh năm 1991' },
      { key: 'D', text: 'Luật Doanh nghiệp 2005' }
    ],
    correctKey: 'A',
    explanation: 'Đại hội XI đã thông qua Chiến lược phát triển kinh tế – xã hội 2011–2020 cùng với Cương lĩnh (bổ sung, phát triển năm 2011).'
  },
  {
    id: 'q12',
    type: 'truth',
    points: 100,
    themeIcon: '🚀',
    themeTag: 'BA ĐỘT PHÁ CHIẾN LƯỢC (2011–2020)',
    themeSub: 'Đòn bẩy thúc đẩy Việt Nam cơ bản trở thành nước công nghiệp theo hướng hiện đại',
    question: 'Đâu là một trong ba đột phá chiến lược được Đại hội XI xác định?',
    options: [
      { key: 'A', text: 'Phát triển nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao' },
      { key: 'B', text: 'Mở rộng khai thác tài nguyên' },
      { key: 'C', text: 'Tăng đầu tư vào bất động sản' },
      { key: 'D', text: 'Thu hẹp hội nhập quốc tế' }
    ],
    correctKey: 'A',
    explanation: '3 đột phá chiến lược gồm: (1) Hoàn thiện thể chế KTTT định hướng XHCN, (2) Phát triển nguồn nhân lực chất lượng cao, (3) Xây dựng kết cấu hạ tầng đồng bộ.'
  },
  {
    id: 'q13',
    type: 'truth',
    points: 100,
    isBonusQuestion: true,
    themeIcon: '🛡️',
    themeTag: 'CÂU HỎI PHỤ • ỔN ĐỊNH KINH TẾ VĨ MÔ',
    themeSub: 'Kiềm chế lạm phát, bảo đảm an sinh xã hội và duy trì đà tăng trưởng hợp lý',
    question: '(Câu hỏi phụ 1) Mục tiêu quan trọng của việc ổn định kinh tế vĩ mô là gì?',
    options: [
      { key: 'A', text: 'Tạo nền tảng cho tăng trưởng ổn định và bền vững' },
      { key: 'B', text: 'Tăng giá hàng hóa' },
      { key: 'C', text: 'Hạn chế hoạt động sản xuất' },
      { key: 'D', text: 'Giảm toàn bộ hoạt động đầu tư' }
    ],
    correctKey: 'A',
    explanation: 'Ổn định kinh tế vĩ mô, kiềm chế lạm phát là điều kiện tiên quyết để tạo nền tảng cho tăng trưởng ổn định, bền vững.'
  },
  {
    id: 'q14',
    type: 'truth',
    points: 100,
    isBonusQuestion: true,
    themeIcon: '🌉',
    themeTag: 'CÂU HỎI PHỤ • ĐỘT PHÁ KẾT CẤU HẠ TẦNG',
    themeSub: 'Phát triển hệ thống giao thông trục chính và hạ tầng đô thị lớn hiện đại',
    question: '(Câu hỏi phụ 2) Đâu là một trong ba đột phá chiến lược của Đại hội XI?',
    options: [
      { key: 'A', text: 'Xây dựng hệ thống kết cấu hạ tầng đồng bộ' },
      { key: 'B', text: 'Tăng cường khai thác tài nguyên thiên nhiên' },
      { key: 'C', text: 'Mở rộng tín dụng bất động sản' },
      { key: 'D', text: 'Tăng trưởng dựa chủ yếu vào lao động giá rẻ' }
    ],
    correctKey: 'A',
    explanation: 'Xây dựng hệ thống kết cấu hạ tầng đồng bộ (nhất là giao thông và hạ tầng đô thị lớn) là 1 trong 3 đột phá chiến lược của Đại hội XI.'
  }
];

// 4 Ô ĐẶC BIỆT (MYSTERY / SPECIAL TILES)
const SPECIAL_TILES = [
  {
    id: 'sp1',
    type: 'special',
    specialKind: 'lucky_star',
    icon: '🌟',
    title: 'NGÔI SAO ĐỔI MỚI (+100 ĐIỂM!)',
    points: 100,
    description: 'Chúc mừng! Nhóm bạn vừa mở trúng Ô Ngôi Sao May Mắn! Nhận ngay +100 điểm thưởng mà không cần trả lời câu hỏi!'
  },
  {
    id: 'sp2',
    type: 'special',
    specialKind: 'double_power',
    icon: '⚡',
    title: 'ĐỘT PHÁ CHIẾN LƯỢC (NHÂN ĐÔI x2)',
    points: 150,
    description: 'Nhóm bạn nhận được Đặc Quyền Đột Phá! Bạn có thể chọn: Kích hoạt NHÂN ĐÔI ĐIỂM (x2) cho câu hỏi tiếp theo của nhóm, HOẶC nhận nóng +150 điểm ngay lập tức!'
  },
  {
    id: 'sp3',
    type: 'special',
    specialKind: 'instant_dare',
    icon: '🔥',
    title: 'THỬ THÁCH BẢN LĨNH (DARE TRỰC TIẾP!)',
    points: 100,
    description: 'Không cần đau đầu suy nghĩ lý thuyết! Nhóm bạn bước thẳng vào 1 Thử Thách DARE bất kỳ. Hoàn thành thử thách vui nhộn để ẵm trọn +100 điểm!'
  },
  {
    id: 'sp4',
    type: 'special',
    specialKind: 'friendship_integration',
    icon: '🤝',
    title: 'HỘI NHẬP QUỐC TẾ (CÙNG NHAU THẮNG LỢI)',
    points: 100,
    description: 'Tinh thần chủ động, tích cực hội nhập! Nhóm bạn nhận ngay +100 điểm VÀ được quyền chọn 1 nhóm khác trong lớp để tặng +50 điểm hữu nghị (hoặc chỉ định nhóm đó cùng làm 1 Dare vui vẻ)!'
  }
];

// 12 THỬ THÁCH DARE CHUẨN TỪ FILE DOCX
const DARE_CHALLENGES = [
  {
    id: 1,
    icon: '🗣️',
    hasFiveSec: false,
    text: 'Đọc thật nhanh cụm từ “Ổn định kinh tế vĩ mô - Đổi mới mô hình tăng trưởng - Phát triển bền vững” ba lần. Vấp là thực hiện lại!'
  },
  {
    id: 2,
    icon: '🙌',
    hasFiveSec: false,
    text: 'BTC đọc lần lượt các từ khóa. Người chơi VỖ TAY khi nghe “lạm phát”, GIƠ TAY khi nghe “nợ xấu” và KHOANH TAY khi nghe “bất động sản”.'
  },
  {
    id: 3,
    icon: '🕺',
    hasFiveSec: true,
    text: 'Cả nhóm cùng tạo dáng mô phỏng “tăng trưởng nóng” trong 5 giây. BTC sẽ chấm điểm dựa trên độ sáng tạo!'
  },
  {
    id: 4,
    icon: '🎭',
    hasFiveSec: false,
    text: 'Nhóm tự phân chia thành viên hô khẩu hiệu “Phát triển bền vững” theo ba phong cách: nghiêm túc, hào hứng và buồn ngủ!'
  },
  {
    id: 5,
    icon: '🤖',
    hasFiveSec: false,
    text: 'Một thành viên đọc câu “Việt Nam hội nhập - Kinh tế phát triển” bằng 3 giọng khác nhau: phát thanh viên, giọng em bé và giọng robot!'
  },
  {
    id: 6,
    icon: '🖐️',
    hasFiveSec: false,
    text: 'Cả nhóm cùng nhắm mắt và giơ một số ngón tay bất kỳ từ 1–5. Nếu có ít nhất 3 người giơ cùng một số, cả nhóm hoàn thành thử thách!'
  },
  {
    id: 7,
    icon: '🗺️',
    hasFiveSec: true,
    text: 'Kể tên 3 tỉnh thành Việt Nam trong 5 giây!'
  },
  {
    id: 8,
    icon: '👑',
    hasFiveSec: false,
    text: 'Tự giới thiệu bản thân (hoặc giới thiệu nhóm) như một thí sinh đang thi Hoa hậu Hoàn vũ!'
  },
  {
    id: 9,
    icon: '💖',
    hasFiveSec: false,
    text: 'Quay sang người bên cạnh và dành một lời khen thật chân thành, ngọt ngào!'
  },
  {
    id: 10,
    icon: '🚩',
    hasFiveSec: false,
    text: 'Đứng dậy, đặt tay lên ngực và nói “Tôi yêu môn Lịch sử Đảng!” bằng giọng thật tự hào và hào sảng!'
  },
  {
    id: 11,
    icon: '😁',
    hasFiveSec: true,
    text: 'Cười thật tươi và giữ nguyên nụ cười tỏa nắng đó trong đúng 5 giây!'
  },
  {
    id: 12,
    icon: '😬',
    hasFiveSec: false,
    text: 'Đọc to rõ câu “Kinh tế thị trường định hướng XHCN” nhưng phải vừa nhe răng cười vừa nói (không được khép môi)!'
  }
];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const STORAGE_KEY = 'VNR202_TRUTH_OR_DARE_STATE_V1';

// ----------------------------------------------------------------------------
// 2. BỘ TẠO ÂM THANH SÂN KHẤU (WEB AUDIO SYNTHESIZER)
// ----------------------------------------------------------------------------
class SoundFX {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  tone(freq, type = 'sine', duration = 0.15, delay = 0, vol = 0.18) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  playClick() {
    this.tone(580, 'triangle', 0.08, 0, 0.14);
  }

  playTileOpen() {
    this.tone(440, 'sine', 0.12, 0, 0.16);
    this.tone(660, 'triangle', 0.15, 0.06, 0.18);
    this.tone(880, 'sine', 0.22, 0.12, 0.2);
  }

  playSpecialTile() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((n, i) => this.tone(n, 'triangle', 0.18, i * 0.07, 0.22));
  }

  playCorrect() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => this.tone(n, 'triangle', 0.25, i * 0.08, 0.24));
  }

  playFanfare() {
    const melody = [
      { f: 523.25, d: 0.18, t: 0 },
      { f: 659.25, d: 0.18, t: 0.14 },
      { f: 783.99, d: 0.18, t: 0.28 },
      { f: 1046.5, d: 0.35, t: 0.42 },
      { f: 783.99, d: 0.18, t: 0.72 },
      { f: 1046.5, d: 0.55, t: 0.88 }
    ];
    melody.forEach((m) => this.tone(m.f, 'triangle', m.d, m.t, 0.25));
  }

  playWrong() {
    this.tone(180, 'sawtooth', 0.28, 0, 0.22);
    this.tone(135, 'sawtooth', 0.42, 0.18, 0.25);
  }

  playTick(urgent = false) {
    this.tone(urgent ? 920 : 640, 'sine', 0.05, 0, urgent ? 0.18 : 0.1);
  }

  playSpinTick() {
    this.tone(400 + Math.random() * 450, 'triangle', 0.04, 0, 0.12);
  }

  playDareReveal() {
    this.tone(330, 'sawtooth', 0.15, 0, 0.2);
    this.tone(440, 'sawtooth', 0.15, 0.1, 0.2);
    this.tone(659.25, 'triangle', 0.35, 0.2, 0.25);
  }
}

const sfx = new SoundFX();

// ----------------------------------------------------------------------------
// 3. HIỆU ỨNG PHÁO GIẤY (CONFETTI ENGINE)
// ----------------------------------------------------------------------------
class ConfettiManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.running = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 110) {
    const colors = ['#ffcc00', '#00d2ff', '#ff2a5f', '#00e676', '#9d4edd', '#ffffff'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width * (0.2 + Math.random() * 0.6),
        y: this.canvas.height * 0.35,
        vx: (Math.random() - 0.5) * 19,
        vy: -Math.random() * 16 - 5,
        size: 6 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        gravity: 0.38,
        alpha: 1
      });
    }
    if (!this.running) {
      this.running = true;
      this.loop();
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vr;
      if (p.y > this.canvas.height * 0.8) p.alpha -= 0.025;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      this.ctx.restore();
    });

    this.particles = this.particles.filter((p) => p.alpha > 0 && p.y < this.canvas.height + 40);
    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.running = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiManager('confetti-canvas');

// ----------------------------------------------------------------------------
// 4. TRẠNG THÁI TRÒ CHƠI (GAME STATE)
// ----------------------------------------------------------------------------
let state = {
  includeSpecialTiles: true, // true = 18 ô (14 Truth + 4 Special), false = 14 ô (14 Truth)
  currentRound: 1, // 1, 2, hoặc 3 (Vòng Phụ)
  activeTeamIndex: 0, // 0 -> 5 (Nhóm 1 -> Nhóm 6)
  teams: [
    { id: 1, name: 'NHÓM 1', score: 0, hasDouble: false },
    { id: 2, name: 'NHÓM 2', score: 0, hasDouble: false },
    { id: 3, name: 'NHÓM 3', score: 0, hasDouble: false },
    { id: 4, name: 'NHÓM 4', score: 0, hasDouble: false },
    { id: 5, name: 'NHÓM 5', score: 0, hasDouble: false },
    { id: 6, name: 'NHÓM 6', score: 0, hasDouble: false }
  ],
  tiles: [], // Danh sách các ô chữ cái A -> R (hoặc A -> N)
  dareUsage: {}, // { dareId: count }
  currentOpenTileIndex: null,
  currentDareId: null
};

// Timer variables
let questionTimerInterval = null;
let questionTimeLeft = 15;
let questionTimeMax = 15;
let questionTimerRunning = false;

let dareTimerInterval = null;

// Word Scramble temporary state
let scrambleSelectedWords = [];
let scrambleAvailableWords = [];

// ----------------------------------------------------------------------------
// 5. KHỞI TẠO & LƯU TRỮ TRẠNG THÁI (INIT & LOCALSTORAGE)
// ----------------------------------------------------------------------------
function buildInitialTiles(includeSpecial = true, shouldShuffle = true) {
  const pool = [...TRUTH_QUESTIONS];
  if (includeSpecial) {
    pool.push(...SPECIAL_TILES);
  }

  if (shouldShuffle) {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  }

  return pool.map((item, idx) => ({
    letter: LETTERS[idx],
    itemId: item.id,
    itemType: item.type, // 'truth' | 'scramble' | 'special'
    opened: false
  }));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.teams) && Array.isArray(parsed.tiles) && parsed.tiles.length > 0) {
        state = { ...state, ...parsed };
        return;
      }
    }
  } catch (e) {
    console.warn('Could not load saved state', e);
  }
  state.tiles = buildInitialTiles(state.includeSpecialTiles, true);
  DARE_CHALLENGES.forEach((d) => (state.dareUsage[d.id] = 0));
  saveState();
}

function findItemById(itemId) {
  return (
    TRUTH_QUESTIONS.find((q) => q.id === itemId) ||
    SPECIAL_TILES.find((s) => s.id === itemId)
  );
}

// ----------------------------------------------------------------------------
// 6. HIỂN THỊ GIAO DIỆN CHÍNH (RENDER FUNCTIONS)
// ----------------------------------------------------------------------------
function renderAll() {
  renderTopBar();
  renderScoreboard();
  renderBoard();
  populateDareDropdown();
}

function renderTopBar() {
  const modeLabel = document.getElementById('grid-mode-label');
  modeLabel.textContent = state.includeSpecialTiles ? '18 Ô' : '14 Ô';

  const specialPill = document.getElementById('special-pill-info');
  if (state.includeSpecialTiles) {
    specialPill.classList.remove('hidden');
  } else {
    specialPill.classList.add('hidden');
  }
}

function renderScoreboard() {
  const activeTeam = state.teams[state.activeTeamIndex] || state.teams[0];
  document.getElementById('active-team-banner-name').textContent = activeTeam.name;

  const multBadge = document.getElementById('active-multiplier-badge');
  if (activeTeam.hasDouble) {
    multBadge.classList.remove('hidden');
  } else {
    multBadge.classList.add('hidden');
  }

  const maxScore = Math.max(...state.teams.map((t) => t.score));

  const listEl = document.getElementById('teams-list');
  listEl.innerHTML = '';

  state.teams.forEach((team, idx) => {
    const isActive = idx === state.activeTeamIndex;
    const isLeader = maxScore > 0 && team.score === maxScore;

    const card = document.createElement('div');
    card.className = `team-card ${isActive ? 'active' : ''}`;
    card.innerHTML = `
      <div class="team-info">
        <div class="team-rank-badge">${isLeader ? '👑' : idx + 1}</div>
        <div class="team-name-wrap">
          <div class="team-name">
            <span>${team.name}</span>
            ${team.hasDouble ? '<span class="team-x2-pill" title="Đang có nhân đôi điểm">⚡x2</span>' : ''}
            <button class="team-edit-btn" data-edit-team="${idx}" title="Đổi tên nhóm">✏️</button>
          </div>
        </div>
      </div>
      <div class="team-score-controls">
        <button class="btn-score-adj minus" data-adj-team="${idx}" data-delta="-50" title="Trừ 50 điểm">-50</button>
        <div class="team-score-val">${team.score}</div>
        <button class="btn-score-adj plus" data-adj-team="${idx}" data-delta="50" title="Cộng 50 điểm">+50</button>
        <button class="btn-score-adj plus" data-adj-team="${idx}" data-delta="100" title="Cộng 100 điểm">+100</button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      sfx.playClick();
      state.activeTeamIndex = idx;
      saveState();
      renderScoreboard();
      renderModalTeamPills();
    });

    listEl.appendChild(card);
  });

  listEl.querySelectorAll('[data-adj-team]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tIdx = parseInt(btn.getAttribute('data-adj-team'), 10);
      const delta = parseInt(btn.getAttribute('data-delta'), 10);
      adjustTeamScore(tIdx, delta);
    });
  });

  listEl.querySelectorAll('[data-edit-team]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tIdx = parseInt(btn.getAttribute('data-edit-team'), 10);
      const currentName = state.teams[tIdx].name;
      const newName = prompt('Nhập tên mới cho nhóm:', currentName);
      if (newName && newName.trim()) {
        state.teams[tIdx].name = newName.trim().toUpperCase();
        saveState();
        renderScoreboard();
        renderModalTeamPills();
      }
    });
  });
}

function adjustTeamScore(teamIdx, delta, customMessage = null) {
  if (!state.teams[teamIdx]) return;
  state.teams[teamIdx].score += delta;
  if (delta > 0) sfx.playClick();
  saveState();
  renderScoreboard();
  renderModalTeamPills();
  const sign = delta >= 0 ? `+${delta}` : `${delta}`;
  showToast(customMessage || `${state.teams[teamIdx].name}: ${sign} điểm!`);
}

// Render 3D Flip Letter Grid
function renderBoard() {
  const grid = document.getElementById('letter-grid');
  grid.innerHTML = '';

  if (state.includeSpecialTiles) {
    grid.classList.remove('grid-14');
  } else {
    grid.classList.add('grid-14');
  }

  const remaining = state.tiles.filter((t) => !t.opened).length;
  document.getElementById('remaining-count').textContent = remaining;
  document.getElementById('total-count').textContent = state.tiles.length;

  state.tiles.forEach((tile, idx) => {
    const item = findItemById(tile.itemId);
    const isSpecial = item && item.type === 'special';

    const tileEl = document.createElement('div');
    tileEl.className = `letter-tile ${tile.opened ? 'opened' : ''} ${
      tile.opened && isSpecial ? 'opened-special' : ''
    }`;

    const subHtml = tile.opened
      ? `<div class="tile-sub">${isSpecial ? '✨ ĐẶC BIỆT' : '✔ ĐÃ MỞ'}</div>`
      : '';

    const backIcon = isSpecial ? item.icon : item && item.themeIcon ? item.themeIcon : '📘';

    tileEl.innerHTML = `
      <div class="tile-inner">
        <div class="tile-face tile-front">
          <span class="tile-corner-star">★</span>
          ${tile.opened ? `<div class="tile-opened-icon">${backIcon}</div>` : ''}
          <div class="tile-letter">${tile.letter}</div>
          ${subHtml}
        </div>
        <div class="tile-face tile-back">
          <div class="tile-back-icon">${backIcon}</div>
        </div>
      </div>
    `;

    // Left click: 3D Flip animation then open modal
    tileEl.addEventListener('click', () => {
      if (!tile.opened) {
        tileEl.classList.add('flipping');
        sfx.playTileOpen();
        setTimeout(() => {
          tileEl.classList.remove('flipping');
          openTileModal(idx);
        }, 340);
      } else {
        openTileModal(idx);
      }
    });

    // Right click: toggle opened/unopened state quickly for Host
    tileEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      sfx.playClick();
      tile.opened = !tile.opened;
      saveState();
      renderBoard();
      showToast(`Ô chữ ${tile.letter}: Đã chuyển thành "${tile.opened ? 'ĐÃ MỞ' : 'CHƯA MỞ'}"`);
    });

    grid.appendChild(tileEl);
  });
}

function renderModalTeamPills() {
  const containers = [
    document.getElementById('modal-team-pills'),
    document.getElementById('dare-team-pills')
  ];

  containers.forEach((container) => {
    if (!container) return;
    container.innerHTML = '';
    state.teams.forEach((team, idx) => {
      const btn = document.createElement('button');
      btn.className = `team-pill-btn ${idx === state.activeTeamIndex ? 'active' : ''}`;
      btn.textContent = `${team.name} (${team.score}đ)${team.hasDouble ? ' ⚡x2' : ''}`;
      btn.addEventListener('click', () => {
        sfx.playClick();
        state.activeTeamIndex = idx;
        saveState();
        renderScoreboard();
        renderModalTeamPills();
        updateAwardButtonLabel();
      });
      container.appendChild(btn);
    });
  });
}

// ----------------------------------------------------------------------------
// 7. XỬ LÝ MỞ Ô CHỮ CÁI (TRUTH QUESTION / SCRAMBLE / SPECIAL TILE)
// ----------------------------------------------------------------------------
function openTileModal(tileIndex) {
  state.currentOpenTileIndex = tileIndex;
  const tile = state.tiles[tileIndex];
  const item = findItemById(tile.itemId);
  if (!item) return;

  const modal = document.getElementById('question-modal');
  modal.classList.remove('hidden');

  renderModalTeamPills();

  document.getElementById('q-letter-badge').textContent = `Ô ${tile.letter}`;

  const typeBadge = document.getElementById('q-type-badge');
  const pointsBadge = document.getElementById('q-points-badge');
  const timerWidget = document.getElementById('q-timer-widget');
  const themeBanner = document.getElementById('q-theme-banner');
  const qText = document.getElementById('q-text');
  const optionsGrid = document.getElementById('q-options-grid');
  const scrambleContainer = document.getElementById('q-scramble-container');
  const specialContainer = document.getElementById('q-special-container');
  const feedbackBanner = document.getElementById('q-feedback-banner');

  const btnReveal = document.getElementById('btn-reveal-answer');
  const btnResetTry = document.getElementById('btn-reset-question-try');
  const btnTriggerDare = document.getElementById('btn-trigger-dare-from-q');
  const btnAwardPoints = document.getElementById('btn-award-points');

  feedbackBanner.classList.add('hidden');
  feedbackBanner.classList.remove('wrong-banner');
  btnAwardPoints.classList.remove('pulse-cta');
  themeBanner.classList.add('hidden');

  stopQuestionTimer();
  resetQuestionTimer(item.type === 'scramble' ? 20 : 15);

  if (item.type === 'special') {
    sfx.playSpecialTile();
    confetti.burst(75);

    typeBadge.textContent = '✨ Ô ĐẶC BIỆT';
    pointsBadge.textContent = `+${item.points}đ`;
    timerWidget.classList.add('hidden');
    qText.classList.add('hidden');
    optionsGrid.classList.add('hidden');
    scrambleContainer.classList.add('hidden');
    specialContainer.classList.remove('hidden');

    btnReveal.classList.add('hidden');
    btnResetTry.classList.add('hidden');
    btnTriggerDare.classList.add('hidden');
    btnAwardPoints.classList.add('hidden');

    renderSpecialTileContent(item, tileIndex);
  } else {
    timerWidget.classList.remove('hidden');
    qText.classList.remove('hidden');
    qText.textContent = item.question;
    specialContainer.classList.add('hidden');

    btnReveal.classList.remove('hidden');
    btnResetTry.classList.remove('hidden');
    btnTriggerDare.classList.remove('hidden');
    btnAwardPoints.classList.remove('hidden');

    if (item.type === 'scramble') {
      typeBadge.textContent = '🧩 GHÉP TỪ';
      pointsBadge.textContent = `+${getEffectivePoints(item.points)}đ`;
      optionsGrid.classList.add('hidden');
      scrambleContainer.classList.remove('hidden');
      initScrambleUI(item);
    } else {
      typeBadge.textContent = '📘 TRUTH';
      pointsBadge.textContent = `+${getEffectivePoints(item.points)}đ`;
      optionsGrid.classList.remove('hidden');
      scrambleContainer.classList.add('hidden');
      renderMultipleChoiceOptions(item);
    }
    updateAwardButtonLabel();
  }
}

function getEffectivePoints(basePoints = 100) {
  const activeTeam = state.teams[state.activeTeamIndex];
  return activeTeam && activeTeam.hasDouble ? basePoints * 2 : basePoints;
}

function updateAwardButtonLabel() {
  const tile = state.tiles[state.currentOpenTileIndex];
  if (!tile) return;
  const item = findItemById(tile.itemId);
  if (!item) return;
  const pts = getEffectivePoints(item.points || 100);
  document.getElementById('award-pts-val').textContent = `+${pts}`;
  document.getElementById('q-points-badge').textContent = `+${pts}đ`;
}

function renderMultipleChoiceOptions(item) {
  const grid = document.getElementById('q-options-grid');
  grid.innerHTML = '';

  item.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('data-key', opt.key);
    btn.innerHTML = `
      <span class="option-key">${opt.key}</span>
      <span class="option-text">${opt.text}</span>
    `;

    btn.addEventListener('click', () => {
      handleSelectOption(item, opt.key, btn);
    });

    grid.appendChild(btn);
  });
}

function handleSelectOption(item, selectedKey, btnEl) {
  if (btnEl.classList.contains('disabled')) return;
  stopQuestionTimer();
  const feedbackBanner = document.getElementById('q-feedback-banner');
  const feedbackIcon = document.getElementById('q-feedback-icon');
  const feedbackTitle = document.getElementById('q-feedback-title');
  const feedbackAnswer = document.getElementById('q-feedback-answer');

  feedbackBanner.classList.remove('hidden');

  if (selectedKey === item.correctKey) {
    btnEl.classList.add('correct');
    document.querySelectorAll('#q-options-grid .option-btn').forEach((b) => b.classList.add('disabled'));
    document.getElementById('btn-award-points').classList.add('pulse-cta');
    sfx.playCorrect();
    confetti.burst(105);

    feedbackBanner.classList.remove('wrong-banner');
    feedbackIcon.textContent = '🎉';
    feedbackTitle.textContent = `CHÍNH XÁC! (${state.teams[state.activeTeamIndex].name})`;
    feedbackAnswer.textContent = item.explanation || '';
  } else {
    btnEl.classList.add('wrong', 'disabled');
    sfx.playWrong();

    feedbackBanner.classList.add('wrong-banner');
    feedbackIcon.textContent = '💥';
    feedbackTitle.textContent = `CHƯA ĐÚNG! (${state.teams[state.activeTeamIndex].name} chọn ${selectedKey})`;
    feedbackAnswer.textContent = 'Bấm "🔥 Phạt DARE" hoặc chọn nhóm khác để cướp cờ.';
  }
}

// Word Scramble Logic (Question 10)
function initScrambleUI(item) {
  scrambleAvailableWords = [...item.scrambleWords];
  scrambleSelectedWords = [];
  renderScrambleBoxes();
}

function renderScrambleBoxes() {
  const poolEl = document.getElementById('scramble-pool');
  const answerEl = document.getElementById('scramble-answer-box');
  poolEl.innerHTML = '';
  answerEl.innerHTML = '';

  scrambleAvailableWords.forEach((word, i) => {
    const chip = document.createElement('button');
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.addEventListener('click', () => {
      sfx.playClick();
      scrambleSelectedWords.push(word);
      scrambleAvailableWords.splice(i, 1);
      renderScrambleBoxes();
    });
    poolEl.appendChild(chip);
  });

  if (scrambleSelectedWords.length === 0) {
    answerEl.innerHTML = '<span class="placeholder-text">Click vào các từ phía trên để xếp vào đây...</span>';
  } else {
    scrambleSelectedWords.forEach((word, i) => {
      const chip = document.createElement('button');
      chip.className = 'word-chip';
      chip.textContent = word;
      chip.addEventListener('click', () => {
        sfx.playClick();
        scrambleAvailableWords.push(word);
        scrambleSelectedWords.splice(i, 1);
        renderScrambleBoxes();
      });
      answerEl.appendChild(chip);
    });
  }
}

function checkScrambleAnswer() {
  const tile = state.tiles[state.currentOpenTileIndex];
  const item = findItemById(tile.itemId);
  if (!item || item.type !== 'scramble') return;

  stopQuestionTimer();
  const userPhrase = scrambleSelectedWords.join(' ').trim().toUpperCase();
  const feedbackBanner = document.getElementById('q-feedback-banner');
  const feedbackIcon = document.getElementById('q-feedback-icon');
  const feedbackTitle = document.getElementById('q-feedback-title');
  const feedbackAnswer = document.getElementById('q-feedback-answer');

  feedbackBanner.classList.remove('hidden');

  if (userPhrase === item.targetPhrase) {
    sfx.playCorrect();
    confetti.burst(110);
    feedbackBanner.classList.remove('wrong-banner');
    feedbackIcon.textContent = '🎉';
    feedbackTitle.textContent = 'GIẢI MÃ THÀNH CÔNG!';
    feedbackAnswer.textContent = item.explanation;
  } else {
    sfx.playWrong();
    feedbackBanner.classList.add('wrong-banner');
    feedbackIcon.textContent = '💥';
    feedbackTitle.textContent = `CHƯA ĐÚNG THỨ TỰ! (Bạn xếp: "${userPhrase || '...'}")`;
    feedbackAnswer.textContent = 'Hãy thử xếp lại hoặc chịu phạt DARE nhé!';
  }
}

// Render Special Tile Content
function renderSpecialTileContent(item, tileIndex) {
  document.getElementById('special-icon').textContent = item.icon;
  document.getElementById('special-title').textContent = item.title;
  document.getElementById('special-desc').textContent = item.description;

  const actionsEl = document.getElementById('special-actions');
  actionsEl.innerHTML = '';

  const activeTeam = state.teams[state.activeTeamIndex];

  if (item.specialKind === 'lucky_star') {
    const btn = document.createElement('button');
    btn.className = 'btn-host-action btn-award-points';
    btn.textContent = `🎉 Cộng ngay +100đ cho ${activeTeam.name} & Qua lượt`;
    btn.addEventListener('click', () => {
      awardPointsAndCloseTile(100, true);
    });
    actionsEl.appendChild(btn);
  } else if (item.specialKind === 'double_power') {
    const btnActivateX2 = document.createElement('button');
    btnActivateX2.className = 'btn-host-action btn-reveal';
    btnActivateX2.textContent = `⚡ Kích hoạt Nhân Đôi (x2) câu tiếp theo cho ${activeTeam.name}`;
    btnActivateX2.addEventListener('click', () => {
      state.teams[state.activeTeamIndex].hasDouble = true;
      state.tiles[tileIndex].opened = true;
      saveState();
      closeQuestionModal();
      renderAll();
      showToast(`⚡ ${activeTeam.name} đã kích hoạt Nhân Đôi Điểm (x2) cho câu tiếp theo!`);
    });

    const btnInstant150 = document.createElement('button');
    btnInstant150.className = 'btn-host-action btn-award-points';
    btnInstant150.textContent = `💰 Nhận luôn +150đ ngay bây giờ`;
    btnInstant150.addEventListener('click', () => {
      awardPointsAndCloseTile(150, true);
    });

    actionsEl.appendChild(btnActivateX2);
    actionsEl.appendChild(btnInstant150);
  } else if (item.specialKind === 'instant_dare') {
    const btnGoDare = document.createElement('button');
    btnGoDare.className = 'btn-host-action btn-wrong-dare';
    btnGoDare.textContent = `🔥 Bốc Thử Thách DARE ngay (Làm xong nhận +100đ!)`;
    btnGoDare.addEventListener('click', () => {
      state.tiles[tileIndex].opened = true;
      saveState();
      closeQuestionModal();
      renderBoard();
      openDareModal(true);
    });
    actionsEl.appendChild(btnGoDare);
  } else if (item.specialKind === 'friendship_integration') {
    const partnerBox = document.createElement('div');
    partnerBox.className = 'special-partner-box';
    partnerBox.innerHTML = `<div class="special-partner-label">🎁 Chọn 1 nhóm bạn để tặng +50đ hữu nghị (và +100đ cho ${activeTeam.name}):</div>`;
    const partnerGrid = document.createElement('div');
    partnerGrid.className = 'special-partner-grid';

    state.teams.forEach((t, tIdx) => {
      if (tIdx === state.activeTeamIndex) return;
      const pBtn = document.createElement('button');
      pBtn.className = 'btn-host-action btn-reveal';
      pBtn.textContent = `🤝 Tặng +50đ cho ${t.name}`;
      pBtn.addEventListener('click', () => {
        state.teams[tIdx].score += 50;
        showToast(`🤝 ${t.name} nhận +50đ hữu nghị từ ${activeTeam.name}!`);
        awardPointsAndCloseTile(100, true);
      });
      partnerGrid.appendChild(pBtn);
    });

    partnerBox.appendChild(partnerGrid);
    actionsEl.appendChild(partnerBox);

    const btnSelf = document.createElement('button');
    btnSelf.className = 'btn-host-action btn-award-points';
    btnSelf.textContent = `✅ Chỉ cộng +100đ cho ${activeTeam.name} & Qua lượt`;
    btnSelf.addEventListener('click', () => {
      awardPointsAndCloseTile(100, true);
    });
    actionsEl.appendChild(btnSelf);
  }
}

function revealCorrectAnswer() {
  const tile = state.tiles[state.currentOpenTileIndex];
  if (!tile) return;
  const item = findItemById(tile.itemId);
  if (!item) return;

  stopQuestionTimer();
  sfx.playCorrect();
  document.getElementById('btn-award-points').classList.add('pulse-cta');

  const feedbackBanner = document.getElementById('q-feedback-banner');
  const feedbackIcon = document.getElementById('q-feedback-icon');
  const feedbackTitle = document.getElementById('q-feedback-title');
  const feedbackAnswer = document.getElementById('q-feedback-answer');

  feedbackBanner.classList.remove('hidden', 'wrong-banner');
  feedbackIcon.textContent = '💡';

  if (item.type === 'scramble') {
    scrambleSelectedWords = item.targetPhrase.split(' ');
    scrambleAvailableWords = [];
    renderScrambleBoxes();
    feedbackTitle.textContent = `ĐÁP ÁN: ${item.targetPhrase}`;
    feedbackAnswer.textContent = item.explanation;
  } else {
    const buttons = document.querySelectorAll('#q-options-grid .option-btn');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-key') === item.correctKey) {
        btn.classList.add('correct');
      }
    });
    const correctOpt = item.options.find((o) => o.key === item.correctKey);
    feedbackTitle.textContent = `ĐÁP ÁN ĐÚNG: ${item.correctKey}. ${correctOpt ? correctOpt.text : ''}`;
    feedbackAnswer.textContent = item.explanation || '';
  }
}

function awardPointsAndCloseTile(customPoints = null, autoAdvanceTurn = true) {
  const tile = state.tiles[state.currentOpenTileIndex];
  if (!tile) return;
  const item = findItemById(tile.itemId);

  const activeTeam = state.teams[state.activeTeamIndex];
  const basePts = customPoints !== null ? customPoints : item.points || 100;
  const finalPts = customPoints !== null ? customPoints : getEffectivePoints(basePts);

  activeTeam.score += finalPts;
  if (activeTeam.hasDouble && customPoints === null) {
    activeTeam.hasDouble = false;
  }

  tile.opened = true;
  sfx.playCorrect();
  confetti.burst(95);

  showToast(`🏆 ${activeTeam.name} nhận +${finalPts} điểm!`);

  if (autoAdvanceTurn) {
    advanceToNextTeam();
  }

  saveState();
  closeQuestionModal();
  renderAll();
}

function closeQuestionModal() {
  stopQuestionTimer();
  document.getElementById('question-modal').classList.add('hidden');
}

function advanceToNextTeam() {
  const nextIdx = (state.activeTeamIndex + 1) % state.teams.length;
  if (nextIdx === 0 && state.currentRound === 1) {
    state.currentRound = 2;
    showToast('🚀 Đã hết lượt 6 nhóm ở Vòng 1! Chuyển sang VÒNG 2!');
  }
  state.activeTeamIndex = nextIdx;
  saveState();
  renderAll();
}

// ----------------------------------------------------------------------------
// 8. ĐỒNG HỒ ĐẾM NGƯỢC CÂU HỎI (SVG CIRCULAR RING TIMER)
// ----------------------------------------------------------------------------
function updateTimerDisplay() {
  const secEl = document.getElementById('q-timer-seconds');
  const circleWrap = document.getElementById('q-timer-circle');
  const ringBar = document.getElementById('q-timer-ring-bar');

  secEl.textContent = questionTimeLeft;
  const circumference = 125.6;
  const ratio = Math.max(0, Math.min(1, questionTimeLeft / (questionTimeMax || 15)));
  const offset = circumference * (1 - ratio);
  if (ringBar) {
    ringBar.style.strokeDashoffset = `${offset}`;
  }

  if (questionTimeLeft <= 5) {
    circleWrap.classList.add('urgent');
  } else {
    circleWrap.classList.remove('urgent');
  }
}

function toggleQuestionTimer() {
  const btn = document.getElementById('btn-timer-toggle');
  if (questionTimerRunning) {
    stopQuestionTimer();
  } else {
    if (questionTimeLeft <= 0) {
      questionTimeLeft = 15;
      questionTimeMax = 15;
    }
    questionTimerRunning = true;
    btn.textContent = '⏸ Dừng';
    questionTimerInterval = setInterval(() => {
      questionTimeLeft--;
      updateTimerDisplay();
      if (questionTimeLeft > 0) {
        sfx.playTick(questionTimeLeft <= 5);
      } else {
        stopQuestionTimer();
        sfx.playWrong();
        showToast('⏰ HẾT GIỜ!');
      }
    }, 1000);
  }
}

function stopQuestionTimer() {
  questionTimerRunning = false;
  if (questionTimerInterval) {
    clearInterval(questionTimerInterval);
    questionTimerInterval = null;
  }
  const btn = document.getElementById('btn-timer-toggle');
  if (btn) btn.textContent = '▶ Đếm giờ';
}

function resetQuestionTimer(sec = 15) {
  stopQuestionTimer();
  questionTimeLeft = sec;
  questionTimeMax = sec;
  updateTimerDisplay();
}

// ----------------------------------------------------------------------------
// 9. VÒNG QUAY / BỐC THẺ HÌNH PHẠT DARE (ROYAL TAROT GACHA MODAL)
// ----------------------------------------------------------------------------
function populateDareDropdown() {
  const select = document.getElementById('select-specific-dare');
  if (!select) return;
  select.innerHTML = '<option value="">📋 Chọn nhanh...</option>';
  DARE_CHALLENGES.forEach((d) => {
    const count = state.dareUsage[d.id] || 0;
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `#${d.id} (${count}/2): ${d.text.slice(0, 42)}...`;
    select.appendChild(opt);
  });
}

function openDareModal(autoSpin = true) {
  const modal = document.getElementById('dare-modal');
  modal.classList.remove('hidden');
  renderModalTeamPills();
  populateDareDropdown();
  stopDareActionTimer();

  if (autoSpin) {
    spinRandomDare();
  }
}

function closeDareModal() {
  stopDareActionTimer();
  document.getElementById('dare-modal').classList.add('hidden');
}

function spinRandomDare() {
  const slotEl = document.getElementById('dare-card-slot');
  const numBadge = document.getElementById('dare-number-badge');
  const iconEl = document.getElementById('dare-card-icon');
  const textEl = document.getElementById('dare-card-text');

  let availableDares = DARE_CHALLENGES.filter((d) => (state.dareUsage[d.id] || 0) < 2);
  if (availableDares.length === 0) {
    DARE_CHALLENGES.forEach((d) => (state.dareUsage[d.id] = 0));
    availableDares = [...DARE_CHALLENGES];
    showToast('♻️ Cả 12 thử thách Dare đã xuất hiện đủ 2 lần — Đã làm mới kho Dare!');
  }

  if (availableDares.length > 1 && state.currentDareId) {
    availableDares = availableDares.filter((d) => d.id !== state.currentDareId);
  }

  const chosen = availableDares[Math.floor(Math.random() * availableDares.length)];

  slotEl.classList.add('spinning');
  let ticks = 0;
  const maxTicks = 14;

  const spinInterval = setInterval(() => {
    const temp = DARE_CHALLENGES[ticks % DARE_CHALLENGES.length];
    numBadge.textContent = `ĐANG RÚT THẺ... #${temp.id}`;
    iconEl.textContent = temp.icon;
    textEl.textContent = temp.text;
    sfx.playSpinTick();
    ticks++;

    if (ticks >= maxTicks) {
      clearInterval(spinInterval);
      slotEl.classList.remove('spinning');
      displayChosenDare(chosen, true);
    }
  }, 65);
}

function displayChosenDare(dareObj, incrementCount = true) {
  state.currentDareId = dareObj.id;
  if (incrementCount) {
    state.dareUsage[dareObj.id] = (state.dareUsage[dareObj.id] || 0) + 1;
    saveState();
  }

  sfx.playDareReveal();

  document.getElementById('dare-number-badge').textContent = `THỬ THÁCH DARE #${dareObj.id}`;
  document.getElementById('dare-card-icon').textContent = dareObj.icon;
  document.getElementById('dare-card-text').textContent = dareObj.text;
  document.getElementById('dare-repeat-tag').textContent = `Số lần xuất hiện: ${
    state.dareUsage[dareObj.id] || 1
  } / 2 lần`;

  const recBadge = document.getElementById('dare-recommend-5s');
  const btn5s = document.getElementById('btn-dare-5s');
  if (recBadge && btn5s) {
    if (dareObj.hasFiveSec) {
      recBadge.classList.remove('hidden');
      btn5s.classList.add('recommended');
    } else {
      recBadge.classList.add('hidden');
      btn5s.classList.remove('recommended');
    }
  }

  populateDareDropdown();
}

// 5-Second / 10-Second Action Timer with Smooth Progress Bar
function startDareActionTimer(seconds) {
  stopDareActionTimer();
  const display = document.getElementById('dare-countdown-big');
  const track = document.getElementById('dare-progress-track');
  const fill = document.getElementById('dare-progress-fill');

  display.classList.remove('hidden');
  track.classList.remove('hidden');
  fill.style.width = '100%';

  const totalMs = seconds * 1000;
  let remainingMs = totalMs;
  display.textContent = `${(remainingMs / 1000).toFixed(1)}s`;
  sfx.playClick();

  dareTimerInterval = setInterval(() => {
    remainingMs -= 100;
    if (remainingMs > 0) {
      display.textContent = `${(remainingMs / 1000).toFixed(1)}s`;
      fill.style.width = `${(remainingMs / totalMs) * 100}%`;
      if (remainingMs % 1000 === 0) {
        sfx.playTick(remainingMs <= 3000);
      }
    } else {
      stopDareActionTimer();
      display.classList.remove('hidden');
      display.textContent = '🎉 HẾT GIỜ!';
      sfx.playCorrect();
      confetti.burst(65);
    }
  }, 100);
}

function stopDareActionTimer() {
  if (dareTimerInterval) {
    clearInterval(dareTimerInterval);
    dareTimerInterval = null;
  }
  const display = document.getElementById('dare-countdown-big');
  const track = document.getElementById('dare-progress-track');
  if (display) display.classList.add('hidden');
  if (track) track.classList.add('hidden');
}

// ----------------------------------------------------------------------------
// 10. BỤC VINH QUANG TOP 3 CHUNG CUỘC (VICTORY PODIUM MODAL)
// ----------------------------------------------------------------------------
function openPodiumModal() {
  const modal = document.getElementById('podium-modal');
  modal.classList.remove('hidden');

  sfx.playFanfare();
  confetti.burst(150);

  // Sort teams by score descending
  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const first = sorted[0];
  const second = sorted[1];
  const third = sorted[2];
  const runners = sorted.slice(3);

  const stageEl = document.getElementById('podium-stage');
  stageEl.innerHTML = `
    <!-- 2ND PLACE -->
    <div class="podium-column">
      <div class="podium-team-Avatar">🥈</div>
      <div class="podium-team-name">${second.name}</div>
      <div class="podium-team-score">${second.score} ĐIỂM</div>
      <div class="podium-pillar pillar-2">2</div>
    </div>

    <!-- 1ST PLACE -->
    <div class="podium-column">
      <div class="podium-team-Avatar">👑🥇</div>
      <div class="podium-team-name">${first.name}</div>
      <div class="podium-team-score">${first.score} ĐIỂM</div>
      <div class="podium-pillar pillar-1">1</div>
    </div>

    <!-- 3RD PLACE -->
    <div class="podium-column">
      <div class="podium-team-Avatar">🥉</div>
      <div class="podium-team-name">${third.name}</div>
      <div class="podium-team-score">${third.score} ĐIỂM</div>
      <div class="podium-pillar pillar-3">3</div>
    </div>
  `;

  const runnersEl = document.getElementById('podium-runners');
  runnersEl.innerHTML = '';
  runners.forEach((team, idx) => {
    const card = document.createElement('div');
    card.className = 'runner-card';
    card.innerHTML = `
      <span>Hạng ${idx + 4}: <strong>${team.name}</strong></span>
      <span class="runner-score">${team.score} điểm</span>
    `;
    runnersEl.appendChild(card);
  });
}

// ----------------------------------------------------------------------------
// 11. BẢNG QUẢN LÝ CỦA HOST (HOST MANAGER MODAL)
// ----------------------------------------------------------------------------
function openManagerModal() {
  const modal = document.getElementById('manager-modal');
  modal.classList.remove('hidden');

  const qList = document.getElementById('manager-questions-list');
  const dList = document.getElementById('manager-dares-list');
  qList.innerHTML = '';
  dList.innerHTML = '';

  state.tiles.forEach((tile, idx) => {
    const item = findItemById(tile.itemId);
    if (!item) return;

    const row = document.createElement('div');
    row.className = 'manager-item';
    const label =
      item.type === 'special'
        ? `[Ô ${tile.letter} • ĐẶC BIỆT] ${item.title}`
        : `[Ô ${tile.letter}] ${item.question}`;

    row.innerHTML = `
      <div class="manager-item-text">
        <strong>${tile.opened ? '✅ Đã mở' : '🟦 Chưa mở'}</strong> — ${label}
      </div>
      <div class="manager-item-actions">
        <button class="btn-mini" data-mgr-open-tile="${idx}">Mở lên</button>
        <button class="btn-mini" data-mgr-toggle-tile="${idx}">${
      tile.opened ? 'Đặt lại Chưa mở' : 'Đánh dấu Đã mở'
    }</button>
      </div>
    `;
    qList.appendChild(row);
  });

  qList.querySelectorAll('[data-mgr-open-tile]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-mgr-open-tile'), 10);
      modal.classList.add('hidden');
      openTileModal(idx);
    });
  });

  qList.querySelectorAll('[data-mgr-toggle-tile]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-mgr-toggle-tile'), 10);
      state.tiles[idx].opened = !state.tiles[idx].opened;
      saveState();
      renderBoard();
      openManagerModal();
    });
  });

  DARE_CHALLENGES.forEach((d) => {
    const used = state.dareUsage[d.id] || 0;
    const row = document.createElement('div');
    row.className = 'manager-item';
    row.innerHTML = `
      <div class="manager-item-text">
        <strong>Dare #${d.id} (${used}/2 lần)</strong>: ${d.text}
      </div>
      <div class="manager-item-actions">
        <button class="btn-mini" data-mgr-launch-dare="${d.id}">Phát Dare này</button>
      </div>
    `;
    dList.appendChild(row);
  });

  dList.querySelectorAll('[data-mgr-launch-dare]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dId = parseInt(btn.getAttribute('data-mgr-launch-dare'), 10);
      const dareObj = DARE_CHALLENGES.find((x) => x.id === dId);
      if (dareObj) {
        modal.classList.add('hidden');
        openDareModal(false);
        displayChosenDare(dareObj, true);
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 12. TIỆN ÍCH THÔNG BÁO NHANH (TOAST)
// ----------------------------------------------------------------------------
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ----------------------------------------------------------------------------
// 13. KẾT NỐI SỰ KIỆN NÚT BẤM & PHÍM TẮT (EVENT LISTENERS)
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderAll();

  // Next Turn button
  document.getElementById('btn-next-turn').addEventListener('click', () => {
    sfx.playClick();
    advanceToNextTeam();
    showToast(`👉 Chuyển lượt sang ${state.teams[state.activeTeamIndex].name}`);
  });

  // Open Dare directly from top toolbar
  document.getElementById('btn-open-dare-direct').addEventListener('click', () => {
    sfx.playClick();
    openDareModal(true);
  });

  // Open Top 3 Podium directly from top toolbar
  document.getElementById('btn-open-podium').addEventListener('click', () => {
    openPodiumModal();
  });

  document.getElementById('btn-close-podium').addEventListener('click', () => {
    document.getElementById('podium-modal').classList.add('hidden');
  });

  document.getElementById('btn-podium-close-btn').addEventListener('click', () => {
    document.getElementById('podium-modal').classList.add('hidden');
  });

  document.getElementById('btn-podium-fireworks').addEventListener('click', () => {
    sfx.playFanfare();
    confetti.burst(150);
  });

  // Toggle between 18 tiles (with 4 Special tiles) and 14 tiles (only 14 Truth questions)
  document.getElementById('btn-toggle-grid-mode').addEventListener('click', () => {
    sfx.playClick();
    state.includeSpecialTiles = !state.includeSpecialTiles;
    state.tiles = buildInitialTiles(state.includeSpecialTiles, true);
    saveState();
    renderAll();
    showToast(
      state.includeSpecialTiles
        ? '🎲 Đã chuyển sang Bảng 18 Chữ Cái (14 Câu hỏi + 4 Ô Đặc Biệt)!'
        : '📘 Đã chuyển sang Bảng 14 Chữ Cái (14 Câu hỏi gốc từ Docx)!'
    );
  });

  // Shuffle tiles
  document.getElementById('btn-shuffle-board').addEventListener('click', () => {
    sfx.playTileOpen();
    state.tiles = buildInitialTiles(state.includeSpecialTiles, true);
    saveState();
    renderBoard();
    showToast('🔀 Đã xáo trộn ngẫu nhiên vị trí các câu hỏi và ô đặc biệt!');
  });

  // Sound toggle
  document.getElementById('btn-sound-toggle').addEventListener('click', (e) => {
    sfx.enabled = !sfx.enabled;
    e.currentTarget.textContent = sfx.enabled ? '🔊' : '🔇';
    if (sfx.enabled) sfx.playClick();
  });

  // Fullscreen toggle
  document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Manager Modal
  document.getElementById('btn-manage-data').addEventListener('click', () => {
    sfx.playClick();
    openManagerModal();
  });
  document.getElementById('btn-close-manager').addEventListener('click', () => {
    document.getElementById('manager-modal').classList.add('hidden');
  });

  document.getElementById('btn-reset-all-game').addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn Reset toàn bộ điểm số 6 nhóm và mở lại tất cả các ô chữ?')) {
      state.teams.forEach((t) => {
        t.score = 0;
        t.hasDouble = false;
      });
      state.currentRound = 1;
      state.activeTeamIndex = 0;
      state.tiles = buildInitialTiles(state.includeSpecialTiles, true);
      DARE_CHALLENGES.forEach((d) => (state.dareUsage[d.id] = 0));
      saveState();
      renderAll();
      document.getElementById('manager-modal').classList.add('hidden');
      showToast('♻️ Đã Reset toàn bộ trò chơi về ban đầu!');
    }
  });

  document.getElementById('btn-reset-board-only').addEventListener('click', () => {
    state.tiles.forEach((t) => (t.opened = false));
    saveState();
    renderBoard();
    openManagerModal();
    showToast('🔄 Đã mở lại tất cả các ô chữ cái (giữ nguyên điểm 6 nhóm)!');
  });

  document.getElementById('btn-reset-dare-counts').addEventListener('click', () => {
    DARE_CHALLENGES.forEach((d) => (state.dareUsage[d.id] = 0));
    saveState();
    openManagerModal();
    showToast('♻️ Đã reset số lần xuất hiện của 12 thử thách Dare về 0!');
  });

  // Question Modal buttons
  document.getElementById('btn-close-question').addEventListener('click', closeQuestionModal);
  document.getElementById('btn-timer-toggle').addEventListener('click', toggleQuestionTimer);
  document.getElementById('btn-timer-reset').addEventListener('click', () => resetQuestionTimer(15));
  document.getElementById('btn-timer-add').addEventListener('click', () => {
    questionTimeLeft += 10;
    questionTimeMax = Math.max(questionTimeMax, questionTimeLeft);
    updateTimerDisplay();
  });

  document.getElementById('btn-scramble-clear').addEventListener('click', () => {
    const tile = state.tiles[state.currentOpenTileIndex];
    const item = findItemById(tile.itemId);
    if (item && item.type === 'scramble') {
      sfx.playClick();
      initScrambleUI(item);
    }
  });

  document.getElementById('btn-scramble-check').addEventListener('click', checkScrambleAnswer);

  document.getElementById('btn-reveal-answer').addEventListener('click', revealCorrectAnswer);

  document.getElementById('btn-reset-question-try').addEventListener('click', () => {
    const tile = state.tiles[state.currentOpenTileIndex];
    if (!tile) return;
    const item = findItemById(tile.itemId);
    if (!item) return;
    sfx.playClick();
    document.getElementById('q-feedback-banner').classList.add('hidden');
    if (item.type === 'scramble') {
      initScrambleUI(item);
    } else {
      renderMultipleChoiceOptions(item);
    }
    resetQuestionTimer(10);
    showToast('🔄 Đã làm mới đáp án! Hãy click chọn Nhóm cướp cờ ở thanh phía trên!');
  });

  document.getElementById('btn-trigger-dare-from-q').addEventListener('click', () => {
    const tile = state.tiles[state.currentOpenTileIndex];
    if (tile) tile.opened = true;
    saveState();
    closeQuestionModal();
    renderBoard();
    openDareModal(true);
  });

  document.getElementById('btn-award-points').addEventListener('click', () => {
    awardPointsAndCloseTile(null, true);
  });

  document.getElementById('btn-close-mark-done').addEventListener('click', () => {
    const tile = state.tiles[state.currentOpenTileIndex];
    if (tile) tile.opened = true;
    saveState();
    closeQuestionModal();
    renderBoard();
  });

  // Dare Modal buttons
  document.getElementById('btn-close-dare').addEventListener('click', closeDareModal);
  document.getElementById('btn-spin-dare').addEventListener('click', spinRandomDare);

  document.getElementById('select-specific-dare').addEventListener('change', (e) => {
    const val = parseInt(e.target.value, 10);
    if (!val) return;
    const dareObj = DARE_CHALLENGES.find((d) => d.id === val);
    if (dareObj) {
      displayChosenDare(dareObj, true);
    }
  });

  document.querySelectorAll('.btn-dare-timer[data-sec]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sec = parseInt(btn.getAttribute('data-sec'), 10);
      startDareActionTimer(sec);
    });
  });

  document.getElementById('btn-stop-dare-timer').addEventListener('click', stopDareActionTimer);

  document.getElementById('btn-dare-award-bonus').addEventListener('click', () => {
    const activeTeam = state.teams[state.activeTeamIndex];
    activeTeam.score += 50;
    sfx.playCorrect();
    confetti.burst(75);
    showToast(`👏 Thưởng nóng +50đ khích lệ cho ${activeTeam.name}!`);
    advanceToNextTeam();
    closeDareModal();
  });

  document.getElementById('btn-dare-complete').addEventListener('click', () => {
    sfx.playCorrect();
    confetti.burst(55);
    showToast(`✅ ${state.teams[state.activeTeamIndex].name} đã hoàn thành thử thách Dare!`);
    advanceToNextTeam();
    closeDareModal();
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const qModalOpen = !document.getElementById('question-modal').classList.contains('hidden');
    const dareModalOpen = !document.getElementById('dare-modal').classList.contains('hidden');

    if (e.code === 'Space' && qModalOpen) {
      e.preventDefault();
      toggleQuestionTimer();
    } else if (e.key.toLowerCase() === 'd' && !qModalOpen && !dareModalOpen) {
      openDareModal(true);
    } else if (e.key.toLowerCase() === 'n' && !qModalOpen && !dareModalOpen) {
      sfx.playClick();
      advanceToNextTeam();
      showToast(`👉 Chuyển lượt sang ${state.teams[state.activeTeamIndex].name}`);
    } else if (e.code === 'Escape') {
      closeQuestionModal();
      closeDareModal();
      document.getElementById('podium-modal').classList.add('hidden');
      document.getElementById('manager-modal').classList.add('hidden');
    }
  });
});
