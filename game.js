const goods = [
  { id: 'tea', name: 'Trà Shan Tuyết', icon: '🍵', image: 'assets/tea.svg', price: 850, color: '#dcebe5', trend: '+12%' },
  { id: 'silk', name: 'Lụa tơ tằm', icon: '🧶', image: 'assets/silk.svg', price: 1250, color: '#f5dfd8', trend: '-5%', down: true },
  { id: 'spice', name: 'Quế rừng', icon: '🪵', image: 'assets/spice.svg', price: 620, color: '#f2dfb9', trend: '+8%' },
  { id: 'ceramic', name: 'Gốm Bát Tràng', icon: '🏺', image: 'assets/ceramic.svg', price: 1700, color: '#d9e5ed', trend: '+16%' },
  { id: 'rice', name: 'Gạo thơm miền Tây', icon: '🌾', price: 480, color: '#f4e8bd', trend: '+6%' },
  { id: 'honey', name: 'Mật ong hoa nhãn', icon: '🍯', price: 980, color: '#f6d895', trend: '+11%' },
  { id: 'dried-fish', name: 'Cá khô bến cảng', icon: '🐟', price: 760, color: '#d8e6e8', trend: '-3%', down: true },
  { id: 'pandan', name: 'Lá dứa thơm', icon: '🌿', price: 330, color: '#d8ebd2', trend: '+9%' },
  { id: 'coconut', name: 'Dừa nước', icon: '🥥', price: 540, color: '#e4e8d0', trend: '+4%' },
  { id: 'salt', name: 'Muối biển Cần Giờ', icon: '🧂', price: 260, color: '#e9e5dc', trend: '+2%' },
  { id: 'lotus-seed', name: 'Hạt sen Đồng Tháp', icon: '🫘', price: 690, color: '#f2dfdf', trend: '+7%' },
  { id: 'agarwood', name: 'Trầm hương', icon: '🪵', price: 2140, color: '#e1d4c3', trend: '-8%', down: true },
  { id: 'lotus', name: 'Hoa sen hồng', icon: '🪷', price: 410, color: '#f5dce4', trend: '+13%' },
  { id: 'red-cloth', name: 'Vải đỏ may mắn', icon: '🧣', price: 1120, color: '#f2d5d0', trend: '+5%' },
];

