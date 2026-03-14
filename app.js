const authSection = document.getElementById('authSection');
const appSection = document.getElementById('appSection');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const authMessage = document.getElementById('authMessage');
const tabButtons = document.querySelectorAll('.tab-btn');
const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');
const notificationsBtn = document.getElementById('notificationsBtn');
const notifBadge = document.getElementById('notifBadge');
const notificationsList = document.getElementById('notificationsList');
const markNotifsReadBtn = document.getElementById('markNotifsReadBtn');
const recipeForm = document.getElementById('recipeForm');
const recipeMediaType = document.getElementById('recipeMediaType');
const photosGroup = document.getElementById('photosGroup');
const videoGroup = document.getElementById('videoGroup');
const recipeMessage = document.getElementById('recipeMessage');
const feed = document.getElementById('feed');
const exploreFeed = document.getElementById('exploreFeed');
const followFeed = document.getElementById('followFeed');
const bookmarksFeed = document.getElementById('bookmarksFeed');
const profileFeed = document.getElementById('profileFeed');
const filterRow = document.getElementById('filterRow');
const pageTitle = document.getElementById('pageTitle');
const pageViews = document.querySelectorAll('.page-view');
const navItems = document.querySelectorAll('.x-nav-item');
const searchInput = document.getElementById('searchInput');
const apiBaseInput = document.getElementById('apiBaseInput');
const saveApiBaseBtn = document.getElementById('saveApiBaseBtn');
const serverMessage = document.getElementById('serverMessage');
const startupOverlay = document.getElementById('startupOverlay');
const startupText = document.getElementById('startupText');
const serverStatusText = document.getElementById('serverStatusText');
const profileEmail = document.getElementById('profileEmail');
const profilePosts = document.getElementById('profilePosts');
const profileFollowers = document.getElementById('profileFollowers');
const profileFollowing = document.getElementById('profileFollowing');
const profileBtn = document.getElementById('profileBtn');
const profileUsername = document.getElementById('profileUsername');
const profileAvatar = document.getElementById('profileAvatar');
const profileForm = document.getElementById('profileForm');
const editUsername = document.getElementById('editUsername');
const editProfilePic = document.getElementById('editProfilePic');
const profileMessage = document.getElementById('profileMessage');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const viewLikedBtn = document.getElementById('viewLikedBtn');
const viewSavedBtn = document.getElementById('viewSavedBtn');
const feedTitle = document.getElementById('feedTitle');
const toggleLikedFeedBtn = document.getElementById('toggleLikedFeedBtn');
const openComposerBtn = document.getElementById('openComposerBtn');
const composerModal = document.getElementById('composerModal');
const closeComposerBtn = document.getElementById('closeComposerBtn');
const cancelComposerBtn = document.getElementById('cancelComposerBtn');
const worldMapEl = document.getElementById('worldMap');
const mapDishTitle = document.getElementById('mapDishTitle');
const mapDishDesc = document.getElementById('mapDishDesc');
const mapStatus = document.getElementById('mapStatus');
const tagSuggestions = document.getElementById('tagSuggestions');
const recipeTagsInput = document.getElementById('recipeTags');

const API_BASE_KEY = 'recipetube_api_base';
const TOKEN_KEY = 'recipetube_token';


let apiBase = localStorage.getItem(API_BASE_KEY) || '';
let authToken = localStorage.getItem(TOKEN_KEY) || '';
let sessionEmail = null;
let recipesCache = [];
let meProfile = null;
let activeFilters = new Set();
let profileView = 'mine';
let feedMode = 'for_you';
let mapInstance = null;
let mapMarker = null;
let allTags = [];
let notificationsCache = [];
let notificationsPollTimer = null;
let currentPage = 'home';

function isElectronEnv() {
  try {
    // Works for preload-enabled Electron and UA-based detection.
    return Boolean((window && window.process && window.process.type) || /Electron/i.test(navigator.userAgent));
  } catch (_) {
    return false;
  }
}

function setLoading(text, on) {
  startupText.textContent = text;
  startupOverlay.classList.toggle('hidden', !on);
}

function setServerStatus(text) {
  serverStatusText.textContent = text;
}

function setComposer(open) {
  composerModal.classList.toggle('hidden', !open);
  if (!open) recipeMessage.textContent = '';
}

function getCandidateServers() {
  const saved = localStorage.getItem(API_BASE_KEY) || '';
  const candidates = [];
  if (saved) candidates.push(saved);

  const isHttp = location.protocol === 'http:' || location.protocol === 'https:';
  if (isHttp && location.host) candidates.push(`${location.protocol}//${location.host}`);
  if (location.hostname && !['', 'localhost', '127.0.0.1'].includes(location.hostname)) {
    candidates.push(`http://${location.hostname}:3000`);
  }

  // When opened as a plain browser file, defaulting to localhost is confusing:
  // it would store uploads on *that* device if you later run a server there.
  // Only auto-try localhost for the Electron app.
  if (isElectronEnv()) {
    candidates.push('http://localhost:3000');
    candidates.push('http://127.0.0.1:3000');
  }
  return [...new Set(candidates.map((x) => x.replace(/\/$/, '')))].filter(Boolean);
}

function toAbsoluteUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  return `${apiBase}${path}`;
}

function cleanFileName(name) {
  return String(name || 'recipe').replace(/[^a-z0-9-_]+/gi, '-').replace(/-+/g, '-').toLowerCase();
}

const DISH_REGIONS = [
  { name: 'Japan', dish: 'Sushi', note: 'Fresh vinegared rice with fish and seasonal toppings.', latMin: 24, latMax: 46, lngMin: 122, lngMax: 146, centerLat: 36, centerLng: 138 },
  { name: 'South Korea', dish: 'Bibimbap', note: 'Rice bowl with vegetables, beef, egg, and gochujang.', latMin: 33, latMax: 39, lngMin: 124, lngMax: 130, centerLat: 36.2, centerLng: 127.8 },
  { name: 'China', dish: 'Peking Duck', note: 'Crispy duck served with pancakes, scallions, and sauce.', latMin: 18, latMax: 54, lngMin: 73, lngMax: 135, centerLat: 35, centerLng: 104 },
  { name: 'India', dish: 'Butter Chicken', note: 'Creamy tomato curry with marinated grilled chicken.', latMin: 6, latMax: 36, lngMin: 68, lngMax: 97, centerLat: 22.5, centerLng: 79 },
  { name: 'Thailand', dish: 'Pad Thai', note: 'Stir-fried rice noodles with tamarind, peanuts, and lime.', latMin: 5, latMax: 21, lngMin: 97, lngMax: 106, centerLat: 15, centerLng: 101 },
  { name: 'Vietnam', dish: 'Pho', note: 'Fragrant rice noodle soup with herbs and slow-simmered broth.', latMin: 8, latMax: 24, lngMin: 102, lngMax: 110, centerLat: 16.5, centerLng: 106.5 },
  { name: 'Middle East', dish: 'Shawarma', note: 'Spiced rotisserie meat shaved into wraps or plates.', latMin: 12, latMax: 39, lngMin: 34, lngMax: 60, centerLat: 27, centerLng: 47 },
  { name: 'Turkey', dish: 'Lahmacun', note: 'Thin crispy flatbread topped with spiced minced meat.', latMin: 35, latMax: 43, lngMin: 25, lngMax: 45, centerLat: 39, centerLng: 35 },
  { name: 'Italy', dish: 'Pasta Carbonara', note: 'Roman pasta with egg, cheese, black pepper, and guanciale.', latMin: 36, latMax: 47, lngMin: 6, lngMax: 19, centerLat: 42.5, centerLng: 12.5 },
  { name: 'France', dish: 'Coq au Vin', note: 'Chicken braised with wine, mushrooms, and aromatics.', latMin: 41, latMax: 51, lngMin: -6, lngMax: 10, centerLat: 46.5, centerLng: 2.5 },
  { name: 'Spain', dish: 'Paella', note: 'Saffron rice with seafood or meats cooked in a wide pan.', latMin: 36, latMax: 44, lngMin: -10, lngMax: 4, centerLat: 40, centerLng: -3.5 },
  { name: 'United Kingdom', dish: 'Fish and Chips', note: 'Crispy battered fish served with thick-cut fries.', latMin: 49, latMax: 60, lngMin: -9, lngMax: 2, centerLat: 54.5, centerLng: -2.5 },
  { name: 'West Africa', dish: 'Jollof Rice', note: 'Tomato-pepper rice dish with rich spice and depth.', latMin: 4, latMax: 20, lngMin: -18, lngMax: 15, centerLat: 10, centerLng: -1.5 },
  { name: 'East Africa', dish: 'Nyama Choma', note: 'Charcoal grilled meat served with kachumbari salad.', latMin: -12, latMax: 12, lngMin: 28, lngMax: 50, centerLat: -1, centerLng: 37 },
  { name: 'South Africa', dish: 'Bobotie', note: 'Curried minced meat bake with savory egg custard topping.', latMin: -35, latMax: -20, lngMin: 16, lngMax: 33, centerLat: -30, centerLng: 24 },
  { name: 'United States (South)', dish: 'Fried Chicken', note: 'Crispy seasoned chicken with classic comfort sides.', latMin: 24, latMax: 38, lngMin: -106, lngMax: -75, centerLat: 32, centerLng: -90 },
  { name: 'United States (Northeast)', dish: 'Clam Chowder', note: 'Creamy chowder with clams, potatoes, and herbs.', latMin: 38, latMax: 48, lngMin: -80, lngMax: -66, centerLat: 42.5, centerLng: -72 },
  { name: 'Mexico', dish: 'Tacos al Pastor', note: 'Marinated pork tacos with pineapple and salsa.', latMin: 14, latMax: 33, lngMin: -118, lngMax: -86, centerLat: 23, centerLng: -102 },
  { name: 'Caribbean', dish: 'Jerk Chicken', note: 'Spice-rubbed grilled chicken with smoky heat.', latMin: 9, latMax: 25, lngMin: -85, lngMax: -58, centerLat: 18, centerLng: -72 },
  { name: 'Brazil', dish: 'Feijoada', note: 'Black bean stew with pork, served with rice and greens.', latMin: -34, latMax: 6, lngMin: -74, lngMax: -34, centerLat: -14, centerLng: -52 },
  { name: 'Andes', dish: 'Ceviche', note: 'Citrus-cured fish with onion, chili, and herbs.', latMin: -22, latMax: 8, lngMin: -82, lngMax: -68, centerLat: -7, centerLng: -75 },
  { name: 'Argentina/Uruguay', dish: 'Asado', note: 'Traditional open-fire barbecue with quality cuts.', latMin: -56, latMax: -21, lngMin: -73, lngMax: -52, centerLat: -36, centerLng: -63 },
  { name: 'Australia', dish: 'Meat Pie', note: 'Flaky pastry pie filled with rich minced beef gravy.', latMin: -44, latMax: -10, lngMin: 112, lngMax: 154, centerLat: -25, centerLng: 134 },
  { name: 'New Zealand', dish: 'Hangi', note: 'Earth-oven style meal with slow-cooked meats and veg.', latMin: -48, latMax: -34, lngMin: 166, lngMax: 179, centerLat: -41, centerLng: 174 },
  { name: 'Pacific Islands', dish: 'Poke', note: 'Cubed marinated fish with rice and fresh toppings.', latMin: -25, latMax: 25, lngMin: -180, lngMax: -130, centerLat: 0, centerLng: -155 },
  { name: 'Default', dish: 'Regional Home Cooking', note: 'A comfort dish strongly associated with this area.', latMin: -90, latMax: 90, lngMin: -180, lngMax: 180, centerLat: 0, centerLng: 0 }
];

