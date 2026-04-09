import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  value: number;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h2 className="text-3xl font-bold mt-2">{value}</h2>
      </CardContent>
    </Card>
  );
}