const recipes = [
  { id: 'tea-set', name: 'Trà thảo mộc', icon: '🫖', image: 'assets/herbal-tea.svg', price: 1450, prepTime: 1, unlockCost: 0, needs: { tea: 1, spice: 1 }, color: '#e6eee1' },
  { id: 'silk-gift', name: 'Quà lụa tinh tế', icon: '🎁', image: 'assets/silk-gift.svg', price: 2400, prepTime: 4, unlockCost: 0, needs: { silk: 1, ceramic: 1 }, color: '#f5e0d9' },
  { id: 'cinnamon-cake', name: 'Bánh quế bến cảng', icon: '🥮', image: 'assets/cinnamon-cake.svg', price: 1320, prepTime: 3, unlockCost: 700, needs: { spice: 1, rice: 1, honey: 1 }, color: '#f2dfb9' },
  { id: 'tea-gift', name: 'Hộp trà thượng hạng', icon: '🎀', price: 2180, prepTime: 5, unlockCost: 900, needs: { tea: 2, honey: 1, 'red-cloth': 1 }, color: '#dcebe5' },
  { id: 'ceramic-tea', name: 'Bộ trà gốm lam', icon: '🍵', image: 'assets/ceramic-tea.svg', price: 2860, prepTime: 6, unlockCost: 1200, needs: { tea: 1, ceramic: 1, lotus: 1 }, color: '#d9e5ed' },
  { id: 'silk-roll', name: 'Cuộn lụa may mắn', icon: '🧵', price: 1980, prepTime: 5, unlockCost: 1000, needs: { silk: 1, 'red-cloth': 1, agarwood: 1 }, color: '#f5dfd8' },
  { id: 'river-box', name: 'Hộp quà ven sông', icon: '📦', price: 3050, prepTime: 7, unlockCost: 1400, needs: { ceramic: 1, silk: 1, tea: 1, coconut: 1 }, color: '#e6eee1' },
  { id: 'spice-basket', name: 'Giỏ quế thơm', icon: '🧺', image: 'assets/spice-basket.svg', price: 1760, prepTime: 3, unlockCost: 800, needs: { spice: 1, rice: 1, pandan: 1 }, color: '#f2dfb9' },
  { id: 'blue-vase', name: 'Bình gốm Sài Gòn', icon: '🏺', price: 3280, prepTime: 8, unlockCost: 1700, needs: { ceramic: 2, silk: 1, lotus: 1 }, color: '#d9e5ed' },
  { id: 'merchant-feast', name: 'Mâm tiệc thương gia', icon: '🍱', image: 'assets/merchant-feast.svg', price: 3920, prepTime: 10, unlockCost: 2000, needs: { rice: 1, 'dried-fish': 1, salt: 1, pandan: 1 }, color: '#f5e0d9' },
  { id: 'ca-kho-to', name: 'Cá kho tộ', icon: '🍲', image: 'assets/ca-kho-to.svg', price: 2800, prepTime: 7, unlockCost: 1200, season: 'rain', needs: { 'dried-fish': 1, spice: 1, salt: 1, rice: 1 }, color: '#e7d5c0' },
  { id: 'canh-chua', name: 'Canh chua miền Nam', icon: '🥣', image: 'assets/canh-chua.svg', price: 2450, prepTime: 5, unlockCost: 1100, season: 'summer', needs: { 'dried-fish': 1, pandan: 1, lotus: 1, salt: 1 }, color: '#e5f0d7' },
  { id: 'banh-xeo', name: 'Bánh xèo giòn rụm', icon: '🥞', image: 'assets/banh-xeo.svg', price: 2600, prepTime: 6, unlockCost: 1300, needs: { rice: 1, coconut: 1, 'dried-fish': 1, salt: 1 }, color: '#f5dfb9' },
];
const eventPool = [
  { title: 'Lễ hội bên sông', icon: '🎉', description: 'Khách du lịch đông hơn. Mỗi món phục vụ hôm nay được cộng thêm 20%.', customerBonus: 0.2 },
  { title: 'Mưa lớn đầu mùa', icon: '🌧', description: 'Chợ vắng hơn, nhưng người dân địa phương trả giá tốt cho món nóng.', customerBonus: 0.1 },
  { title: 'Đoàn buôn ghé bến', icon: '🛶', description: 'Một đoàn buôn mua nguyên liệu với giá cao hơn 15% trong hôm nay.', saleBonus: 0.15 },
  { title: 'Ngày may mắn', icon: '🍀', description: 'Bạn nhặt được một túi tiền nhỏ bên bến sông.', moneyBonus: 900 },
];
const incidentPool = [
  { title: 'Mái bạt bị rách', text: 'Mưa đêm làm rách mái quầy. Bạn phải mua vải mới.', cost: 520 },
  { title: 'Vỡ một mẻ gốm', text: 'Một thùng gốm bị va trong lúc dỡ hàng.', cost: 430 },
  { title: 'Đoàn kiểm tra ghé thăm', text: 'Quầy cần bổ sung giấy phép bán hàng trong ngày.', cost: 300 },
  { title: 'Khách quen giới thiệu bạn bè', text: 'Một khách quen kéo thêm người đến quán.', cost: 0, bonus: 650 },
];
const staffTypes = [
  { id: 'helper', name: 'Phụ kho', icon: '📦', image: 'assets/staff-helper.svg', hireCost: 1800, wage: 350, effect: '+4 ô kho và giảm chi phí sự cố 100₫.' },
  { id: 'chef', name: 'Đầu bếp phụ', icon: '👩‍🍳', image: 'assets/staff-chef.svg', hireCost: 2600, wage: 500, effect: 'Tự nấu món khi đủ nguyên liệu; khách kiên nhẫn hơn 15 giây.' },
  { id: 'server', name: 'Nhân viên phục vụ', icon: '🧑‍🍳', image: 'assets/staff-server.svg', hireCost: 2200, wage: 450, effect: 'Mỗi đơn phục vụ nhận thêm 10%.' },
];
const customerNames = ['Linh', 'Bảo', 'Mai', 'Huy', 'An', 'Thảo', 'Nam', 'Vy'];
const kitchenIncidentPool = [
  { title: 'Đơn khẩn từ thuyền du lịch', text: 'Một đoàn khách cần món nóng ngay lập tức.', rewardBonus: 0.35 },
  { title: 'Bếp bên cạnh bị mất điện', text: 'Khách chạy sang nhờ quán bạn làm món thay.', rewardBonus: 0.3 },
  { title: 'Đơn tiệc bất ngờ', text: 'Một chủ thuyền đặt món gấp trước giờ rời bến.', rewardBonus: 0.4 },
];
const feedbackPool = [
  { stars: 5, delta: 0.1, messages: ['Món ăn tuyệt vời, tôi sẽ quay lại ngày mai!', 'Hương vị rất tinh tế, phục vụ cũng thật chu đáo.', 'Quán nhỏ mà có món ngon hơn cả nhà hàng lớn!'] },
  { stars: 4, delta: 0.04, messages: ['Món ngon và nóng hổi. Nếu nhanh hơn một chút thì hoàn hảo.', 'Tôi thích món này, lần sau hãy cho thêm một ít gia vị nhé.'] },
  { stars: 3, delta: 0, messages: ['Món ăn ổn, nhưng chưa có gì khiến tôi bất ngờ.', 'Ăn được, hy vọng lần sau quán sẽ chăm chút hơn.'] },
  { stars: 2, delta: -0.1, messages: ['Món hơi nguội và chờ cũng khá lâu. Tôi chưa hài lòng.', 'Hương vị chưa cân bằng, quán cần cố gắng thêm.'] },
  { stars: 1, delta: -0.2, messages: ['Tôi đã kỳ vọng nhiều hơn. Món này thật sự làm tôi thất vọng.', 'Phục vụ chậm và món ăn không giống như tôi mong đợi.'] },
];
const seasonData = {
  spring: { name: 'Mùa xuân', icon: '🌱', description: 'Hoa sen và món thanh nhẹ được khách ưa chuộng.' },
  summer: { name: 'Mùa hè', icon: '☀', description: 'Nước mát và canh thanh nhiệt bán chạy hơn.' },
  autumn: { name: 'Mùa thu', icon: '🍂', description: 'Khách thích trà thơm và quà thủ công.' },
  rain: { name: 'Mùa mưa', icon: '🌧', description: 'Món kho và món nóng giúp kích thích sức mua.' },
};
const qualityData = { 'Thường': { multiplier: 1, delta: 0, icon: '○' }, 'Ngon': { multiplier: 1.2, delta: 0.04, icon: '◐' }, 'Thượng hạng': { multiplier: 1.5, delta: 0.1, icon: '★' } };
const state = { date: { day: 1, month: 1, year: 2026 }, money: 12500, rating: 5, unlockedRecipes: ['tea-set', 'silk-gift'], recipeReviews: {}, recipePage: 1, phase: 'prep', inventory: {}, meals: {}, mealQualities: {}, cookingJobs: [], customers: [], staff: {}, staffMembers: [], event: eventPool[0], incidents: [], kitchenIncident: null, incidentCountdown: 12, incidentTriggered: false, dayStats: createDayStats(), log: [{ type: 'buy', text: 'Ngày mới bắt đầu. Hãy chuẩn bị trước khi mở cửa.', time: '08:00' }] };
const maxStock = 18;
const moneyFormat = value => value.toLocaleString('vi-VN');
const getStock = () => Object.values(state.inventory).reduce((sum, item) => sum + item, 0);
const getStaffCount = () => Object.values(state.staff).reduce((sum, item) => sum + item, 0);
const getActiveStaff = type => state.staffMembers.filter(member => member.type === type && member.status === 'working').length;
const getMaxStock = () => maxStock + getActiveStaff('helper') * 4;
const getDailyWages = () => staffTypes.reduce((sum, staff) => sum + (state.staff[staff.id] || 0) * staff.wage, 0);
function createDayStats() { return { revenue: 0, purchases: 0, wages: 0, incidentCost: 0, bonuses: 0, hiring: 0, served: 0, missed: 0 }; }
const time = () => `${String(8 + Math.floor(Math.random() * 9)).padStart(2, '0')}:${Math.random() > .5 ? '30' : '00'}`;
const getSeasonKey = () => state.date.month >= 3 && state.date.month <= 5 ? 'summer' : state.date.month >= 6 && state.date.month <= 8 ? 'rain' : state.date.month >= 9 && state.date.month <= 11 ? 'autumn' : 'spring';
const getSeason = () => seasonData[getSeasonKey()];
const isUnlocked = id => state.unlockedRecipes.includes(id);
const sound = { context: null, master: null, enabled: false, ambienceTimer: null, waterSource: null };

