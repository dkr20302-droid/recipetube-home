const authSection = document.getElementById('authSection');
const appSection = document.getElementById('appSection');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const authMessage = document.getElementById('authMessage');
const tabButtons = document.querySelectorAll('.tab-btn');
const welcomeText = document.getElementById('welcomeText');
const welcomeSubText = document.getElementById('welcomeSubText');
const logoutBtn = document.getElementById('logoutBtn');
const logoutBtnRail = document.getElementById('logoutBtnRail');
const notificationsBtn = document.getElementById('notificationsBtn');
const notifBadge = document.getElementById('notifBadge');
const notificationsList = document.getElementById('notificationsList');
const markNotifsReadBtn = document.getElementById('markNotifsReadBtn');
const suggestedUsers = document.getElementById('suggestedUsers');
const refreshSuggestedBtn = document.getElementById('refreshSuggestedBtn');
const seeAllSuggestedBtn = document.getElementById('seeAllSuggestedBtn');
const openComposerBtnRail = document.getElementById('openComposerBtnRail');
const floatingChatBtn = document.getElementById('floatingChatBtn');
const storiesRow = document.getElementById('storiesRow');
const rightMeAvatar = document.getElementById('rightMeAvatar');
const rightMeName = document.getElementById('rightMeName');
const rightMeSub = document.getElementById('rightMeSub');
const rightMeSwitch = document.getElementById('rightMeSwitch');
const profileMenuBtn = document.getElementById('profileMenuBtn');
const profileMenu = document.getElementById('profileMenu');
const profileMenuAvatar = document.getElementById('profileMenuAvatar');
const profileMenuHeadAvatar = document.getElementById('profileMenuHeadAvatar');
const profileMenuName = document.getElementById('profileMenuName');
const profileMenuEmail = document.getElementById('profileMenuEmail');
const avatarModal = document.getElementById('avatarModal');
const closeAvatarModalBtn = document.getElementById('closeAvatarModalBtn');
const avatarUploadBtn = document.getElementById('avatarUploadBtn');
const avatarUploadInput = document.getElementById('avatarUploadInput');
const useCurrentAvatarBtn = document.getElementById('useCurrentAvatarBtn');
const avatarModalCurrentImg = document.getElementById('avatarModalCurrentImg');
const avatarModalUploads = document.getElementById('avatarModalUploads');
const friendsModal = document.getElementById('friendsModal');
const closeFriendsModalBtn = document.getElementById('closeFriendsModalBtn');
const friendsModalList = document.getElementById('friendsModalList');
const recipeForm = document.getElementById('recipeForm');
const recipeMediaType = document.getElementById('recipeMediaType');
const photosGroup = document.getElementById('photosGroup');
const videoGroup = document.getElementById('videoGroup');
const recipeMessage = document.getElementById('recipeMessage');
const feed = document.getElementById('feed');
const exploreFeed = document.getElementById('exploreFeed');
const followFeed = document.getElementById('followFeed');
const friendsList = document.getElementById('friendsList');
const friendsStatus = document.getElementById('friendsStatus');
const bookmarksFeed = document.getElementById('bookmarksFeed');
const profileFeed = document.getElementById('profileFeed');
const reelsFeed = document.getElementById('reelsFeed');
const reelsPrevBtn = document.getElementById('reelsPrevBtn');
const reelsNextBtn = document.getElementById('reelsNextBtn');
const filterRow = document.getElementById('filterRow');
const pageTitle = document.getElementById('pageTitle');
const pageViews = document.querySelectorAll('.page-view');
const navItems = document.querySelectorAll('.fb-nav-item');
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
const profileCoverImg = document.getElementById('profileCoverImg');
const editCoverBtn = document.getElementById('editCoverBtn');
const changeAvatarBtn = document.getElementById('changeAvatarBtn');
const editProfileBtn = document.getElementById('editProfileBtn');
const addStoryBtn = document.getElementById('addStoryBtn');
const profileFollowBtn = document.getElementById('profileFollowBtn');
const profileMessageBtn = document.getElementById('profileMessageBtn');
const profileReportBtn = document.getElementById('profileReportBtn');
const profileBlockBtn = document.getElementById('profileBlockBtn');
const profileFriendsBtn = document.getElementById('profileFriendsBtn');
const profilePostsBtn = document.getElementById('profilePostsBtn');
const profileFollowersBtn = document.getElementById('profileFollowersBtn');
const profileFollowingBtn = document.getElementById('profileFollowingBtn');
const profileViewsWrap = document.querySelector('.profile-views');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const viewLikedBtn = document.getElementById('viewLikedBtn');
const viewSavedBtn = document.getElementById('viewSavedBtn');
const feedTitle = document.getElementById('feedTitle');
const toggleLikedFeedBtn = document.getElementById('toggleLikedFeedBtn');
const openComposerBtn = document.getElementById('openComposerBtn');
const openComposerBtn2 = document.getElementById('openComposerBtn2');
const composerModal = document.getElementById('composerModal');
const closeComposerBtn = document.getElementById('closeComposerBtn');
const cancelComposerBtn = document.getElementById('cancelComposerBtn');
const ingredientsList = document.getElementById('ingredientsList');
const methodList = document.getElementById('methodList');
const addIngredientBtn = document.getElementById('addIngredientBtn');
const addStepBtn = document.getElementById('addStepBtn');
const worldMapEl = document.getElementById('worldMap');
const mapDishTitle = document.getElementById('mapDishTitle');
const mapDishDesc = document.getElementById('mapDishDesc');
const mapStatus = document.getElementById('mapStatus');
const tagSuggestions = document.getElementById('tagSuggestions');
const recipeTagsInput = document.getElementById('recipeTags');
const chatList = document.getElementById('chatList');
const newChatEmail = document.getElementById('newChatEmail');
const startChatBtn = document.getElementById('startChatBtn');
const chatStatus = document.getElementById('chatStatus');
const chatTitleEl = document.getElementById('chatTitle');
const chatSubTitleEl = document.getElementById('chatSubTitle');
const chatMessagesEl = document.getElementById('chatMessages');
const chatComposeInput = document.getElementById('chatComposeInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatAttachBtn = document.getElementById('chatAttachBtn');
const chatAttachInput = document.getElementById('chatAttachInput');
const mediaViewerModal = document.getElementById('mediaViewerModal');
const closeMediaViewerBtn = document.getElementById('closeMediaViewerBtn');
const mediaViewerTitle = document.getElementById('mediaViewerTitle');
const mediaViewerMeta = document.getElementById('mediaViewerMeta');
const mediaViewerContent = document.getElementById('mediaViewerContent');
const mediaPrevBtn = document.getElementById('mediaPrevBtn');
const mediaNextBtn = document.getElementById('mediaNextBtn');

// Settings UI
const blockedUsersList = document.getElementById('blockedUsersList');
const refreshBlockedBtn = document.getElementById('refreshBlockedBtn');
const notifNewPostToggle = document.getElementById('notifNewPostToggle');
const notifMessagesToggle = document.getElementById('notifMessagesToggle');
const exportDataBtn = document.getElementById('exportDataBtn');
const logoutEverywhereBtn = document.getElementById('logoutEverywhereBtn');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const settingsMessage = document.getElementById('settingsMessage');
const reportsCard = document.getElementById('reportsCard');
const refreshReportsBtn = document.getElementById('refreshReportsBtn');
const reportsList = document.getElementById('reportsList');

const API_BASE_KEY = 'recipetube_api_base';
const TOKEN_KEY = 'recipetube_token';
const DEFAULT_API_BASE = 'https://clan-anthropology-assisted-occupation.trycloudflare.com';


let apiBase = localStorage.getItem(API_BASE_KEY) || DEFAULT_API_BASE;
let authToken = localStorage.getItem(TOKEN_KEY) || '';
let sessionEmail = null;
let recipesCache = [];
let meProfile = null;
let profileOwnerEmail = null; // null/empty means "me"
let viewedProfile = null; // loaded when viewing someone else's profile
let activeFilters = new Set();
let profileView = 'mine';
let feedMode = 'for_you';
let mapInstance = null;
let mapMarker = null;
let allTags = [];
let notificationsCache = [];
let notificationsPollTimer = null;
let currentPage = 'home';
let mediaViewerState = { recipeId: '', index: 0 };
let chatsCache = [];
let currentChatId = '';
let chatPollTimer = null;
let pendingOpenPostId = '';
let friendsCache = [];
let suggestedCache = [];
let reelsMuted = true;
let reelsObserver = null;
let exploreSearchTimer = null;
let exploreSearchLast = '';
let exploreSearchReqId = 0;
let editingRecipeId = '';
const SINGLE_POST_MODE = false;
const feedCursorByPage = {
  home: 0,
  explore: 0,
  follow: 0,
  bookmarks: 0,
  profile: 0
};


function isElectronEnv() {
  try {
    // Works for preload-enabled Electron and UA-based detection.
    return Boolean((window && window.process && window.process.type) || /Electron/i.test(navigator.userAgent));
  } catch (_) {
    return false;
  }
}

async function renderSettings() {
  if (!settingsMessage) return;
  if (!authToken) {
    settingsMessage.textContent = 'Log in to manage settings.';
    if (blockedUsersList) blockedUsersList.innerHTML = '';
    if (reportsCard) { reportsCard.classList.add('hidden'); reportsCard.hidden = true; }
    return;
  }

  // Local toggles (device-only for now).
  try {
    const key1 = 'recipetube_notif_new_posts';
    const key2 = 'recipetube_notif_messages';
    if (notifNewPostToggle) {
      const v = localStorage.getItem(key1);
      notifNewPostToggle.checked = v === null ? true : v === '1';
      notifNewPostToggle.onchange = () => localStorage.setItem(key1, notifNewPostToggle.checked ? '1' : '0');
    }
    if (notifMessagesToggle) {
      const v = localStorage.getItem(key2);
      notifMessagesToggle.checked = v === null ? true : v === '1';
      notifMessagesToggle.onchange = () => localStorage.setItem(key2, notifMessagesToggle.checked ? '1' : '0');
    }
  } catch (_) {}

  await refreshBlockedUsers();
  await refreshReports();
  settingsMessage.textContent = '';
}

async function refreshReports() {
  if (!reportsCard || !reportsList) return;
  if (!authToken) return;

  reportsList.innerHTML = '<p class="meta">Loading reports...</p>';
  const res = await apiRequest('/api/reports');
  if (!res.ok) {
    reportsCard.classList.add('hidden');
    reportsCard.hidden = true;
    return;
  }

  const admin = !!res.admin;
  const reports = Array.isArray(res.reports) ? res.reports : [];

  // Show the card for admins, or for users that actually have reports.
  const show = admin || reports.length > 0;
  reportsCard.classList.toggle('hidden', !show);
  reportsCard.hidden = !show;
  if (!show) return;

  if (!reports.length) {
    reportsList.innerHTML = '<p class="meta">No reports.</p>';
    return;
  }

  reportsList.innerHTML = reports.slice(0, 120).map((r) => {
    const type = escapeHtml(String(r.type || 'report'));
    const reason = escapeHtml(String(r.reason || ''));
    const status = escapeHtml(String(r.status || 'open'));
    const when = r.createdAt ? new Date(r.createdAt).toLocaleString() : '';
    const target = r.type === 'user'
      ? escapeHtml(String(r.targetEmail || ''))
      : escapeHtml(String(r.targetId || ''));

    const canAdminDelete = admin && r.type === 'recipe' && r.targetId;

    return `
      <div class="settings-user" style="grid-template-columns: 1fr auto; align-items:start;">
        <div style="min-width:0;">
          <div style="font-weight:1000;">${type.toUpperCase()} · <span class="meta">${status}</span></div>
          <div class="meta" style="margin-top:4px;">${reason} · ${escapeHtml(when)}</div>
          <div class="meta" style="margin-top:4px; overflow-wrap:anywhere;">Target: ${target}</div>
          ${r.details ? `<div class="meta" style="margin-top:6px; overflow-wrap:anywhere;">${escapeHtml(String(r.details))}</div>` : ''}
        </div>
        <div style="display:grid; gap:8px; justify-items:end;">
          <button type="button" class="ghost-btn" data-action="resolveReport" data-id="${escapeHtml(r.id)}">Resolve</button>
          ${canAdminDelete ? `<button type="button" class="ghost-btn" data-action="adminDeleteRecipe" data-recipe-id="${escapeHtml(r.targetId)}">Delete post</button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

async function refreshBlockedUsers() {
  if (!blockedUsersList) return;
  if (!authToken) {
    blockedUsersList.innerHTML = '<p class="meta">Log in to see blocked users.</p>';
    return;
  }

  blockedUsersList.innerHTML = '<p class="meta">Loading...</p>';
  const res = await apiRequest('/api/blocked');
  if (!res.ok) {
    blockedUsersList.innerHTML = `<p class="meta">${escapeHtml(res.message || 'Could not load.')}</p>`;
    return;
  }
  const users = Array.isArray(res.users) ? res.users : [];
  if (!users.length) {
    blockedUsersList.innerHTML = '<p class="meta">No blocked users.</p>';
    return;
  }
  blockedUsersList.innerHTML = users.slice(0, 120).map((u) => {
    const username = u.username || (u.email || '').split('@')[0] || 'chef';
    const avatar = avatarUrl(u.avatar, username);
    return `
      <div class="settings-user">
        <div class="avatar" style="width:36px;height:36px;">
          <span class="avatar-letter show">${escapeHtml(String(username).charAt(0).toUpperCase() || 'C')}</span>
          <img class="avatar-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />
        </div>
        <div style="min-width:0;">
          <div style="font-weight:1000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(username)}</div>
          <div class="meta" style="margin-top:2px;">${escapeHtml(u.email || '')}</div>
        </div>
        <button type="button" class="ghost-btn" data-action="unblock" data-email="${escapeHtml(u.email || '')}">Unblock</button>
      </div>
    `;
  }).join('');
}

function setLoading(text, on) {
  // Never block the auth screen. If something hangs during connect, you still need to click Login/Connect.
  try {
    const authVisible = authSection && !authSection.hidden && !authSection.classList.contains('hidden');
    if (authVisible) on = false;
  } catch (_) {}
  startupText.textContent = text;
  startupOverlay.classList.toggle('hidden', !on);
  // Use native `hidden` so the overlay can't block clicks if CSS fails/caches weirdly.
  startupOverlay.hidden = !on;
}

function setServerStatus(text) {
  serverStatusText.textContent = text;
}

function setComposer(open) {
  composerModal.classList.toggle('hidden', !open);
  if (!open) recipeMessage.textContent = '';
  if (!open) editingRecipeId = '';
  if (open) {
    ensureListHasRow(ingredientsList, 'Ingredient (e.g. 2 eggs)');
    ensureListHasRow(methodList, 'Step (e.g. Preheat oven to 180C)');
    // Default state is "create" unless editingRecipeId is set.
    if (!editingRecipeId) {
      try {
        const head = composerModal.querySelector('.modal-head h3');
        if (head) head.textContent = 'Create Recipe Post';
        const submitBtn = recipeForm ? recipeForm.querySelector('button[type="submit"]') : null;
        if (submitBtn) submitBtn.textContent = 'Post Recipe';
      } catch (_) {}
    }
  }
}

function openEditRecipe(recipe) {
  if (!recipe) return;
  editingRecipeId = recipe.id;
  setComposer(true);

  try {
    const head = composerModal.querySelector('.modal-head h3');
    if (head) head.textContent = 'Edit Recipe Post';
    const submitBtn = recipeForm ? recipeForm.querySelector('button[type="submit"]') : null;
    if (submitBtn) submitBtn.textContent = 'Save Changes';
  } catch (_) {}

  const titleEl = document.getElementById('recipeTitle');
  const descEl = document.getElementById('recipeDescription');
  const tagsEl = document.getElementById('recipeTags');
  if (titleEl) titleEl.value = recipe.title || '';
  if (descEl) descEl.value = recipe.description || '';
  if (tagsEl) tagsEl.value = Array.isArray(recipe.tags) ? recipe.tags.join(', ') : '';

  if (ingredientsList) ingredientsList.innerHTML = '';
  if (methodList) methodList.innerHTML = '';
  (Array.isArray(recipe.ingredients) ? recipe.ingredients : []).slice(0, 60).forEach((v) => addListRow(ingredientsList, 'Ingredient (e.g. 2 eggs)', v));
  (Array.isArray(recipe.method) ? recipe.method : []).slice(0, 60).forEach((v) => addListRow(methodList, 'Step (e.g. Preheat oven to 180C)', v));
  ensureListHasRow(ingredientsList, 'Ingredient (e.g. 2 eggs)');
  ensureListHasRow(methodList, 'Step (e.g. Preheat oven to 180C)');

  // Editing: media cannot be changed in this pass.
  if (recipeMediaType) {
    recipeMediaType.value = recipe.mediaType === 'both' ? 'both' : (recipe.video && !((recipe.photos || []).length) ? 'video' : 'photos');
  }
  updateMediaFields();
  if (recipeMessage) recipeMessage.textContent = 'Editing text fields only (media unchanged).';
}

function setProfileMenu(open) {
  if (!profileMenu) return;
  profileMenu.classList.toggle('hidden', !open);
  profileMenu.hidden = !open;
  profileMenu.classList.toggle('open', !!open);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function ensureListHasRow(container, placeholder) {
  if (!container) return;
  const rows = container.querySelectorAll('input');
  if (rows.length) return;
  addListRow(container, placeholder, '');
}

function addListRow(container, placeholder, value) {
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'list-row';
  row.innerHTML = `
    <input type="text" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(String(value || ''))}" />
    <button type="button" class="remove-row-btn" title="Remove" aria-label="Remove">×</button>
  `;
  const removeBtn = row.querySelector('button');
  removeBtn.addEventListener('click', () => {
    row.remove();
    // Always keep at least one row so the UI doesn't disappear.
    ensureListHasRow(container, placeholder);
  });
  container.appendChild(row);
}

function collectListValues(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll('input'))
    .map((el) => String(el.value || '').trim())
    .filter(Boolean)
    .slice(0, 60);
}

async function fetchComments(recipeId) {
  const id = String(recipeId || '').trim();
  if (!id) return [];
  const res = await apiRequest(`/api/recipes/${id}/comments`);
  return res.ok ? (res.comments || []) : [];
}

function renderComments(listEl, comments) {
  if (!listEl) return;
  const items = Array.isArray(comments) ? comments : [];
  if (!items.length) {
    listEl.innerHTML = '<p class="meta">No comments yet.</p>';
    return;
  }

  listEl.innerHTML = items
    .slice(0, 50)
    .map((c) => {
      const who = escapeHtml(c.authorUsername || (c.authorEmail || '').split('@')[0] || 'chef');
      const handle = escapeHtml('@' + ((c.authorEmail || '').split('@')[0] || 'chef'));
      const when = c.createdAt ? new Date(c.createdAt).toLocaleString() : '';
      const text = escapeHtml(c.text || '');
      const recipeId = String(listEl.dataset.recipeId || '').trim();
      const target = recipeId ? `${recipeId}:${c.id}` : c.id;
      const canDelete = !!c.canDelete;
      return `
        <div class="ig-comment">
          <div class="ig-comment-head">
            <strong>${who}</strong>
            <span class="handle">${handle}</span>
            <span class="meta">${escapeHtml(when)}</span>
            <button type="button" class="ig-link" data-action="reportComment" data-target="${escapeHtml(target)}" title="Report">Report</button>
            ${canDelete ? `<button type="button" class="ig-link danger" data-action="deleteComment" data-target="${escapeHtml(target)}" title="Delete">Delete</button>` : ''}
          </div>
          <div class="ig-comment-text">${text}</div>
        </div>
      `;
    })
    .join('');
}

function setCommentsCount(metaRoot, count) {
  if (!metaRoot) return;
  const head = metaRoot.querySelector('.ig-comments > .meta');
  if (!head) return;
  const n = Number(count || 0);
  head.innerHTML = `<strong>${n}</strong> comments`;
}

async function shareRecipe(recipe) {
  const id = recipe && recipe.id ? String(recipe.id) : '';
  if (!id) return;
  const base = String(apiBase || '').replace(/\/$/, '');
  const url = `${base}/?post=${encodeURIComponent(id)}`;
  const title = recipe.title || 'Recipe';
  const text = recipe.description ? String(recipe.description).slice(0, 140) : 'Check out this recipe on RecipeTube.';

  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
  } catch (_) {
    // Fall back to copy.
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
      alert('Link copied.');
      return;
    }
  } catch (_) {}

  prompt('Copy link:', url);
}

async function submitReport({ type, targetId, targetEmail }) {
  if (!authToken) return;
  const t = String(type || '').trim().toLowerCase();
  const reason = prompt('Report reason (spam, not a recipe, NSFW, dangerous, harassment, etc):', 'spam');
  if (!reason) return;
  const details = prompt('Extra details (optional):', '') || '';

  const res = await apiRequest('/api/report', {
    method: 'POST',
    body: JSON.stringify({
      type: t,
      targetId: targetId || '',
      targetEmail: targetEmail || '',
      reason,
      details
    })
  });

  if (res.ok) alert('Reported. Thanks.');
  else alert(res.message || 'Could not submit report.');
}

// Free client-side media moderation (no paid API key).
// This is best-effort: it blocks obvious NSFW content in photos and sampled video frames.
let _nsfwModelPromise = null;
let _nsfwScriptsPromise = null;

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(true), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      // If it already loaded, resolve immediately.
      if ((existing.dataset && existing.dataset.loaded === '1') || existing.readyState === 'complete') resolve(true);
      return;
    }

    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => {
      try { s.dataset.loaded = '1'; } catch (_) {}
      resolve(true);
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

async function ensureNsfwModel() {
  if (_nsfwModelPromise) return _nsfwModelPromise;

  _nsfwModelPromise = (async () => {
    // Load dependencies on demand to keep initial app load fast.
    if (!_nsfwScriptsPromise) {
      _nsfwScriptsPromise = (async () => {
        // TensorFlow.js (browser build) + NSFWJS (UMD) from a CDN.
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js');
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/nsfwjs@2.4.2/dist/nsfwjs.min.js');
      })();
    }

    await _nsfwScriptsPromise;
    if (!window.nsfwjs || !window.nsfwjs.load) throw new Error('NSFW model loader not available.');

    // Load default model (MobileNetV2). For long-term reliability, we can host model files ourselves later.
    const model = await window.nsfwjs.load();
    return model;
  })();

  return _nsfwModelPromise;
}

function shouldBlockNsfwPredictions(predictions) {
  const preds = Array.isArray(predictions) ? predictions : [];
  const map = new Map(preds.map((p) => [String(p.className || ''), Number(p.probability || 0)]));
  const porn = map.get('Porn') || 0;
  const hentai = map.get('Hentai') || 0;
  const sexy = map.get('Sexy') || 0;

  // Conservative thresholds to reduce false positives.
  if (porn >= 0.70) return { block: true, reason: `NSFW (Porn ${Math.round(porn * 100)}%)` };
  if (hentai >= 0.70) return { block: true, reason: `NSFW (Hentai ${Math.round(hentai * 100)}%)` };
  if (sexy >= 0.90) return { block: true, reason: `NSFW (Sexy ${Math.round(sexy * 100)}%)` };
  return { block: false, reason: '' };
}

async function classifyImageFileNsfw(model, file) {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const loaded = new Promise((resolve, reject) => {
      img.onload = () => resolve(true);
      img.onerror = () => reject(new Error('Failed to load image.'));
    });
    img.src = url;
    await loaded;
    const preds = await model.classify(img);
    return preds;
  } finally {
    try { URL.revokeObjectURL(url); } catch (_) {}
  }
}

async function classifyVideoFileNsfw(model, file) {
  const url = URL.createObjectURL(file);
  try {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';

    const meta = new Promise((resolve, reject) => {
      video.onloadedmetadata = () => resolve(true);
      video.onerror = () => reject(new Error('Failed to load video metadata.'));
    });
    video.src = url;
    await meta;

    const t = Number.isFinite(video.duration) && video.duration > 0 ? Math.min(1.0, Math.max(0.1, video.duration * 0.2)) : 0.2;

    const seeked = new Promise((resolve, reject) => {
      video.onseeked = () => resolve(true);
      video.onerror = () => reject(new Error('Failed to seek video.'));
    });
    try { video.currentTime = t; } catch (_) {}
    await seeked;

    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, video.videoWidth || 360);
    canvas.height = Math.max(1, video.videoHeight || 640);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const preds = await model.classify(canvas);
    return preds;
  } finally {
    try { URL.revokeObjectURL(url); } catch (_) {}
  }
}

