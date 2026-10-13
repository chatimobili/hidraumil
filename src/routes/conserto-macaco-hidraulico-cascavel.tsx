import { createFileRoute } from "@tanstack/react-router";
import { HydraulicRepairServicePage } from "@/components/site/HydraulicRepairServicePage";
import { jackRepairService, repairServiceHead } from "@/lib/hydraulic-repair-services";

export const Route = createFileRoute("/conserto-macaco-hidraulico-cascavel")({
  head: () => repairServiceHead(jackRepairService),
  component: () => <HydraulicRepairServicePage service={jackRepairService} />,
});