function createNoiseBuffer(duration) {
  const buffer = sound.context.createBuffer(1, sound.context.sampleRate * duration, sound.context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) data[index] = Math.random() * 2 - 1;
  return buffer;
}

function ensureAudio() {
  if (!sound.context) {
    sound.context = new (window.AudioContext || window.webkitAudioContext)();
    sound.master = sound.context.createGain();
    sound.master.gain.value = 0.22;
    sound.master.connect(sound.context.destination);
  }
  if (sound.context.state === 'suspended') sound.context.resume();
  sound.enabled = true;
  document.querySelector('#soundToggle').classList.add('on');
  document.querySelector('#soundToggle').innerHTML = '♫ <span>Đang bật</span>';
  startWaterAmbience();
  startAcousticAmbience();
}

function playTone(frequency, duration, type = 'sine', volume = 0.04) {
  if (!sound.enabled) return;
  const oscillator = sound.context.createOscillator();
  const gain = sound.context.createGain();
  oscillator.type = type; oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, sound.context.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, sound.context.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, sound.context.currentTime + duration);
  oscillator.connect(gain); gain.connect(sound.master); oscillator.start(); oscillator.stop(sound.context.currentTime + duration + 0.05);
}

function startWaterAmbience() {
  if (sound.waterSource) return;
  const source = sound.context.createBufferSource();
  const filter = sound.context.createBiquadFilter();
  const gain = sound.context.createGain();
  source.buffer = createNoiseBuffer(2); source.loop = true; filter.type = 'lowpass'; filter.frequency.value = 900; gain.gain.value = 0.018;
  source.connect(filter); filter.connect(gain); gain.connect(sound.master); source.start(); sound.waterSource = source;
}

function startAcousticAmbience() {
  if (sound.ambienceTimer) return;
  const notes = [196, 247, 294, 330, 247, 220, 262, 330];
  let index = 0;
  const playPhrase = () => { playTone(notes[index % notes.length], 1.1, 'triangle', 0.018); playTone(notes[(index + 2) % notes.length] * 2, 0.7, 'sine', 0.008); index += 1; };
  playPhrase(); sound.ambienceTimer = window.setInterval(playPhrase, 2600);
}

function stopAudio() {
  sound.enabled = false;
  if (sound.waterSource) { sound.waterSource.stop(); sound.waterSource = null; }
  if (sound.ambienceTimer) { window.clearInterval(sound.ambienceTimer); sound.ambienceTimer = null; }
  document.querySelector('#soundToggle').classList.remove('on');
  document.querySelector('#soundToggle').innerHTML = '♪ <span>Âm thanh</span>';
}

function playSizzle() {
  if (!sound.enabled) return;
  const source = sound.context.createBufferSource();
  const filter = sound.context.createBiquadFilter();
  const gain = sound.context.createGain();
  source.buffer = createNoiseBuffer(0.55); filter.type = 'bandpass'; filter.frequency.value = 1800; filter.Q.value = 0.7;
  gain.gain.setValueAtTime(0.0001, sound.context.currentTime); gain.gain.linearRampToValueAtTime(0.07, sound.context.currentTime + 0.04); gain.gain.exponentialRampToValueAtTime(0.0001, sound.context.currentTime + 0.55);
  source.connect(filter); filter.connect(gain); gain.connect(sound.master); source.start();
}

function render() {
  document.querySelector('#day').textContent = state.date.day;
  document.querySelector('#dateLabel').textContent = `Tháng ${state.date.month} · ${state.date.year}`;
  document.querySelector('#money').textContent = moneyFormat(state.money);
  document.querySelector('#stock').textContent = getStock();
  document.querySelector('#inventoryCount').textContent = `${getStock()} / ${getMaxStock()}`;
  document.querySelector('#mealCount').textContent = `${Object.values(state.meals).reduce((sum, item) => sum + item, 0)} món`;
  document.querySelector('#customerCount').textContent = `${state.customers.length} khách`;
  document.querySelector('#eventTitle').textContent = state.event.title;
  document.querySelector('#eventIcon').textContent = state.event.icon;
  document.querySelector('#eventDescription').textContent = state.event.description;
  const season = getSeason();
  document.querySelector('#seasonInfo').textContent = `${season.icon} ${season.name} · ${season.description}`;
  document.querySelector('#kitchenMode').textContent = getActiveStaff('chef') ? 'Đầu bếp phụ đang tự nấu · Bạn vẫn có thể can thiệp' : 'Bạn tự tay nấu · Hãy thuê đầu bếp để tự động hóa';
  const incidentStrip = document.querySelector('#dayIncident');
  incidentStrip.classList.toggle('is-hidden', !state.kitchenIncident);
  if (state.kitchenIncident) document.querySelector('#incidentText').textContent = `${state.kitchenIncident.title}: ${state.kitchenIncident.text}`;
  const worth = state.money + goods.reduce((sum, good) => sum + (state.inventory[good.id] || 0) * good.price, 0);
  document.querySelector('#netWorth').textContent = moneyFormat(worth);
  document.querySelector('#rating').textContent = state.rating.toFixed(1);
  document.querySelector('#nextDayButton').textContent = state.phase === 'prep' ? '▣ Mở cửa đón khách' : '▣ Chốt sổ hôm nay';
  renderDayFlow(); renderGoods(); renderRecipes(); renderCustomers(); renderLiveStaff(); renderInventory(); renderLog(); renderReport();
}

