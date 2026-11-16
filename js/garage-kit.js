/* Garage kit page. Product copy, category, and wash-day step come from shop.js. */
(function () {
  "use strict";

  var shop = window.MOEDARE_SHOP || {};
  var items = Array.isArray(shop.items) ? shop.items.slice() : [];
  var list = document.querySelector("[data-gk-list]");
  var bar = document.querySelector("[data-gk-filter]");
  if (!list || !bar || !items.length) return;

  var tag = shop.tag || "moedare-20";
  var status = document.querySelector("[data-gk-status]");
  var ARROW =
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>';

  items.sort(function (a, b) {
    return (Number(a.step) || 99) - (Number(b.step) || 99);
  });

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function href(asin) {
    return "https://www.amazon.com/dp/" + encodeURIComponent(asin) + "?tag=" + encodeURIComponent(tag);
  }

  function attrs(item, where) {
    return ' href="' + esc(href(item.asin)) + '" target="_blank" rel="nofollow sponsored noopener noreferrer"' +
      ' data-umami-event="garage-kit" data-umami-event-asin="' + esc(item.asin) + '" data-umami-event-where="' + esc(where) + '"';
  }

  list.replaceChildren();
  items.forEach(function (item) {
    var category = item.category || "";
    var hasStep = item.step !== undefined && item.step !== null && item.step !== "";
    var brand = item.brand || "";
    var name = item.name || "";
    var why = item.why || item.note || "";
    var label = (brand + " " + name).trim();
    var img = "";
    if (item.image) {
      var webp = String(item.image);
      var jpeg = /\.webp$/i.test(webp) ? webp.replace(/\.webp$/i, ".jpg") : webp;
      img =
        '<picture><source type="image/webp" srcset="' + esc(webp) + '">' +
        '<img src="' + esc(jpeg) + '" alt="' + esc(label) + '" width="168" height="168" loading="lazy" decoding="async"></picture>';
    }
    var meta = "";
    if (hasStep) meta += '<span class="gk-step">Step ' + esc(item.step) + "</span>";
    if (category) meta += '<span class="gk-cat">' + esc(category) + "</span>";
    var li = document.createElement("li");
    li.className = "gk-card";
    li.setAttribute("role", "listitem");
    if (category) li.dataset.category = category;
    if (hasStep) li.dataset.step = String(item.step);
    li.innerHTML =
      '<a class="gk-media" tabindex="-1" aria-hidden="true"' + attrs(item, "photo") + ">" + img + "</a>" +
      '<div class="gk-body">' +
      (meta ? '<p class="gk-meta">' + meta + "</p>" : "") +
      '<h2 class="gk-name"><span class="gk-brand">' + esc(brand) + "</span>" + esc(name) + "</h2>" +
      (why ? '<p class="gk-why">' + esc(why) + "</p>" : "") +
      '<a class="gk-buy"' + attrs(item, "button") + ">Buy on Amazon " + ARROW +
      '<span class="visually-hidden">: ' + esc(label) + ", opens in a new tab</span></a>" +
      "</div>";
    list.appendChild(li);
  });

  function apply(label) {
    var shown = 0;
    list.querySelectorAll(".gk-card").forEach(function (card) {
      var on = label === "All" || card.dataset.category === label;
      card.hidden = !on;
      if (on) shown += 1;
    });
    bar.querySelectorAll(".chip").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === label));
    });
    if (status) {
      var noun = shown === 1 ? "product" : "products";
      status.textContent = label === "All"
        ? "Showing all " + shown + " " + noun
        : "Showing " + shown + " " + label + " " + noun;
    }
  }

  bar.replaceChildren();
  bar.setAttribute("role", "group");
  bar.setAttribute("aria-label", "Filter by category");
  ["All", "Wash", "Dry", "Protect"].forEach(function (label) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = label;
    button.dataset.filter = label;
    button.setAttribute("aria-pressed", label === "All" ? "true" : "false");
    button.setAttribute("aria-controls", "gk-products");
    button.addEventListener("click", function () { apply(label); });
    bar.appendChild(button);
  });
})();
