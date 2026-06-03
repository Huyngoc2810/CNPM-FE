let rooms = [
  {
    id: 1,
    name: "Deluxe City Room",
    type: "Deluxe",
    price: 2500000,
    capacity: 2,
    bed_type: "1 giường King",
    area: "35m²",
    view: "View thành phố",
    amenities: "Wifi, Smart TV, Bồn tắm, Cửa sổ kính",
    status: "available",
    image: "IMAGES/room-01.webp"
  },
  {
    id: 2,
    name: "Premier Suite",
    type: "Premier Suite",
    price: 3200000,
    capacity: 3,
    bed_type: "1 King + sofa",
    area: "52m²",
    view: "View hồ bơi",
    amenities: "Wifi, Sofa cao cấp, Bồn tắm, Mini bar",
    status: "available",
    image: "IMAGES/room-02.webp"
  },
  {
    id: 3,
    name: "Presidential Skyline",
    type: "Presidential",
    price: 5900000,
    capacity: 4,
    bed_type: "2 giường King",
    area: "86m²",
    view: "View panorama",
    amenities: "Wifi, Phòng khách riêng, Mini bar, Bếp nhỏ",
    status: "available",
    image: "IMAGES/room-03.webp"
  },
  {
    id: 4,
    name: "Family Comfort Room",
    type: "Family",
    price: 2800000,
    capacity: 4,
    bed_type: "2 giường Queen",
    area: "48m²",
    view: "View vườn",
    amenities: "Wifi, Khu sinh hoạt chung, Smart TV, Bàn ăn",
    status: "available",
    image: "IMAGES/room-04.webp"
  },
  {
    id: 5,
    name: "Superior Cozy Room",
    type: "Superior",
    price: 1800000,
    capacity: 2,
    bed_type: "1 giường Queen",
    area: "28m²",
    view: "View nội khu",
    amenities: "Wifi, Smart TV, Bàn làm việc, Tủ lạnh",
    status: "available",
    image: "IMAGES/room-05.webp"
  },
  {
    id: 6,
    name: "Luxury Ocean View",
    type: "Deluxe",
    price: 3800000,
    capacity: 2,
    bed_type: "1 giường King",
    area: "45m²",
    view: "View biển",
    amenities: "Wifi, Ban công, Bồn tắm, Mini bar",
    status: "available",
    image: "IMAGES/room-06.webp"
  },
  {
    id: 7,
    name: "Garden Suite",
    type: "Premier Suite",
    price: 3000000,
    capacity: 3,
    bed_type: "1 King + sofa",
    area: "50m²",
    view: "View sân vườn",
    amenities: "Wifi, Sofa, Ban công, Bồn tắm",
    status: "available",
    image: "IMAGES/room-07.webp"
  },
  {
    id: 8,
    name: "Executive Room",
    type: "Superior",
    price: 2200000,
    capacity: 2,
    bed_type: "1 giường King",
    area: "32m²",
    view: "View thành phố",
    amenities: "Wifi, Bàn làm việc, Smart TV, Mini bar",
    status: "available",
    image: "IMAGES/room-08.webp"
  },
  {
    id: 9,
    name: "Royal Twin Room",
    type: "Deluxe",
    price: 2600000,
    capacity: 2,
    bed_type: "2 giường đơn",
    area: "36m²",
    view: "View thành phố",
    amenities: "Wifi, Smart TV, Bàn làm việc, Ấm đun nước",
    status: "available",
    image: "IMAGES/room-09.webp"
  },
  {
    id: 10,
    name: "Honeymoon Suite",
    type: "Premier Suite",
    price: 4100000,
    capacity: 2,
    bed_type: "1 giường King",
    area: "58m²",
    view: "View biển",
    amenities: "Wifi, Jacuzzi, Ban công, Mini bar",
    status: "available",
    image: "IMAGES/room-10.webp"
  },
  {
    id: 11,
    name: "Business Executive",
    type: "Superior",
    price: 2400000,
    capacity: 2,
    bed_type: "1 giường Queen",
    area: "34m²",
    view: "View thành phố",
    amenities: "Wifi, Bàn làm việc, Máy pha cà phê, Smart TV",
    status: "available",
    image: "IMAGES/room-11.webp"
  },
  {
    id: 12,
    name: "Grand Family Suite",
    type: "Family",
    price: 3600000,
    capacity: 5,
    bed_type: "1 King + 2 giường đơn",
    area: "62m²",
    view: "View vườn",
    amenities: "Wifi, Sofa, Bàn ăn, Khu vui chơi nhỏ",
    status: "available",
    image: "IMAGES/room-12.webp"
  },
  {
    id: 13,
    name: "Sunset Presidential",
    type: "Presidential",
    price: 6500000,
    capacity: 4,
    bed_type: "2 giường King",
    area: "92m²",
    view: "View hoàng hôn biển",
    amenities: "Wifi, Phòng khách riêng, Quầy bar nhỏ, Bồn tắm lớn",
    status: "available",
    image: "IMAGES/room-13.webp"
  },
  {
    id: 14,
    name: "Balcony Deluxe",
    type: "Deluxe",
    price: 2900000,
    capacity: 3,
    bed_type: "1 giường King",
    area: "40m²",
    view: "View hồ bơi",
    amenities: "Wifi, Ban công, Smart TV, Ghế thư giãn",
    status: "available",
    image: "IMAGES/room-14.webp"
  }
];