async function moderateMediaBeforeUpload({ photos, video }) {
  const photoFiles = Array.isArray(photos) ? photos : [];
  const videoFile = video || null;
  if (!photoFiles.length && !videoFile) return { ok: true, reason: '' };

  const model = await ensureNsfwModel();

  // Scan up to first 3 photos (fast and enough to catch obvious problems).
  for (const file of photoFiles.slice(0, 3)) {
    const preds = await classifyImageFileNsfw(model, file);
    const verdict = shouldBlockNsfwPredictions(preds);
    if (verdict.block) return { ok: false, reason: verdict.reason };
  }

  // Scan one representative video frame.
  if (videoFile) {
    const preds = await classifyVideoFileNsfw(model, videoFile);
    const verdict = shouldBlockNsfwPredictions(preds);
    if (verdict.block) return { ok: false, reason: verdict.reason };
  }

  return { ok: true, reason: '' };
}

async function toggleCommentsFromButton(button) {
  const recipeId = String(button.dataset.id || '').trim();
  const metaRoot = button.closest('.ig-meta');
  if (!metaRoot) return;
  const commentsWrap = metaRoot.querySelector('.ig-comments');
  if (!commentsWrap) return;

  const willOpen = !!commentsWrap.hidden;
  commentsWrap.hidden = !willOpen;
  if (!willOpen) return;

  const listEl = commentsWrap.querySelector('[data-comments-list]');
  const inputEl = commentsWrap.querySelector('.ig-comment-input');
  if (inputEl) inputEl.placeholder = authToken ? 'Add a comment...' : 'Log in to comment...';
  if (listEl) listEl.dataset.recipeId = recipeId;

  // Fetch fresh comments whenever it opens (keeps it consistent across devices).
  try {
    if (listEl) listEl.innerHTML = '<p class="meta">Loading comments...</p>';
    const comments = await fetchComments(recipeId);
    renderComments(listEl, comments);
    setCommentsCount(metaRoot, comments.length);
  } catch (_) {
    if (listEl) listEl.innerHTML = '<p class="meta">Failed to load comments.</p>';
  }
}

