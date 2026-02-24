// === Email Data ===
const emails = [
  {
    id: 1,
    starred: true,
    read: false,
    sender: 'Jamie',
    senderEmail: 'hey@jamiesutton.com',
    avatarColor: '#4285f4',
    subject: 'How This Works',

    preview: 'Welcome to my inbox — each email is a real copywriting sample',
    date: 'Feb 24',
    body: `
      <p>Hey there,</p>
      <p>Welcome to my portfolio. It works exactly like you think it does — you're looking at a fake Gmail inbox, and every email in here is a real piece of copywriting I've written.</p>
      <p>Why build it this way? Because email copy should be experienced in context. Reading a welcome sequence in a Google Doc doesn't hit the same as seeing it the way your subscribers will.</p>
      <h2>How to explore</h2>
      <ul>
        <li><strong>Starred emails</strong> — start here. That's the meta stuff: who I am, what I charge, how to work together.</li>
        <li><strong>Everything else</strong> — those are real client samples. Click into them, read them like you would any email. That's the whole point.</li>
      </ul>
      <p>If you like what you see, hit that Compose button up top. It'll open a real email to me.</p>
      <p>Let's make something good.</p>
      <div class="signature">
        <strong>Jamie</strong><br>
        Email Copywriter<br>
        hey@jamiesutton.com
      </div>
    `
  },
  {
    id: 2,
    starred: true,
    read: false,
    sender: 'Jamie',
    senderEmail: 'hey@jamiesutton.com',
    avatarColor: '#34a853',
    subject: 'Pricing & Services',

    preview: 'What I do, what it costs, and how we work together',
    date: 'Feb 22',
    body: `
      <p>Here's the short version:</p>
      <h2>What I write</h2>
      <ul>
        <li>Welcome sequences (3–7 emails)</li>
        <li>Launch sequences & promos</li>
        <li>Weekly newsletters</li>
        <li>Re-engagement / winback campaigns</li>
        <li>Cold outreach sequences</li>
        <li>Landing page copy (when paired with email work)</li>
      </ul>
      <h2>What it costs</h2>
      <table>
        <thead>
          <tr><th>Service</th><th>Starting at</th></tr>
        </thead>
        <tbody>
          <tr><td>Welcome sequence (5 emails)</td><td>$2,500</td></tr>
          <tr><td>Launch sequence (7–10 emails)</td><td>$3,500</td></tr>
          <tr><td>Newsletter (per issue)</td><td>$500</td></tr>
          <tr><td>Re-engagement campaign</td><td>$1,500</td></tr>
          <tr><td>Monthly retainer</td><td>$3,000/mo</td></tr>
        </tbody>
      </table>
      <h2>How it works</h2>
      <ol>
        <li><strong>Discovery call</strong> — 30 min, free. We talk about your audience, goals, and voice.</li>
        <li><strong>Brief & deposit</strong> — I send a project brief. 50% deposit to kick off.</li>
        <li><strong>Drafts in 7 days</strong> — You get copy in Google Docs with annotations.</li>
        <li><strong>One round of revisions</strong> — included in every project.</li>
        <li><strong>Final delivery</strong> — Clean copy, ready to paste into your ESP.</li>
      </ol>
      <p>Ready to talk?</p>
      <a href="mailto:hey@jamiesutton.com" class="cta-btn">Book a Discovery Call</a>
      <div class="signature">
        <strong>Jamie</strong><br>
        Email Copywriter<br>
        hey@jamiesutton.com
      </div>
    `
  },
  {
    id: 3,
    starred: true,
    read: false,
    sender: 'Jamie',
    senderEmail: 'hey@jamiesutton.com',
    avatarColor: '#ea4335',
    subject: 'About Jamie',

    preview: 'The background, the philosophy, the reason I only write emails',
    date: 'Feb 20',
    body: `
      <p>Most copywriters are generalists. I'm not.</p>
      <p>I only write emails. Welcome sequences, launches, newsletters, cold outreach — if it lands in an inbox, I write it. I got specific because specificity is what makes copy work in the first place.</p>
      <h2>The short version</h2>
      <ul>
        <li>5+ years writing email copy for SaaS, e-commerce, and creator brands</li>
        <li>Over 2 million emails sent on copy I've written</li>
        <li>Average open rate improvement of 35% across client campaigns</li>
        <li>Clients include two Series B SaaS companies, a DTC skincare brand, and a business coaching practice</li>
      </ul>
      <h2>What I believe about email</h2>
      <p>Email is the only marketing channel where someone literally invites you into their personal space. That's a privilege, not a growth hack.</p>
      <p>Good email copy respects the reader's time, earns attention with every line, and sounds like it was written by a person — because it was.</p>
      <p>I don't write "value bombs" or "killer subject lines." I write emails people are glad they opened.</p>
      <blockquote>"Jamie's copy doesn't feel like marketing. It feels like getting a note from someone who actually gives a damn." — Head of Growth, Series B SaaS</blockquote>
      <div class="signature">
        <strong>Jamie</strong><br>
        Email Copywriter<br>
        hey@jamiesutton.com
      </div>
    `
  },
  {
    id: 4,
    starred: false,
    read: true,
    sender: 'Bloom Skincare',
    senderEmail: 'team@bloomskincare.com',
    avatarColor: '#e8a0bf',
    subject: 'Your skin called — it wants you back',

    preview: 'We noticed you haven\'t visited in a while. Here\'s what you\'ve been missing.',
    date: 'Feb 18',
    body: `
      <p>Hey Sarah,</p>
      <p>It's been 45 days since your last order. Your moisturizer is probably running on fumes — and your skin is too polite to complain.</p>
      <p>Here's what happened while you were gone:</p>
      <ul>
        <li>We launched a new Vitamin C serum (sold out twice already)</li>
        <li>Our night cream got a formula upgrade — same jar, better results</li>
        <li>Over 1,200 new five-star reviews from people who didn't take a break</li>
      </ul>
      <div class="highlight">
        <strong>Welcome-back offer:</strong> Use code <strong>MISSEDYOU</strong> for 20% off your next order. Expires in 48 hours.
      </div>
      <a href="#" class="cta-btn">Shop Now</a>
      <p>Your future self (and your future skin) will thank you.</p>
      <div class="signature">
        The Bloom team
      </div>
    `
  },
  {
    id: 5,
    starred: false,
    read: true,
    sender: 'StackShip',
    senderEmail: 'onboarding@stackship.io',
    avatarColor: '#4285f4',
    subject: 'Welcome to StackShip — here\'s your first deploy',

    preview: 'You just signed up. Let\'s get your first project live in 3 minutes.',
    date: 'Feb 15',
    body: `
      <p>Hey Alex,</p>
      <p>You just created your StackShip account. Good call — let's make sure it wasn't for nothing.</p>
      <p>Here's how to go from "just signed up" to "just shipped" in about 3 minutes:</p>
      <h3>Step 1: Connect your repo</h3>
      <p>Go to your <a href="#">Dashboard</a> and click "New Project." We support GitHub, GitLab, and Bitbucket. One click to connect.</p>
      <h3>Step 2: Pick your framework</h3>
      <p>We auto-detect most setups, but you can override if needed. Next.js, Remix, Astro, plain HTML — we don't judge.</p>
      <h3>Step 3: Hit Deploy</h3>
      <p>That's it. No config files, no YAML, no existential crisis. Your site will be live in under 60 seconds.</p>
      <p>If you get stuck, reply to this email. A human will answer (hi, it's me).</p>
      <div class="signature">
        <strong>The StackShip Team</strong><br>
        P.S. If you deployed already, congrats — you can ignore this email and go celebrate.
      </div>
    `
  },
  {
    id: 6,
    starred: false,
    read: true,
    sender: 'The Roast Report',
    senderEmail: 'newsletter@roastreport.co',
    avatarColor: '#795548',
    subject: 'Why your coffee tastes worse on Monday',

    preview: 'It\'s not the beans. It\'s not the water. It\'s you.',
    date: 'Feb 12',
    body: `
      <p>It's Monday morning. You stumble to the kitchen, grind the same beans you used Saturday, brew the same way, pour into the same mug.</p>
      <p>It tastes... fine. Not like Saturday's cup though. Saturday's cup was <em>transcendent.</em></p>
      <p>What changed? Not the coffee. You.</p>
      <h2>The science of taste perception</h2>
      <p>Your taste buds are affected by stress, sleep, and hydration — all of which are worse on Monday. A 2019 study from the Journal of Sensory Studies found that sleep-deprived participants rated the same coffee 22% lower in "richness" and "complexity."</p>
      <p>In other words: your Monday coffee doesn't suck. Your Monday does.</p>
      <h2>The fix</h2>
      <p>You can't fix Monday. But you can account for it:</p>
      <ul>
        <li><strong>Drink water first.</strong> 16oz before your first sip. Dehydrated taste buds are lazy taste buds.</li>
        <li><strong>Grind finer on Mondays.</strong> A slightly finer grind increases extraction, which compensates for your dulled palate.</li>
        <li><strong>Add a pinch of salt.</strong> Not enough to taste — just enough to suppress bitterness and let the good flavors through.</li>
      </ul>
      <p>Try it tomorrow. Let me know if your Monday cup finally lives up to the weekend.</p>
      <div class="signature">
        <strong>The Roast Report</strong><br>
        Fresh coffee insight, every Tuesday and Friday.<br>
        <a href="#">Unsubscribe</a> (but your mornings will miss us)
      </div>
    `
  },
  {
    id: 7,
    starred: false,
    read: true,
    sender: 'Summit Coaching',
    senderEmail: 'alex@summitcoaching.com',
    avatarColor: '#0d7377',
    subject: 'The uncomfortable truth about your goals',

    preview: 'You don\'t need another planning session. You need to start before you\'re ready.',
    date: 'Feb 9',
    body: `
      <p>Hey Jamie,</p>
      <p>I want to tell you something most coaches won't:</p>
      <p><strong>Your goals are probably fine. Your planning is probably fine. The problem is you keep planning because starting is scarier than staying stuck.</strong></p>
      <p>I know because I did it for three years. I had vision boards, quarterly reviews, color-coded project plans. I had everything except results.</p>
      <p>Here's what actually changed things for me — and what I now teach my clients:</p>
      <h2>The 72-Hour Rule</h2>
      <p>When you set a goal, you have 72 hours to take the first physical action toward it. Not "think about it more." Not "research the best approach." A real action.</p>
      <ul>
        <li>Want to write a book? Open a doc and write 200 terrible words. Today.</li>
        <li>Want to start a business? Register the domain. Right now.</li>
        <li>Want to get in shape? Put your shoes on and walk around the block. Not tomorrow.</li>
      </ul>
      <p>The action doesn't have to be big. It has to be <em>real</em> and it has to happen <em>now</em>.</p>
      <p>I'm opening 5 spots for my spring coaching cohort. If you've been "thinking about coaching" for a while, this email is your 72-hour clock.</p>
      <a href="#" class="cta-btn">Apply for Spring Cohort</a>
      <div class="signature">
        <strong>Alex Chen</strong><br>
        Summit Coaching<br>
        <a href="#">summitcoaching.com</a>
      </div>
    `
  },
  {
    id: 8,
    starred: false,
    read: true,
    sender: 'Neat Finance',
    senderEmail: 'hello@neatfinance.app',
    avatarColor: '#1a73e8',
    subject: 'Your February spending report is ready',

    preview: 'Good news: you spent less on coffee. Bad news: you know why.',
    date: 'Feb 5',
    body: `
      <p>Hey Taylor,</p>
      <p>Your February numbers are in. Let's rip the bandaid off.</p>
      <h2>The highlights</h2>
      <table>
        <thead>
          <tr><th>Category</th><th>This month</th><th>Last month</th><th>Change</th></tr>
        </thead>
        <tbody>
          <tr><td>Groceries</td><td>$487</td><td>$512</td><td style="color:#34a853">-5%</td></tr>
          <tr><td>Dining out</td><td>$234</td><td>$189</td><td style="color:#ea4335">+24%</td></tr>
          <tr><td>Subscriptions</td><td>$67</td><td>$67</td><td>0%</td></tr>
          <tr><td>Shopping</td><td>$156</td><td>$312</td><td style="color:#34a853">-50%</td></tr>
          <tr><td>Coffee shops</td><td>$38</td><td>$72</td><td style="color:#34a853">-47%</td></tr>
        </tbody>
      </table>
      <h2>What we noticed</h2>
      <ul>
        <li><strong>Dining out is creeping up.</strong> You ate out 11 times this month vs. 8 last month. Not a disaster, but worth watching.</li>
        <li><strong>Shopping is way down.</strong> That "no impulse buys" goal is working. Keep it up.</li>
        <li><strong>Subscriptions haven't changed in 4 months.</strong> When's the last time you actually used Masterclass?</li>
      </ul>
      <p>Your savings rate this month: <strong>23%</strong> (up from 19%). You're building momentum.</p>
      <a href="#" class="cta-btn">View Full Report</a>
      <div class="signature">
        <strong>Neat Finance</strong><br>
        Your money, explained simply.<br>
        <a href="#">Manage notification preferences</a>
      </div>
    `
  }
];