const roomGrid = document.getElementById("roomGrid");
const resultCount = document.getElementById("resultCount");
const messageBox = document.getElementById("messageBox");

const heroSearchForm = document.getElementById("heroSearchForm");
const heroCheckin = document.getElementById("heroCheckin");
const heroCheckout = document.getElementById("heroCheckout");
const heroGuests = document.getElementById("heroGuests");

const filterForm = document.getElementById("filterForm");
const keywordInput = document.getElementById("keywordInput");
const typeFilter = document.getElementById("typeFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const checkinInput = document.getElementById("checkinInput");
const checkoutInput = document.getElementById("checkoutInput");
const guestsInput = document.getElementById("guestsInput");
const resetBtn = document.getElementById("resetBtn");

const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function formatPrice(price) {
  return Number(price).toLocaleString("vi-VN") + " VND/đêm";
}

function showMessage(message) {
  if (!message) {
    messageBox.classList.remove("active");
    messageBox.textContent = "";
    return;
  }

  messageBox.textContent = message;
  messageBox.classList.add("active");
}

function validateDates(checkin, checkout) {
  if (!checkin || !checkout) {
    return true;
  }

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  if (checkoutDate <= checkinDate) {
    showMessage("Ngày trả phòng phải sau ngày nhận phòng.");
    return false;
  }

  const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);

  if (nights > 30) {
    showMessage("Thời gian lưu trú tối đa là 30 ngày.");
    return false;
  }

  return true;
}

function getFilters() {
  return {
    keyword: keywordInput.value.trim(),
    type: typeFilter.value,
    min_price: minPrice.value,
    max_price: maxPrice.value,
    checkin: checkinInput.value,
    checkout: checkoutInput.value,
    guests: guestsInput.value || 1
  };
}

function buildQuery(params) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== "all") {
      query.append(key, value);
    }
  });

  return query.toString();
}

async function loadRooms(params = {}) {
  showMessage("");

  if (!validateDates(params.checkin, params.checkout)) {
    return;
  }

  try {
    const query = buildQuery(params);
    const response = await fetch(`API/rooms.php?${query}`);

    if (!response.ok) {
      throw new Error("Không thể gọi API.");
    }

    const result = await response.json();

    if (result.status !== "success") {
      showMessage(result.message || "Có lỗi khi tìm kiếm phòng.");
      renderRooms([]);
      return;
    }

    rooms = result.data.map((room) => ({
      ...room,
      price: Number(room.price),
      capacity: Number(room.capacity)
    }));

    renderRooms(rooms);
  } catch (error) {
    console.warn("Đang dùng dữ liệu mẫu:", error.message);
    const fallbackRooms = filterLocalRooms(params);
    renderRooms(fallbackRooms);
  }
}