async function postCommentFromButton(button) {
  if (!authToken) return;
  const recipeId = String(button.dataset.id || '').trim();
  const metaRoot = button.closest('.ig-meta');
  if (!metaRoot) return;
  const commentsWrap = metaRoot.querySelector('.ig-comments');
  if (!commentsWrap) return;

  const inputEl = commentsWrap.querySelector('.ig-comment-input');
  const listEl = commentsWrap.querySelector('[data-comments-list]');
  if (!inputEl) return;

  const text = String(inputEl.value || '').trim();
  if (!text) return;

  button.disabled = true;
  try {
    const res = await apiRequest(`/api/recipes/${recipeId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ text })
    });
    if (!res.ok) return;

    inputEl.value = '';
    const comments = await fetchComments(recipeId);
    renderComments(listEl, comments);
    setCommentsCount(metaRoot, comments.length);
  } finally {
    button.disabled = false;
  }
}

function setMediaViewer(open) {
  if (!mediaViewerModal) return;
  mediaViewerModal.classList.toggle('hidden', !open);
  mediaViewerModal.hidden = !open;
  if (!open && mediaViewerContent) mediaViewerContent.innerHTML = '';
}

function setAvatarModal(open) {
  if (!avatarModal) return;
  avatarModal.classList.toggle('hidden', !open);
  avatarModal.hidden = !open;
}

function setFriendsModal(open) {
  if (!friendsModal) return;
  friendsModal.classList.toggle('hidden', !open);
  friendsModal.hidden = !open;
}

function clampIndex(value, max) {
  const n = Number(value) || 0;
  if (max <= 0) return 0;
  return Math.max(0, Math.min(max - 1, n));
}

function renderMediaViewer() {
  if (!mediaViewerContent) return;
  const recipe = recipesCache.find((r) => r.id === mediaViewerState.recipeId);
  if (!recipe) {
    mediaViewerContent.innerHTML = `<p class="meta">This post is no longer available.</p>`;
    if (mediaViewerTitle) mediaViewerTitle.textContent = 'Media';
    if (mediaViewerMeta) mediaViewerMeta.textContent = '';
    if (mediaPrevBtn) mediaPrevBtn.disabled = true;
    if (mediaNextBtn) mediaNextBtn.disabled = true;
    return;
  }

  const photos = Array.isArray(recipe.photos) ? recipe.photos : [];
  const hasVideo = !!recipe.video;
  const items = [
    ...photos.map((p) => ({ type: 'photo', src: toAbsoluteUrl(p) })),
    ...(hasVideo ? [{ type: 'video', src: toAbsoluteUrl(recipe.video) }] : [])
  ];
  const count = items.length;
  mediaViewerState.index = clampIndex(mediaViewerState.index, Math.max(count, 1));
  const current = items[mediaViewerState.index] || null;

  if (mediaViewerTitle) mediaViewerTitle.textContent = recipe.title || 'Media';
  const author = recipe.authorUsername || (recipe.author || '').split('@')[0] || 'chef';
  if (mediaViewerMeta) {
    const suffix = count > 1 ? `${mediaViewerState.index + 1}/${count}` : (current && current.type === 'video' ? 'Video' : 'Photo');
    mediaViewerMeta.textContent = `${author} · ${suffix}`;
  }

  if (current && current.type === 'video') {
    mediaViewerContent.innerHTML = `
      <div class="media-viewer-stage">
        <video class="media-viewer-video" controls playsinline src="${current.src}"></video>
      </div>
    `;
    if (mediaPrevBtn) mediaPrevBtn.disabled = mediaViewerState.index <= 0;
    if (mediaNextBtn) mediaNextBtn.disabled = mediaViewerState.index >= count - 1;
    return;
  }

  if (!current) {
    mediaViewerContent.innerHTML = `<p class="meta">No photos attached.</p>`;
    if (mediaPrevBtn) mediaPrevBtn.disabled = true;
    if (mediaNextBtn) mediaNextBtn.disabled = true;
    return;
  }

  const src = current.src;
  mediaViewerContent.innerHTML = `
    <div class="media-viewer-stage">
      <img class="media-viewer-img" src="${src}" alt="${recipe.title} photo ${mediaViewerState.index + 1}" />
    </div>
  `;

  if (mediaPrevBtn) mediaPrevBtn.disabled = mediaViewerState.index <= 0;
  if (mediaNextBtn) mediaNextBtn.disabled = mediaViewerState.index >= count - 1;
}

function openMediaViewer(recipeId, index) {
  mediaViewerState.recipeId = String(recipeId || '');
  mediaViewerState.index = Number(index) || 0;
  setMediaViewer(true);
  renderMediaViewer();
}

function getCandidateServers() {
  const saved = localStorage.getItem(API_BASE_KEY) || '';
  const candidates = [];

  const isHttp = location.protocol === 'http:' || location.protocol === 'https:';
  const isHttps = location.protocol === 'https:';

  // Desktop/Electron: force local server by default (your PC stores the uploads/db).
  // You can still override using `?server=...`.
  if (isElectronEnv()) {
    candidates.push('http://localhost:3000');
    candidates.push('http://127.0.0.1:3000');
    if (saved) candidates.push(saved);
    return [...new Set(candidates.map((x) => x.replace(/\/$/, '')))].filter(Boolean);
  }

  // Web: prefer same-origin first.
  if (isHttp && location.host) candidates.push(`${location.protocol}//${location.host}`);

  // On an HTTPS page, browsers usually block calls to http://localhost (mixed content), so don't even try it.
  if (!isHttps) {
    candidates.push('http://localhost:3000');
    candidates.push('http://127.0.0.1:3000');
  }

  if (saved) candidates.push(saved);
  if (DEFAULT_API_BASE) candidates.push(DEFAULT_API_BASE);

  if (location.hostname && !['', 'localhost', '127.0.0.1'].includes(location.hostname)) {
    candidates.push(`http://${location.hostname}:3000`);
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

function renderFriends(list) {
  if (!friendsList) return;
  const items = Array.isArray(list) ? list : [];
  friendsCache = items;

  if (!authToken) {
    friendsList.innerHTML = '<p class="meta">Log in to see friends.</p>';
    return;
  }

  if (!items.length) {
    friendsList.innerHTML = '<p class="meta">No friends yet. You become friends when you follow each other.</p>';
    return;
  }

  friendsList.innerHTML = items
    .slice(0, 24)
    .map((f) => {
      const username = f.username || (f.email || '').split('@')[0] || 'chef';
      const handle = '@' + ((f.email || '').split('@')[0] || 'chef');
      const avatar = avatarUrl(f.avatar, username);
      return `
        <div class="friend-card">
          <div class="avatar" style="width:42px;height:42px;">
            <span class="avatar-letter show">${escapeHtml(String(username).charAt(0).toUpperCase() || 'C')}</span>
            <img class="avatar-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />
          </div>
          <div class="friend-lines">
            <div class="friend-name">${escapeHtml(username)}</div>
            <div class="meta friend-handle">${escapeHtml(handle)}</div>
          </div>
          <div class="friend-actions">
            <button type="button" class="ghost-btn" data-action="startChat" data-email="${escapeHtml(f.email)}">Message</button>
          </div>
        </div>
      `;
    })
    .join('');
}

async function refreshFriends() {
  if (!friendsList) return;
  if (!authToken) {
    renderFriends([]);
    return;
  }
  if (friendsStatus) friendsStatus.textContent = 'Loading friends...';
  const res = await apiRequest('/api/friends');
  const friends = res.ok ? (res.friends || []) : [];
  renderFriends(friends);
  if (friendsStatus) friendsStatus.textContent = friends.length ? `${friends.length} friends` : 'Friends are people who follow you back.';
}

function renderSuggested(list) {
  if (!suggestedUsers) return;
  const items = Array.isArray(list) ? list : [];
  suggestedCache = items;

  if (!authToken) {
    suggestedUsers.innerHTML = '<p class="meta" style="margin:0 6px 10px;">Log in to see suggestions.</p>';
    return;
  }

  if (!items.length) {
    suggestedUsers.innerHTML = '<p class="meta" style="margin:0 6px 10px;">No suggestions right now.</p>';
    return;
  }

  const following = new Set((meProfile && Array.isArray(meProfile.followingEmails)) ? meProfile.followingEmails : []);

  suggestedUsers.innerHTML = items
    .slice(0, 5)
    .map((u) => {
      const username = u.username || (u.email || '').split('@')[0] || 'chef';
      const handle = '@' + ((u.email || '').split('@')[0] || 'chef');
      const meta = u.postsCount ? `${u.postsCount} posts` : 'Suggested';
      const avatar = avatarUrl(u.avatar, username);
      const isFollowing = following.has(u.email);
      return `
        <div class="suggested-item">
          <div class="avatar" style="width:44px;height:44px;">
            <span class="avatar-letter show">${escapeHtml(String(username).charAt(0).toUpperCase() || 'C')}</span>
            <img class="avatar-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />
          </div>
          <div class="suggested-lines">
            <div class="suggested-name">${escapeHtml(username)}</div>
            <div class="meta suggested-meta">${escapeHtml(handle)} · ${escapeHtml(meta)}</div>
          </div>
          <div>
            <button type="button" class="follow-btn ${isFollowing ? 'active' : ''}" data-action="suggestFollow" data-email="${escapeHtml(u.email)}">${isFollowing ? 'Following' : 'Follow'}</button>
          </div>
        </div>
      `;
    })
    .join('');
}

async function refreshSuggested() {
  if (!suggestedUsers) return;
  if (!authToken) {
    renderSuggested([]);
    return;
  }
  suggestedUsers.innerHTML = '<p class="meta" style="margin:0 6px 10px;">Loading...</p>';
  const res = await apiRequest('/api/suggested');
  const items = res.ok ? (res.suggested || []) : [];
  renderSuggested(items);
}

function renderStories() {
  if (!storiesRow) return;

  // Prefer friends, then fall back to suggested.
  const src = (Array.isArray(friendsCache) && friendsCache.length) ? friendsCache
    : (Array.isArray(suggestedCache) ? suggestedCache : []);

  const items = src.slice(0, 8);
  if (!items.length) {
    storiesRow.innerHTML = '<p class="meta" style="margin:0;">Follow people to see stories.</p>';
    return;
  }

  storiesRow.innerHTML = items.map((u) => {
    const username = u.username || (u.email || '').split('@')[0] || 'chef';
    const avatar = avatarUrl(u.avatar, username);
    return `
      <button type="button" class="ig-story" data-action="storyNoop" title="${escapeHtml(username)}">
        <div class="ig-story-ring">
          <img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <div class="ig-story-fallback" style="display:none;"></div>
        </div>
        <div class="ig-story-name">${escapeHtml(username)}</div>
      </button>
    `;
  }).join('');
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

function stopChatPolling() {
  if (!chatPollTimer) return;
  clearInterval(chatPollTimer);
  chatPollTimer = null;
}

function startChatPolling() {
  stopChatPolling();
  chatPollTimer = setInterval(() => {
    if (currentPage === 'chat' && authToken) {
      refreshChats({ keepOpenChat: true });
    }
  }, 5000);
}

function formatChatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString();
}

function renderChatList() {
  if (!chatList) return;

  if (!authToken) {
    chatList.innerHTML = '<p class="meta" style="padding:8px 10px;">Log in to use chat.</p>';
    return;
  }

  if (!chatsCache.length) {
    chatList.innerHTML = '<p class="meta" style="padding:8px 10px;">No chats yet. Start one above.</p>';
    return;
  }

  chatList.innerHTML = chatsCache
    .map((c) => {
      const active = c.id === currentChatId ? 'chat-item active' : 'chat-item';
      const last = c.lastMessage ? c.lastMessage.text : '';
      const when = c.lastMessage ? formatChatTime(c.lastMessage.createdAt) : formatChatTime(c.updatedAt);
      const badge = c.unreadCount > 0 ? `<span class="chat-badge">${c.unreadCount > 99 ? '99+' : c.unreadCount}</span>` : '';
      return `
        <button type="button" class="${active}" data-action="openChat" data-chat-id="${escapeHtml(c.id)}">
          <div class="chat-item-top">
            <strong>${escapeHtml(c.title || 'Chat')}</strong>
            ${badge}
          </div>
          <div class="meta">${escapeHtml(last || (when ? 'No messages yet' : ''))}</div>
          <div class="meta">${escapeHtml(when)}</div>
        </button>
      `;
    })
    .join('');
}

function renderChatMessages(chat) {
  if (!chatMessagesEl) return;
  const msgs = chat && Array.isArray(chat.messages) ? chat.messages : [];

  if (!msgs.length) {
    chatMessagesEl.innerHTML = '<p class="meta">No messages yet.</p>';
    return;
  }

  chatMessagesEl.innerHTML = msgs
    .map((m) => {
      const me = sessionEmail && m.senderEmail === sessionEmail;
      const who = me ? 'You' : (m.senderEmail || '').split('@')[0] || 'chef';
      const kind = String(m.kind || 'text');
      const text = String(m.text || '');
      const isGifUrl = /^https?:\/\/\S+\.gif(\?\S+)?$/i.test(text.trim());
      const isImgUrl = /^https?:\/\/\S+\.(png|jpg|jpeg|webp|gif)(\?\S+)?$/i.test(text.trim());
      const mediaUrl = kind === 'media' ? toAbsoluteUrl(m.mediaUrl || '') : (isImgUrl || isGifUrl ? text.trim() : '');
      const mediaHtml = mediaUrl
        ? `<div class="chat-media"><img src="${escapeHtml(mediaUrl)}" alt="Shared media" loading="lazy" /></div>`
        : '';
      const bodyHtml = mediaUrl ? '' : `<div>${escapeHtml(text)}</div>`;
      return `
        <div class="chat-bubble ${me ? 'me' : ''}">
          <div><strong>${escapeHtml(who)}</strong></div>
          ${mediaHtml}
          ${bodyHtml}
          <div class="meta">${escapeHtml(formatChatTime(m.createdAt))}</div>
        </div>
      `;
    })
    .join('');

  // Scroll to bottom.
  try {
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  } catch (_) {}
}

async function openChat(chatId) {
  const id = String(chatId || '').trim();
  if (!id || !authToken) return;

  currentChatId = id;
  if (chatStatus) chatStatus.textContent = '';
  renderChatList();

  if (chatTitleEl) chatTitleEl.textContent = 'Loading...';
  if (chatSubTitleEl) chatSubTitleEl.textContent = '';
  if (chatMessagesEl) chatMessagesEl.innerHTML = '<p class="meta">Loading messages...</p>';

  const res = await apiRequest(`/api/chats/${encodeURIComponent(id)}`);
  if (!res.ok) {
    if (chatTitleEl) chatTitleEl.textContent = 'Chat';
    if (chatMessagesEl) chatMessagesEl.innerHTML = `<p class="meta">${escapeHtml(res.message || 'Could not load chat.')}</p>`;
    return;
  }

  const chat = res.chat;
  if (chatTitleEl) chatTitleEl.textContent = chat.title || 'Chat';
  if (chatSubTitleEl) chatSubTitleEl.textContent = (chat.members || []).map((m) => m.username || (m.email || '').split('@')[0]).join(', ');
  renderChatMessages(chat);

  // Mark read so unread badges clear quickly.
  await apiRequest(`/api/chats/${encodeURIComponent(id)}/read`, { method: 'POST' });
}

async function refreshChats({ keepOpenChat } = {}) {
  if (!authToken) {
    chatsCache = [];
    renderChatList();
    return;
  }

  const res = await apiRequest('/api/chats');
  chatsCache = res.ok ? (res.chats || []) : [];
  renderChatList();

  if (keepOpenChat && currentChatId) {
    // Refresh the open chat thread too (new messages).
    try {
      const openRes = await apiRequest(`/api/chats/${encodeURIComponent(currentChatId)}`);
      if (openRes.ok) {
        if (chatTitleEl) chatTitleEl.textContent = openRes.chat.title || 'Chat';
        renderChatMessages(openRes.chat);
      }
    } catch (_) {}
  }
}

async function startChatWithEmail(email) {
  if (!authToken) return;
  const targetEmail = String(email || '').trim().toLowerCase();
  if (!targetEmail) return;
  if (chatStatus) chatStatus.textContent = 'Starting chat...';

  const res = await apiRequest('/api/chats', {
    method: 'POST',
    body: JSON.stringify({ targetEmail })
  });

  if (!res.ok) {
    if (chatStatus) chatStatus.textContent = res.message || 'Could not start chat.';
    return;
  }

  if (newChatEmail) newChatEmail.value = '';
  if (chatStatus) chatStatus.textContent = '';
  await refreshChats();
  await openChat(res.chatId);
}

async function sendChatMessage() {
  if (!authToken || !currentChatId) return;
  const text = String(chatComposeInput && chatComposeInput.value ? chatComposeInput.value : '').trim();
  if (!text) return;

  if (sendChatBtn) sendChatBtn.disabled = true;
  try {
    const res = await apiRequest(`/api/chats/${encodeURIComponent(currentChatId)}/messages`, {
      method: 'POST',
      body: JSON.stringify({ text })
    });
    if (!res.ok) return;
    if (chatComposeInput) chatComposeInput.value = '';
    await refreshChats({ keepOpenChat: true });
  } finally {
    if (sendChatBtn) sendChatBtn.disabled = false;
  }
}

async function sendChatMedia(file) {
  if (!authToken || !currentChatId) return;
  if (!file) return;

  if (chatStatus) chatStatus.textContent = 'Uploading image...';
  const fd = new FormData();
  fd.append('file', file);
  const res = await apiRequest(`/api/chats/${encodeURIComponent(currentChatId)}/media`, { method: 'POST', body: fd });
  if (!res.ok) {
    if (chatStatus) chatStatus.textContent = res.message || 'Could not upload image.';
    return;
  }
  if (chatStatus) chatStatus.textContent = '';
  await refreshChats({ keepOpenChat: true });
}

function maybeOpenSharedPost() {
  const id = String(pendingOpenPostId || '').trim();
  if (!id) return;
  pendingOpenPostId = '';

  const recipe = recipesCache.find((r) => r.id === id);
  if (!recipe) return;

  try {
    setPage('home');
  } catch (_) {}

  // Open the media viewer (Instagram-style expand).
  openMediaViewer(id, 0);
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
    const ing = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
    const method = Array.isArray(recipe.method) ? recipe.method : [];
    printWin.document.write(
      `<html><head><title>${recipe.title || 'Recipe'}</title></head><body style="font-family:Arial;padding:24px;">` +
      `<h1>${recipe.title || 'Recipe'}</h1>` +
      `<p><strong>Author:</strong> ${recipe.author || ''}</p>` +
      `<p>${recipe.description || ''}</p>` +
      `<p>${tagsText}</p>` +
      (ing.length ? `<h2>Ingredients</h2><ul>${ing.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` : '') +
      (method.length ? `<h2>Method</h2><ol>${method.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ol>` : '') +
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

  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const method = Array.isArray(recipe.method) ? recipe.method : [];

  if (ingredients.length) {
    doc.setTextColor(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Ingredients', margin, y);
    y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30);
    const lines = doc.splitTextToSize(ingredients.map((x) => `• ${x}`).join('\n'), 515);
    doc.text(lines, margin, y);
    y += (lines.length * 14) + 10;
  }

  if (method.length) {
    doc.setTextColor(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Method', margin, y);
    y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30);
    const lines = doc.splitTextToSize(method.map((x, idx) => `${idx + 1}. ${x}`).join('\n'), 515);
    doc.text(lines, margin, y);
    y += (lines.length * 14) + 10;
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
    const timeoutMs = /\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(candidate) ? 450 : 2000;
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    const response = await fetch(`${candidate}/api/health`, { signal: ctrl.signal });
    clearTimeout(t);
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
      if (apiBaseInput) apiBaseInput.value = apiBase;
      if (serverMessage) serverMessage.textContent = `Connected to ${apiBase}`;
      setServerStatus(`Live server: ${apiBase}`);
      return true;
    }
  }

  if (serverMessage) serverMessage.textContent = 'Could not connect to server. Try again in a moment.';
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
  if (!isViewingSelfProfile() && view !== 'mine') view = 'mine';
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
  authSection.hidden = false;
  appSection.classList.add('hidden');
  appSection.hidden = true;
  stopNotificationsPolling();
  stopChatPolling();
  setProfileMenu(false);
  setAvatarModal(false);
  setFriendsModal(false);
  profileOwnerEmail = null;
  viewedProfile = null;
  chatsCache = [];
  currentChatId = '';
  if (chatTitleEl) chatTitleEl.textContent = 'Select a chat';
  if (chatSubTitleEl) chatSubTitleEl.textContent = 'Your messages are stored on the server.';
  if (chatMessagesEl) chatMessagesEl.innerHTML = '';
  renderChatList();
  notificationsCache = [];
  renderNotifications();
}

function showApp() {
  authSection.classList.add('hidden');
  authSection.hidden = true;
  appSection.classList.remove('hidden');
  appSection.hidden = false;
  profileOwnerEmail = sessionEmail;
  viewedProfile = null;
  if (welcomeText) {
    const handle = `@${(sessionEmail || '').split('@')[0]}`;
    welcomeText.textContent = handle;
    welcomeText.title = `${handle}`;
  }
  if (welcomeSubText) {
    welcomeSubText.textContent = sessionEmail || 'RecipeTube';
    welcomeSubText.title = sessionEmail || 'RecipeTube';
  }
  renderProfile();
  renderNotifications();
  refreshSuggested();
  refreshFriends();
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
  const type = recipeMediaType.value;
  const showPhotos = type === 'photos' || type === 'both';
  const showVideo = type === 'video' || type === 'both';
  photosGroup.classList.toggle('hidden', !showPhotos);
  videoGroup.classList.toggle('hidden', !showVideo);
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

function getProfileOwnerEmail() {
  return profileOwnerEmail || sessionEmail || '';
}

function isViewingSelfProfile() {
  const owner = getProfileOwnerEmail();
  return !!sessionEmail && owner === sessionEmail;
}

function syncProfileUiForViewer() {
  const self = isViewingSelfProfile();
  if (profileViewsWrap) profileViewsWrap.classList.toggle('single', !self);

  if (addStoryBtn) {
    addStoryBtn.classList.toggle('hidden', !self);
    addStoryBtn.hidden = !self;
  }
  if (editProfileBtn) {
    editProfileBtn.classList.toggle('hidden', !self);
    editProfileBtn.hidden = !self;
  }
  if (editCoverBtn) {
    editCoverBtn.classList.toggle('hidden', !self);
    editCoverBtn.hidden = !self;
  }
  if (changeAvatarBtn) {
    changeAvatarBtn.classList.toggle('hidden', !self);
    changeAvatarBtn.hidden = !self;
  }

  if (profileFollowBtn) {
    profileFollowBtn.classList.toggle('hidden', self);
    profileFollowBtn.hidden = self;
  }
  if (profileMessageBtn) {
    profileMessageBtn.classList.toggle('hidden', self);
    profileMessageBtn.hidden = self;
  }
  if (profileReportBtn) {
    profileReportBtn.classList.toggle('hidden', self);
    profileReportBtn.hidden = self;
  }
  if (profileBlockBtn) {
    profileBlockBtn.classList.toggle('hidden', self);
    profileBlockBtn.hidden = self;
  }

  if (viewLikedBtn) {
    viewLikedBtn.classList.toggle('hidden', !self);
    viewLikedBtn.hidden = !self;
  }
  if (viewSavedBtn) {
    viewSavedBtn.classList.toggle('hidden', !self);
    viewSavedBtn.hidden = !self;
  }
}

async function openMyProfile() {
  profileOwnerEmail = sessionEmail;
  viewedProfile = null;
  setProfileView('mine');
  setPage('profile');
  renderProfile();
}

async function openUserProfile(email) {
  const target = String(email || '').trim().toLowerCase();
  if (!target) return;

  if (target === sessionEmail) {
    await openMyProfile();
    return;
  }

  profileOwnerEmail = target;
  viewedProfile = null;
  setProfileView('mine');
  setPage('profile');
  renderProfile(); // show loading skeleton state

  try {
    const res = await apiRequest(`/api/users/${encodeURIComponent(target)}`);
    if (res && res.ok) {
      viewedProfile = res.profile;
      renderProfile();
      renderFeed();
    } else {
      viewedProfile = null;
      renderProfile();
      if (profileMessage) profileMessage.textContent = res.message || 'Could not load profile.';
    }
  } catch (_) {
    viewedProfile = null;
    renderProfile();
    if (profileMessage) profileMessage.textContent = 'Could not load profile.';
  }
}

function renderProfile() {
  const self = isViewingSelfProfile();
  const profile = self ? meProfile : viewedProfile;
  const ownerEmail = getProfileOwnerEmail();

  syncProfileUiForViewer();

  if (self && !profile) {
    profileUsername.textContent = 'Chef';
    profileEmail.textContent = ownerEmail ? ownerEmail : 'Not signed in';
    profileAvatar.src = avatarFallback('Chef');
    profilePosts.textContent = '0';
    profileFollowers.textContent = '0';
    profileFollowing.textContent = '0';
    if (editUsername) editUsername.value = '';
    if (profileMessage) profileMessage.textContent = '';
    if (rightMeName) rightMeName.textContent = 'Chef';
    if (rightMeSub) rightMeSub.textContent = 'Not signed in';
    if (rightMeAvatar) rightMeAvatar.src = avatarFallback('Chef');
    if (profileMenuName) profileMenuName.textContent = 'Chef';
    if (profileMenuEmail) profileMenuEmail.textContent = 'Not signed in';
    const fallback = avatarFallback('Chef');
    if (profileMenuAvatar) profileMenuAvatar.src = fallback;
    if (profileMenuHeadAvatar) profileMenuHeadAvatar.src = fallback;
    if (profileCoverImg) profileCoverImg.style.display = 'none';
    if (profileFriendsBtn) profileFriendsBtn.textContent = '0 friends';
    if (avatarModalCurrentImg) avatarModalCurrentImg.src = fallback;
    if (avatarModalUploads) avatarModalUploads.innerHTML = '';
    return;
  }

  // Viewing another profile: show a lightweight loading state without clobbering "me" UI.
  if (!self && !profile) {
    const handle = ownerEmail.includes('@') ? ownerEmail.split('@')[0] : ownerEmail;
    profileUsername.textContent = 'Loading...';
    profileEmail.textContent = ownerEmail;
    profileAvatar.src = avatarFallback(handle || 'C');
    profilePosts.textContent = '0';
    profileFollowers.textContent = '0';
    profileFollowing.textContent = '0';
    if (profileCoverImg) profileCoverImg.style.display = 'none';
    if (profileFriendsBtn) profileFriendsBtn.textContent = '0 friends';
    if (profileFollowBtn) {
      profileFollowBtn.textContent = 'Follow';
      profileFollowBtn.classList.remove('active');
    }
    return;
  }

  const username = profile.username || (profile.email || ownerEmail || '').split('@')[0] || 'Chef';
  profileUsername.textContent = username;
  profileEmail.textContent = profile.email || ownerEmail;
  profileAvatar.src = avatarUrl(profile.avatar, username);
  profileAvatar.onerror = () => {
    profileAvatar.onerror = null;
    profileAvatar.src = avatarFallback(username);
  };
  profilePosts.textContent = String(profile.postsCount || 0);
  profileFollowers.textContent = String(profile.followers || 0);
  profileFollowing.textContent = String(profile.following || 0);
  if (self && editUsername && document.activeElement !== editUsername) editUsername.value = username;

  if (rightMeName) rightMeName.textContent = meProfile ? (meProfile.username || (meProfile.email || '').split('@')[0] || 'Chef') : 'Chef';
  if (rightMeSub) rightMeSub.textContent = meProfile ? meProfile.email : 'Not signed in';
  if (rightMeAvatar) {
    const meName = meProfile ? (meProfile.username || (meProfile.email || '').split('@')[0] || 'Chef') : 'Chef';
    rightMeAvatar.src = avatarUrl(meProfile ? meProfile.avatar : '', meName);
    rightMeAvatar.onerror = () => {
      rightMeAvatar.onerror = null;
      rightMeAvatar.src = avatarFallback(meName);
    };
  }

  if (profileMenuName) profileMenuName.textContent = meProfile ? (meProfile.username || (meProfile.email || '').split('@')[0] || 'Chef') : 'Chef';
  if (profileMenuEmail) profileMenuEmail.textContent = meProfile ? meProfile.email : 'Not signed in';
  const avatar = avatarUrl(meProfile ? meProfile.avatar : '', (meProfile && meProfile.username) || (meProfile && meProfile.email) || 'Chef');
  if (profileMenuAvatar) profileMenuAvatar.src = avatar;
  if (profileMenuHeadAvatar) {
    profileMenuHeadAvatar.src = avatar;
    profileMenuHeadAvatar.onerror = () => {
      profileMenuHeadAvatar.onerror = null;
      profileMenuHeadAvatar.src = avatarFallback((meProfile && meProfile.username) || 'Chef');
    };
  }

  if (profileCoverImg) {
    if (profile.cover) {
      profileCoverImg.src = toAbsoluteUrl(profile.cover);
      profileCoverImg.style.display = 'block';
    } else {
      profileCoverImg.style.display = 'none';
    }
  }

  if (profileFriendsBtn) {
    const n = Number(profile.friends || 0);
    profileFriendsBtn.textContent = `${n} friend${n === 1 ? '' : 's'}`;
  }

  if (self) {
    if (avatarModalCurrentImg) avatarModalCurrentImg.src = avatar;
    if (avatarModalUploads) {
      const uploads = Array.isArray(meProfile.avatarUploads) ? meProfile.avatarUploads : [];
      avatarModalUploads.innerHTML = uploads.slice(0, 18).map((u) => `
        <button type="button" class="avatar-tile" data-action="useOldAvatar" data-url="${escapeHtml(u)}">
          <img src="${escapeHtml(toAbsoluteUrl(u))}" alt="Uploaded avatar" />
        </button>
      `).join('');
    }
  }

  if (profileFollowBtn && !self) {
    const following = !!(viewedProfile && viewedProfile.isFollowing);
    profileFollowBtn.textContent = following ? 'Following' : 'Follow';
    profileFollowBtn.classList.toggle('active', following);
  }
}

function createRecipeCard(recipe) {
  const card = document.createElement('article');
  card.className = 'recipe ig-post';

  const ico = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.4-8.5-12A4.75 4.75 0 0 1 8.2 4.2c1.5 0 2.9.7 3.8 1.8.9-1.1 2.3-1.8 3.8-1.8A4.75 4.75 0 0 1 20.5 9c0 6.6-8.5 12-8.5 12z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    comment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 0 1 3 12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12a1.5 1.5 0 0 1 1.5 1.5V22l-7.5-4-7.5 4V4.5A1.5 1.5 0 0 1 6 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    more: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 5 12zm7 0a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 12 12zm7 0a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 19 12z" fill="currentColor"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h5v2H3V5h5l1-2zm1 6h2v10h-2V9zm4 0h2v10h-2V9z"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10m0 0l4-4m-4 4l-4-4M4 19h16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7L8 5z"/></svg>'
  };

  const photos = Array.isArray(recipe.photos) ? recipe.photos : [];
  const hasVideo = !!recipe.video;
  const mediaCount = photos.length + (hasVideo ? 1 : 0);
  const previewIsVideoOnly = hasVideo && !photos.length;
  const mediaHtml = previewIsVideoOnly
    ? `
      <button type="button" class="media-preview reel-media" data-action="openMedia" data-id="${recipe.id}" data-index="0">
        <div class="media-preview-stage reel-stage">
          <video class="media-preview-video" muted playsinline preload="metadata" src="${toAbsoluteUrl(recipe.video)}"></video>
          <div class="media-preview-play">${ico.play}</div>
        </div>
      </button>
    `
    : `
      <button type="button" class="media-preview reel-media" data-action="openMedia" data-id="${recipe.id}" data-index="0">
        <div class="media-preview-stage reel-stage">
          ${photos[0] ? `<img class="media-preview-img" src="${toAbsoluteUrl(photos[0])}" alt="${recipe.title} preview" />` : `<div class="media-preview-empty">No media</div>`}
          ${hasVideo ? `<div class="media-preview-play small">${ico.play}</div>` : ''}
          ${mediaCount > 1 ? `<div class="media-preview-count">+${mediaCount - 1}</div>` : ''}
        </div>
      </button>
    `;

  const authorEmail = recipe.author || '';
  const authorUsername = recipe.authorUsername || (authorEmail.includes('@') ? authorEmail.split('@')[0] : authorEmail) || 'chef';
  const authorAvatar = recipe.authorAvatar ? toAbsoluteUrl(recipe.authorAvatar) : '';
  const authorInitial = String(authorUsername).trim().charAt(0).toUpperCase() || 'C';
  const handle = authorEmail.includes('@') ? authorEmail.split('@')[0] : authorEmail;
  const isFollowing = meProfile && Array.isArray(meProfile.followingEmails) && meProfile.followingEmails.includes(authorEmail);
  const canFollow = sessionEmail && authorEmail !== sessionEmail;
  const canDelete = sessionEmail && authorEmail === sessionEmail;

	  card.innerHTML = `
	    <div class="ig-wrap">
      <div class="ig-head">
        <button type="button" class="post-author post-author-btn" data-action="openProfile" data-email="${escapeHtml(authorEmail)}" title="Open profile">
          <div class="avatar">
            <span class="avatar-letter ${authorAvatar ? '' : 'show'}">${authorInitial}</span>
            ${authorAvatar ? `<img class="avatar-img" src="${authorAvatar}" alt="${authorUsername}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />` : ''}
          </div>
          <div class="ig-author-lines">
            <strong>${authorUsername}</strong>
            <div class="handle">@${handle}</div>
          </div>
        </button>
        <div class="ig-head-actions">
          ${canFollow ? `<button type="button" class="follow-btn ${isFollowing ? 'active' : ''}" data-action="follow" data-author="${authorEmail}">${isFollowing ? 'Following' : 'Follow'}</button>` : ''}
          <button type="button" class="ig-more" data-action="reportRecipe" data-id="${recipe.id}" title="Report" aria-label="Report">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l10 20H2L12 2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 9v5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>
          </button>
        </div>
      </div>

      <div class="ig-media">
        ${mediaHtml}
      </div>

	      <div class="ig-actions">
	        <div class="ig-actions-left">
	          <button type="button" class="ig-icon ${recipe.likedByViewer ? 'active' : ''}" data-action="like" data-id="${recipe.id}" title="Like" aria-label="Like">${ico.heart}</button>
	          <button type="button" class="ig-icon" data-action="toggleComments" data-id="${recipe.id}" title="Comment" aria-label="Comment">${ico.comment}</button>
	          <button type="button" class="ig-icon" data-action="share" data-id="${recipe.id}" title="Share" aria-label="Share">${ico.share}</button>
	        </div>
        <div class="ig-actions-right">
          <button type="button" class="ig-icon ${recipe.savedByViewer ? 'active' : ''}" data-action="save" data-id="${recipe.id}" title="Save" aria-label="Save">${ico.bookmark}</button>
        </div>
      </div>

	      <div class="ig-meta">
	        <div class="ig-likes">${recipe.likes} likes</div>
	        <div class="ig-caption"><strong>${recipe.title}</strong> ${recipe.description}</div>
	        <div class="tags ig-tags">${(recipe.tags || []).slice(0, 8).map((tag) => `<span class="tag">#${tag}</span>`).join('')}</div>
	        ${(Array.isArray(recipe.ingredients) && recipe.ingredients.length) || (Array.isArray(recipe.method) && recipe.method.length) ? `
	          <details class="ig-details">
	            <summary>Ingredients &amp; method</summary>
	            <div class="meta"><strong>Ingredients:</strong> ${(recipe.ingredients || []).slice(0, 10).map(escapeHtml).join(' · ')}${(recipe.ingredients || []).length > 10 ? ' …' : ''}</div>
	            <div class="meta"><strong>Method:</strong> ${(recipe.method || []).slice(0, 5).map((s, idx) => `${idx + 1}. ${escapeHtml(s)}`).join(' ') }${(recipe.method || []).length > 5 ? ' …' : ''}</div>
	          </details>
	        ` : ''}
	        <div class="ig-comments" hidden>
	          <div class="meta"><strong>${Number(recipe.commentCount || 0)}</strong> comments</div>
	          <div class="ig-comments-list" data-comments-list="1"></div>
	          <div class="ig-comment-form">
	            <input type="text" class="ig-comment-input" placeholder="Add a comment..." maxlength="400" />
	            <button type="button" class="btn" data-action="postComment" data-id="${recipe.id}">Post</button>
	          </div>
	        </div>
	        <div class="ig-subline">
	          <button type="button" class="ig-link" data-action="download" data-id="${recipe.id}">Download PDF</button>
	          ${canDelete ? `<button type="button" class="ig-link" data-action="editRecipe" data-id="${recipe.id}">Edit</button>` : ''}
	          ${canDelete ? `<button type="button" class="ig-link danger" data-action="delete" data-id="${recipe.id}">Delete</button>` : ''}
	          <span class="meta">${new Date(recipe.createdAt).toLocaleDateString()}</span>
	        </div>
	      </div>
	    </div>
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
  if (profileView === 'mine') return recipe.author === getProfileOwnerEmail();
  if (profileView === 'liked') return (meProfile.likedRecipeIds || []).includes(recipe.id);
  if (profileView === 'saved') return (meProfile.savedRecipeIds || []).includes(recipe.id);
  return true;
}

function setPage(page) {
  currentPage = page;

  const views = Array.from(pageViews || []);
  views.forEach((view) => {
    view.classList.add('hidden');
    // Use the native HTML `hidden` attribute as a hard fallback (e.g. if CSS fails to load on static hosting).
    view.hidden = true;
  });

  const active = document.getElementById(`page${page.charAt(0).toUpperCase()}${page.slice(1)}`);
  if (active) {
    active.classList.remove('hidden');
    active.hidden = false;
  }

  const nav = Array.from(navItems || []);
  nav.forEach((item) => item.classList.toggle('active', item.dataset.page === page));

  const titles = { home: 'Home', explore: 'Explore', reels: 'Reels', notifications: 'Notifications', follow: 'Follow', chat: 'Chat', grok: 'Grok', bookmarks: 'Bookmarks', creatorStudio: 'Creator Studio', premium: 'Premium', map: 'Map', profile: 'Profile', more: 'More' };
  if (pageTitle) pageTitle.textContent = titles[page] || 'Home';

  try {
    document.body.classList.toggle('reels-mode', page === 'reels');
  } catch (_) {}

  if (page === 'map') initWorldMap();
  if (page === 'notifications') refreshNotifications();
  if (page === 'chat') {
    refreshChats();
    startChatPolling();
  } else {
    stopChatPolling();
  }
  if (page === 'follow') refreshFriends();
  if (page === 'home' || page === 'explore') refreshSuggested();
  if (page === 'home') renderStories();
  if (page === 'more') renderSettings();

  renderFeed();
}

function renderInto(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';
  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }
  list.forEach((item) => {
    if (item && item.__ad) container.appendChild(createAdCard(item));
    else container.appendChild(createRecipeCard(item));
  });
}

function renderIntoSingle(container, list, emptyText, pageKey) {
  if (!container) return;
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }

  // Legacy paging renderer (kept for compatibility). We now use scroll-snap for reels.
  const key = String(pageKey || 'home');
  const max = list.length;
  const cursor = clampIndex(feedCursorByPage[key] || 0, max);
  feedCursorByPage[key] = cursor;
  container.appendChild(createRecipeCard(list[cursor]));
}

function renderIntoReelsScroll(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }

  const stack = document.createElement('div');
  stack.className = 'reels-stack';
  list.forEach((recipe, idx) => {
    const shell = document.createElement('div');
    shell.className = 'reel-shell';
    shell.innerHTML = `<div class="reel-counter">${idx + 1} / ${list.length}</div>`;
    shell.appendChild(createReelCard(recipe));
    stack.appendChild(shell);
  });
  container.appendChild(stack);
  setupReelsAutoplay(container);
}

function createReelCard(recipe) {
  const card = document.createElement('article');
  card.className = 'reel-card';

  const ico = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.4-8.5-12A4.75 4.75 0 0 1 8.2 4.2c1.5 0 2.9.7 3.8 1.8.9-1.1 2.3-1.8 3.8-1.8A4.75 4.75 0 0 1 20.5 9c0 6.6-8.5 12-8.5 12z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    comment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 0 1 3 12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12a1.5 1.5 0 0 1 1.5 1.5V22l-7.5-4-7.5 4V4.5A1.5 1.5 0 0 1 6 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    volume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.5 8.5a4.5 4.5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M17.8 6.2a8 8 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    mute: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M16 9l5 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };

  const authorEmail = recipe.author || '';
  const authorUsername = recipe.authorUsername || (authorEmail.includes('@') ? authorEmail.split('@')[0] : authorEmail) || 'chef';
  const authorAvatar = recipe.authorAvatar ? toAbsoluteUrl(recipe.authorAvatar) : '';
  const authorInitial = String(authorUsername).trim().charAt(0).toUpperCase() || 'C';

  const isFollowing = meProfile && Array.isArray(meProfile.followingEmails) && meProfile.followingEmails.includes(authorEmail);
  const canFollow = sessionEmail && authorEmail && authorEmail !== sessionEmail;

  const likes = Number(recipe.likes || 0);
  const comments = Number(recipe.commentCount || 0);

  card.innerHTML = `
    <div class="ig-meta reel-meta">
      <div class="reel-stage">
        <video class="reel-video" src="${escapeHtml(toAbsoluteUrl(recipe.video || ''))}" playsinline muted loop preload="metadata"></video>
        <button type="button" class="reel-audio" data-action="toggleReelMute" aria-label="Toggle audio" title="Toggle audio">
          ${reelsMuted ? ico.mute : ico.volume}
        </button>

        <div class="reel-bottom">
          <div class="reel-bottom-row">
            <button type="button" class="reel-author" data-action="openProfile" data-email="${escapeHtml(authorEmail)}" title="Open profile">
              <div class="avatar" style="width:34px;height:34px;">
                <span class="avatar-letter ${authorAvatar ? '' : 'show'}">${escapeHtml(authorInitial)}</span>
                ${authorAvatar ? `<img class="avatar-img" src="${escapeHtml(authorAvatar)}" alt="${escapeHtml(authorUsername)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />` : ''}
              </div>
              <strong>${escapeHtml(authorUsername)}</strong>
            </button>
            ${canFollow ? `<button type="button" class="follow-btn ${isFollowing ? 'active' : ''}" data-action="follow" data-author="${escapeHtml(authorEmail)}">${isFollowing ? 'Following' : 'Follow'}</button>` : ''}
          </div>
          <div class="reel-caption">
            <strong>${escapeHtml(recipe.title || '')}</strong>
            <span class="meta">${escapeHtml(recipe.description || '')}</span>
          </div>
        </div>
      </div>

      <div class="reel-actions" aria-label="Actions">
        <div class="reel-act">
          <button type="button" class="ig-icon ${recipe.likedByViewer ? 'active' : ''}" data-action="like" data-id="${escapeHtml(recipe.id)}" title="Like" aria-label="Like">${ico.heart}</button>
          <div class="reel-act-count">${likes.toLocaleString()}</div>
        </div>
        <div class="reel-act">
          <button type="button" class="ig-icon" data-action="toggleComments" data-id="${escapeHtml(recipe.id)}" title="Comment" aria-label="Comment">${ico.comment}</button>
          <div class="reel-act-count">${comments.toLocaleString()}</div>
        </div>
        <div class="reel-act">
          <button type="button" class="ig-icon" data-action="share" data-id="${escapeHtml(recipe.id)}" title="Share" aria-label="Share">${ico.share}</button>
          <div class="reel-act-count">&nbsp;</div>
        </div>
        <div class="reel-act">
          <button type="button" class="ig-icon ${recipe.savedByViewer ? 'active' : ''}" data-action="save" data-id="${escapeHtml(recipe.id)}" title="Save" aria-label="Save">${ico.bookmark}</button>
          <div class="reel-act-count">&nbsp;</div>
        </div>
      </div>

      <div class="ig-comments reel-comments" hidden>
        <div class="meta"><strong>${comments}</strong> comments</div>
        <div class="ig-comments-list" data-comments-list></div>
        <div class="ig-comment-form">
          <input class="ig-comment-input" type="text" placeholder="Add a comment..." maxlength="400" />
          <button type="button" class="ghost-btn" data-action="postComment" data-id="${escapeHtml(recipe.id)}">Post</button>
        </div>
      </div>
    </div>
  `;

  const v = card.querySelector('.reel-video');
  if (v) v.muted = !!reelsMuted;
  return card;
}

function setupReelsAutoplay(container) {
  if (!container) return;
  try {
    if (reelsObserver) reelsObserver.disconnect();
  } catch (_) {}

  const videos = Array.from(container.querySelectorAll('.reel-video'));
  if (!videos.length) return;

  reelsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      const visible = entry.isIntersecting && entry.intersectionRatio >= 0.65;
      if (visible) {
        video.muted = !!reelsMuted;
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } else {
        try { video.pause(); } catch (_) {}
      }
    });
  }, { threshold: [0.2, 0.5, 0.65, 0.8] });

  videos.forEach((v) => reelsObserver.observe(v));
}

function getActiveReelIndex() {
  if (!reelsFeed) return 0;
  const shells = Array.from(reelsFeed.querySelectorAll('.reel-shell'));
  if (!shells.length) return 0;

  const feedRect = reelsFeed.getBoundingClientRect();
  let bestIdx = 0;
  let bestDist = Infinity;
  shells.forEach((s, idx) => {
    const r = s.getBoundingClientRect();
    const dist = Math.abs(r.top - feedRect.top);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = idx;
    }
  });
  return bestIdx;
}

function scrollReelsBy(delta) {
  if (!reelsFeed) return;
  const shells = Array.from(reelsFeed.querySelectorAll('.reel-shell'));
  if (!shells.length) return;
  const idx = getActiveReelIndex();
  const next = clampIndex(idx + delta, shells.length);
  try {
    shells[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (_) {}
}

function renderIntoProfileGrid(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'profile-grid';

  list.forEach((recipe) => {
    const photos = Array.isArray(recipe.photos) ? recipe.photos : [];
    const hasVideo = !!recipe.video;
    const thumbPhoto = photos[0] || '';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'profile-tile';
    btn.dataset.action = 'openMedia';
    btn.dataset.id = recipe.id;
    btn.dataset.index = '0';

    const title = escapeHtml(recipe.title || 'Recipe');
    const likes = Number(recipe.likes || 0);

    btn.innerHTML = `
      <div class="profile-tile-media">
        ${thumbPhoto ? `<img src="${escapeHtml(toAbsoluteUrl(thumbPhoto))}" alt="${title}" loading="lazy" />` : ''}
        ${!thumbPhoto && hasVideo ? `<video muted playsinline preload="metadata" src="${escapeHtml(toAbsoluteUrl(recipe.video))}"></video>` : ''}
        ${hasVideo ? `<div class="profile-tile-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg></div>` : ''}
        <div class="profile-tile-meta">
          <span class="profile-tile-likes">${likes} like${likes === 1 ? '' : 's'}</span>
        </div>
      </div>
      <div class="profile-tile-title">${title}</div>
    `;

    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function renderIntoExploreGrid(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = `<p class="subtitle" style="padding:14px;">${emptyText}</p>`;
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'explore-grid';

  list.slice(0, 120).forEach((item, idx) => {
    if (item && item.__ad) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'explore-tile explore-tile--ad';
      btn.dataset.action = 'noop';
      btn.innerHTML = `
        <div class="explore-tile-media explore-tile-ad">
          <div class="explore-ad-pill">Sponsored</div>
          <div class="explore-ad-body">
            <div class="explore-ad-title">AD DISPLAY</div>
            <div class="meta">Your ad could be here.</div>
          </div>
        </div>
      `;
      grid.appendChild(btn);
      return;
    }

    const recipe = item;
    const photos = Array.isArray(recipe.photos) ? recipe.photos : [];
    const hasVideo = !!recipe.video;
    const mediaCount = photos.length + (hasVideo ? 1 : 0);

    const thumb = photos[0] || (hasVideo ? recipe.video : '');
    const isBig = idx % 11 === 2 || idx % 17 === 7; // sparse "featured" tiles like IG explore

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'explore-tile' + (isBig ? ' explore-tile--big' : '');
    btn.dataset.action = 'openMedia';
    btn.dataset.id = recipe.id;
    btn.dataset.index = '0';

    const title = escapeHtml(recipe.title || 'Recipe');
    const icon = hasVideo
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>'
      : mediaCount > 1
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h11v13H8V7z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 4h11v3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>'
        : '';

    btn.innerHTML = `
      <div class="explore-tile-media">
        ${thumb ? (hasVideo && !photos.length
          ? `<video muted playsinline preload="metadata" src="${escapeHtml(toAbsoluteUrl(thumb))}"></video>`
          : `<img src="${escapeHtml(toAbsoluteUrl(thumb))}" alt="${title}" loading="lazy" />`) : ''}
        ${icon ? `<div class="explore-tile-icon" aria-hidden="true">${icon}</div>` : ''}
      </div>
    `;

    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function renderExploreSearchShell(container) {
  if (!container) return null;
  container.innerHTML = `
    <section class="search-shell">
      <div class="search-head">
        <h3 style="margin:0;">Search</h3>
        <p class="meta" style="margin:6px 0 0;">Posts and accounts</p>
      </div>
      <div id="searchAccounts" class="search-accounts"></div>
      <div class="search-divider"></div>
      <div id="searchPosts"></div>
    </section>
  `;
  return {
    accountsEl: container.querySelector('#searchAccounts'),
    postsEl: container.querySelector('#searchPosts')
  };
}

function renderSearchAccounts(container, users) {
  if (!container) return;
  const list = Array.isArray(users) ? users : [];
  if (!list.length) {
    container.innerHTML = '<p class="meta" style="margin:0;">No matching accounts.</p>';
    return;
  }

  container.innerHTML = `
    <div class="search-section-title">Accounts</div>
    <div class="search-accounts-list">
      ${list.slice(0, 12).map((u) => {
        const username = u.username || (u.email || '').split('@')[0] || 'chef';
        const handle = '@' + ((u.email || '').split('@')[0] || 'chef');
        const avatar = avatarUrl(u.avatar, username);
        const followers = Number(u.followers || 0);
        const following = !!u.isFollowing;
        const canFollow = sessionEmail && u.email && u.email !== sessionEmail;
        return `
          <div class="search-account">
            <button type="button" class="search-account-main" data-action="openProfile" data-email="${escapeHtml(u.email)}" title="Open profile">
              <div class="avatar" style="width:36px;height:36px;">
                <span class="avatar-letter show">${escapeHtml(String(username).charAt(0).toUpperCase() || 'C')}</span>
                <img class="avatar-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />
              </div>
              <div style="min-width:0;">
                <div class="search-account-name">${escapeHtml(username)}</div>
                <div class="meta" style="margin-top:2px;">${escapeHtml(handle)} · ${followers} follower${followers === 1 ? '' : 's'}</div>
              </div>
            </button>
            ${canFollow ? `<button type="button" class="follow-btn ${following ? 'active' : ''}" data-action="follow" data-author="${escapeHtml(u.email)}">${following ? 'Following' : 'Follow'}</button>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

async function runExploreSearch(query) {
  const q = String(query || '').trim();
  if (!exploreFeed) return;
  if (q.length < 2) {
    // Default Explore grid.
    renderFeed();
    return;
  }

  const reqId = ++exploreSearchReqId;
  const shell = renderExploreSearchShell(exploreFeed);
  if (!shell) return;
  shell.accountsEl.innerHTML = '<p class="meta" style="margin:0;">Searching accounts...</p>';
  shell.postsEl.innerHTML = '<p class="meta" style="margin:0;">Searching posts...</p>';

  try {
    const res = await apiRequest(`/api/search?q=${encodeURIComponent(q)}`);
    if (reqId !== exploreSearchReqId) return;
    if (!res.ok) {
      shell.accountsEl.innerHTML = `<p class="meta">${escapeHtml(res.message || 'Search failed.')}</p>`;
      shell.postsEl.innerHTML = '';
      return;
    }
    renderSearchAccounts(shell.accountsEl, res.users || []);
    renderIntoExploreGrid(shell.postsEl, res.recipes || [], 'No matching posts.');
  } catch (_) {
    if (reqId !== exploreSearchReqId) return;
    shell.accountsEl.innerHTML = '<p class="meta">Search failed.</p>';
    shell.postsEl.innerHTML = '';
  }
}

function buildAdItems(count) {
  const out = [];
  const n = Math.max(0, Math.min(30, Number(count || 0)));
  for (let i = 0; i < n; i += 1) {
    out.push({ __ad: true, id: `ad-${Date.now()}-${i}` });
  }
  return out;
}

function injectAds(list, everyN) {
  const items = Array.isArray(list) ? list.slice() : [];
  const step = Math.max(3, Number(everyN || 7));
  if (!items.length) return items;

  const out = [];
  let seenPosts = 0;
  let adIdx = 0;
  const ads = buildAdItems(Math.floor(items.length / step) + 1);

  for (const it of items) {
    out.push(it);
    seenPosts += 1;
    if (seenPosts % step === 0 && ads[adIdx]) {
      out.push(ads[adIdx]);
      adIdx += 1;
    }
  }
  return out;
}

function createAdCard(ad) {
  const card = document.createElement('article');
  card.className = 'recipe ig-post';
  card.innerHTML = `
    <div class="ig-wrap">
      <div class="ad-card">
        <div class="ad-head">
          <div class="ad-pill">Sponsored</div>
          <button type="button" class="ig-more" data-action="reportAd" data-id="${escapeHtml(ad && ad.id ? ad.id : 'ad')}" title="Report ad" aria-label="Report ad">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 5 12zm7 0a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 12 12zm7 0a1.8 1.8 0 1 0-1.8-1.8A1.8 1.8 0 0 0 19 12z" fill="currentColor"/></svg>
          </button>
        </div>
        <div class="ad-body">
          <div class="ad-title">AD DISPLAY</div>
          <div class="meta">This space will show sponsor content.</div>
          <div class="ad-media"></div>
          <div class="ad-cta-row">
            <button type="button" class="follow-btn" data-action="noop">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  `;
  return card;
}

function pageToCursorKey(page) {
  const p = String(page || 'home');
  if (p === 'explore') return 'explore';
  if (p === 'follow') return 'follow';
  if (p === 'bookmarks') return 'bookmarks';
  if (p === 'profile') return 'profile';
  return 'home';
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
  const reelsList = explore.filter((r) => !!r.video);

  // Ads should be part of the main content stream, not side-rail boxes.
  const homeWithAds = injectAds(sorted, 6);
  const followWithAds = injectAds(followList, 5);
  const exploreWithAds = injectAds(explore, 12);

  const owner = getProfileOwnerEmail();
  const ownerHandle = owner ? '@' + (owner.split('@')[0] || 'chef') : 'Profile';
  const ownerName = (isViewingSelfProfile() ? (meProfile && (meProfile.username || ownerHandle)) : (viewedProfile && (viewedProfile.username || ownerHandle))) || ownerHandle;
  const profileLabel = profileView === 'mine'
    ? (isViewingSelfProfile() ? 'My Posts' : `${ownerName}'s Posts`)
    : profileView === 'liked' ? 'Liked' : 'Saved';
  const modeLabel = feedMode === 'liked' ? 'Based on Likes' : 'For You';
  if (feedTitle) feedTitle.textContent = currentPage === 'profile' ? `${profileLabel} | ${modeLabel}` : `Home | ${modeLabel}`;

  const allContainers = [feed, exploreFeed, followFeed, bookmarksFeed, profileFeed, reelsFeed].filter(Boolean);
  const activeContainer = currentPage === 'explore' ? exploreFeed
    : currentPage === 'follow' ? followFeed
      : currentPage === 'bookmarks' ? bookmarksFeed
        : currentPage === 'profile' ? profileFeed
          : currentPage === 'reels' ? reelsFeed
            : feed;

  // Defensive: if multiple page views render (CSS failure), don't show the same posts in 5 places.
  allContainers.forEach((c) => { if (c && c !== activeContainer) c.innerHTML = ''; });

  if (currentPage === 'reels') {
    renderIntoReelsScroll(reelsFeed, reelsList, 'No reels yet.');
    return;
  }

  if (currentPage === 'explore') {
    // Explore: when searching, show IG-like accounts + grid results.
    if (query && query.length >= 2) {
      if (exploreSearchTimer) clearTimeout(exploreSearchTimer);
      if (exploreSearchLast !== query) {
        exploreSearchLast = query;
        exploreSearchTimer = setTimeout(() => runExploreSearch(query), 180);
      } else {
        exploreSearchTimer = setTimeout(() => runExploreSearch(query), 180);
      }
      return;
    }

    exploreSearchLast = '';
    renderIntoExploreGrid(exploreFeed, exploreWithAds, 'No posts for explore yet.');
  }
  else if (currentPage === 'follow') renderInto(followFeed, followWithAds, 'Follow creators to see their posts here.');
  else if (currentPage === 'bookmarks') renderInto(bookmarksFeed, bookmarks, 'No saved posts yet.');
  else if (currentPage === 'profile') renderIntoProfileGrid(profileFeed, profileList, 'No matching posts for this profile view.');
  else renderInto(feed, homeWithAds, 'No matching posts for home feed.');
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

if (saveApiBaseBtn && apiBaseInput) {
  saveApiBaseBtn.addEventListener('click', async () => {
    const value = apiBaseInput.value.trim().replace(/\/$/, '');
    if (!value) {
      if (serverMessage) serverMessage.textContent = 'Enter a server URL.';
      return;
    }

    setLoading(`Connecting to ${value}...`, true);
    const ok = await tryConnect(value);
    setLoading('Connected.', false);

    if (!ok) {
      if (serverMessage) serverMessage.textContent = 'Could not connect to server.';
      setServerStatus('No server connected');
      return;
    }

    apiBase = value;
    localStorage.setItem(API_BASE_KEY, apiBase);
    if (serverMessage) serverMessage.textContent = `Connected to ${apiBase}`;
    setServerStatus(`Live server: ${apiBase}`);

    authToken = '';
    sessionEmail = null;
    meProfile = null;
    localStorage.removeItem(TOKEN_KEY);
    await refreshRecipes();
    renderProfile();
    showAuth();
  });
}

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
  const ingredients = collectListValues(ingredientsList);
  const method = collectListValues(methodList);
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

  if (!ingredients.length) {
    recipeMessage.textContent = 'Add at least 1 ingredient.';
    return;
  }

  if (!method.length) {
    recipeMessage.textContent = 'Add at least 1 method step.';
    return;
  }

  try {
    // Editing existing post: text-only update (no media upload in this pass).
    if (editingRecipeId) {
      const res = await apiRequest(`/api/recipes/${encodeURIComponent(editingRecipeId)}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description,
          tags,
          ingredients,
          method
        })
      });

      if (!res.ok) {
        recipeMessage.textContent = res.message || 'Could not save changes.';
        return;
      }

      recipeForm.reset();
      if (ingredientsList) ingredientsList.innerHTML = '';
      if (methodList) methodList.innerHTML = '';
      ensureListHasRow(ingredientsList, 'Ingredient (e.g. 2 eggs)');
      ensureListHasRow(methodList, 'Step (e.g. Preheat oven to 180C)');
      updateMediaFields();
      setComposer(false);
      editingRecipeId = '';
      await refreshMe();
      await refreshRecipes();
      return;
    }

    // Media safety scan (free, runs locally in the app/browser).
    recipeMessage.textContent = 'Checking media for safety...';

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', JSON.stringify(tags));
    formData.append('mediaType', mediaType);
    formData.append('ingredients', JSON.stringify(ingredients));
    formData.append('method', JSON.stringify(method));

    const photoFiles = photosInput && photosInput.files ? Array.from(photosInput.files) : [];
    const videoFiles = videoInput && videoInput.files ? Array.from(videoInput.files) : [];

    try {
      const verdict = await moderateMediaBeforeUpload({ photos: photoFiles, video: videoFiles[0] || null });
      if (!verdict.ok) {
        recipeMessage.textContent = `Upload blocked: ${verdict.reason}`;
        return;
      }
    } catch (err) {
      // If the scanner can't load (offline/CDN blocked), don't hard-block uploads.
      // Server-side text moderation still applies.
      recipeMessage.textContent = 'Safety scanner unavailable. Uploading anyway...';
      await new Promise((r) => setTimeout(r, 350));
    }

    if (mediaType === 'photos') {
      if (!photoFiles.length) {
        recipeMessage.textContent = 'Please select at least one photo.';
        return;
      }
      photoFiles.forEach((file) => formData.append('photos', file));
    } else if (mediaType === 'video') {
      if (!videoFiles.length) {
        recipeMessage.textContent = 'Please select a video file.';
        return;
      }
      formData.append('video', videoFiles[0]);
    } else if (mediaType === 'both') {
      if (!photoFiles.length || !videoFiles.length) {
        recipeMessage.textContent = 'For Photos + Video, select at least 1 photo and 1 video.';
        return;
      }
      photoFiles.forEach((file) => formData.append('photos', file));
      formData.append('video', videoFiles[0]);
    }

    recipeMessage.textContent = 'Uploading...';

    // Use XHR for upload progress (fetch has no reliable progress events).
    const xhrRes = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${apiBase}/api/recipes`;
      xhr.open('POST', url);
      xhr.setRequestHeader('Authorization', `Bearer ${authToken}`);
      xhr.responseType = 'text';

      xhr.upload.onprogress = (e) => {
        if (!e.lengthComputable) return;
        const pct = Math.round((e.loaded / e.total) * 100);
        recipeMessage.textContent = `Uploading... ${pct}%`;
      };

      xhr.onload = () => {
        try {
          const json = JSON.parse(xhr.responseText || '{}');
          resolve(json);
        } catch (err) {
          reject(err);
        }
      };
      xhr.onerror = () => reject(new Error('Upload failed.'));
      xhr.send(formData);
    });

    const res = xhrRes;

    if (!res.ok) {
      recipeMessage.textContent = res.message;
      return;
    }

    recipeForm.reset();
    // Keep 1 row in each list editor after reset.
    if (ingredientsList) ingredientsList.innerHTML = '';
    if (methodList) methodList.innerHTML = '';
    ensureListHasRow(ingredientsList, 'Ingredient (e.g. 2 eggs)');
    ensureListHasRow(methodList, 'Step (e.g. Preheat oven to 180C)');
    updateMediaFields();
    setComposer(false);
    editingRecipeId = '';
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

  if (action === 'toggleReelMute') {
    reelsMuted = !reelsMuted;
    // Update all reel videos + icons currently in DOM.
    const vids = Array.from(document.querySelectorAll('.reel-video'));
    vids.forEach((v) => { try { v.muted = !!reelsMuted; } catch (_) {} });
    const btns = Array.from(document.querySelectorAll('button.reel-audio[data-action="toggleReelMute"]'));
    btns.forEach((b) => {
      b.innerHTML = reelsMuted
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M16 9l5 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.5 8.5a4.5 4.5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M17.8 6.2a8 8 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    });
    return;
  }

  if (action === 'openProfile') {
    const email = String(button.dataset.email || '').trim().toLowerCase();
    if (!email) return;
    await openUserProfile(email);
    return;
  }

  if (action === 'openMedia') {
    const recipeId = button.dataset.id || '';
    const index = Number(button.dataset.index || '0') || 0;
    openMediaViewer(recipeId, index);
    return;
  }

  if (action === 'editRecipe') {
    if (!authToken) return;
    const recipeId = button.dataset.id || '';
    const recipe = recipesCache.find((r) => r.id === recipeId);
    if (!recipe) return;
    if (recipe.author !== sessionEmail) return;
    openEditRecipe(recipe);
    return;
  }

  if (action === 'toggleComments') {
    await toggleCommentsFromButton(button);
    return;
  }

  if (action === 'reportRecipe') {
    if (!authToken) return;
    await submitReport({ type: 'recipe', targetId: button.dataset.id || '' });
    return;
  }

  if (action === 'reportAd') {
    if (!authToken) return;
    await submitReport({ type: 'ad', targetId: button.dataset.id || '' });
    return;
  }

  if (action === 'reportComment') {
    if (!authToken) return;
    await submitReport({ type: 'comment', targetId: button.dataset.target || '' });
    return;
  }

  if (action === 'deleteComment') {
    if (!authToken) return;
    const target = String(button.dataset.target || '').trim();
    const parts = target.split(':');
    if (parts.length !== 2) return;
    const recipeId = parts[0];
    const commentId = parts[1];
    const ok = confirm('Delete this comment?');
    if (!ok) return;
    const res = await apiRequest(`/api/recipes/${encodeURIComponent(recipeId)}/comments/${encodeURIComponent(commentId)}`, { method: 'DELETE' });
    if (res.ok) {
      // Refresh the open comment panel counts/list.
      const metaRoot = button.closest('.ig-meta');
      const listEl = metaRoot ? metaRoot.querySelector('[data-comments-list]') : null;
      if (listEl) listEl.dataset.recipeId = recipeId;
      const comments = await fetchComments(recipeId);
      renderComments(listEl, comments);
      setCommentsCount(metaRoot, comments.length);
      await refreshRecipes();
    }
    return;
  }

  if (action === 'noop') return;

  if (action === 'share') {
    const recipe = recipesCache.find((r) => r.id === button.dataset.id);
    if (recipe) await shareRecipe(recipe);
    return;
  }

  if (action === 'download') {
    const recipe = recipesCache.find((r) => r.id === button.dataset.id);
    if (recipe) await downloadRecipePdf(recipe);
    return;
  }

  if (action === 'postComment') {
    if (!authToken) return;
    await postCommentFromButton(button);
    return;
  }

  if (!authToken) return;

  if (action === 'delete') {
    const recipeId = button.dataset.id || '';
    const recipe = recipesCache.find((r) => r.id === recipeId);
    if (!recipe) return;
    if (recipe.author !== sessionEmail) return;

    const ok = confirm(`Delete "${recipe.title}"? This will remove the post and its uploaded media.`);
    if (!ok) return;

    const res = await apiRequest(`/api/recipes/${recipeId}`, { method: 'DELETE' });
    if (res.ok) {
      await refreshMe();
      await refreshRecipes();
    }
    return;
  }

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

[feed, exploreFeed, followFeed, bookmarksFeed, profileFeed, reelsFeed].filter(Boolean).forEach((container) => {
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

if (reelsFeed) {
  reelsFeed.addEventListener('click', (event) => {
    const video = event.target && event.target.closest ? event.target.closest('video.reel-video') : null;
    if (!video) return;
    // Ignore clicks that originated from buttons/controls.
    const btn = event.target.closest && event.target.closest('button');
    if (btn) return;

    try {
      if (video.paused) {
        video.muted = !!reelsMuted;
        const p = video.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } else {
        video.pause();
      }
    } catch (_) {}
  });
}

viewProfileBtn.addEventListener('click', () => { setPage('profile'); setProfileView('mine'); });
viewLikedBtn.addEventListener('click', () => { setPage('profile'); setProfileView('liked'); });
viewSavedBtn.addEventListener('click', () => { setPage('profile'); setProfileView('saved'); });
if (toggleLikedFeedBtn) toggleLikedFeedBtn.addEventListener('click', () => setFeedMode(feedMode === 'liked' ? 'for_you' : 'liked'));

openComposerBtn.addEventListener('click', () => setComposer(true));
if (openComposerBtn2) openComposerBtn2.addEventListener('click', () => setComposer(true));
if (openComposerBtnRail) openComposerBtnRail.addEventListener('click', () => setComposer(true));
closeComposerBtn.addEventListener('click', () => setComposer(false));
cancelComposerBtn.addEventListener('click', () => setComposer(false));
composerModal.addEventListener('click', (event) => {
  if (event.target === composerModal) setComposer(false);
});

if (changeAvatarBtn) changeAvatarBtn.addEventListener('click', () => setAvatarModal(true));
if (editProfileBtn) editProfileBtn.addEventListener('click', () => setAvatarModal(true));
if (addStoryBtn) addStoryBtn.addEventListener('click', () => alert('Stories: coming soon.'));

if (profileFollowBtn) {
  profileFollowBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const target = getProfileOwnerEmail();
    if (!target || target === sessionEmail) return;
    const res = await apiRequest('/api/follow', { method: 'POST', body: JSON.stringify({ targetEmail: target }) });
    if (res.ok) {
      await refreshMe();
      await openUserProfile(target);
    }
  });
}

if (profileMessageBtn) {
  profileMessageBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const target = getProfileOwnerEmail();
    if (!target || target === sessionEmail) return;
    await startChatWithEmail(target);
    setPage('chat');
  });
}

if (profileReportBtn) {
  profileReportBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const target = getProfileOwnerEmail();
    if (!target || target === sessionEmail) return;
    await submitReport({ type: 'user', targetEmail: target });
  });
}

if (profileBlockBtn) {
  profileBlockBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const target = getProfileOwnerEmail();
    if (!target || target === sessionEmail) return;
    const ok = confirm(`Block ${target}? You will stop seeing their posts and chats.`);
    if (!ok) return;
    const res = await apiRequest('/api/block', { method: 'POST', body: JSON.stringify({ targetEmail: target, block: true }) });
    if (res.ok) {
      alert('Blocked.');
      // Return to home after blocking a profile.
      setPage('home');
      await refreshRecipes();
    } else {
      alert(res.message || 'Could not block.');
    }
  });
}