// === State ===
let currentView = 'inbox'; // 'inbox' or 'email'
let currentEmailId = null;

// === DOM References ===
const inboxView = document.getElementById('inboxView');
const emailView = document.getElementById('emailView');
const starredList = document.getElementById('starredList');
const everythingList = document.getElementById('everythingList');
const starredToggle = document.getElementById('starredToggle');
const everythingToggle = document.getElementById('everythingToggle');
const backBtn = document.getElementById('backBtn');
const searchInput = document.getElementById('searchInput');
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const inboxCount = document.getElementById('inboxCount');

// === Render ===
function renderInbox(filter = '') {
  const lowerFilter = filter.toLowerCase();
  const filtered = filter
    ? emails.filter(e =>
        e.subject.toLowerCase().includes(lowerFilter) ||
        e.sender.toLowerCase().includes(lowerFilter) ||
        e.preview.toLowerCase().includes(lowerFilter) ||
        e.body.toLowerCase().includes(lowerFilter)
      )
    : emails;

  const starred = filtered.filter(e => e.starred);
  const rest = filtered.filter(e => !e.starred);

  starredList.innerHTML = starred.map(emailRowHTML).join('');
  everythingList.innerHTML = rest.map(emailRowHTML).join('');

  // Set explicit max-height for collapse animation
  if (!starredList.classList.contains('collapsed')) {
    starredList.style.maxHeight = starredList.scrollHeight + 'px';
  }
  if (!everythingList.classList.contains('collapsed')) {
    everythingList.style.maxHeight = everythingList.scrollHeight + 'px';
  }

  // Show/hide sections based on filter results
  document.getElementById('starredSection').style.display = starred.length ? '' : 'none';
  document.getElementById('everythingSection').style.display = rest.length ? '' : 'none';

  // Show/hide no-results message
  const noResults = document.getElementById('noResults');
  if (noResults) {
    noResults.style.display = (filter && starred.length === 0 && rest.length === 0) ? '' : 'none';
  }

  // Update inbox count (unread)
  const unreadCount = emails.filter(e => !e.read).length;
  inboxCount.textContent = unreadCount || '';
}

