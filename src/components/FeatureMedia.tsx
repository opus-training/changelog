import { AgentWorkflow } from "@/components/AgentWorkflow";
import { ProductShot } from "@/components/ProductShot";
import type { FeatureMedia as MediaKind } from "@/lib/releases";

export function FeatureMedia({ media }: { media: MediaKind }) {
  if (media === "none") return null;
  if (media === "agent-workflow") return <AgentWorkflow />;
  return <ProductShot media={media} />;
}