function dishForLocation(lat, lng) {
  const direct = DISH_REGIONS.find((r) => r.name !== 'Default' && lat >= r.latMin && lat <= r.latMax && lng >= r.lngMin && lng <= r.lngMax);
  if (direct) return direct;

  let closest = DISH_REGIONS[DISH_REGIONS.length - 1];
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const region of DISH_REGIONS) {
    if (region.name === 'Default') continue;
    const dLat = lat - region.centerLat;
    const dLng = lng - region.centerLng;
    const distance = (dLat * dLat) + (dLng * dLng);
    if (distance < bestDistance) {
      bestDistance = distance;
      closest = region;
    }
  }

  return closest;
}

function updateMapDish(region, lat, lng) {
  if (!mapDishTitle || !mapDishDesc) return;
  mapDishTitle.textContent = `${region.name}: ${region.dish}`;
  mapDishDesc.textContent = `${region.note} (${lat.toFixed(2)}, ${lng.toFixed(2)})`;
}

function initWorldMap() {
  if (!worldMapEl || !mapStatus) return;
  if (typeof window.L === 'undefined') {
    mapStatus.textContent = 'Map library not loaded. Refresh the app.';
    return;
  }

  mapStatus.textContent = 'Loading free map...';

  if (!mapInstance) {
    mapInstance = window.L.map(worldMapEl, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      worldCopyJump: true
    });

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance);

    mapInstance.on('click', (event) => {
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;
      const region = dishForLocation(lat, lng);
      updateMapDish(region, lat, lng);

      if (mapMarker) mapMarker.remove();
      mapMarker = window.L.marker([lat, lng]).addTo(mapInstance);
      mapMarker.bindPopup(region.dish).openPopup();
    });
  }

  setTimeout(() => mapInstance.invalidateSize(), 50);
  mapStatus.textContent = 'Map ready. Click anywhere to discover a dish.';
}

function normalizeTagClient(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 24);
}

function parseComposerTags(input) {
  const pieces = String(input || '').split(',');
  const out = [];
  const seen = new Set();

  for (const p of pieces) {
    const tag = normalizeTagClient(p);
    if (tag.length < 2) continue;
    if (seen.has(tag)) continue;
    seen.add(tag);
    out.push(tag);
    if (out.length >= 8) break;
  }

  return out;
}

function renderTagSuggestions() {
  if (!tagSuggestions) return;
  tagSuggestions.innerHTML = '';
  allTags.slice(0, 40).forEach((t) => {
    const option = document.createElement('option');
    option.value = t.tag;
    option.label = `${t.tag} (${t.count})`;
    tagSuggestions.appendChild(option);
  });
}

async function refreshTags() {
  const res = await apiRequest('/api/tags');
  allTags = res.ok ? res.tags : [];
  renderTagSuggestions();
}

function renderNotifications() {
  if (!notificationsList) return;

  const unread = notificationsCache.filter((n) => !n.read).length;
  if (notifBadge) {
    notifBadge.textContent = String(unread);
    notifBadge.classList.toggle('hidden', unread === 0);
  }

  if (!notificationsCache.length) {
    notificationsList.innerHTML = '<p class="meta">No notifications yet.</p>';
    return;
  }

  notificationsList.innerHTML = notificationsCache
    .slice(0, 12)
    .map((n) => {
      const css = n.read ? 'notif-item' : 'notif-item unread';
      const when = new Date(n.createdAt).toLocaleString();
      return `<div class="${css}"><p><strong>${n.actorEmail}</strong> posted <em>${n.recipeTitle}</em></p><p class="meta">${when}</p></div>`;
    })
    .join('');
}