if (avatarUploadBtn && avatarUploadInput) {
  avatarUploadBtn.addEventListener('click', () => avatarUploadInput.click());
}

if (avatarUploadInput) {
  avatarUploadInput.addEventListener('change', async () => {
    if (!authToken) return;
    if (!avatarUploadInput.files || !avatarUploadInput.files[0]) return;
    const file = avatarUploadInput.files[0];

    profileMessage.textContent = 'Uploading profile picture...';
    const fd = new FormData();
    fd.append('avatar', file);
    const res = await apiRequest('/api/me/avatar', { method: 'POST', body: fd });
    if (res.ok) {
      meProfile = res.profile;
      renderProfile();
      await refreshRecipes();
      profileMessage.textContent = 'Profile picture updated.';
      setAvatarModal(false);
    } else {
      profileMessage.textContent = res.message || 'Could not update profile picture.';
    }
    avatarUploadInput.value = '';
  });
}

if (avatarModalUploads) {
  avatarModalUploads.addEventListener('click', async (event) => {
    const btn = event.target.closest('button[data-action="useOldAvatar"]');
    if (!btn) return;
    // For now, re-using old avatars is not supported without server-side "set by url".
    alert('Re-using old uploads: coming soon. Use Upload photo for now.');
  });
}

if (editCoverBtn) {
  editCoverBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      if (!input.files || !input.files[0]) return;
      profileMessage.textContent = 'Uploading cover...';
      const fd = new FormData();
      fd.append('cover', input.files[0]);
      const res = await apiRequest('/api/me/cover', { method: 'POST', body: fd });
      if (res.ok) {
        meProfile = res.profile;
        renderProfile();
        profileMessage.textContent = 'Cover updated.';
      } else {
        profileMessage.textContent = res.message || 'Could not update cover.';
      }
    };
    input.click();
  });
}