function emailRowHTML(email) {
  const readClass = email.read ? '' : 'unread';
  const starredClass = email.starred ? 'starred' : '';
  return `
    <div class="email-row ${readClass}" data-id="${email.id}" tabindex="0" role="link">
      <label class="checkbox-wrap" onclick="event.stopPropagation()">
        <input type="checkbox">
        <span class="material-symbols-outlined checkmark">check_box_outline_blank</span>
      </label>
      <div class="email-row-avatar" style="background:${email.avatarColor}">${email.sender.charAt(0).toUpperCase()}</div>
      <button class="star-btn ${starredClass}" onclick="event.stopPropagation(); toggleStar(${email.id})" aria-label="Star">
        <span class="material-symbols-outlined">${email.starred ? 'star' : 'star_border'}</span>
      </button>
      <span class="email-sender">${email.sender}</span>
      <div class="email-content">
        <span class="email-subject-line">${email.subject}</span>
        <span class="email-preview">${email.preview}</span>
      </div>
      <span class="email-row-date">${email.date}</span>
    </div>
  `;
}

function renderEmailView(id) {
  const email = emails.find(e => e.id === id);
  if (!email) return;

  document.getElementById('emailSubject').textContent = email.subject;
  document.getElementById('emailSenderName').textContent = email.sender;
  document.getElementById('emailSenderAddr').textContent = `<${email.senderEmail}>`;
  document.getElementById('emailDate').textContent = email.date;
  document.getElementById('emailBody').innerHTML = email.body;

  const avatar = document.getElementById('emailAvatar');
  avatar.style.backgroundColor = email.avatarColor;
  avatar.textContent = email.sender.charAt(0).toUpperCase();

  // Show/hide in-email ad (only on sample emails, not starred meta emails)
  const adEl = document.getElementById('emailAd');
  if (adDismissed || email.starred) {
    adEl.classList.add('dismissed');
  } else {
    adEl.classList.remove('dismissed');
  }
}