async function refreshNotifications() {
  if (!authToken || !apiBase) {
    notificationsCache = [];
    renderNotifications();
    return;
  }

  const res = await apiRequest('/api/notifications');
  notificationsCache = res.ok ? (res.notifications || []) : [];
  renderNotifications();
}

async function markNotificationsRead() {
  if (!authToken) return;
  const res = await apiRequest('/api/notifications/read', { method: 'POST' });
  if (res.ok) {
    notificationsCache = notificationsCache.map((n) => ({ ...n, read: true }));
    if (meProfile) meProfile.unreadNotifications = 0;
    renderNotifications();
  }
}

function startNotificationsPolling() {
  if (notificationsPollTimer) clearInterval(notificationsPollTimer);
  notificationsPollTimer = setInterval(() => {
    refreshNotifications();
  }, 12000);
}

function stopNotificationsPolling() {
  if (!notificationsPollTimer) return;
  clearInterval(notificationsPollTimer);
  notificationsPollTimer = null;
}

function readImageAsDataUrl(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.92));
    };
    image.onerror = reject;
    image.src = url;
  });
}

async function downloadRecipePdf(recipe) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    const printWin = window.open('', '_blank');
    if (!printWin) return;
    const tagsText = Array.isArray(recipe.tags) ? recipe.tags.map((t) => `#${t}`).join(' ') : '';
    printWin.document.write(
      `<html><head><title>${recipe.title || 'Recipe'}</title></head><body style="font-family:Arial;padding:24px;">` +
      `<h1>${recipe.title || 'Recipe'}</h1>` +
      `<p><strong>Author:</strong> ${recipe.author || ''}</p>` +
      `<p>${recipe.description || ''}</p>` +
      `<p>${tagsText}</p>` +
      `</body></html>`
    );
    printWin.document.close();
    printWin.focus();
    printWin.print();
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 40;
  let y = 56;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(recipe.title || 'Recipe', margin, y);
  y += 26;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80);
  doc.text('Author: ' + (recipe.author || ''), margin, y);
  y += 16;
  doc.text('Created: ' + new Date(recipe.createdAt).toLocaleString(), margin, y);
  y += 20;

  doc.setTextColor(20);
  doc.setFontSize(12);
  const desc = doc.splitTextToSize(recipe.description || '', 515);
  doc.text(desc, margin, y);
  y += desc.length * 15 + 10;

  const tags = Array.isArray(recipe.tags) ? recipe.tags.map((t) => `#${t}`).join(' ') : '';
  if (tags) {
    doc.setTextColor(70);
    doc.text(tags, margin, y);
    y += 20;
  }

  const firstPhoto = recipe.mediaType === 'photos' && recipe.photos && recipe.photos.length ? toAbsoluteUrl(recipe.photos[0]) : '';
  if (firstPhoto) {
    try {
      const dataUrl = await readImageAsDataUrl(firstPhoto);
      const props = doc.getImageProperties(dataUrl);
      const maxWidth = 515;
      const maxHeight = 300;
      const ratio = Math.min(maxWidth / props.width, maxHeight / props.height);
      const w = props.width * ratio;
      const h = props.height * ratio;
      doc.addImage(dataUrl, 'JPEG', margin, y, w, h);
      y += h + 10;
    } catch (error) {
      doc.setTextColor(120);
      doc.text('Image preview could not be embedded.', margin, y);
    }
  } else if (recipe.mediaType === 'video') {
    doc.setTextColor(120);
    doc.text('Video URL: ' + toAbsoluteUrl(recipe.video || ''), margin, y);
  }

  doc.setTextColor(110);
  doc.setFontSize(10);
  doc.text('Generated by RecipeTube', margin, 812 - 30);
  doc.save(`${cleanFileName(recipe.title)}.pdf`);
}

async function apiRequest(path, options = {}) {
  const headers = options.headers ? { ...options.headers } : {};
  if (!(options.body instanceof FormData)) headers['Content-Type'] = 'application/json';
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const response = await fetch(`${apiBase}${path}`, { ...options, headers });
  let payload = {};
  try {
    payload = await response.json();
  } catch (error) {
    payload = { ok: false, message: 'Invalid server response.' };
  }

  if (!response.ok) return { ok: false, message: payload.message || 'Request failed.' };
  return payload;
}

async function tryConnect(candidate) {
  try {
    const response = await fetch(`${candidate}/api/health`);
    if (!response.ok) return false;
    const data = await response.json();
    return !!data.ok;
  } catch (error) {
    return false;
  }
}

async function autoConnect() {
  const candidates = getCandidateServers();
  for (const candidate of candidates) {
    setLoading(`Connecting to ${candidate}...`, true);
    const ok = await tryConnect(candidate);
    if (ok) {
      apiBase = candidate;
      localStorage.setItem(API_BASE_KEY, apiBase);
      apiBaseInput.value = apiBase;
      serverMessage.textContent = `Connected to ${apiBase}`;
      setServerStatus(`Live server: ${apiBase}`);
      return true;
    }
  }

  if (!isElectronEnv() && location.protocol === 'file:') {
    serverMessage.textContent = 'Enter your PC server URL (example: http://192.168.0.168:3000) then click Connect Server.';
  } else {
    serverMessage.textContent = 'Could not connect automatically. Enter Server URL and click Connect Server.';
  }
  setServerStatus('No server connected');
  return false;
}