async function openFriendsModal() {
  if (!authToken) return;
  if (!isViewingSelfProfile()) {
    alert('Viewing friends for other profiles: coming soon.');
    return;
  }
  setFriendsModal(true);
  if (friendsModalList) friendsModalList.innerHTML = '<p class="meta">Loading friends...</p>';
  const res = await apiRequest('/api/friends');
  const friends = res.ok ? (res.friends || []) : [];
  friendsCache = friends;
  if (!friendsModalList) return;
  if (!friends.length) {
    friendsModalList.innerHTML = '<p class="meta">No friends yet.</p>';
    return;
  }
  friendsModalList.innerHTML = friends.slice(0, 60).map((f) => {
    const username = f.username || (f.email || '').split('@')[0] || 'chef';
    const handle = '@' + ((f.email || '').split('@')[0] || 'chef');
    const avatar = avatarUrl(f.avatar, username);
    return `
      <div class="friend-row">
        <div class="avatar" style="width:44px;height:44px;">
          <span class="avatar-letter show">${escapeHtml(String(username).charAt(0).toUpperCase() || 'C')}</span>
          <img class="avatar-img" src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" onerror="this.style.display='none'; this.previousElementSibling.classList.add('show');" />
        </div>
        <div>
          <div class="friend-name">${escapeHtml(username)}</div>
          <div class="meta friend-handle">${escapeHtml(handle)}</div>
        </div>
        <button type="button" class="ghost-btn" data-action="startChat" data-email="${escapeHtml(f.email)}">Message</button>
      </div>
    `;
  }).join('');
}

