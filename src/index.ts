/// <reference path="./numberextensions.ts"/>
export module Geographic {
  export function DistanceBetween(
    geocoordinate_1: GeographicCoordinate,
    geocoordinate_2: GeographicCoordinate,
  ): number {
    const earthRadiusKm = 6371;
    let lat1 = geocoordinate_1.lat;
    let lat2 = geocoordinate_2.lat;
    let lon1 = geocoordinate_1.lng;
    let lon2 = geocoordinate_2.lng;
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    lat1 = lat1 * (Math.PI / 180);
    lat2 = lat2 * (Math.PI / 180);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  export interface GeographicCoordinate {
    lat: number;
    lng: number;
  }
}