function switchTab(tab) {
  tabButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tab));
  signupForm.classList.toggle('hidden', tab !== 'signup');
  loginForm.classList.toggle('hidden', tab !== 'login');
  authMessage.textContent = '';
}

function setProfileView(view) {
  profileView = view;
  viewProfileBtn.classList.toggle('active', view === 'mine');
  viewLikedBtn.classList.toggle('active', view === 'liked');
  viewSavedBtn.classList.toggle('active', view === 'saved');
  renderFeed();
}

function setFeedMode(mode) {
  feedMode = mode;
  toggleLikedFeedBtn.textContent = mode === 'liked' ? 'For You Feed' : 'Based on Likes';
  renderFeed();
}

function showAuth() {
  authSection.classList.remove('hidden');
  appSection.classList.add('hidden');
  stopNotificationsPolling();
  notificationsCache = [];
  renderNotifications();
}

function showApp() {
  authSection.classList.add('hidden');
  appSection.classList.remove('hidden');
  welcomeText.textContent = `@${(sessionEmail || '').split('@')[0]} · ${sessionEmail}`;
  renderProfile();
  renderNotifications();
  refreshNotifications();
  startNotificationsPolling();
  try {
    setPage('home');
  } catch (error) {
    showAuth();
    authMessage.textContent = "Signed in, but failed to open app. Reload once, then try again.";
  }
}
function updateMediaFields() {
  photosGroup.classList.toggle('hidden', recipeMediaType.value !== 'photos');
  videoGroup.classList.toggle('hidden', recipeMediaType.value !== 'video');
}

function buildUserInterests() {
  const myRecipes = recipesCache.filter((r) => r.author === sessionEmail);
  const map = new Map();
  myRecipes.forEach((recipe) => recipe.tags.forEach((tag) => map.set(tag, (map.get(tag) || 0) + 1)));
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 8);
}

