import './numberextensions';
export module Geographic {
  export function DistanceBetween(
    geoCoordinate_1: IGeographicCoordinate,
    geoCoordinate_2: IGeographicCoordinate,
  ): number {
    const earthRadiusKm = 6371;
    let lat1 = geoCoordinate_1.lat;
    let lat2 = geoCoordinate_2.lat;
    const lon1 = geoCoordinate_1.lng;
    const lon2 = geoCoordinate_2.lng;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    lat1 = lat1 * (Math.PI / 180);
    lat2 = lat2 * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }
}
export interface IGeographicCoordinate {
  lat: number;
  lng: number;
}
