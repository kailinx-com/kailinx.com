export function isEntryDimmed({
  tags,
  selectedSkills,
  filterActive,
}: {
  tags?: string[];
  selectedSkills: Set<string>;
  filterActive: boolean;
}) {
  if (!filterActive) return false;
  if (tags == null || tags.length === 0) return false;
  return !tags.some(t => selectedSkills.has(t));
}