if (profileFriendsBtn) profileFriendsBtn.addEventListener('click', () => openFriendsModal());

if (addIngredientBtn) addIngredientBtn.addEventListener('click', () => addListRow(ingredientsList, 'Ingredient (e.g. 2 eggs)', ''));
if (addStepBtn) addStepBtn.addEventListener('click', () => addListRow(methodList, 'Step (e.g. Preheat oven to 180C)', ''));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setComposer(false);
    setMediaViewer(false);
    setProfileMenu(false);
    setAvatarModal(false);
    setFriendsModal(false);
  }
});

if (mediaViewerModal) {
  mediaViewerModal.addEventListener('click', (event) => {
    if (event.target === mediaViewerModal) setMediaViewer(false);
  });
}

if (avatarModal) {
  avatarModal.addEventListener('click', (event) => {
    if (event.target === avatarModal) setAvatarModal(false);
  });
}

if (friendsModal) {
  friendsModal.addEventListener('click', (event) => {
    if (event.target === friendsModal) setFriendsModal(false);
  });
}

if (closeMediaViewerBtn) closeMediaViewerBtn.addEventListener('click', () => setMediaViewer(false));
if (closeAvatarModalBtn) closeAvatarModalBtn.addEventListener('click', () => setAvatarModal(false));
if (closeFriendsModalBtn) closeFriendsModalBtn.addEventListener('click', () => setFriendsModal(false));
if (mediaPrevBtn) mediaPrevBtn.addEventListener('click', () => { mediaViewerState.index -= 1; renderMediaViewer(); });
if (mediaNextBtn) mediaNextBtn.addEventListener('click', () => { mediaViewerState.index += 1; renderMediaViewer(); });

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

