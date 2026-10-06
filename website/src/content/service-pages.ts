import { apartments } from './apartments';
import { houses } from './houses';
import { bathrooms } from './bathrooms';
import { terraces } from './terraces';
import { businessPremises } from './business-premises';
import { offices } from './offices';
import { hotelRooms } from './hotel-rooms';
import { commercialKitchens } from './commercial-kitchens';

// Order follows the approved Privat/Gewerbe navigation.
export const servicePages = [apartments, houses, bathrooms, terraces, businessPremises, offices, hotelRooms, commercialKitchens];