function renderDayFlow() {
  const hasCustomers = state.customers.length > 0;
  const hasReadyMeals = Object.values(state.meals).some(amount => amount > 0);
  const currentStep = state.phase === 'report' ? 'close' : state.phase === 'prep' ? 'buy' : state.kitchenIncident ? 'incident' : hasCustomers || hasReadyMeals ? 'serve' : 'buy';
  const titles = { buy: state.phase === 'prep' ? 'Chuẩn bị trước giờ mở cửa' : 'Chuẩn bị phiên chợ', serve: 'Nấu và phục vụ khách', incident: 'Xử lý sự cố khẩn', close: 'Chốt sổ và quản lý đội ngũ' };
  const objectives = {
    buy: state.phase === 'prep' ? 'Khách chưa đến · Chuẩn bị xong hãy bấm Mở cửa đón khách.' : 'Mua nguyên liệu để bắt đầu.',
    serve: `${state.customers.length} đơn đang chờ · Hãy nấu và giao món đúng giờ.`,
    incident: 'Đơn khẩn đang diễn ra · Ưu tiên món có thưởng cao.',
    close: 'Xem lãi/lỗ, trả lương và quyết định tuyển dụng.',
  };
  const order = ['buy', 'serve', 'incident', 'close'];
  const currentIndex = order.indexOf(currentStep);
  document.querySelector('#phaseTitle').textContent = titles[currentStep];
  document.querySelector('#dailyObjective').textContent = objectives[currentStep];
  document.querySelectorAll('.flow-step').forEach(step => {
    const index = order.indexOf(step.dataset.step);
    step.classList.toggle('active', step.dataset.step === currentStep);
    step.classList.toggle('done', index < currentIndex);
  });
}

function showReview(customer, recipe, reward, quality = 'Thường') {
  const feedback = feedbackPool[Math.floor(Math.random() * feedbackPool.length)];
  const message = feedback.messages[Math.floor(Math.random() * feedback.messages.length)];
  const qualityDelta = qualityData[quality].delta;
  state.rating = Math.max(1, Math.min(5, Number((state.rating + feedback.delta + qualityDelta).toFixed(1))));
  const recipeReview = state.recipeReviews[recipe.id] || { total: 0, count: 0 };
  recipeReview.total += feedback.stars;
  recipeReview.count += 1;
  state.recipeReviews[recipe.id] = recipeReview;
  document.querySelector('#reviewFace').textContent = customer.face;
  document.querySelector('#reviewTitle').textContent = `${customer.name} đã nhận món`;
  document.querySelector('#reviewStars').textContent = `${'★'.repeat(feedback.stars)}${'☆'.repeat(5 - feedback.stars)}`;
  document.querySelector('#reviewMessage').textContent = `“${message}”`;
  const dishRating = (recipeReview.total / recipeReview.count).toFixed(1);
  document.querySelector('#reviewMeta').textContent = `Món ${recipe.name}: ${qualityData[quality].icon} ${quality} · ${dishRating}/5 sau ${recipeReview.count} lượt · +${moneyFormat(reward)}₫`;
  addLog(feedback.stars <= 2 ? 'sell' : 'buy', `${customer.name} đánh giá ${feedback.stars}/5: ${message}`);
  document.querySelector('#reviewModal').classList.remove('is-hidden');
  render();
}

function renderGoods() {
  document.querySelector('#goodsGrid').innerHTML = goods.map(good => `
    <article class="good-card">
      <div class="good-art" style="background:${good.color}">${good.image ? `<img src="${good.image}" alt="${good.name}" />` : good.icon}</div>
      <div class="good-info"><h4>${good.name}</h4><p class="price">${moneyFormat(good.price)}₫ / kiện</p><div class="trend ${good.down ? 'down' : ''}">${good.down ? '↓' : '↑'} ${good.trend} hôm nay</div></div>
      <div class="trade-controls"><button class="buy" data-action="buy" data-id="${good.id}">MUA +1</button><button data-action="sell" data-id="${good.id}">BÁN -1</button></div>
    </article>`).join('');
}

function renderInventory() {
  const items = goods.filter(good => state.inventory[good.id]);
  document.querySelector('#inventoryList').innerHTML = items.length ? items.map(good => `
    <div class="inventory-row"><span class="inventory-item"><span class="mini-art" style="background:${good.color}">${good.image ? `<img src="${good.image}" alt="${good.name}" />` : good.icon}</span>${good.name}</span><strong>${state.inventory[good.id]}</strong></div>`).join('') : '<div class="empty-state">Túi hàng đang trống.<br />Mua vài món để bắt đầu!</div>';
}

