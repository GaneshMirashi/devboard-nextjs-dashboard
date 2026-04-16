"use client";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export default function TaskFilters({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (f: string) => void;
}) {
  return (
    <ToggleGroup
      type="single"
      value={filter}
      onValueChange={(val) => val && setFilter(val)}
      className="mt-4"
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="completed">Completed</ToggleGroupItem>
      <ToggleGroupItem value="pending">Pending</ToggleGroupItem>
    </ToggleGroup>
  );
}