function filterLocalRooms(params) {
  return rooms.filter((room) => {
    const keyword = (params.keyword || "").toLowerCase();
    const type = params.type || "all";
    const guests = Number(params.guests || 1);
    const min = Number(params.min_price || 0);
    const max = Number(params.max_price || 999999999);

    const matchKeyword =
      room.name.toLowerCase().includes(keyword) ||
      room.type.toLowerCase().includes(keyword) ||
      room.amenities.toLowerCase().includes(keyword);

    const matchType = type === "all" || room.type === type;
    const matchPrice = room.price >= min && room.price <= max;
    const matchGuests = room.capacity >= guests;
    const matchStatus = room.status === "available";

    return matchKeyword && matchType && matchPrice && matchGuests && matchStatus;
  });
}

function renderRooms(list) {
  roomGrid.innerHTML = "";
  resultCount.textContent = `Hiển thị ${list.length} phòng`;

  if (list.length === 0) {
    roomGrid.innerHTML = `
      <div class="empty">
        Không có phòng phù hợp. Hãy đổi ngày, tăng khoảng giá hoặc chọn loại phòng khác.
      </div>
    `;
    return;
  }

  list.forEach((room) => {
    const card = document.createElement("article");
    card.className = "room-card";

    card.innerHTML = `
      <div class="room-img">
        <img src="${room.image}" alt="${room.name}" />
        <span class="status">Còn trống</span>
      </div>

      <div class="room-info">
        <span class="room-type">${room.type}</span>
        <h3>${room.name}</h3>

        <div class="amenities">
          ${room.amenities.split(",").slice(0, 4).map((item) => `<span>${item.trim()}</span>`).join("")}
        </div>

        <div class="room-meta">
          <div class="price">${formatPrice(room.price)}</div>
          <div class="capacity">${room.capacity} khách</div>
        </div>

        <button class="btn" type="button" onclick="openDetail(${room.id})">Xem chi tiết</button>
      </div>
    `;

    roomGrid.appendChild(card);
  });
}

function openDetail(id) {
  const room = rooms.find((item) => Number(item.id) === Number(id));

  if (!room) {
    return;
  }

  modalBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail-img">
        <img src="${room.image}" alt="${room.name}" />
      </div>

      <div class="detail-info">
        <span class="room-type">${room.type}</span>
        <h3>${room.name}</h3>
        <div class="price">${formatPrice(room.price)}</div>

        <table>
          <tr><td>Sức chứa</td><td>${room.capacity} khách</td></tr>
          <tr><td>Giường</td><td>${room.bed_type}</td></tr>
          <tr><td>Diện tích</td><td>${room.area}</td></tr>
          <tr><td>Hướng nhìn</td><td>${room.view}</td></tr>
          <tr><td>Tiện nghi</td><td>${room.amenities}</td></tr>
          <tr><td>Trạng thái</td><td>Còn trống</td></tr>
        </table>
      </div>
    </div>
  `;

  detailModal.classList.add("active");
}

function closeModal() {
  detailModal.classList.remove("active");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2200);
}

heroSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  checkinInput.value = heroCheckin.value;
  checkoutInput.value = heroCheckout.value;
  guestsInput.value = heroGuests.value || 1;

  document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  loadRooms(getFilters());
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loadRooms(getFilters());
});

resetBtn.addEventListener("click", () => {
  keywordInput.value = "";
  typeFilter.value = "all";
  minPrice.value = "";
  maxPrice.value = "";
  checkinInput.value = "";
  checkoutInput.value = "";
  guestsInput.value = 2;
  showMessage("");
  loadRooms(getFilters());
});

closeModalBtn.addEventListener("click", closeModal);

detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeModal();
  }
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  showToast("Đã gửi thông tin liên hệ.");
});

loadRooms(getFilters());