// === View Switching ===
function animateIn(el) {
  el.style.animation = 'none';
  el.offsetHeight; // force reflow
  el.style.animation = '';
}

function showInbox() {
  currentView = 'inbox';
  currentEmailId = null;
  emailView.style.display = 'none';
  inboxView.style.display = '';
  animateIn(inboxView);
  document.querySelector('.content').scrollTop = 0;
  searchInput.focus();
  document.title = 'CopyJamie — Inbox';
}

function showEmail(id) {
  currentView = 'email';
  currentEmailId = id;

  // Mark as read
  const email = emails.find(e => e.id === id);
  if (email) email.read = true;

  renderEmailView(id);
  renderInbox(searchInput.value);

  inboxView.style.display = 'none';
  emailView.style.display = '';
  animateIn(emailView);
  document.querySelector('.content').scrollTop = 0;
  document.getElementById('backBtn').focus();
  document.title = `${email.subject} — CopyJamie`;
}

// === Event Listeners ===

// Click email row
document.querySelector('.content').addEventListener('click', (e) => {
  const row = e.target.closest('.email-row');
  if (!row) return;
  if (row.classList.contains('ad-row')) return; // Let native <a> navigation happen
  showEmail(parseInt(row.dataset.id));
});

// Keyboard: Enter/Space on email row
document.querySelector('.content').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const row = e.target.closest('.email-row');
    if (row && !row.classList.contains('ad-row')) {
      e.preventDefault();
      showEmail(parseInt(row.dataset.id));
    }
  }
});