function renderReport() {
  const modal = document.querySelector('#dayReport');
  modal.classList.toggle('is-hidden', state.phase !== 'report');
  if (state.phase !== 'report') return;
  const stats = state.dayStats;
  const profit = stats.revenue + stats.bonuses - stats.purchases - stats.wages - stats.incidentCost - stats.hiring;
  document.querySelector('#reportTitle').textContent = `Báo cáo ngày ${state.date.day}, tháng ${state.date.month}, năm ${state.date.year}`;
  document.querySelector('#reportRevenue').textContent = `${moneyFormat(stats.revenue + stats.bonuses)}₫`;
  document.querySelector('#reportPurchases').textContent = `-${moneyFormat(stats.purchases + stats.incidentCost)}₫`;
  document.querySelector('#reportWages').textContent = `-${moneyFormat(stats.wages + stats.hiring)}₫`;
  const profitElement = document.querySelector('#reportProfit');
  profitElement.textContent = `${profit >= 0 ? '+' : ''}${moneyFormat(profit)}₫`;
  profitElement.className = profit >= 0 ? 'profit-positive' : 'profit-negative';
  document.querySelector('#reportNote').textContent = `${stats.served} đơn hoàn thành · ${stats.missed} khách bỏ đi · ${state.incidents.length} vấn đề phát sinh · ${getStaffCount()} nhân viên đang làm việc.`;
  document.querySelector('#staffCount').textContent = `${getStaffCount()} người`;
  document.querySelector('#staffGrid').innerHTML = staffTypes.map(staff => {
    const count = state.staff[staff.id] || 0;
    const canHire = state.money >= staff.hireCost;
    return `<article class="staff-card"><img class="staff-icon-image" src="${staff.image}" alt="${staff.name}" /><div class="staff-info"><h4>${staff.name} <small>x${count}</small></h4><p>${staff.effect}</p><span>Lương ${moneyFormat(staff.wage)}₫ / ngày</span></div><button class="hire-button" data-staff="${staff.id}" ${canHire ? '' : 'disabled'}>+ TUYỂN<br /><small>${moneyFormat(staff.hireCost)}₫</small></button></article>`;
  }).join('');
  document.querySelector('#startNextDayButton').textContent = 'Bắt đầu ngày mới →';
}

function renderRecipes() {
  const pageCount = recipes.length;
  state.recipePage = Math.max(1, Math.min(state.recipePage, pageCount));
  const visibleRecipe = recipes[state.recipePage - 1];
  document.querySelector('#recipeGrid').innerHTML = [visibleRecipe].map(recipe => {
    const unlocked = isUnlocked(recipe.id);
    const canCook = Object.entries(recipe.needs).every(([id, amount]) => (state.inventory[id] || 0) >= amount);
    const ingredients = Object.entries(recipe.needs).map(([id, amount]) => `${goods.find(good => good.id === id).icon} ${amount}`).join(' + ');
    const review = state.recipeReviews[recipe.id];
    const reviewLabel = review ? `${(review.total / review.count).toFixed(1)} ★ · ${review.count} lượt` : 'Chưa có đánh giá';
    const job = state.cookingJobs.find(item => item.recipeId === recipe.id);
    const progress = job ? Math.round((1 - job.remaining / job.total) * 100) : 0;
    const visual = recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" />` : recipe.icon;
    const buttonLabel = !unlocked ? `MỞ KHÓA ${moneyFormat(recipe.unlockCost)}₫` : job ? 'ĐANG NẤU' : getActiveStaff('chef') ? 'QUẢN LÝ BẾP' : 'NẤU';
    const buttonDisabled = !unlocked ? state.money < recipe.unlockCost : Boolean(job) || Boolean(getActiveStaff('chef')) || !canCook;
    const seasonTag = recipe.season ? `<small class="season-tag">${seasonData[recipe.season].name}</small>` : '';
    return `<article class="recipe-card ${unlocked ? '' : 'locked-recipe'}"><div class="recipe-art" style="background:${recipe.color}">${visual}</div><div class="recipe-info"><h4>${recipe.name}</h4><p>${ingredients}</p><strong>${moneyFormat(recipe.price)}₫</strong><small class="recipe-rating">${reviewLabel}</small>${seasonTag}${unlocked ? (job ? `<div class="cook-progress"><span style="width:${progress}%"></span></div><small class="prep-label">Còn ${job.remaining}s</small>` : `<small class="prep-label">Chuẩn bị ${recipe.prepTime}s</small>`) : '<small class="prep-label">Học công thức để nấu món này</small>'}</div><button class="cook-button" data-recipe="${recipe.id}" data-action="${unlocked ? 'cook' : 'unlock'}" ${buttonDisabled ? 'disabled' : ''}>${buttonLabel}</button></article>`;
  }).join('');
  renderRecipePagination(pageCount);
}

function renderRecipePagination(pageCount) {
  document.querySelector('#recipePagination').innerHTML = `<button class="page-arrow" data-page="${state.recipePage - 1}" ${state.recipePage === 1 ? 'disabled' : ''}>‹</button>${Array.from({ length: pageCount }, (_, index) => `<button class="page-number ${state.recipePage === index + 1 ? 'active' : ''}" data-page="${index + 1}">${index + 1}</button>`).join('')}<button class="page-arrow" data-page="${state.recipePage + 1}" ${state.recipePage === pageCount ? 'disabled' : ''}>›</button>`;
}

function renderCustomers() {
  document.querySelector('#customerList').innerHTML = state.customers.length ? state.customers.map(customer => {
    const meal = recipes.find(recipe => recipe.id === customer.wants);
    const ready = (state.meals[customer.wants] || 0) > 0;
    const urgent = customer.timeLeft <= 15;
    return `<div class="customer-row ${urgent ? 'urgent' : ''} ${customer.incident ? 'incident-order' : ''}"><div class="customer-face">${customer.face}</div><div class="customer-info"><strong>${customer.name} ${customer.incident ? '<small class="incident-label">ĐƠN KHẨN</small>' : ''}</strong><span>Muốn ${meal.name}</span><small class="wait-time">⏳ Còn ${formatWait(customer.timeLeft)}</small></div><button class="serve-button" data-customer="${customer.id}" ${ready ? '' : 'disabled'}>${ready ? 'PHỤC VỤ' : 'CHỜ MÓN'}</button></div>`;
  }).join('') : '<div class="empty-state">Chưa có khách. Hãy kết thúc ngày<br />để đón lượt khách mới.</div>';
}