function buildLikedInterests() {
  if (!meProfile || !Array.isArray(meProfile.likedRecipeIds)) return [];
  const likedSet = new Set(meProfile.likedRecipeIds);
  const map = new Map();
  recipesCache.filter((r) => likedSet.has(r.id)).forEach((recipe) => {
    recipe.tags.forEach((tag) => map.set(tag, (map.get(tag) || 0) + 1));
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 10);
}

function scoreRecipe(recipe, interests, weight) {
  const tagMatches = (recipe.tags || []).filter((tag) => interests.includes(tag)).length;
  return tagMatches * weight + (recipe.likes || 0);
}

function avatarFallback(name) {
  const initial = String(name || 'C').trim().charAt(0).toUpperCase() || 'C';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="100%" height="100%" fill="#1f2937"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="42" font-family="Arial">${initial}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function avatarUrl(avatarPath, name) {
  return avatarPath ? toAbsoluteUrl(avatarPath) : avatarFallback(name);
}

function renderProfile() {
  if (!meProfile) {
    profileUsername.textContent = 'Chef';
    profileEmail.textContent = 'Not signed in';
    profileAvatar.src = avatarFallback('Chef');
    profilePosts.textContent = '0';
    profileFollowers.textContent = '0';
    profileFollowing.textContent = '0';
    if (editUsername) editUsername.value = '';
    if (profileMessage) profileMessage.textContent = '';
    return;
  }

  const username = meProfile.username || (meProfile.email || '').split('@')[0] || 'Chef';
  profileUsername.textContent = username;
  profileEmail.textContent = meProfile.email;
  profileAvatar.src = avatarUrl(meProfile.avatar, username);
  profileAvatar.onerror = () => {
    profileAvatar.onerror = null;
    profileAvatar.src = avatarFallback(username);
  };
  profilePosts.textContent = String(meProfile.postsCount || 0);
  profileFollowers.textContent = String(meProfile.followers || 0);
  profileFollowing.textContent = String(meProfile.following || 0);
  if (editUsername && document.activeElement !== editUsername) editUsername.value = username;
}

function createRecipeCard(recipe) {
  const card = document.createElement('article');
  card.className = 'recipe';

  const mediaHtml = recipe.mediaType === 'video'
    ? `<video controls src="${toAbsoluteUrl(recipe.video)}"></video>`
    : (recipe.photos || []).map((img) => `<img src="${toAbsoluteUrl(img)}" alt="${recipe.title} step" />`).join('');

  const authorEmail = recipe.author || '';
  const authorUsername = recipe.authorUsername || (authorEmail.includes('@') ? authorEmail.split('@')[0] : authorEmail) || 'chef';
  const authorAvatar = recipe.authorAvatar ? toAbsoluteUrl(recipe.authorAvatar) : '';
  const authorInitial = String(authorUsername).trim().charAt(0).toUpperCase() || 'C';
  const handle = authorEmail.includes('@') ? authorEmail.split('@')[0] : authorEmail;
  const isFollowing = meProfile && Array.isArray(meProfile.followingEmails) && meProfile.followingEmails.includes(authorEmail);
  const canFollow = sessionEmail && authorEmail !== sessionEmail;

  card.innerHTML = `
    <div class="post-head">
      <div class="post-author">
        <div class="avatar">
          <span class="avatar-letter ${authorAvatar ? '' : 'show'}">${authorInitial}</span>
          ${authorAvatar ? `<img class="avatar-img" src="${authorAvatar}" alt="${authorUsername}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />` : ''}
        </div>
        <div>
          <strong>${authorUsername}</strong>
          <div class="handle">@${handle} · ${new Date(recipe.createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      ${canFollow ? `<button type="button" class="follow-btn ${isFollowing ? 'active' : ''}" data-action="follow" data-author="${authorEmail}">${isFollowing ? 'Following' : 'Follow'}</button>` : ''}
    </div>
    <h4>${recipe.title}</h4>
    <p>${recipe.description}</p>
    <div class="tags">${(recipe.tags || []).map((tag) => `<span class="tag">#${tag}</span>`).join('')}</div>
    <div class="media-grid">${mediaHtml}</div>
    <div class="post-actions">
      <button type="button" class="action-btn ${recipe.likedByViewer ? 'active' : ''}" data-action="like" data-id="${recipe.id}">${recipe.likedByViewer ? 'Liked' : 'Like'} ${recipe.likes}</button>
      <button type="button" class="action-btn ${recipe.savedByViewer ? 'active' : ''}" data-action="save" data-id="${recipe.id}">${recipe.savedByViewer ? 'Saved' : 'Save'}</button>
      <button type="button" class="action-btn" data-action="download" data-id="${recipe.id}">Download PDF</button>
    </div>
    <p class="meta">${new Date(recipe.createdAt).toLocaleString()}</p>
  `;

  return card;
}

function recipeMatchesFilter(recipe, filter) {
  const tags = recipe.tags || [];
  if (filter === 'popular') return (recipe.likes || 0) >= 6;
  if (filter === 'healthy') {
    return ['healthy', 'highprotein', 'protein', 'salad', 'vegan', 'lowcal', 'lowcarb'].some((t) => tags.includes(t));
  }
  return tags.includes(filter);
}

function syncFilterButtons() {
  const chips = filterRow ? filterRow.querySelectorAll('.filter-chip') : [];
  chips.forEach((chip) => chip.classList.toggle('active', activeFilters.has(chip.dataset.filter)));
}

function recipePassesProfileView(recipe) {
  if (currentPage !== 'profile') return true;
  if (!meProfile) return true;
  if (profileView === 'mine') return recipe.author === sessionEmail;
  if (profileView === 'liked') return (meProfile.likedRecipeIds || []).includes(recipe.id);
  if (profileView === 'saved') return (meProfile.savedRecipeIds || []).includes(recipe.id);
  return true;
}

function setPage(page) {
  currentPage = page;

  const views = Array.from(pageViews || []);
  views.forEach((view) => view.classList.add('hidden'));

  const active = document.getElementById(`page${page.charAt(0).toUpperCase()}${page.slice(1)}`);
  if (active) active.classList.remove('hidden');

  const nav = Array.from(navItems || []);
  nav.forEach((item) => item.classList.toggle('active', item.dataset.page === page));

  const titles = { home: 'Home', explore: 'Explore', notifications: 'Notifications', follow: 'Follow', chat: 'Chat', grok: 'Grok', bookmarks: 'Bookmarks', creatorStudio: 'Creator Studio', premium: 'Premium', map: 'Map', profile: 'Profile', more: 'More' };
  if (pageTitle) pageTitle.textContent = titles[page] || 'Home';

  if (page === 'map') initWorldMap();
  if (page === 'notifications') refreshNotifications();

  renderFeed();
}

function renderInto(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';
  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }
  list.forEach((recipe) => container.appendChild(createRecipeCard(recipe)));
}

function renderFeed() {
  const query = searchInput.value.trim().toLowerCase();
  const interests = feedMode === 'liked' ? buildLikedInterests() : buildUserInterests();
  const weight = feedMode === 'liked' ? 5 : 3;

  let sorted = recipesCache
    .map((recipe) => ({ recipe, score: scoreRecipe(recipe, interests, weight) }))
    .sort((a, b) => b.score - a.score || new Date(b.recipe.createdAt) - new Date(a.recipe.createdAt))
    .map((entry) => entry.recipe)
    .filter((recipe) => {
      if (currentPage === 'home' && activeFilters.size) {
        for (const filter of activeFilters) {
          if (!recipeMatchesFilter(recipe, filter)) return false;
        }
      }

      if (!recipePassesProfileView(recipe)) return false;
      if (!query) return true;
      const haystack = `${recipe.title} ${recipe.description} ${(recipe.tags || []).join(' ')} ${recipe.author} ${recipe.authorUsername || ''}`.toLowerCase();
      return haystack.includes(query);
    });

  if (activeFilters.has('popular') && currentPage === 'home') {
    sorted = sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0) || new Date(b.createdAt) - new Date(a.createdAt));
  }

  const explore = [...sorted].sort((a, b) => (b.likes || 0) - (a.likes || 0));
  const followingSet = new Set((meProfile && meProfile.followingEmails) || []);
  const followList = sorted.filter((r) => followingSet.has(r.author));
  const savedSet = new Set((meProfile && meProfile.savedRecipeIds) || []);
  const bookmarks = sorted.filter((r) => savedSet.has(r.id));
  const profileList = sorted.filter((r) => recipePassesProfileView(r));

  const profileLabel = profileView === 'mine' ? 'My Posts' : profileView === 'liked' ? 'Liked' : 'Saved';
  const modeLabel = feedMode === 'liked' ? 'Based on Likes' : 'For You';
  if (feedTitle) feedTitle.textContent = currentPage === 'profile' ? `${profileLabel} | ${modeLabel}` : `Home | ${modeLabel}`;

  renderInto(feed, sorted, 'No matching posts for home feed.');
  renderInto(exploreFeed, explore, 'No posts for explore yet.');
  renderInto(followFeed, followList, 'Follow creators to see their posts here.');
  renderInto(bookmarksFeed, bookmarks, 'No saved posts yet.');
  renderInto(profileFeed, profileList, 'No matching posts for this profile view.');
}

async function refreshRecipes() {
  if (!apiBase) {
    recipesCache = [];
    renderFeed();
    return;
  }

  try {
    const res = await apiRequest('/api/recipes');
    recipesCache = res.ok ? res.recipes : [];
    renderFeed();
  } catch (error) {
    recipesCache = [];
    renderFeed();
    throw error;
  }
}

async function refreshMe() {
  if (!authToken) {
    meProfile = null;
    notificationsCache = [];
    renderProfile();
    renderNotifications();
    return;
  }

  const res = await apiRequest('/api/me');
  meProfile = res.ok ? res.profile : null;
  renderProfile();

  if (notifBadge && meProfile && !notificationsCache.length) {
    const unread = Number(meProfile.unreadNotifications || 0);
    notifBadge.textContent = String(unread);
    notifBadge.classList.toggle('hidden', unread === 0);
  }
}

saveApiBaseBtn.addEventListener('click', async () => {
  const value = apiBaseInput.value.trim().replace(/\/$/, '');
  if (!value) {
    serverMessage.textContent = 'Enter a server URL.';
    return;
  }

  setLoading(`Connecting to ${value}...`, true);
  const ok = await tryConnect(value);
  setLoading('Connected.', false);

  if (!ok) {
    serverMessage.textContent = 'Could not connect to server.';
    setServerStatus('No server connected');
    return;
  }

  apiBase = value;
  localStorage.setItem(API_BASE_KEY, apiBase);
  serverMessage.textContent = `Connected to ${apiBase}`;
  setServerStatus(`Live server: ${apiBase}`);

  authToken = '';
  sessionEmail = null;
  meProfile = null;
  localStorage.removeItem(TOKEN_KEY);
  await refreshRecipes();
  renderProfile();
  showAuth();
});

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  let step = 'signup request';
  try {
    const res = await apiRequest('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      authMessage.textContent = res.message;
      return;
    }

    authToken = res.token;
    sessionEmail = res.email;
    localStorage.setItem(TOKEN_KEY, authToken);
    authMessage.textContent = '';

    step = 'refresh profile';
    await refreshMe();
    step = 'refresh feed';
    await refreshRecipes();
    step = 'render app';
    showApp();
    signupForm.reset();
  } catch (error) {
    authMessage.textContent = `Signup failed at ${step}: ${error && error.message ? error.message : 'unknown error'}`;
  }
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  let step = 'login request';
  try {
    const res = await apiRequest('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      authMessage.textContent = res.message;
      return;
    }

    authToken = res.token;
    sessionEmail = res.email;
    localStorage.setItem(TOKEN_KEY, authToken);
    authMessage.textContent = '';

    step = 'refresh profile';
    await refreshMe();
    step = 'refresh feed';
    await refreshRecipes();
    step = 'render app';
    showApp();
    loginForm.reset();
  } catch (error) {
    authMessage.textContent = `Login failed at ${step}: ${error && error.message ? error.message : 'unknown error'}`;
  }
});

recipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  recipeMessage.textContent = 'Uploading...';

  const title = document.getElementById('recipeTitle').value.trim();
  const description = document.getElementById('recipeDescription').value.trim();
  const tags = document.getElementById('recipeTags').value
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

  const mediaType = recipeMediaType.value;
  const photosInput = document.getElementById('recipePhotos');
  const videoInput = document.getElementById('recipeVideo');

  if (!mediaType) {
    recipeMessage.textContent = 'Choose a media type.';
    return;
  }

  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', JSON.stringify(tags));
    formData.append('mediaType', mediaType);

    if (mediaType === 'photos') {
      if (!photosInput.files.length) {
        recipeMessage.textContent = 'Please select at least one photo.';
        return;
      }
      [...photosInput.files].forEach((file) => formData.append('media', file));
    }

    if (mediaType === 'video') {
      if (!videoInput.files.length) {
        recipeMessage.textContent = 'Please select a video file.';
        return;
      }
      formData.append('media', videoInput.files[0]);
    }

    const res = await apiRequest('/api/recipes', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      recipeMessage.textContent = res.message;
      return;
    }

    recipeForm.reset();
    updateMediaFields();
    setComposer(false);
    await refreshMe();
    await refreshRecipes();
  } catch (error) {
    recipeMessage.textContent = 'Upload failed. Try again.';
  }
});

async function handleFeedClick(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const action = button.dataset.action;

  if (action === 'download') {
    const recipe = recipesCache.find((r) => r.id === button.dataset.id);
    if (recipe) await downloadRecipePdf(recipe);
    return;
  }

  if (!authToken) return;

  if (action === 'like') {
    const res = await apiRequest(`/api/recipes/${button.dataset.id}/like`, { method: 'POST' });
    if (res.ok) {
      await refreshMe();
      await refreshRecipes();
    }
  }

  if (action === 'save') {
    const res = await apiRequest(`/api/recipes/${button.dataset.id}/save`, { method: 'POST' });
    if (res.ok) {
      await refreshMe();
      await refreshRecipes();
    }
  }

  if (action === 'follow') {
    const res = await apiRequest('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetEmail: button.dataset.author })
    });
    if (res.ok) {
      await refreshMe();
      renderFeed();
    }
  }

  if (action === 'tag') {
    const key = normalizeTagClient(button.dataset.tag);
    if (!key) return;
    if (activeFilters.has(key)) activeFilters.delete(key);
    else activeFilters.add(key);
    syncFilterButtons();
    renderFeed();
  }
}

[feed, exploreFeed, followFeed, bookmarksFeed, profileFeed].filter(Boolean).forEach((container) => {
  container.addEventListener('click', handleFeedClick);
});

if (filterRow) {
  filterRow.addEventListener('click', (event) => {
    const chip = event.target.closest('.filter-chip');
    if (!chip) return;

    const key = chip.dataset.filter;
    if (activeFilters.has(key)) activeFilters.delete(key);
    else activeFilters.add(key);

    syncFilterButtons();
    renderFeed();
  });
}

viewProfileBtn.addEventListener('click', () => { setPage('profile'); setProfileView('mine'); });
viewLikedBtn.addEventListener('click', () => { setPage('profile'); setProfileView('liked'); });
viewSavedBtn.addEventListener('click', () => { setPage('profile'); setProfileView('saved'); });
toggleLikedFeedBtn.addEventListener('click', () => setFeedMode(feedMode === 'liked' ? 'for_you' : 'liked'));

openComposerBtn.addEventListener('click', () => setComposer(true));
closeComposerBtn.addEventListener('click', () => setComposer(false));
cancelComposerBtn.addEventListener('click', () => setComposer(false));
composerModal.addEventListener('click', (event) => {
  if (event.target === composerModal) setComposer(false);
});

authSection.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setComposer(false);
});

logoutBtn.addEventListener('click', async () => {
  await apiRequest('/api/logout', { method: 'POST' });
  authToken = '';
  sessionEmail = null;
  meProfile = null;
  notificationsCache = [];
  localStorage.removeItem(TOKEN_KEY);
  renderProfile();
  renderNotifications();
  showAuth();
});

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

recipeMediaType.addEventListener('change', updateMediaFields);
searchInput.addEventListener('input', renderFeed);

Array.from(navItems || []).forEach((item) => {
  item.addEventListener('click', () => setPage(item.dataset.page));
});

if (markNotifsReadBtn) {
  markNotifsReadBtn.addEventListener('click', async () => {
    await markNotificationsRead();
    await refreshMe();
  });
}

if (profileForm) {
  profileForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!authToken) return;

    const username = (editUsername.value || '').trim();
    if (username.length < 2) {
      profileMessage.textContent = 'Username must be at least 2 characters.';
      return;
    }

    profileMessage.textContent = 'Saving profile...';
    const formData = new FormData();
    formData.append('username', username);
    if (editProfilePic && editProfilePic.files && editProfilePic.files[0]) {
      formData.append('avatar', editProfilePic.files[0]);
    }

    const res = await apiRequest('/api/me', { method: 'POST', body: formData });
    if (!res.ok) {
      profileMessage.textContent = res.message || 'Could not save profile.';
      return;
    }

    meProfile = res.profile;
    renderProfile();
    await refreshRecipes();
    profileMessage.textContent = 'Profile updated.';
    if (editProfilePic) editProfilePic.value = '';
  });
}

(async function init() {
  setLoading('Connecting to server...', true);
  try {
    updateMediaFields();
    syncFilterButtons();

    // Pre-fill the server box with the last working server (or current origin if hosted).
    const saved = localStorage.getItem(API_BASE_KEY) || '';
    const isHttp = location.protocol === 'http:' || location.protocol === 'https:';
    apiBaseInput.value = saved || (isHttp && location.host ? `${location.protocol}//${location.host}` : '');

    const connected = await autoConnect();
    if (connected) {
      await refreshTags();
      await refreshRecipes();

      if (authToken) {
        const res = await apiRequest('/api/session');
        if (res.ok) {
          sessionEmail = res.email;
          await refreshMe();
          showApp();
          return;
        }

        authToken = '';
        localStorage.removeItem(TOKEN_KEY);
      }
    }

    renderProfile();
    showAuth();
  } catch (error) {
    showAuth();
    serverMessage.textContent = 'App failed to initialize. Reload and try again.';
  } finally {
    setLoading('Ready.', false);
  }
})();










































































