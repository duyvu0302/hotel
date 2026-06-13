import type { ComponentProps } from "react";
import {
  Phone,
  ChatCircleDots,
  Star,
  MapPin,
  Envelope,
  ArrowRight,
  List,
  X,
  Check,
  Waves,
  ForkKnife,
  Coffee,
  Flower,
  Barbell,
  WifiHigh,
  Tag,
  Sparkle,
  Headset,
} from "@phosphor-icons/react/dist/ssr";

// Single icon family (Phosphor) — no hand-rolled SVG. SSR entry = RSC-safe + light.
type Props = ComponentProps<typeof Phone>;

export const PhoneIcon = (p: Props) => <Phone {...p} />;
export const ChatIcon = (p: Props) => <ChatCircleDots {...p} />;
export const StarIcon = (p: Props) => <Star weight="fill" {...p} />;
export const MapPinIcon = (p: Props) => <MapPin {...p} />;
export const MailIcon = (p: Props) => <Envelope {...p} />;
export const ArrowIcon = (p: Props) => <ArrowRight {...p} />;
export const MenuIcon = (p: Props) => <List {...p} />;
export const CloseIcon = (p: Props) => <X {...p} />;
export const CheckIcon = (p: Props) => <Check {...p} />;

const amenityMap: Record<string, typeof Phone> = {
  pool: Waves,
  restaurant: ForkKnife,
  cafe: Coffee,
  spa: Flower,
  gym: Barbell,
  wifi: WifiHigh,
  location: MapPin,
  price: Tag,
  clean: Sparkle,
  support: Headset,
};

export function AmenityIcon({ name, ...p }: Props & { name: string }) {
  const Cmp = amenityMap[name] ?? Sparkle;
  return <Cmp weight="light" {...p} />;
}
