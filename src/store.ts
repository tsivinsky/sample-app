import partners from "./partners.json";

interface Partner {
  name: string;
  image: string;
}

interface Item {
  level: number;
  partnersCount: number;
  partners: Partner[];
}

export const items: Item[] = [...partners];
