if (document.getElementById('map')) {
 const map = L.map('map').setView([-6.3625082346282005, 106.84444028320708], 18);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([-6.3625082346282005, 106.84444028320708]).addTo(map);
        marker.bindPopup('<b>STT Nurul Fikri</b><br>Kampus A - Setu Indah, Depok').openPopup();
}