import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const VendorLocationMap = ({
  coordinates = [31.5204, 74.3587],
  locationName = 'Lahore, Pakistan',
  storeName = 'Fresh Mart',
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    const map = L.map(mapContainerRef.current, {
      center: coordinates,
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    const customPinIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border: 1px solid #e2e8f0;
          white-space: nowrap;
          transform: translate(-50%, -50%);
        ">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="1.5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3" fill="#ffffff"/>
          </svg>
          <span style="font-size: 11px; font-weight: 700; color: #1e293b; font-family: inherit;">
            ${locationName}
          </span>
        </div>
      `,
      iconSize: [120, 36],
      iconAnchor: [60, 18],
    });

    const marker = L.marker(coordinates, { icon: customPinIcon }).addTo(map);
    marker.bindPopup(`<b>${storeName}</b><br/>${locationName}`);

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [coordinates, locationName, storeName]);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        Location
      </h3>

      <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden border border-slate-200/70 z-0">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default VendorLocationMap;
