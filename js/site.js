(function () {
  "use strict";

  var EXT_ARROW =
    '<svg class="ext-arrow" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>';

  var BRANDS = {
    tesla: {
      action: "Use my Tesla referral",
      handle: function () {
        return "ts.la/alexander428267";
      },
      logo:
        '<svg class="brand-logo tesla-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#E82127" d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46z"/></svg>'
    },
    x: {
      action: "Follow on X",
      handle: function (url) {
        return "@" + lastSegment(url);
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#E7E9EA" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>'
    },
    instagram: {
      action: "Follow on Instagram",
      handle: function (url) {
        return "@" + lastSegment(url);
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        "<defs>" +
        '<linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">' +
        '<stop offset="0%" stop-color="#f9ce34"/>' +
        '<stop offset="45%" stop-color="#ee2a7b"/>' +
        '<stop offset="100%" stop-color="#6228d7"/>' +
        "</linearGradient>" +
        "</defs>" +
        '<path fill="url(#ig-grad)" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>' +
        "</svg>"
    },
    reddit: {
      action: "Follow on Reddit",
      handle: function (url) {
        var seg = lastSegment(url);
        return seg.indexOf("u/") === 0 ? seg : "u/" + seg;
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#FF4500" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>'
    },
    soundcloud: {
      action: "Listen on SoundCloud",
      handle: function (url) {
        return lastSegment(url);
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#FF5500" d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>'
    },
    youtube: {
      action: "Watch on YouTube",
      handle: function (url) {
        return lastSegment(url).replace(/^@/, "");
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
    },
    tiktok: {
      action: "Follow on TikTok",
      handle: function (url) {
        return "@" + lastSegment(url).replace(/^@/, "");
      },
      logo:
        '<svg class="brand-logo" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#25F4EE" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" transform="translate(-1.05 .55)"/>' +
        '<path fill="#FE2C55" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" transform="translate(1.05 -.55)"/>' +
        '<path fill="#010101" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
    }
  };

  function lastSegment(url) {
    try {
      var path = new URL(url).pathname.replace(/\/+$/, "");
      var parts = path.split("/").filter(Boolean);
      return parts.length ? decodeURIComponent(parts[parts.length - 1]) : url;
    } catch (e) {
      return url;
    }
  }

  function loadAvatar(rootEl) {
    var box = rootEl.querySelector("[data-avatar]");
    if (!box) return;
    var src = box.getAttribute("data-avatar") || "avatar.jpg";
    var img = new Image();
    img.className = "avatar-photo";
    img.alt = "ALX";
    img.onload = function () {
      var mono = box.querySelector(".avatar-mono");
      if (mono) mono.hidden = true;
      box.appendChild(img);
    };
    img.src = src;
  }

  function renderSocials() {
    var list = Array.isArray(window.MOEDARE_SOCIALS) ? window.MOEDARE_SOCIALS : [];
    var live = list.filter(function (item) {
      return item && typeof item.url === "string" && item.url.trim() !== "";
    });

    document.querySelectorAll("[data-socials]").forEach(function (nav) {
      nav.replaceChildren();
      if (live.length === 0) {
        nav.hidden = true;
        return;
      }
      nav.hidden = false;
      live.forEach(function (item) {
        var id = String(item.id || "").toLowerCase();
        var brand = BRANDS[id] || null;
        var href = item.url.trim();
        var action = brand ? brand.action : "Visit " + (item.label || id);
        var handle = brand ? brand.handle(href) : href;
        var a = document.createElement("a");
        a.className = "social-card";
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", action + " (" + handle + ")");
        a.innerHTML =
          '<span class="social-logo">' +
          (brand ? brand.logo : "") +
          "</span>" +
          '<span class="social-copy">' +
          '<span class="social-action">' +
          action +
          "</span>" +
          '<span class="social-handle">' +
          handle +
          "</span>" +
          "</span>" +
          EXT_ARROW;
        nav.appendChild(a);
      });
    });
  }


  function shopHref(asin, tag) {
    return "https://www.amazon.com/dp/" + encodeURIComponent(asin) + "?tag=" + encodeURIComponent(tag);
  }

  function renderShop() {
    var shop = window.MOEDARE_SHOP;
    var navs = document.querySelectorAll("[data-shop]");
    if (!navs.length) return;
    var items = shop && Array.isArray(shop.items) ? shop.items : [];
    var tag = shop && shop.tag ? shop.tag : "moedare-20";
    navs.forEach(function (nav) {
      nav.replaceChildren();
      items.forEach(function (item) {
        var a = document.createElement("a");
        a.className = "product-card";
        a.href = shopHref(item.asin, tag);
        a.target = "_blank";
        a.rel = "nofollow sponsored noopener noreferrer";
        a.setAttribute("aria-label", item.name + " on Amazon");
        var base = window.MOEDARE_BASE || "";
        var thumb;
        if (item.image) {
          thumb =
            '<img class="product-photo" src="' +
            base +
            item.image +
            '" alt="" width="48" height="48">';
        } else {
          var mark = (item.brand || "M").trim();
          var initials = mark.length <= 3 ? mark : mark.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 3);
          thumb = '<span class="product-mark" aria-hidden="true">' + initials + "</span>";
        }
        a.innerHTML =
          thumb +
          '<span class="product-copy">' +
          '<span class="product-name">' +
          item.name +
          "</span>" +
          '<span class="product-note">' +
          (item.note || item.brand || "") +
          "</span>" +
          "</span>" +
          EXT_ARROW;
        nav.appendChild(a);
      });
    });
  }

  loadAvatar(document);
  renderSocials();
  renderShop();
})();
