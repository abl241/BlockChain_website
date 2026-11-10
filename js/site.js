// Blockchain at Emory — shared behaviour: mobile menu, footer year, guilloché engraving.
(function () {
  "use strict";

  var SVG = "http://www.w3.org/2000/svg";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Guilloché ---------- */
  function path(d, width, opacity) {
    var p = document.createElementNS(SVG, "path");
    p.setAttribute("d", d);
    p.setAttribute("stroke-width", width);
    p.setAttribute("stroke-opacity", opacity);
    p.setAttribute("pathLength", "1");
    return p;
  }

  function fmt(n) {
    return Math.round(n * 10) / 10;
  }

  // Rosette: concentric polar curves r(t) = base + amp * sin(lobes * t + phase), interleaved.
  function drawRosette(svg) {
    var size = 400;
    var c = size / 2;
    svg.setAttribute("viewBox", "0 0 " + size + " " + size);
    var g = document.createElementNS(SVG, "g");
    // Each band is a set of phase-shifted sine rings; the shifted copies cross to form the
    // woven mesh of engraved security printing.
    var rings = [
      { base: 178, amp: 13, lobes: 30, count: 10, w: 0.55, o: 0.9 },
      { base: 138, amp: 9, lobes: 44, count: 8, w: 0.5, o: 0.75 },
      { base: 104, amp: 6, lobes: 22, count: 6, w: 0.55, o: 0.65 }
    ];
    rings.forEach(function (ring) {
      for (var k = 0; k < ring.count; k++) {
        var phase = (k / ring.count) * Math.PI * 2;
        var d = "";
        var steps = 1080;
        for (var i = 0; i <= steps; i++) {
          var t = (i / steps) * Math.PI * 2;
          var r = ring.base + ring.amp * Math.sin(ring.lobes * t + phase);
          d += (i ? "L" : "M") + fmt(c + r * Math.cos(t)) + " " + fmt(c + r * Math.sin(t));
        }
        g.appendChild(path(d + "Z", ring.w, ring.o));
      }
    });
    // plain keyline circles between the bands
    [196, 159, 120, 92].forEach(function (r, i) {
      var circle = document.createElementNS(SVG, "circle");
      circle.setAttribute("cx", c);
      circle.setAttribute("cy", c);
      circle.setAttribute("r", r);
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke", "var(--gold)");
      circle.setAttribute("stroke-width", i === 0 ? 1 : 0.6);
      circle.setAttribute("stroke-opacity", i === 0 ? 0.9 : 0.5);
      circle.setAttribute("pathLength", "1");
      g.appendChild(circle);
    });
    svg.appendChild(g);
  }

  // Border lattice: woven sine ribbons that follow the inner edge of a rectangle.
  function drawFrame(svg) {
    var box = svg.getBoundingClientRect();
    var W = Math.round(box.width);
    var H = Math.round(box.height);
    if (W < 10 || H < 10) return;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.textContent = "";

    var inset = W < 600 ? 10 : 16;
    var amp = W < 600 ? 4 : 6;
    var x0 = inset + amp, y0 = inset + amp, x1 = W - inset - amp, y1 = H - inset - amp;
    var perim = 2 * (x1 - x0) + 2 * (y1 - y0);
    var wave = W < 600 ? 14 : 18;
    var cycles = Math.round(perim / wave);
    var g = document.createElementNS(SVG, "g");

    function pointAt(s) {
      // walk the rectangle clockwise; return point and inward normal
      var w = x1 - x0, h = y1 - y0;
      if (s < w) return [x0 + s, y0, 0, 1];
      s -= w;
      if (s < h) return [x1, y0 + s, -1, 0];
      s -= h;
      if (s < w) return [x1 - s, y1, 0, -1];
      s -= w;
      return [x0, y1 - s, 1, 0];
    }

    var strands = 6;
    for (var k = 0; k < strands; k++) {
      var phase = (k / strands) * Math.PI * 2;
      var d = "";
      var steps = Math.min(4000, Math.round(perim / 2));
      for (var i = 0; i <= steps; i++) {
        var s = (i / steps) * perim;
        var p = pointAt(s);
        var off = amp * Math.sin((s / perim) * cycles * Math.PI * 2 + phase);
        d += (i ? "L" : "M") + fmt(p[0] + p[2] * off) + " " + fmt(p[1] + p[3] * off);
      }
      g.appendChild(path(d + "Z", 0.7, 0.75));
    }
    // inner and outer keylines
    [inset - 2, inset + amp * 2 + 4].forEach(function (o, idx) {
      var r = document.createElementNS(SVG, "rect");
      r.setAttribute("x", o);
      r.setAttribute("y", o);
      r.setAttribute("width", W - o * 2);
      r.setAttribute("height", H - o * 2);
      r.setAttribute("fill", "none");
      r.setAttribute("stroke", "var(--gold)");
      r.setAttribute("stroke-width", idx ? 0.6 : 1);
      r.setAttribute("stroke-opacity", idx ? 0.5 : 0.9);
      g.appendChild(r);
    });
    svg.appendChild(g);
  }

  // Lattice band: phase-shifted sine strands woven along a horizontal strip.
  function drawBand(svg) {
    var W = Math.round(svg.getBoundingClientRect().width);
    var H = 18;
    if (W < 10) return;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.textContent = "";
    var g = document.createElementNS(SVG, "g");
    var wave = 16, amp = 5, mid = H / 2, strands = 5;
    for (var k = 0; k < strands; k++) {
      var phase = (k / strands) * Math.PI * 2;
      var d = "";
      for (var x = 0; x <= W; x += 2) {
        var y = mid + amp * Math.sin((x / wave) * Math.PI * 2 + phase);
        d += (x ? "L" : "M") + x + " " + fmt(y);
      }
      g.appendChild(path(d, 0.6, 0.6));
    }
    [0.5, H - 0.5].forEach(function (y) {
      g.appendChild(path("M0 " + y + "H" + W, 0.8, 0.8));
    });
    svg.appendChild(g);
  }

  document.querySelectorAll("[data-divider] > .wrap, .team-hero > .wrap").forEach(function (wrap) {
    var svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("class", "guilloche band");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("data-band", "");
    wrap.insertBefore(svg, wrap.firstChild);
  });

  function engrave(svg) {
    if (reduceMotion) return;
    svg.classList.add("engrave");
  }

  document.querySelectorAll("svg[data-rosette]").forEach(function (svg) {
    drawRosette(svg);
    engrave(svg);
  });

  var bands = document.querySelectorAll("svg[data-band]");
  bands.forEach(drawBand);
  window.addEventListener("resize", function () {
    bands.forEach(drawBand);
  });

  var frames = document.querySelectorAll("svg[data-frame]");
  frames.forEach(function (svg, i) {
    drawFrame(svg);
    if (i === 0) engrave(svg);
  });

  if (frames.length && "ResizeObserver" in window) {
    var raf = 0;
    var lastW = new WeakMap();
    var ro = new ResizeObserver(function (entries) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        entries.forEach(function (e) {
          var svg = e.target;
          var w = Math.round(e.contentRect.width) + "x" + Math.round(e.contentRect.height);
          if (lastW.get(svg) === w) return;
          var first = !lastW.has(svg);
          lastW.set(svg, w);
          if (!first) {
            svg.classList.remove("engrave");
            drawFrame(svg);
          }
        });
      });
    });
    frames.forEach(function (svg) {
      ro.observe(svg);
    });
  }
})();
