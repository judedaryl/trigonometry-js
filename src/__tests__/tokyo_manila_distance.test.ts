// expected answer 2994
// tokyo    35.6895° N, 139.6917° E
// manila   14.5995° N, 120.9842° E

import { Geographic, IGeographicCoordinate } from '../index';

test('Distance between Tokyo and Manila', () => {
  const tokyo: IGeographicCoordinate = {
    lat: 35.65895,
    lng: 139.6917,
  };

  const manila: IGeographicCoordinate = {
    lat: 14.5995,
    lng: 120.9842,
  };
  const distance_tkyo_mnl = Geographic.DistanceBetween(tokyo, manila);

  expect(distance_tkyo_mnl).toBeGreaterThan(2000);
});
