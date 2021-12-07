interface GroupRecord {
  application: string;
  tags: string[];
  countTag: number;
}

interface Level5Group {
  id: number;
  name: string;
  application: string;
  numObjects: number;
  demeterGroup: boolean;
}

export { Level5Group, GroupRecord };