function renderLiveStaff() {
  const working = state.staffMembers.filter(member => member.status === 'working').length;
  document.querySelector('#liveStaffCount').textContent = `${working} / ${state.staffMembers.length} người`;
  document.querySelector('#liveStaffList').innerHTML = state.staffMembers.length ? state.staffMembers.map(member => {
    const staff = staffTypes.find(item => item.id === member.type);
    const request = member.request;
    const statusLabel = member.status === 'working' ? 'Đang làm việc' : member.status === 'left' ? 'Đã về sớm' : 'Nghỉ ngày mai';
    const controls = request?.type === 'early' ? `<button class="staff-action approve" data-staff-action="approve" data-member="${member.id}">DUYỆT VỀ</button><button class="staff-action deny" data-staff-action="deny" data-member="${member.id}">Ở LẠI</button>` : request?.type === 'leave' ? `<button class="staff-action acknowledge" data-staff-action="acknowledge" data-member="${member.id}">ĐÃ BIẾT</button>` : '';
    return `<article class="live-staff-card ${member.status}"><img src="${staff.image}" alt="${staff.name}" /><div class="live-staff-info"><strong>${member.name}</strong><span>${staff.name} · ${statusLabel}</span><small class="staff-task">${member.task || 'Đang chờ việc'}</small>${request ? `<small>${request.type === 'early' ? 'Xin về sớm: ' : 'Báo trước nghỉ: '}${request.reason}</small>` : ''}</div><div class="staff-actions">${controls}</div></article>`;
  }).join('') : '<div class="empty-state">Chưa có nhân viên.<br />Tuyển người trong báo cáo cuối ngày.</div>';
}

