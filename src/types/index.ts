export type PropertyType = 'family' | 'bachelor' | 'room' | 'sublet' | 'office';
export type AvailabilityStatus = 'available' | 'booked' | 'coming_soon';

export interface Area {
  id: string;
  nameBn: string;
  nameEn: string;
  slug: string;
  imageUrl: string;
  propertyCount: number;
}

export interface Property {
  id: string;
  titleBn: string;
  titleEn: string;
  areaId: string;
  areaNameBn: string;
  areaNameEn: string;
  rent: number; // monthly rent in BDT
  bedrooms: number;
  bathrooms: number;
  sizeSqft: number;
  propertyType: PropertyType;
  availabilityDate: string; // e.g. "১ অক্টোবর ২০২৬"
  verified: boolean;
  verificationDate: string; // e.g. "আজ সকাল ১০:৩০"
  images: string[];
  descriptionBn: string;
  descriptionEn: string;
  facilities: string[];
  monthlyTotalEstimate: number; // including utilities approx
  moveInCostEstimate: number;
  rentalTermsBn: string;
  rentalTermsEn: string;
  ownerName?: string;
  isPremium?: boolean;
}

export interface TenantRequest {
  id: string;
  areaPreferenceBn: string;
  budgetMax: number;
  propertyType: PropertyType;
  bedrooms: number;
  moveInDate: string;
  descriptionBn: string;
  createdAt: string;
}

export interface VerificationInfo {
  ownerVerified: boolean;
  addressVerified: boolean;
  rentVerified: boolean;
  availabilityVerified: boolean;
  lastVerified: string;
}

export interface SubscriptionPlan {
  id: string;
  nameBn: string;
  nameEn: string;
  priceMonthly: number;
  priceYearly: number;
  featuresBn: string[];
  featuresEn: string[];
  recommended?: boolean;
}

export type Locale = 'bn' | 'en';