if (logoutBtnRail) {
  logoutBtnRail.addEventListener('click', () => {
    try { logoutBtn.click(); } catch (_) {}
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

recipeMediaType.addEventListener('change', updateMediaFields);
searchInput.addEventListener('input', renderFeed);

Array.from(navItems || []).forEach((item) => {
  item.addEventListener('click', () => {
    const p = String(item.dataset.page || '');
    if (p === 'profile') {
      openMyProfile();
      return;
    }
    setPage(p);
  });
});

if (chatList) {
  chatList.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-action="openChat"]');
    if (!btn) return;
    const id = btn.dataset.chatId || '';
    openChat(id);
  });
}

if (friendsList) {
  friendsList.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-action="startChat"]');
    if (!btn) return;
    const email = btn.dataset.email || '';
    // Jump to Chat and open/create a DM.
    setPage('chat');
    startChatWithEmail(email);
  });
}

if (friendsModalList) {
  friendsModalList.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-action="startChat"]');
    if (!btn) return;
    const email = btn.dataset.email || '';
    setFriendsModal(false);
    setPage('chat');
    startChatWithEmail(email);
  });
}

if (suggestedUsers) {
  suggestedUsers.addEventListener('click', async (event) => {
    const btn = event.target.closest('button[data-action="suggestFollow"]');
    if (!btn) return;
    if (!authToken) return;
    const targetEmail = String(btn.dataset.email || '').trim().toLowerCase();
    if (!targetEmail) return;

    btn.disabled = true;
    try {
      const res = await apiRequest('/api/follow', { method: 'POST', body: JSON.stringify({ targetEmail }) });
      if (res.ok) {
        await refreshMe();
        await refreshFriends();
        await refreshSuggested();
      }
    } finally {
      btn.disabled = false;
    }
  });
}