function formatWait(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function renderLog() {
  document.querySelector('#activityLog').innerHTML = state.log.slice(-5).reverse().map(item => `<div class="activity ${item.type === 'sell' ? 'sell' : ''}"><span class="activity-time">${item.time}</span><span>${item.text}</span></div>`).join('');
}

function trade(id, action) {
  const good = goods.find(item => item.id === id);
  const owned = state.inventory[id] || 0;
  if (action === 'buy') {
    if (getStock() >= getMaxStock()) return addLog('buy', 'Kho đã đầy, hãy bán bớt hàng.', '');
    if (state.money < good.price) return addLog('buy', 'Không đủ tiền để mua món này.', '');
    state.money -= good.price; state.inventory[id] = owned + 1; state.dayStats.purchases += good.price; addLog('buy', `Mua 1 kiện ${good.name} (-${moneyFormat(good.price)}₫)`);
  } else if (owned > 0) {
    state.money += good.price; state.inventory[id] = owned - 1; if (!state.inventory[id]) delete state.inventory[id]; addLog('sell', `Bán 1 kiện ${good.name} (+${moneyFormat(good.price)}₫)`);
  } else addLog('sell', `Bạn không có ${good.name} để bán.`, '');
  render();
}

function cook(id, automatic = false) {
  const recipe = recipes.find(item => item.id === id);
  if (!isUnlocked(id)) return addLog('buy', `Bạn chưa học công thức ${recipe.name}.`, '');
  if (!automatic && getActiveStaff('chef')) return addLog('buy', 'Đầu bếp phụ đang vận hành bếp. Bạn chỉ cần quản lý.', '');
  if (state.cookingJobs.some(item => item.recipeId === id)) return;
  const canCook = Object.entries(recipe.needs).every(([ingredient, amount]) => (state.inventory[ingredient] || 0) >= amount);
  if (!canCook) return addLog('buy', `Thiếu nguyên liệu để nấu ${recipe.name}.`, '');
  Object.entries(recipe.needs).forEach(([ingredient, amount]) => { state.inventory[ingredient] -= amount; if (!state.inventory[ingredient]) delete state.inventory[ingredient]; });
  const seasonalBoost = recipe.season === getSeasonKey() ? 0.12 : 0;
  state.cookingJobs.push({ recipeId: id, remaining: recipe.prepTime, total: recipe.prepTime, automatic, fireScore: Math.random() + seasonalBoost });
  playSizzle();
  addLog('buy', `${automatic ? 'Đầu bếp phụ bắt đầu' : 'Bạn bắt đầu'} làm ${recipe.name} (${recipe.prepTime}s).`); render();
}

function unlockRecipe(id) {
  const recipe = recipes.find(item => item.id === id);
  if (!recipe || isUnlocked(id) || state.money < recipe.unlockCost) return;
  state.money -= recipe.unlockCost;
  state.unlockedRecipes.push(id);
  addLog('buy', `Học công thức ${recipe.name} (-${moneyFormat(recipe.unlockCost)}₫).`);
  render();
}

function processCookingJobs() {
  const finished = [];
  state.cookingJobs.forEach(job => { job.remaining -= 1; if (job.remaining <= 0) finished.push(job); });
  finished.forEach(job => {
    const recipe = recipes.find(item => item.id === job.recipeId);
    const quality = job.fireScore >= 0.92 ? 'Thượng hạng' : job.fireScore >= 0.48 ? 'Ngon' : 'Thường';
    state.meals[job.recipeId] = (state.meals[job.recipeId] || 0) + 1;
    state.mealQualities[job.recipeId] = state.mealQualities[job.recipeId] || [];
    state.mealQualities[job.recipeId].push(quality);
    state.cookingJobs = state.cookingJobs.filter(item => item !== job);
    addLog('buy', `${job.automatic ? 'Đầu bếp phụ hoàn thành' : 'Bạn hoàn thành'} 1 ${recipe.name} · Chất lượng: ${quality}.`);
  });
}

function autoCookForCustomers() {
  if (!getActiveStaff('chef')) return;
  const waitingOrder = state.customers.find(customer => !(state.meals[customer.wants] || 0));
  if (!waitingOrder) return;
  if (state.cookingJobs.some(job => job.recipeId === waitingOrder.wants)) return;
  const recipe = recipes.find(item => item.id === waitingOrder.wants);
  const canCook = Object.entries(recipe.needs).every(([ingredient, amount]) => (state.inventory[ingredient] || 0) >= amount);
  if (canCook) cook(recipe.id, true);
}

function processStaffWork() {
  state.staffMembers.filter(member => member.status === 'working').forEach(member => {
    if (member.type === 'helper') member.task = getStock() ? 'Đang sắp xếp và kiểm kê kho' : 'Đang chuẩn bị kho';
    if (member.type === 'chef') member.task = 'Đang kiểm tra đơn và chuẩn bị bếp';
    if (member.type === 'server') member.task = 'Đang quan sát khách và bàn giao món';
  });
  const readyCustomer = state.customers.find(customer => (state.meals[customer.wants] || 0) > 0 && customer.timeLeft > 0);
  if (readyCustomer && getActiveStaff('server')) serveCustomer(readyCustomer.id);
}

function serveCustomer(id) {
  const customer = state.customers.find(item => item.id === id);
  if (!customer || customer.timeLeft <= 0 || !state.meals[customer.wants]) return;
  const recipe = recipes.find(item => item.id === customer.wants);
  const quality = state.mealQualities[customer.wants]?.shift() || 'Thường';
  const qualityInfo = qualityData[quality];
  const reward = Math.round(recipe.price * qualityInfo.multiplier * (1 + (state.event.customerBonus || 0) + getActiveStaff('server') * 0.1 + (customer.rewardBonus || 0)));
  state.meals[customer.wants] -= 1; if (!state.meals[customer.wants]) delete state.meals[customer.wants];
  state.money += reward; state.customers = state.customers.filter(item => item.id !== id);
  state.dayStats.revenue += reward; state.dayStats.served += 1; if (customer.incident) state.kitchenIncident = null;
  addLog('sell', `${customer.name} trả ${moneyFormat(reward)}₫ cho ${recipe.name} (${quality}). Chờ phản hồi...`); render(); showReview(customer, recipe, reward, quality);
}

function tickCustomers() {
  if (state.phase !== 'day') return;
  processCookingJobs();
  if (!state.incidentTriggered) { state.incidentCountdown -= 1; if (state.incidentCountdown <= 0) triggerKitchenIncident(); }
  processStaffRequests();
  const expired = state.customers.filter(customer => customer.timeLeft <= 1);
  state.customers.forEach(customer => { customer.timeLeft = Math.max(0, customer.timeLeft - 1); });
  expired.forEach(customer => {
    state.rating = Math.max(1, Number((state.rating - 0.2).toFixed(1)));
    const meal = recipes.find(recipe => recipe.id === customer.wants);
    addLog('sell', `${customer.name}: “Đợi ${meal.name} lâu quá!” Đánh giá quán 1 sao.`);
  });
  if (expired.length) { state.customers = state.customers.filter(customer => customer.timeLeft > 0); state.dayStats.missed += expired.length; }
  autoCookForCustomers();
  processStaffWork();
  render();
}

function processStaffRequests() {
  state.staffMembers.forEach(member => {
    if (member.status !== 'working' || member.request) return;
    member.nextRequestIn -= 1;
    if (member.nextRequestIn > 0) return;
    const staff = staffTypes.find(item => item.id === member.type);
    const early = Math.random() > 0.35;
    member.request = { type: early ? 'early' : 'leave', reason: early ? 'Gia đình có việc gấp, cho tôi về sớm hôm nay được không?' : 'Tôi cần nghỉ ngày mai để giải quyết việc riêng.' };
    addLog('buy', `${member.name} (${staff.name}) gửi yêu cầu: ${member.request.reason}`);
  });
}

function triggerKitchenIncident() {
  const incident = kitchenIncidentPool[Math.floor(Math.random() * kitchenIncidentPool.length)];
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  state.incidentTriggered = true;
  state.kitchenIncident = { ...incident, recipeId: recipe.id, title: incident.title };
  state.incidents.push({ title: incident.title, cost: 0 });
  state.customers.push({ id: `incident-${Date.now()}`, name: 'Khách đơn khẩn', face: '⚠️', wants: recipe.id, timeLeft: 32 + getActiveStaff('chef') * 15, rewardBonus: incident.rewardBonus, incident: true });
  addLog('sell', `${incident.title}: ${incident.text} Hãy tự nấu món để xử lý.`);
}

function addLog(type, text, logTime = time()) { state.log.push({ type, text, time: logTime }); renderLog(); }
function endDay() {
  if (state.phase !== 'day') return;
  state.phase = 'report';
  if (state.customers.length) { state.dayStats.missed += state.customers.length; state.customers = []; }
  state.dayStats.wages = getDailyWages();
  state.money -= state.dayStats.wages;
  addLog('buy', `Đã chốt sổ ngày ${state.date.day}, tháng ${state.date.month}, năm ${state.date.year}. Lương nhân viên: -${moneyFormat(state.dayStats.wages)}₫.`);
  render();
}

function hireStaff(id) {
  if (state.phase !== 'report') return;
  const staff = staffTypes.find(item => item.id === id);
  if (!staff || state.money < staff.hireCost) return;
  state.money -= staff.hireCost; state.staff[id] = (state.staff[id] || 0) + 1; state.dayStats.hiring += staff.hireCost;
  const memberNumber = state.staff[id];
  state.staffMembers.push({ id: `${id}-${Date.now()}`, type: id, name: `${staff.name} ${memberNumber}`, status: 'working', task: 'Đang nhận việc', request: null, nextRequestIn: 18 + Math.floor(Math.random() * 25), offNextDay: false });
  addLog('buy', `Tuyển ${staff.name} (-${moneyFormat(staff.hireCost)}₫).`); render();
}

function handleStaffAction(action, memberId) {
  const member = state.staffMembers.find(item => item.id === memberId);
  if (!member || !member.request) return;
  if (action === 'approve') { member.status = 'left'; member.request = null; addLog('buy', `${member.name} được duyệt về sớm. Bạn sẽ tự xử lý phần việc còn lại.`); }
  if (action === 'deny') { member.request = null; member.nextRequestIn = 9999; addLog('buy', `${member.name} ở lại làm hết ngày.`); }
  if (action === 'acknowledge') { member.offNextDay = true; member.request = null; addLog('buy', `${member.name} đã báo nghỉ cho ngày mai.`); }
  render();
}

function nextDay() {
  state.phase = 'prep'; state.dayStats = createDayStats(); state.incidents = []; state.customers = [];
  state.cookingJobs = [];
  state.kitchenIncident = null; state.incidentTriggered = false; state.incidentCountdown = 10 + Math.floor(Math.random() * 11);
  state.staffMembers.forEach(member => { member.status = member.offNextDay ? 'off' : 'working'; member.request = null; member.offNextDay = false; member.nextRequestIn = 18 + Math.floor(Math.random() * 25); });
  state.date.day += 1;
  if (state.date.day > 30) { state.date.day = 1; state.date.month += 1; }
  if (state.date.month > 12) { state.date.month = 1; state.date.year += 1; }
  state.event = eventPool[Math.floor(Math.random() * eventPool.length)];
  state.customers = [];
  const availableRecipes = recipes.filter(recipe => isUnlocked(recipe.id));
  state.pendingRecipes = Array.from({ length: 2 + Math.floor(Math.random() * 3) }, (_, index) => {
    const seasonalRecipes = availableRecipes.filter(recipe => recipe.season === getSeasonKey());
    const recipePool = seasonalRecipes.length && Math.random() > 0.35 ? seasonalRecipes : availableRecipes;
    const recipe = recipePool[Math.floor(Math.random() * recipePool.length)];
    return { id: `${state.date.year}-${state.date.month}-${state.date.day}-${index}`, name: customerNames[Math.floor(Math.random() * customerNames.length)], face: ['🙂', '😎', '😊', '🧑'][Math.floor(Math.random() * 4)], wants: recipe.id, timeLeft: 45 + Math.floor(Math.random() * 46) + getActiveStaff('chef') * 15 };
  });
  if (state.event.moneyBonus) { state.money += state.event.moneyBonus; state.dayStats.bonuses += state.event.moneyBonus; addLog('buy', `Sự kiện: nhận thêm ${moneyFormat(state.event.moneyBonus)}₫.`); }
  const incident = incidentPool[Math.floor(Math.random() * incidentPool.length)];
  const incidentCost = Math.max(0, incident.cost - getActiveStaff('helper') * 100);
  state.incidents.push(incident); state.money -= incidentCost; state.dayStats.incidentCost += incidentCost;
  if (incident.bonus) { state.money += incident.bonus; state.dayStats.bonuses += incident.bonus; }
  addLog('buy', `${incident.title}: ${incident.text}${incidentCost ? ` (-${moneyFormat(incidentCost)}₫)` : ''}`);
  goods.forEach(good => { const change = Math.round(good.price * (Math.random() * .3 - .1)); good.price = Math.max(250, good.price + change); good.trend = `${change >= 0 ? '+' : ''}${Math.round(change / (good.price - change) * 100)}%`; good.down = change < 0; });
  if (state.event.saleBonus) goods.forEach(good => { good.price = Math.round(good.price * (1 + state.event.saleBonus)); });
  addLog('buy', `Ngày ${state.date.day}, tháng ${state.date.month}, năm ${state.date.year} đã sẵn sàng. Hãy mở cửa khi bạn chuẩn bị xong.`); render();
}

function openShop() {
  if (state.phase !== 'prep') return;
  state.phase = 'day';
  state.customers = state.pendingRecipes || [];
  state.pendingRecipes = [];
  state.incidentCountdown = 10 + Math.floor(Math.random() * 11);
  addLog('buy', `Đã mở cửa. ${state.customers.length} khách bắt đầu ghé quán.`);
  render();
}

function handleDayButton() {
  if (state.phase === 'prep') openShop(); else endDay();
}

document.querySelector('#goodsGrid').addEventListener('click', event => { const button = event.target.closest('button'); if (button) trade(button.dataset.id, button.dataset.action); });
document.querySelector('#recipeGrid').addEventListener('click', event => { const button = event.target.closest('button'); if (!button || button.disabled) return; if (button.dataset.action === 'unlock') unlockRecipe(button.dataset.recipe); else cook(button.dataset.recipe); });
document.querySelector('#recipePagination').addEventListener('click', event => { const button = event.target.closest('button'); if (button && !button.disabled) { state.recipePage = Number(button.dataset.page); renderRecipes(); } });
document.querySelector('#customerList').addEventListener('click', event => { const button = event.target.closest('button'); if (button && !button.disabled) serveCustomer(button.dataset.customer); });
document.querySelector('#nextDayButton').addEventListener('click', handleDayButton);
document.querySelector('#startNextDayButton').addEventListener('click', nextDay);
document.querySelector('#staffGrid').addEventListener('click', event => { const button = event.target.closest('button'); if (button && !button.disabled) hireStaff(button.dataset.staff); });
document.querySelector('#liveStaffList').addEventListener('click', event => { const button = event.target.closest('button'); if (button) handleStaffAction(button.dataset.staffAction, button.dataset.member); });
document.querySelector('#closeReviewButton').addEventListener('click', () => { document.querySelector('#reviewModal').classList.add('is-hidden'); render(); });
document.querySelector('#soundToggle').addEventListener('click', () => { if (sound.enabled) stopAudio(); else ensureAudio(); });
setInterval(tickCustomers, 1000);
render();