// Back button
backBtn.addEventListener('click', showInbox);

// Keyboard: Escape to go back
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentView === 'email') {
    showInbox();
  }
});

// Section collapse
function setupCollapse(toggleBtn, bodyEl) {
  toggleBtn.addEventListener('click', () => {
    const isCollapsing = !toggleBtn.classList.contains('collapsed');
    toggleBtn.classList.toggle('collapsed');
    bodyEl.classList.toggle('collapsed');
    toggleBtn.setAttribute('aria-expanded', !isCollapsing ? 'true' : 'false');
    if (isCollapsing) {
      bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
      requestAnimationFrame(() => { bodyEl.style.maxHeight = '0px'; });
    } else {
      bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
      bodyEl.addEventListener('transitionend', () => {
        if (!bodyEl.classList.contains('collapsed')) {
          bodyEl.style.maxHeight = 'none';
        }
      }, { once: true });
    }
  });
}
setupCollapse(starredToggle, starredList);
setupCollapse(everythingToggle, everythingList);
starredToggle.setAttribute('aria-expanded', 'true');
everythingToggle.setAttribute('aria-expanded', 'true');

// Star toggle
function toggleStar(id) {
  const email = emails.find(e => e.id === id);
  if (email) {
    email.starred = !email.starred;
    renderInbox(searchInput.value);
  }
}

// Search
searchInput.addEventListener('input', (e) => {
  renderInbox(e.target.value);
});

// Hamburger toggle sidebar
const sidebarBackdrop = document.getElementById('sidebarBackdrop');
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

hamburger.addEventListener('click', () => {
  if (isMobile()) {
    sidebar.classList.toggle('mobile-open');
    sidebarBackdrop.classList.toggle('visible');
  } else {
    sidebar.classList.toggle('collapsed');
  }
});

sidebarBackdrop.addEventListener('click', () => {
  sidebar.classList.remove('mobile-open');
  sidebarBackdrop.classList.remove('visible');
});

// Sidebar nav (visual only — no separate views for starred/sent/etc.)
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    // Close mobile drawer
    sidebar.classList.remove('mobile-open');
    sidebarBackdrop.classList.remove('visible');
    if (currentView === 'email') showInbox();
  });
});

// === In-Email Ad Dismiss ===
const emailAd = document.getElementById('emailAd');
const emailAdClose = document.getElementById('emailAdClose');
let adDismissed = false;

emailAdClose.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  emailAd.classList.add('dismissed');
  adDismissed = true;
});

// === Init ===
renderInbox();