if (refreshSuggestedBtn) refreshSuggestedBtn.addEventListener('click', () => refreshSuggested());
if (seeAllSuggestedBtn) seeAllSuggestedBtn.addEventListener('click', () => setPage('follow'));
if (rightMeSwitch) rightMeSwitch.addEventListener('click', () => setPage('profile'));
if (floatingChatBtn) floatingChatBtn.addEventListener('click', () => setPage('chat'));

if (profileMenuBtn) {
  profileMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const open = profileMenu && !profileMenu.hidden && !profileMenu.classList.contains('hidden') ? false : true;
    setProfileMenu(open);
  });
}

if (profileMenu) {
  profileMenu.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-action]');
    if (!btn) return;
    const act = btn.dataset.action;

    if (act === 'menuProfiles') {
      setProfileMenu(false);
      openMyProfile();
      return;
    }
    if (act === 'menuSettings') {
      setProfileMenu(false);
      setPage('more');
      return;
    }
    if (act === 'menuHelp') {
      alert('Help & support: coming soon.');
      return;
    }
    if (act === 'menuDisplay') {
      alert('Display & accessibility: coming soon.');
      return;
    }
    if (act === 'menuFeedback') {
      alert('Feedback: coming soon.');
      return;
    }
    if (act === 'menuLogout') {
      setProfileMenu(false);
      try { logoutBtn.click(); } catch (_) {}
      return;
    }
  });
}

document.addEventListener('click', (event) => {
  if (!profileMenu) return;
  if (profileMenu.hidden) return;
  const wrap = event.target.closest('.profile-menu-wrap');
  if (!wrap) setProfileMenu(false);
});

if (startChatBtn) startChatBtn.addEventListener('click', () => startChatWithEmail(newChatEmail ? newChatEmail.value : ''));
if (newChatEmail) newChatEmail.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    startChatWithEmail(newChatEmail.value);
  }
});

if (sendChatBtn) sendChatBtn.addEventListener('click', () => sendChatMessage());
if (chatComposeInput) chatComposeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendChatMessage();
  }
});

if (chatAttachBtn && chatAttachInput) {
  chatAttachBtn.addEventListener('click', () => chatAttachInput.click());
}

if (chatAttachInput) {
  chatAttachInput.addEventListener('change', async () => {
    if (!chatAttachInput.files || !chatAttachInput.files[0]) return;
    const file = chatAttachInput.files[0];
    await sendChatMedia(file);
    chatAttachInput.value = '';
  });
}

if (refreshBlockedBtn) refreshBlockedBtn.addEventListener('click', () => refreshBlockedUsers());

if (blockedUsersList) {
  blockedUsersList.addEventListener('click', async (event) => {
    const btn = event.target.closest('button[data-action="unblock"]');
    if (!btn) return;
    if (!authToken) return;
    const email = String(btn.dataset.email || '').trim().toLowerCase();
    if (!email) return;
    const res = await apiRequest('/api/block', { method: 'POST', body: JSON.stringify({ targetEmail: email, block: false }) });
    if (res.ok) await refreshBlockedUsers();
  });
}

if (exportDataBtn) {
  exportDataBtn.addEventListener('click', async () => {
    if (!authToken) return;
    if (settingsMessage) settingsMessage.textContent = 'Exporting...';
    const me = await apiRequest('/api/me');
    const db = { profile: me.ok ? me.profile : null, recipes: recipesCache, chats: chatsCache };
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recipetube-export-${Date.now()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    if (settingsMessage) settingsMessage.textContent = 'Export downloaded.';
  });
}

if (logoutEverywhereBtn) {
  logoutEverywhereBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const ok = confirm('Logout everywhere? This will sign you out on other devices.');
    if (!ok) return;
    const res = await apiRequest('/api/sessions/rotate', { method: 'POST' });
    if (res.ok && res.token) {
      authToken = res.token;
      localStorage.setItem(TOKEN_KEY, authToken);
      if (settingsMessage) settingsMessage.textContent = 'Done.';
    } else {
      if (settingsMessage) settingsMessage.textContent = res.message || 'Could not logout everywhere.';
    }
  });
}

if (changePasswordBtn) {
  changePasswordBtn.addEventListener('click', async () => {
    if (!authToken) return;
    const currentPassword = prompt('Current password:', '');
    if (!currentPassword) return;
    const newPassword = prompt('New password (min 8 chars):', '');
    if (!newPassword) return;
    const res = await apiRequest('/api/me/password', { method: 'POST', body: JSON.stringify({ currentPassword, newPassword }) });
    if (settingsMessage) settingsMessage.textContent = res.ok ? 'Password changed.' : (res.message || 'Could not change password.');
  });
}

if (refreshReportsBtn) refreshReportsBtn.addEventListener('click', () => refreshReports());

if (reportsList) {
  reportsList.addEventListener('click', async (event) => {
    const resolveBtn = event.target.closest('button[data-action="resolveReport"]');
    if (resolveBtn) {
      const id = resolveBtn.dataset.id || '';
      const res = await apiRequest(`/api/reports/${encodeURIComponent(id)}/resolve`, { method: 'POST', body: JSON.stringify({ status: 'resolved' }) });
      if (res.ok) await refreshReports();
      return;
    }

    const delBtn = event.target.closest('button[data-action="adminDeleteRecipe"]');
    if (delBtn) {
      const recipeId = delBtn.dataset.recipeId || '';
      const ok = confirm('Admin: delete this post?');
      if (!ok) return;
      const res = await apiRequest(`/api/admin/recipes/${encodeURIComponent(recipeId)}`, { method: 'DELETE' });
      if (res.ok) {
        await refreshRecipes();
        await refreshReports();
      }
      return;
    }
  });
}

if (reelsPrevBtn) reelsPrevBtn.addEventListener('click', () => scrollReelsBy(-1));
if (reelsNextBtn) reelsNextBtn.addEventListener('click', () => scrollReelsBy(1));

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

    // Optional emergency override: `?server=https://your-server.example`
    try {
      const params = new URLSearchParams(location.search || '');
      const override = String(params.get('server') || '').trim().replace(/\/$/, '');
      if (override) {
        apiBase = override;
        localStorage.setItem(API_BASE_KEY, override);
      }
      const post = String(params.get('post') || '').trim();
      if (post) pendingOpenPostId = post;
    } catch (_) {}

    const connected = await autoConnect();
    if (connected) {
      await refreshTags();
      await refreshRecipes();
      maybeOpenSharedPost();

      if (authToken) {
        const res = await apiRequest('/api/session');
        if (res.ok) {
          sessionEmail = res.email;
          await refreshMe();
          showApp();
          maybeOpenSharedPost();
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










































































