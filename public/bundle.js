(() => {
  var e = {
      989: (e) => {
        const t = document.getElementById("movies");
        e.exports = (e) => {
          e.map((e) =>
            ((e) => {
              const {
                  title: t,
                  year: n,
                  director: d,
                  genre: r,
                  rate: a,
                  poster: i,
                } = e,
                p = document.createElement("div"),
                c = document.createElement("div"),
                o = document.createElement("div"),
                m = document.createElement("h3"),
                l = document.createElement("p"),
                s = document.createElement("p"),
                u = document.createElement("p"),
                h = document.createElement("p"),
                E = document.createElement("img");
              return (
                (m.innerHTML = `Title: ${t}`),
                (l.innerHTML = `Year: ${n}`),
                (s.innerHTML = `Director: ${d}`),
                (u.innerHTML = `Genre: ${r.join(", ")}`),
                (h.innerHTML = `Rate: ${a}`),
                (E.src = i),
                (E.alt = `${t} Poster`),
                p.appendChild(m),
                p.appendChild(l),
                p.appendChild(s),
                p.appendChild(u),
                p.appendChild(h),
                o.appendChild(E),
                c.appendChild(o),
                c.appendChild(p),
                o.classList.add("img-m2"),
                c.classList.add("card-m2"),
                p.classList.add("info-card-m2"),
                c
              );
            })(e)
          ).forEach((e) => {
            t.appendChild(e);
          });
        };
      },
    },
    t = {};
  function n(d) {
    var r = t[d];
    if (void 0 !== r) return r.exports;
    var a = (t[d] = { exports: {} });
    return e[d](a, a.exports, n), a.exports;
  }
  (() => {
    const e = n(989);
    $.get("https://webpt19b.web.app/data/movies.json", (t) => {
      e(t);
    });
  })();
})();
